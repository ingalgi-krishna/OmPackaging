'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, FileCheck, UserPlus } from 'lucide-react';

const stepIcons = [Mail, MessageSquare, FileCheck, UserPlus];

interface ProcessStep {
    step: number;
    title: string;
    description: string;
    email?: string;
}

interface ApplicationProcessData {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
}

interface ApplicationProcessProps {
    data: ApplicationProcessData;
}

export function ApplicationProcess({ data }: ApplicationProcessProps) {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: '#002B5B' }}
                    >
                        {data.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {data.subtitle}
                    </p>
                </motion.div>

                <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">


                    {data.steps.map((step, index) => {
                        const IconComponent = stepIcons[index] || Mail;

                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative flex flex-col items-center"
                            >
                                <div className="relative mb-6">
                                    {/* Icon container */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-24 h-24 rounded-2xl flex items-center justify-center"
                                        style={{ backgroundColor: '#002B5B1A' }} // Lighter background for the icon
                                    >
                                        <IconComponent
                                            size={48}
                                            style={{ color: '#002B5B' }}
                                        />
                                    </motion.div>
                                    {/* Step Number Badge */}
                                    <div
                                        className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base border-4 border-white"
                                        style={{ backgroundColor: '#00B0F0' }}
                                    >
                                        {step.step < 10 ? `0${step.step}` : step.step}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3
                                        className="text-xl font-semibold mb-3"
                                        style={{ color: '#002B5B' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm mb-4 px-2">
                                        {step.description}
                                    </p>
                                    {step.email && (
                                        <motion.a
                                            href={`mailto:${step.email}`}
                                            whileHover={{ scale: 1.05 }}
                                            className="inline-block px-5 py-2 rounded-lg text-white font-medium text-sm"
                                            style={{ backgroundColor: '#002B5B' }}
                                        >
                                            {step.email}
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
