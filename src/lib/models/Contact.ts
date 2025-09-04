import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IContact extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    inquiryType: string;
    subject: string;
    message: string;
    urgency: 'low' | 'normal' | 'high' | 'urgent';
    createdAt: Date;
    updatedAt: Date;
}

const ContactSchema = new Schema<IContact>({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v: string): boolean {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    inquiryType: {
        type: String,
        required: [true, 'Inquiry type is required']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    },
    urgency: {
        type: String,
        enum: ['low', 'normal', 'high', 'urgent'],
        default: 'normal'
    }
}, {
    timestamps: true
});

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;