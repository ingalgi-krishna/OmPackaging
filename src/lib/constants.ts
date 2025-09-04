export const BRAND_COLORS = {
    berkeleyBlue: '#002B5B',
    pictonBlue: '#00B0F0',
    white: '#FFFFFF',
} as const;

export const COMPANY_INFO = {
    name: 'Itech System and Solutions',
    tagline: 'Premium Industrial Packaging Solutions',
    email: 'info@omindiagroups.com',
    phone: '+919923142533',
    whatsapp: '+919923142533',
    address: {
        street: 'C7/13, HDFC Colony, Telco Road',
        area: 'Shahu Nagar, Chinchwad',
        city: 'Pune',
        state: 'Maharashtra',
        pincode: '411019',
        country: 'India',
        full: 'C7/13, HDFC Colony, Telco Road, Shahu Nagar, Chinchwad, Pune 411019, Maharashtra, India'
    },
    businessDetails: {
        gstNumber: '27AJNPG0303J1ZG',
        establishedYear: '2010',
        experience: '13+ Years',
        regOffice: 'C7/13, HDFC Colony, Telco Road, Shahu Nagar, Chinchwad, Pune 411019, Maharashtra, India'
    },
    businessHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 2:00 PM',
        sunday: 'Sunday: Closed'
    },
    socialMedia: {
        linkedin: 'https://linkedin.com/company/itech-packaging',
        twitter: 'https://twitter.com/itechpackaging',
        facebook: 'https://facebook.com/itechpackaging',
        instagram: 'https://instagram.com/itechpackaging',
        youtube: 'https://youtube.com/itechpackaging'
    },
    stats: {
        clients: '1000+',
        projects: '5000+',
        experience: '13+ Years',
        productCategories: '50+'
    }
} as const;

export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/solutions', label: 'Solutions & Services' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
] as const;

export const SOLUTIONS_CATEGORIES = [
    {
        id: 'corrugated-packaging',
        title: 'Corrugated Packaging',
        description: 'High-quality corrugated boxes and packaging solutions for various industrial applications.',
        href: '/solutions#corrugated-packaging',
        items: [
            'Standard Corrugated Boxes',
            'Heavy Duty Industrial Boxes',
            'Custom Designs',
            'Export Packaging'
        ]
    },
    {
        id: 'protective-packaging',
        title: 'Protective Packaging',
        description: 'Advanced protective materials and cushioning solutions for secure product transportation.',
        href: '/solutions#protective-packaging',
        items: [
            'Bubble Wrap & Air Cushions',
            'Foam Packaging Solutions',
            'Anti-Static Materials',
            'Custom Inserts'
        ]
    },
    {
        id: 'industrial-wrapping',
        title: 'Industrial Wrapping',
        description: 'Professional wrapping materials and stretch films for secure load stabilization.',
        href: '/solutions#industrial-wrapping',
        items: [
            'Stretch & Shrink Films',
            'Pallet Wrapping',
            'Weather Protection',
            'Load Stabilization'
        ]
    },
    {
        id: 'specialized-solutions',
        title: 'Specialized Solutions',
        description: 'Custom packaging solutions for specific industries and unique requirements.',
        href: '/solutions#specialized-solutions',
        items: [
            'Anti-Static Packaging',
            'Hazmat & Dangerous Goods',
            'Temperature Control',
            'Electronics Safe'
        ]
    }
] as const;