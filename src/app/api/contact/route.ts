import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact, { IContact } from '@/lib/models/Contact';
import { sendContactNotification, ContactData } from '@/lib/aws-ses';

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    inquiryType: string;
    subject: string;
    message: string;
    urgency?: 'low' | 'normal' | 'high' | 'urgent';
}

interface ContactResponse {
    message?: string;
    error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
    try {
        const formData: ContactFormData = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            company,
            inquiryType,
            subject,
            message,
            urgency
        } = formData;

        // Validation
        if (!firstName || !lastName || !email || !phone || !inquiryType || !subject || !message) {
            return NextResponse.json(
                { error: 'All required fields must be filled' },
                { status: 400 }
            );
        }

        await connectDB();

        // Save to database
        const contactSubmission = new Contact({
            firstName,
            lastName,
            email,
            phone,
            company,
            inquiryType,
            subject,
            message,
            urgency: urgency || 'normal'
        });

        await contactSubmission.save();
        console.log('Contact saved to database:', contactSubmission._id);

        // Send emails via AWS SES
        try {
            const contactData: ContactData = {
                firstName,
                lastName,
                email,
                phone,
                company,
                inquiryType,
                subject,
                message,
                urgency: urgency || 'normal'
            };

            await sendContactNotification(contactData);
            console.log('Email notifications sent successfully');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue even if email fails - contact is still saved
        }

        return NextResponse.json(
            { message: 'Your message has been sent successfully! We will get back to you within 24 hours.' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Contact form submission error:', error);

        if (error instanceof Error && error.name === 'ValidationError') {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}