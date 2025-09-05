'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface OfficeLocation {
    id: string;
    name: string;
    type: string;
    address: string;
    phone: string;
    email: string;
    manager: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

interface OfficeLocationsProps {
    data: OfficeLocation[];
}

export function OfficeLocations({ data }: OfficeLocationsProps) {
    const openMap = (coordinates: { lat: number; lng: number }) => {
        window.open(`https://maps.app.goo.gl/LZXGTTbNbffCyf4BA`, '_blank');
    };

    const makeCall = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    const sendEmail = (email: string) => {
        window.location.href = `mailto:${email}`;
    };

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-berkeley">
                        Our Office Locations
                    </h2>
                    <p className="text-lg !text-gray-700 max-w-2xl mx-auto">
                        We have offices across India to serve you better. Find the nearest location or contact us directly.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((office, index) => (
                        <motion.div
                            key={office.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <CardTitle className="!text-berkeley text-lg">
                                            {office.name}
                                        </CardTitle>
                                        <span className={`text-xs px-2 py-1 rounded-full ${office.type === 'Head Office'
                                            ? 'bg-picton/10 !text-picton'
                                            : 'bg-gray-100 !text-gray-600'
                                            }`}>
                                            {office.type}
                                        </span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                                        <p className="!text-gray-600 text-sm leading-relaxed">
                                            {office.address}
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Phone size={16} className="text-gray-400 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="!text-gray-600 text-sm">{office.phone}</p>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => makeCall(office.phone)}
                                            className="text-xs px-2 py-1 h-auto"
                                        >
                                            Call
                                        </Button>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Mail size={16} className="text-gray-400 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="!text-gray-600 text-sm break-all">{office.email}</p>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => sendEmail(office.email)}
                                            className="text-xs px-2 py-1 h-auto"
                                        >
                                            Email
                                        </Button>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <User size={16} className="text-gray-400 flex-shrink-0" />
                                        <div>
                                            <p className="!text-gray-500 text-xs">Manager</p>
                                            <p className="!text-gray-700 text-sm font-medium">{office.manager}</p>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full mt-4"
                                        variant="outline"
                                        onClick={() => openMap(office.coordinates)}
                                    >
                                        <MapPin size={16} className="mr-2" />
                                        View on Map
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}