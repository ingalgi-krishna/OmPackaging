// components/sections/solutions-features.tsx
'use client';

import { motion } from 'framer-motion';
import { Ruler, Award, Truck, Headphones } from 'lucide-react';
import { Container } from '@/components/ui/container';

const iconMap = {
    Ruler,
    Award,
    Truck,
    Headphones,
} as const;

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface SolutionsFeaturesProps {
    data: Feature[];
}

export function SolutionsFeatures({ data }: SolutionsFeaturesProps) {
    return (
        <section className="section-padding bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C2A39]">
                        Why Choose Our Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We combine expertise, quality, and service to deliver wooden packaging solutions that exceed expectations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Award;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <div className="h-full flex flex-col text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                                    {/* Icon Container - Fixed positioning */}
                                    <div className="flex justify-center mb-6">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-20 h-20 bg-gradient-to-br from-picton/10 to-[#1C2A39]/10 rounded-2xl flex items-center justify-center group-hover:from-picton/20 group-hover:to-[#1C2A39]/20 transition-all duration-300"
                                        >
                                            <IconComponent size={36} className="text-[#1C2A39] group-hover:text-picton transition-colors duration-300" />
                                        </motion.div>
                                    </div>

                                    {/* Title - Fixed height for alignment */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-[#1C2A39] group-hover:text-picton transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                                            <span className="text-center leading-tight">
                                                {feature.title}
                                            </span>
                                        </h3>
                                    </div>

                                    {/* Description - Flexible height */}
                                    <div className="flex-grow flex items-start">
                                        <p className="text-gray-600 leading-relaxed text-sm text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Optional bottom spacing for visual balance */}
                <div className="mt-16"></div>
            </Container>
        </section>
    );
}