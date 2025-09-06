'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

interface HeroData {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
}

interface HeroSectionProps {
    data: HeroData;
    backgroundImage?: string;
    heroImage?: string;
}

export function HeroSection({
    data,
    backgroundImage = '/general/workers_packing_3.webp',
    heroImage = '/general/women_portrait.webp'
}: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Industrial packaging background"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={85}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C2A39]/95 via-[#1C2A39]/85 to-picton/30" />
            </div>

            {/* Content */}
            <Container size="xl" className="relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                        >
                            <Award className="w-4 h-4 text-picton mr-2" />
                            <span className="text-sm font-medium text-white/90">Industry Leading Solutions</span>
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 !text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span className="block">{data.title.split(' ').slice(0, -2).join(' ')}</span>
                            <span className="text-picton">{data.title.split(' ').slice(-2).join(' ')}</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl !text-white/90 mb-8 leading-relaxed max-w-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {data.subtitle}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-picton hover:bg-picton/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                                >
                                    <span>{data.primaryCTA}</span>
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white/30 text-white hover:bg-white hover:text-[#1C2A39] backdrop-blur-sm bg-white/10 transition-all duration-300 w-full sm:w-auto"
                            >
                                <Play size={18} className="mr-2" />
                                {data.secondaryCTA}
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 md:gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            {data.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-picton mb-1 group-hover:text-white transition-colors">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-white/80 leading-tight">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Main Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <Image
                                src={heroImage}
                                alt="Industrial packaging solutions"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                priority
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39]/30 to-transparent" />
                        </motion.div>

                        {/* Floating Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl p-3 md:p-4 shadow-xl border border-gray-100"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm md:text-base">Quality Assured</div>
                                    <div className="text-xs md:text-sm text-gray-600">ISO 9001:2015</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-xl p-3 md:p-4 shadow-xl border border-gray-100"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm md:text-base">Fast Delivery</div>
                                    <div className="text-xs md:text-sm text-gray-600">24-48 Hours</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-4 left-4 w-16 h-16 bg-picton/20 rounded-full blur-xl"
                        />
                        <motion.div
                            animate={{
                                rotate: [360, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl"
                        />
                    </motion.div>
                </div>
            </Container>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors cursor-pointer"
                >
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-current rounded-full mt-2"
                        />
                    </div>
                    <span className="text-xs font-medium">Scroll Down</span>
                </motion.div>
            </motion.div>
        </section>
    );
}