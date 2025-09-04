'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import { Container } from '@/components/ui/container'; // Assuming you have these components
import { Card, CardContent } from '@/components/ui/card'; // Assuming you have these components

// --- Component Definition ---

// Helper to map icon names to actual components
const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
        Lightbulb,
        Users,
        TrendingUp,
        Globe,
    };
    return icons[iconName] || Lightbulb; // Return Lightbulb as a fallback
};

// Type definitions for the component's data prop
interface WhyWorkWithUsValue {
    title: string;
    description: string;
    icon: string;
}

interface WhyWorkWithUsData {
    title: string;
    values: WhyWorkWithUsValue[];
}

interface WhyWorkWithUsProps {
    data: WhyWorkWithUsData;
}

// The WhyWorkWithUs component
export function WhyWorkWithUs({ data }: WhyWorkWithUsProps) {
    return (
        <section id="why-work-with-us" className="py-16 sm:py-24 bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                    >
                        {data.title}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {data.values.map((value, index) => {
                        const IconComponent = getIconComponent(value.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="w-full"
                            >
                                <Card className="h-full hover:shadow-xl transition-shadow text-center group bg-white">
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className="pt-4 mb-4">
                                            <IconComponent
                                                size={40}
                                                style={{ color: '#002B5B' }}
                                            />
                                        </div>
                                        <h3
                                            className="text-lg font-semibold mb-2 text-gray-800"
                                        >
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-normal text-sm text-center line-clamp-3">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
