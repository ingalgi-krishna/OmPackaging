'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
    id: string;
    name: string;
    company: string;
    position: string;
    content: string;
    rating: number;
}

interface TestimonialsProps {
    data: Testimonial[];
}

export function Testimonials({ data }: TestimonialsProps) {
    return (
        <section className="section-padding bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#002B5B' }}>
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our packaging solutions and service.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                                <CardContent className="p-6">
                                    {/* Quote Icon */}
                                    <Quote
                                        size={48}
                                        style={{ color: '#00B0F0', opacity: 0.3 }}
                                        className="mb-4"
                                    />

                                    {/* Rating */}
                                    <div className="flex items-center space-x-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                style={{ color: '#FFD700', fill: '#FFD700' }}
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                                        "{testimonial.content}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: '#002B5B20' }}
                                        >
                                            <span
                                                className="font-semibold text-lg"
                                                style={{ color: '#002B5B' }}
                                            >
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <div
                                                className="font-semibold"
                                                style={{ color: '#002B5B' }}
                                            >
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {testimonial.position}, {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}