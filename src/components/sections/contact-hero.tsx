'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactHeroData {
    title: string;
    subtitle: string;
    description: string;
}

interface ContactHeroProps {
    data: ContactHeroData;
}

export function ContactHero({ data }: ContactHeroProps) {
    const quickStats = [
        { icon: Phone, label: '24/7 Support', value: 'Available' },
        { icon: Mail, label: 'Response Time', value: '< 2 Hours' },
        { icon: MapPin, label: 'Location', value: 'Chakan, Pune' },
        { icon: Clock, label: 'Business Hours', value: 'All day 24Hrs' },
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-berkeley to-berkeley/90 !text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/general/workers_packing.png')] opacity-5" />

            <Container size="xl" className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {data.title}
                        </motion.h1>

                        <motion.h2
                            className="text-xl md:text-2xl !text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {data.subtitle}
                        </motion.h2>

                        <motion.p
                            className="text-lg !text-white/80 leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {data.description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {quickStats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                                >
                                    <IconComponent size={32} className="!text-picton mx-auto mb-3" />
                                    <div className="text-lg font-semibold !text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm !text-white/80">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}