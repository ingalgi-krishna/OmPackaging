// components/sections/service-categories.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Package, Shield, Settings, Grid3x3, CheckCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const iconMap = {
    Package,
    Shield,
    Settings,
    Grid3x3,
} as const;

interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

interface Category {
    id: string;
    title: string;
    description: string;
    icon: string;
    services: Service[];
}

interface ServiceCategoriesProps {
    data: Category[];
}

export function ServiceCategories({ data }: ServiceCategoriesProps) {
    const [selectedCategory, setSelectedCategory] = useState(data[0]?.id);

    const currentCategory = data.find(cat => cat.id === selectedCategory);

    return (
        <section className="section-padding bg-white">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002B5B]">
                        Our Packaging Categories
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive range of wooden packaging solutions designed for various industrial applications.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {data.map((category) => {
                        const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Package;
                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-[#002B5B] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IconComponent size={20} />
                                <span className="hidden sm:inline">{category.title}</span>
                                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Category Description */}
                {currentCategory && (
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-[#002B5B]">
                            {currentCategory.title}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {currentCategory.description}
                        </p>
                    </motion.div>
                )}

                {/* Services Grid - Improved Spacing */}
                {currentCategory && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {currentCategory.services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="h-full min-h-[580px] flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 hover:border-picton/30 rounded-xl overflow-hidden">
                                    {/* Service Image - Consistent height */}
                                    <div className="relative h-52 flex-shrink-0 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>

                                    {/* Card Content with structured layout */}
                                    <CardContent className="flex flex-col flex-grow p-8">
                                        {/* Title - Fixed height for alignment */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-semibold text-[#002B5B] group-hover:text-picton transition-colors duration-300 min-h-[3.5rem] flex items-center leading-tight">
                                                <span className="line-clamp-2">
                                                    {service.title}
                                                </span>
                                            </h3>
                                        </div>

                                        {/* Description - Fixed height for alignment */}
                                        <div className="mb-6">
                                            <p className="text-gray-600 text-sm leading-relaxed min-h-[4.5rem] line-clamp-3">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features - Flexible grow area */}
                                        <div className="flex-grow mb-8">
                                            <div className="space-y-3">
                                                {service.features.slice(0, 4).map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-start space-x-3">
                                                        <CheckCircle size={14} className="text-picton flex-shrink-0 mt-1" />
                                                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Button - Always at bottom */}
                                        <div className="mt-auto pt-6 border-t border-gray-100">
                                            <Link href="/contact" className="block">
                                                <Button
                                                    size="sm"
                                                    className="w-full bg-[#002B5B] text-white hover:bg-picton transition-all duration-300 group-hover:shadow-lg py-3 font-medium"
                                                >
                                                    Get Quote
                                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Bottom CTA Section with better spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16 bg-[#002B5B]/5 rounded-2xl p-12"
                >
                    <h3 className="text-2xl font-bold text-[#002B5B] mb-6">
                        Need Custom Packaging Solutions?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We create specialized packaging solutions tailored to your unique requirements. From heavy machinery to sensitive electronics, we've got you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-[#002B5B] hover:bg-[#002B5B]/90 text-white px-8 py-4"
                            >
                                Request Custom Quote
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white px-8 py-4"
                            >
                                Learn More About Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}