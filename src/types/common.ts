// Generic interfaces that accept string for icons
export interface IconData {
    icon: string;
    title: string;
    description: string;
}

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    features: string[];
}

export interface ProcessStepData {
    step: number;
    title: string;
    description: string;
}

export interface TestimonialData {
    id: string;
    name: string;
    company: string;
    position: string;
    content: string;
    rating: number;
}

export interface HeroData {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
}