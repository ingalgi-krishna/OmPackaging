'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

interface ProcessStepsProps {
    data: ProcessStep[];
}

export function ProcessSteps({ data }: ProcessStepsProps) {
    return (
        <section className="section-padding bg-berkeley !text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/general/workers_packing_2.png')] opacity-5" />

            <Container size="xl" className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">
                        Our Process
                    </h2>
                    <p className="text-lg !text-white/80 max-w-2xl mx-auto">
                        We follow a systematic approach to understand your needs and deliver the perfect packaging solution for your business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {data.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Step Number Circle */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="relative mx-auto mb-6 w-20 h-20"
                            >
                                {/* Outer Ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-picton to-picton/80 shadow-lg group-hover:shadow-xl transition-all duration-300" />

                                {/* Inner Circle */}
                                <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm" />

                                {/* Number */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-bold !text-white">
                                        {step.step}
                                    </span>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-full bg-picton/30 blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>

                            {/* Connecting Line (hidden on last item) */}
                            {index < data.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-1/2 h-0.5 bg-gradient-to-r from-picton via-picton/60 to-picton/20 transform translate-x-10"
                                    style={{ width: 'calc(100% - 2.5rem)' }}>
                                    {/* Animated dots */}
                                    <motion.div
                                        animate={{ x: [0, 40, 80] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 w-1 h-1 bg-picton rounded-full -translate-y-0.5"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="text-center">
                                <motion.h3
                                    className="text-xl font-semibold mb-3 !text-white group-hover:text-picton transition-colors duration-300"
                                >
                                    {step.title}
                                </motion.h3>

                                <p className="!text-white/80 leading-relaxed group-hover:!text-white/90 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}