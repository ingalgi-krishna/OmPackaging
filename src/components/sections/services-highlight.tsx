// components/sections/services-highlight.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowRight,
    Package,
    Layers,
    Shield,
    Thermometer,
    Settings
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// Service category icons mapping
const categoryIcons = {
    'wooden-packaging': Package,
    'pallet-solutions': Layers,
    'specialized-packaging': Shield,
    'treatment-services': Thermometer,
    'custom-services': Settings
};

interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    solutions: string[];
}

interface ServicesHighlightProps {
    data: Service[];
}

export function ServicesHighlight({ data }: ServicesHighlightProps) {
    return (
        <section className="section-padding bg-white">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002B5B]">
                        Our Packaging Solutions
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                        From seaworthy wooden boxes to specialized industrial packaging, we provide comprehensive solutions for all your packaging needs.
                    </p>
                    <Link href="/solutions">
                        <Button
                            variant="outline"
                            size="lg"
                            className="flex items-center space-x-2 border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white transition-all duration-300"
                        >
                            <span>View All Solutions</span>
                            <ArrowRight size={18} />
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((service, index) => {
                        const CategoryIcon = categoryIcons[service.id as keyof typeof categoryIcons] || Package;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-picton">
                                    {/* Category Image */}
                                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                                        <Image
                                            src={`/solutions/${service.id}.png`}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                        {/* Icon Overlay */}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 bg-white/90 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm">
                                                <CategoryIcon
                                                    size={24}
                                                    className="text-[#002B5B]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        {/* Category Title */}
                                        <h3 className="text-xl font-semibold mb-3 text-[#002B5B] group-hover:text-picton transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Solutions Count */}
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-sm text-gray-500">
                                                {service.solutions.length} Solutions Available
                                            </span>
                                            <span className="bg-picton/10 text-picton px-3 py-1 rounded-full text-xs font-medium">
                                                {service.features.length} Key Features
                                            </span>
                                        </div>

                                        {/* Features Preview */}
                                        <div className="space-y-1 mb-6">
                                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-picton rounded-full mr-3 flex-shrink-0"></div>
                                                    <span className="truncate">{feature}</span>
                                                </div>
                                            ))}
                                            {service.features.length > 3 && (
                                                <div className="text-xs text-gray-500 ml-5">
                                                    +{service.features.length - 3} more features
                                                </div>
                                            )}
                                        </div>

                                        {/* Learn More Button */}
                                        <Link href={`/solutions#${service.id}`}>
                                            <Button
                                                variant="ghost"
                                                className="w-full text-[#002B5B] hover:bg-[#002B5B] hover:text-white transition-all duration-300 border border-[#002B5B]/20 hover:border-[#002B5B] group-hover:shadow-md"
                                            >
                                                Explore Solutions
                                                <ArrowRight size={14} className="ml-2" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16 bg-[#002B5B]/5 rounded-2xl p-12"
                >
                    <h3 className="text-2xl font-bold text-[#002B5B] mb-4">
                        Need Custom Packaging Solutions?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        We create specialized packaging solutions tailored to your unique requirements. From heavy machinery to sensitive electronics, we've got you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/solutions">
                            <Button
                                size="lg"
                                className="bg-[#002B5B] hover:bg-[#002B5B]/90 text-white"
                            >
                                Browse All Solutions
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                            >
                                Request Custom Quote
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}