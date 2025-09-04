import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter, { INewsletter } from '@/lib/models/Newsletter';

interface NewsletterRequest {
    email: string;
}

interface NewsletterResponse {
    message?: string;
    error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<NewsletterResponse>> {
    try {
        const { email }: NewsletterRequest = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        await connectDB();

        // Check if email already exists
        const existingSubscription = await Newsletter.findOne({ email });

        if (existingSubscription) {
            if (existingSubscription.isActive) {
                return NextResponse.json(
                    { message: 'You are already subscribed to our newsletter!' },
                    { status: 200 }
                );
            } else {
                // Reactivate subscription
                existingSubscription.isActive = true;
                await existingSubscription.save();
                return NextResponse.json(
                    { message: 'Welcome back! Your subscription has been reactivated.' },
                    { status: 200 }
                );
            }
        }

        // Create new subscription
        const newSubscription = new Newsletter({ email });
        await newSubscription.save();

        return NextResponse.json(
            { message: 'Successfully subscribed to newsletter!' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Newsletter subscription error:', error);

        if (error instanceof Error) {
            if ('code' in error && (error as any).code === 11000) {
                return NextResponse.json(
                    { error: 'Email already subscribed' },
                    { status: 409 }
                );
            }

            if (error.name === 'ValidationError') {
                return NextResponse.json(
                    { error: error.message },
                    { status: 400 }
                );
            }
        }

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}