'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Partner {
    id: string;
    name: string;
    logo: string;
    website?: string;
}

interface SlidingLogosProps {
    data: Partner[];
    title?: string;
    subtitle?: string;
}

export function SlidingLogos({
    data,
    title = "Trusted by Industry Leaders",
    subtitle = "We're proud to work with some of the most innovative companies across various industries."
}: SlidingLogosProps) {
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Triple the logos for smoother infinite scroll
    const triplicatedLogos = [...data, ...data, ...data];

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="section-padding bg-white">
            <Container size="xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: '#1C2A39' }}
                    >
                        {title}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Sliding Logos Container */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => !isMobile && setIsPaused(true)}
                    onMouseLeave={() => !isMobile && setIsPaused(false)}
                >
                    {/* Gradient overlays */}
                    <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Scrolling logos */}
                    <motion.div
                        className="flex items-center gap-8 md:gap-16"
                        animate={!isPaused ? {
                            x: [`0%`, `-${100 / 3}%`]
                        } : {}}
                        transition={{
                            duration: isMobile ? 15 : 20, // Faster on mobile
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: `${triplicatedLogos.length * (isMobile ? 112 : 144)}px` // Adjust width based on device
                        }}
                    >
                        {triplicatedLogos.map((partner, index) => (
                            <motion.div
                                key={`${partner.id}-${index}`}
                                className="flex-shrink-0 group cursor-pointer"
                                whileHover={!isMobile ? { scale: 1.05 } : {}}
                                transition={{ duration: 0.3 }}
                                onClick={() => partner.website && window.open(partner.website, '_blank')}
                            >
                                <div className="w-24 h-16 md:w-32 md:h-20 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 96px, 128px"
                                        priority={index < 6} // Prioritize first 6 logos
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Company count */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500">
                        Trusted by <span style={{ color: '#1C2A39' }} className="font-semibold">{data.length}+</span> companies worldwide
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}