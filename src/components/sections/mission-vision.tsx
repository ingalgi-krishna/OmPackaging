'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MissionVisionData {
    title: string;
    description: string;
}

interface Value {
    title: string;
    description: string;
}

interface MissionVisionProps {
    mission: MissionVisionData;
    vision: MissionVisionData;
    values?: Value[]; // Make values optional
}

export function MissionVision({ mission, vision, values }: MissionVisionProps) {
    return (
        <section className="section-padding bg-white">
            <Container size="xl">
                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-12 mb-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: '#00B0F020' }}
                                    >
                                        <Target style={{ color: '#00B0F0' }} size={24} />
                                    </div>
                                    <CardTitle style={{ color: '#002B5B' }}>{mission.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">
                                    {mission.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: '#00B0F020' }}
                                    >
                                        <Eye style={{ color: '#00B0F0' }} size={24} />
                                    </div>
                                    <CardTitle style={{ color: '#002B5B' }}>{vision.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">
                                    {vision.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Values - Only render if values are provided */}
                {values && values.length > 0 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: '#002B5B' }}
                            >
                                Our Core Values
                            </h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                These fundamental principles guide our decisions and shape our company culture.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6 text-center">
                                            <div
                                                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                                                style={{ backgroundColor: '#00B0F020' }}
                                            >
                                                <Heart style={{ color: '#00B0F0' }} size={24} />
                                            </div>
                                            <h3
                                                className="text-lg font-semibold mb-3"
                                                style={{ color: '#002B5B' }}
                                            >
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </Container>
        </section>
    );
}