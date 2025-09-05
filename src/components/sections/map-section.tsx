'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, User, Hash } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

interface OfficeLocation {
    id: string;
    name: string;
    type: string;
    address: string;
    phone: string;
    email: string;
    gst?: string;
    manager?: string;
    mapLink: string;
}

interface MapSectionProps {
    data: OfficeLocation[];
}

export function MapSection({ data }: MapSectionProps) {
    const [selectedOffice, setSelectedOffice] = useState(data[0]);

    const openInGoogleMaps = (office: OfficeLocation) => {
        window.open(office.mapLink, '_blank');
    };

    const makeCall = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    const sendEmail = (email: string) => {
        window.location.href = `mailto:${email}`;
    };

    // Convert Google Maps link to embed URL
    const getEmbedUrl = (mapLink: string) => {
        // Extract address from the mapLink
        const urlParams = new URLSearchParams(mapLink.split('?')[1]);
        const query = urlParams.get('q');
        if (query) {
            return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(query)}`;
        }
        // Fallback: use the address directly
        return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(selectedOffice.address)}`;
    };

    return (
        <section className="py-8 bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#002B5B]">
                        Find Us on Map
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Select a location to view details and get directions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Office List */}
                    <div className="lg:col-span-1">
                        <div className="space-y-3">
                            {data.map((office) => (
                                <motion.div
                                    key={office.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${selectedOffice.id === office.id
                                        ? 'border-[#002B5B] bg-blue-50'
                                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                        }`}
                                    onClick={() => setSelectedOffice(office)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-[#002B5B] text-sm">{office.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${office.type === 'Head Office'
                                            ? 'bg-[#002B5B] text-white'
                                            : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {office.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-xs mb-2">{office.address}</p>
                                    <p className="text-gray-500 text-xs">{office.phone}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Map and Selected Office Details */}
                    <div className="lg:col-span-2">
                        <motion.div
                            key={selectedOffice.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Embedded Google Map */}
                            <div className="h-48 relative">
                                <iframe
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(selectedOffice.address)}&output=embed`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${selectedOffice.name}`}
                                    className="rounded-t-lg"
                                />
                                <div className="absolute top-3 right-3">
                                    <Button
                                        size="sm"
                                        onClick={() => openInGoogleMaps(selectedOffice)}
                                        className="bg-white !text-[#002B5B] border border-[#002B5B] hover:bg-[#002B5B] hover:!text-white text-xs shadow-lg"
                                    >
                                        Open in Google Maps
                                    </Button>
                                </div>
                            </div>

                            {/* Office Details */}
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-[#002B5B]">
                                        {selectedOffice.name}
                                    </h3>
                                    <span className={`px-2 py-1 rounded-full text-xs ${selectedOffice.type === 'Head Office'
                                        ? 'bg-[#002B5B] text-white'
                                        : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {selectedOffice.type}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <MapPin size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm">Address</p>
                                            <p className="text-gray-600 text-sm">{selectedOffice.address}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-3">
                                            <Phone size={18} className="text-gray-500 flex-shrink-0" />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-800 text-sm">Phone</p>
                                                <p className="text-gray-600 text-sm">{selectedOffice.phone}</p>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-[#002B5B] hover:bg-[#001a3d] text-white"
                                                onClick={() => makeCall(selectedOffice.phone)}
                                            >
                                                Call
                                            </Button>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Mail size={18} className="text-gray-500 flex-shrink-0" />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-800 text-sm">Email</p>
                                                <p className="text-gray-600 text-xs break-all">{selectedOffice.email}</p>
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                                                onClick={() => sendEmail(selectedOffice.email)}
                                            >
                                                Email
                                            </Button>
                                        </div>
                                    </div>

                                    {selectedOffice.manager && (
                                        <div className="flex items-center space-x-3">
                                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <User size={12} className="text-[#002B5B]" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm">Office Manager</p>
                                                <p className="text-gray-600 text-sm">{selectedOffice.manager}</p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedOffice.gst && (
                                        <div className="flex items-center space-x-3">
                                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Hash size={12} className="text-[#002B5B]" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm">GST Number</p>
                                                <p className="text-gray-600 text-sm font-mono">{selectedOffice.gst}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex gap-3 pt-3">
                                        <Button
                                            className="flex-1 bg-[#002B5B] hover:bg-[#001a3d] text-white"
                                            onClick={() => openInGoogleMaps(selectedOffice)}
                                        >
                                            <MapPin size={16} className="mr-2" />
                                            Get Directions
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                                            onClick={() => makeCall(selectedOffice.phone)}
                                        >
                                            <Phone size={16} className="mr-2" />
                                            Call Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}