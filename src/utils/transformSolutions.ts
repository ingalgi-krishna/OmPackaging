interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    solutions: string[];
}

interface Solution {
    id: string;
    name: string;
    description: string;
    category: string;
    image?: string;
}

export function transformSolutionsData(servicesData: Service[]): Solution[] {
    const solutions: Solution[] = [];

    // Create descriptions for common solution types
    const solutionDescriptions: { [key: string]: string } = {
        'seaworthy': 'Heavy-duty wooden boxes designed for international shipping and maritime transport with ISPM-15 compliance.',
        'wooden box': 'Premium wooden packaging solutions for industrial equipment and machinery protection during transport.',
        'wooden crate': 'Robust wooden crates engineered for heavy-duty applications and secure material handling.',
        'plywood': 'High-quality plywood packaging boxes offering excellent strength-to-weight ratio for various applications.',
        'pallet': 'Durable wooden pallets designed for efficient material handling and storage solutions.',
        'vacuum packing': 'Advanced aluminum foil vacuum packaging for corrosion protection and moisture control.',
        'vci packing': 'Volatile Corrosion Inhibitor packaging technology for metal components and machinery protection.',
        'heat treatment': 'ISPM-15 Treatments heat treatment services ensuring compliance for international wooden packaging.',
        'fumigation': 'Professional fumigation treatment services for wooden packaging materials meeting export standards.',
        'custom': 'Tailored packaging solutions designed to meet specific customer requirements and applications.',
        'lashing': 'Professional lashing and choking services for secure load restraint during transportation.'
    };

    function generateDescription(solutionName: string, serviceDescription: string): string {
        const lowerName = solutionName.toLowerCase();

        // Find matching description based on keywords
        for (const [keyword, desc] of Object.entries(solutionDescriptions)) {
            if (lowerName.includes(keyword)) {
                return desc;
            }
        }

        // Fallback to service description with solution name
        return `Professional ${solutionName.toLowerCase()} solution designed for industrial applications with quality materials and expert craftsmanship.`;
    }

    servicesData.forEach(service => {
        service.solutions.forEach((solutionName: string, index: number) => {
            const solutionId = solutionName
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');

            solutions.push({
                id: `${service.id}-${solutionId}`,
                name: solutionName,
                description: generateDescription(solutionName, service.description),
                category: service.id,
                image: `/images/solutions/${solutionId}.jpg` // You can customize this path
            });
        });
    });

    return solutions;
}