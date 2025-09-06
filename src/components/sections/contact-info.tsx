'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faTwitter,
    faFacebook,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ContactInfoData {
    address: {
        street: string;
        area: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
        full?: string; // Optional full address
    };
    phone: {
        primary: string;
        secondary?: string; // Optional secondary phone
        whatsapp: string;
    };
    email: {
        sales?: string; // Optional sales email
        support?: string; // Optional support email  
        careers?: string; // Optional careers email
        general: string; // Required general email
        primary?: string; // Optional primary email
        dispatch?: string; // Optional dispatch email
    };
    businessHours: {
        weekdays: string;
        saturday: string;
        sunday: string;
    };
    socialMedia: {
        linkedin: string;
        twitter: string;
        facebook: string;
        instagram: string;
        youtube: string;
    };
    gst?: string; // Optional GST number
    locationDescription?: string; // Optional location description
}

interface ContactInfoProps {
    data: ContactInfoData;
}

export function ContactInfo({ data }: ContactInfoProps) {
    const socialIcons = [
        {
            platform: 'LinkedIn',
            url: data.socialMedia.linkedin,
            icon: faLinkedin,
            color: 'hover:bg-blue-700'
        },
        {
            platform: 'Twitter',
            url: data.socialMedia.twitter,
            icon: faTwitter,
            color: 'hover:bg-blue-400'
        },
        {
            platform: 'Facebook',
            url: data.socialMedia.facebook,
            icon: faFacebook,
            color: 'hover:bg-blue-600'
        },
        {
            platform: 'Instagram',
            url: data.socialMedia.instagram,
            icon: faInstagram,
            color: 'hover:bg-pink-600'
        },
        {
            platform: 'YouTube',
            url: data.socialMedia.youtube,
            icon: faYoutube,
            color: 'hover:bg-red-600'
        },
    ];

    // Create email array with only available emails
    const availableEmails = [
        ...(data.email.sales ? [{ label: 'Sales', email: data.email.sales }] : []),
        ...(data.email.support ? [{ label: 'Support', email: data.email.support }] : []),
        ...(data.email.careers ? [{ label: 'Careers', email: data.email.careers }] : []),
        { label: 'General', email: data.email.general },
        ...(data.email.primary ? [{ label: 'Primary', email: data.email.primary }] : []),
        ...(data.email.dispatch ? [{ label: 'Dispatch', email: data.email.dispatch }] : []),
    ];

    const openMap = () => {
        const address = data.address.full || `${data.address.street}, ${data.address.city}, ${data.address.state}`;
        window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
    };

    const makeCall = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    const sendEmail = (email: string) => {
        window.location.href = `mailto:${email}`;
    };

    const openWhatsApp = (phone: string) => {
        const cleanPhone = phone.replace(/[^\d]/g, '');
        window.open(`https://wa.me/${cleanPhone}`, '_blank');
    };

    const openSocial = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="py-8 bg-gray-50">
            <Container size="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Address */}
                    <Card className="h-fit">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center text-[#1C2A39] text-lg">
                                <MapPin size={20} className="mr-2" />
                                Our Address
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <address className="text-gray-700 not-italic text-sm leading-relaxed mb-3">
                                {data.address.street}<br />
                                {data.address.area}<br />
                                {data.address.city}, {data.address.state} {data.address.pincode}<br />
                                {data.address.country}
                            </address>
                            <Button
                                size="sm"
                                className="bg-[#1C2A39] hover:bg-[#001a3d] text-white"
                                onClick={openMap}
                            >
                                View on Map
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Phone Numbers */}
                    <Card className="h-fit">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center text-[#1C2A39] text-lg">
                                <Phone size={20} className="mr-2" />
                                Contact Numbers
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Primary</p>
                                    <p className="text-gray-600 text-xs">{data.phone.primary}</p>
                                </div>
                                <Button
                                    size="sm"
                                    className="bg-[#1C2A39] hover:bg-[#001a3d] text-white"
                                    onClick={() => makeCall(data.phone.primary)}
                                >
                                    Call
                                </Button>
                            </div>

                            {data.phone.secondary && (
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800 text-sm">Secondary</p>
                                        <p className="text-gray-600 text-xs">{data.phone.secondary}</p>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-[#1C2A39] text-[#1C2A39] hover:bg-[#1C2A39] hover:text-white"
                                        onClick={() => data.phone.secondary && makeCall(data.phone.secondary)}
                                    >
                                        Call
                                    </Button>
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-800 text-sm flex items-center">
                                        <MessageCircle size={14} className="mr-1" />
                                        WhatsApp
                                    </p>
                                    <p className="text-gray-600 text-xs">{data.phone.whatsapp}</p>
                                </div>
                                <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700 text-white"
                                    onClick={() => openWhatsApp(data.phone.whatsapp)}
                                >
                                    Chat
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Email Addresses */}
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center text-[#1C2A39] text-lg">
                                <Mail size={20} className="mr-2" />
                                Email Us
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-2">
                            {availableEmails.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800 text-sm">{item.label}</p>
                                        <p className="text-gray-600 text-xs">{item.email}</p>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-[#1C2A39] text-[#1C2A39] hover:bg-[#1C2A39] hover:text-white"
                                        onClick={() => sendEmail(item.email)}
                                    >
                                        Email
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Business Hours & Social Media */}
                    <div className="space-y-4">
                        {/* Business Hours */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="flex items-center text-[#1C2A39] text-lg">
                                    <Clock size={20} className="mr-2" />
                                    Business Hours
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600 font-medium">{data.businessHours.weekdays}</span>
                                </div>
                                <div className="mt-3 p-2 bg-blue-50 rounded border-l-4 border-[#1C2A39]">
                                    <p className="text-xs text-[#1C2A39] font-medium">
                                        24/7 Emergency Support Available
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* GST Information (if available) */}
                        {data.gst && (
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-[#1C2A39] text-lg">
                                        GST Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-700">GST Number</p>
                                    <p className="font-mono text-sm text-gray-900 font-medium">{data.gst}</p>
                                </CardContent>
                            </Card>
                        )}

                        {/* Social Media */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-[#1C2A39] text-lg">
                                    Follow Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="grid grid-cols-2 gap-2">
                                    {socialIcons.map((social, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            className={`justify-start text-xs border-[#1C2A39] text-[#1C2A39] hover:text-white transition-colors ${social.color}`}
                                            onClick={() => openSocial(social.url)}
                                        >
                                            <FontAwesomeIcon
                                                icon={social.icon}
                                                className="mr-2 w-4 h-4"
                                            />
                                            {social.platform}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}