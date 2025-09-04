export interface CultureValue {
    title: string;
    description: string;
    icon: 'Lightbulb' | 'Users' | 'Scale' | 'Award';
}

export interface CultureData {
    title: string;
    description: string;
    values: CultureValue[];
}

export interface HeroData {
    title: string;
    subtitle: string;
    description: string;
}

export interface Benefit {
    category: string;
    items: string[];
}

export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    experience: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    postedDate: string;
    applicationDeadline: string;
}