import mongoose, { Document, Schema, Model } from 'mongoose';

export interface INewsletter extends Document {
    email: string;
    subscribedAt: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const NewsletterSchema = new Schema<INewsletter>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v: string): boolean {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Newsletter: Model<INewsletter> = mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;