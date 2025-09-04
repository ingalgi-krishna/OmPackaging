export interface NavLink {
    href: string;
    label: string;
}

export interface TeamMember {
    id: string;
    name: string;
    position: string;
    bio: string;
    image: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    specSheet?: string;
}

export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
}

export interface Testimonial {
    id: string;
    name: string;
    company: string;
    position: string;
    content: string;
    rating: number;
    image?: string;
}

export interface InquiryType {
    id: string;
    label: string;
    description: string;
}


export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    inquiryType: string;
    subject: string;
    message: string;
    urgency: 'low' | 'normal' | 'high' | 'urgent';
}


export interface NewsletterFormData {
    email: string;
}


export type UrgencyLevel = 'low' | 'normal' | 'high' | 'urgent';
export type ContactStatus = 'new' | 'read' | 'replied' | 'closed';