'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowDown, Users } from 'lucide-react';

interface CareersHeroData {
    title: string;
    subtitle: string;
    description: string;
}

interface CareersHeroProps {
    data: CareersHeroData;
}

export function CareersHero({ data }: CareersHeroProps) {
    const scrollToWhyWorkWithUs = () => {
        document.getElementById('why-work-with-us')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section-padding bg-gradient-to-br from-berkeley to-berkeley/90 !text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/general/team_portrait.webp')] opacity-5" />

            <Container size="xl" className="relative z-10">
                <div className="grid grid-cols-1 gap-8 items-center text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 !text-white"
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
                            className="text-lg !text-white/80 leading-relaxed mb-8 max-w-3xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {data.description}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-start items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={scrollToWhyWorkWithUs}
                                className="border-white !text-white hover:bg-white hover:!text-berkeley"
                            >
                                <Users size={18} className="mr-2" />
                                Why Work With Us
                            </Button>
                        </motion.div>

                        <motion.p
                            className="mt-6 text-lg !text-white/80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            Contact us at: <a href="mailto:hr@omindiagroups.com" className="font-semibold !text-picton hover:underline">hr@omindiagroups.com</a>
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-left mt-12"
                >
                    <button
                        onClick={scrollToWhyWorkWithUs}
                        className="!text-white/60 hover:!text-white transition-colors"
                        aria-label="Scroll to next section"
                    >
                        <ArrowDown size={24} className="animate-bounce" />
                    </button>
                </motion.div>
            </Container>
        </section>
    );
}
