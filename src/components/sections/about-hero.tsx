'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

interface AboutOverview {
    title: string;
    subtitle: string;
    description: string;
    established: string;
    experience: string;
    clients: string;
    projects: string;
}

interface AboutHeroProps {
    data: AboutOverview;
}

export function AboutHero({ data }: AboutHeroProps) {
    const stats = [
        { label: 'Established', value: data.established },
        { label: 'Experience', value: data.experience },
        { label: 'Happy Clients', value: data.clients },
        { label: 'Projects Completed', value: data.projects },
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-berkeley to-berkeley/90 !text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/general/team_portrait.png')] opacity-5" />

            <Container size="xl" className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-4 !text-white"
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
                            className="text-lg !text-white/80 leading-relaxed"
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
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                            >
                                <div className="text-2xl md:text-3xl font-bold !text-picton mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm !text-white/80">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}