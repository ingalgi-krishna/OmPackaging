'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
// Import icons directly
import {
    Package,
    Shield,
    Users,
    Award,
    Recycle,
    Truck,
    Clock,
    Star,
    CheckCircle,
    Lightbulb,
    Heart,
    Globe,
    Target,
    Zap,
    Leaf,
    Settings
} from 'lucide-react';

// Create icon components map
const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
        Package,
        Shield,
        Users,
        Award,
        Recycle,
        Truck,
        Clock,
        Star,
        CheckCircle,
        Lightbulb,
        Heart,
        Globe,
        Target,
        Zap,
        Leaf,
        Settings,
    };

    return icons[iconName] || Package;
};

interface CoreValue {
    icon: string;
    title: string;
    description: string;
}

interface CoreValuesProps {
    data: CoreValue[];
}

export function CoreValues({ data }: CoreValuesProps) {
    return (
        <section className="section-padding bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-berkeley">
                        Why Choose Our Packaging Solutions
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        We combine quality materials, innovative design, and reliable service to deliver packaging solutions that protect your products and enhance your business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((value, index) => {
                        const IconComponent = getIconComponent(value.icon);

                        return (
                            <motion.div
                                key={`${value.title}-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center justify-center mx-auto mb-6"
                                >
                                    <IconComponent
                                        size={64}
                                        style={{ color: '#1C2A39' }}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>

                                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1C2A39' }}>
                                    {value.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}