'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowRight,
    MessageCircle,
    ChevronUp,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Youtube
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';

const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
};

export function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const footerRef = useRef<HTMLElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    // This effect uses an IntersectionObserver to check if the footer is on screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the footer is visible
        );

        const currentFooter = footerRef.current;
        if (currentFooter) {
            observer.observe(currentFooter);
        }

        return () => {
            if (currentFooter) {
                observer.unobserve(currentFooter);
            }
        };
    }, []);

    const currentYear = new Date().getFullYear();

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubscribed(true);
                setMessage(data.message);
                setEmail('');
                setTimeout(() => {
                    setIsSubscribed(false);
                    setMessage('');
                }, 5000);
            } else {
                setMessage(data.error || 'Something went wrong');
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (error) {
            setMessage('Failed to subscribe. Please try again.');
            setTimeout(() => setMessage(''), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
        { name: 'Careers', href: '/careers' },
    ];

    const openSocial = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const makeCall = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    const sendEmail = (emailAddress: string) => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const openWhatsApp = () => {
        const cleanPhone = COMPANY_INFO.whatsapp.replace(/[^\d]/g, '');
        window.open(`https://wa.me/${cleanPhone}?text=Hello! I'm interested in your packaging solutions.`, '_blank');
    };

    const openMap = () => {
        const fullAddress = `C7/13, HDFC Colony, Telco Road, Shahu Nagar, Chinchwad, Pune 411019, Maharashtra, India`;
        window.open(`https://maps.app.goo.gl/LZXGTTbNbffCyf4BA`, '_blank');
    };

    return (
        <>
            <footer ref={footerRef} className="bg-berkeley !text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/images/footer-pattern.svg')] opacity-5" />

                <Container size="xl" className="relative z-10">
                    {/* Newsletter Section */}
                    <div className="py-12 border-b border-white/10">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-bold !text-white mb-2">
                                    Stay Updated
                                </h3>
                                <p className="!text-white/80">
                                    Get the latest updates on packaging solutions and industry trends.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {!isSubscribed ? (
                                    <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            disabled={isSubmitting}
                                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 !text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-picton disabled:opacity-50"
                                        />
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting || !email}
                                            className="bg-picton hover:bg-picton/90 px-6 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <ArrowRight size={18} />
                                            )}
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-4 text-center">
                                        <p className="!text-green-300 font-medium">✓ {message || 'Successfully subscribed!'}</p>
                                    </div>
                                )}

                                {message && !isSubscribed && (
                                    <div className="mt-2 text-red-300 text-sm text-center">
                                        {message}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className="py-12">
                        <div className="grid lg:grid-cols-4 gap-8">
                            {/* Company Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-2"
                            >
                                {/* Logo and Company Name */}
                                <Link href="/" className="flex items-center space-x-3 mb-6">
                                    {/* Company Logo - Replace with your actual logo */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-picton to-berkeley rounded-xl flex items-center justify-center shadow-lg">
                                        <Image
                                            src="/logos/logo.png" // Add your logo path here
                                            alt="Om India Logo"
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold !text-white">
                                            Om India
                                        </div>
                                        <div className="text-sm !text-white/80">
                                            Total Packaging Solutions
                                        </div>
                                    </div>
                                </Link>

                                {/* Description */}
                                <p className="!text-white/80 leading-relaxed mb-6">
                                    Your trusted partner in comprehensive packaging solutions. We specialize in delivering
                                    innovative, sustainable, and cost-effective packaging products that meet diverse industry
                                    needs. From design to delivery, we ensure quality and reliability in every solution.
                                </p>

                                {/* Social Media */}
                                <div className="flex items-center space-x-3 mb-6">
                                    {Object.entries(COMPANY_INFO.socialMedia).map(([platform, url]) => {
                                        const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                                        return (
                                            <motion.button
                                                key={platform}
                                                onClick={() => openSocial(url)}
                                                className="w-10 h-10 bg-white/10 hover:bg-picton rounded-lg flex items-center justify-center transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <IconComponent size={18} className="!text-white/80" />
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Business Info */}
                                <div className="text-sm !text-white/60">
                                    <div>GST: {COMPANY_INFO.businessDetails.gstNumber}</div>
                                    <div>Established: {COMPANY_INFO.businessDetails.establishedYear}</div>
                                </div>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h3 className="text-lg font-semibold !text-white mb-6">
                                    Quick Links
                                </h3>
                                <ul className="space-y-3">
                                    {NAV_LINKS.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="!text-white/70 hover:!text-picton transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                    {quickLinks.map((link, index) => (
                                        <li key={`quick-${index}`}>
                                            <Link
                                                href={link.href}
                                                className="!text-white/70 hover:!text-picton transition-colors text-sm"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-lg font-semibold !text-white mb-6">
                                    Contact Us
                                </h3>

                                <div className="space-y-4">
                                    {/* Address */}
                                    <div className="flex items-start space-x-3">
                                        <MapPin size={16} className="!text-picton mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="!text-white/80 text-sm leading-relaxed">
                                                C7/13, HDFC Colony, Telco Road<br />
                                                Shahu Nagar, Chinchwad<br />
                                                Pune 411019, Maharashtra, India
                                            </p>
                                            <button
                                                onClick={openMap}
                                                className="!text-picton hover:!text-white text-xs mt-1 transition-colors"
                                            >
                                                View on Map
                                            </button>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center space-x-3">
                                        <Phone size={16} className="!text-picton flex-shrink-0" />
                                        <div>
                                            <p className="!text-white/80 text-sm">{COMPANY_INFO.phone}</p>
                                            <button
                                                onClick={() => makeCall(COMPANY_INFO.phone)}
                                                className="!text-picton hover:!text-white text-xs transition-colors"
                                            >
                                                Call Now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center space-x-3">
                                        <Mail size={16} className="!text-picton flex-shrink-0" />
                                        <div>
                                            <p className="!text-white/80 text-sm break-all">{COMPANY_INFO.email}</p>
                                            <button
                                                onClick={() => sendEmail(COMPANY_INFO.email)}
                                                className="!text-picton hover:!text-white text-xs transition-colors"
                                            >
                                                Send Email
                                            </button>
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex items-center space-x-3">
                                        <MessageCircle size={16} className="!text-green-400 flex-shrink-0" />
                                        <div>
                                            <p className="!text-white/80 text-sm">WhatsApp Support</p>
                                            <button
                                                onClick={openWhatsApp}
                                                className="!text-green-400 hover:!text-white text-xs transition-colors"
                                            >
                                                Start Chat
                                            </button>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start space-x-3">
                                        <Clock size={16} className="!text-picton mt-1 flex-shrink-0" />
                                        <div className="text-sm !text-white/80">
                                            <div>All day 24Hrs</div>
                                            <div className="text-xs !text-green-400 mt-1">24/7 Emergency Support</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="py-6 border-t border-white/10">
                        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                            <div className="text-sm !text-white/70 text-center lg:text-left">
                                © {currentYear} Om India - Total Packaging Solutions. All rights reserved.
                            </div>

                            <div className="text-xs !text-white/90">
                                Technology Partner:{" "}
                                <a
                                    href="https://sucetastech.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-[#fffff] hover:text-gray-400 transition-colors"
                                >
                                    Sucetas Technologies
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer >

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {
                    isFooterVisible && (
                        <motion.button
                            onClick={scrollToTop}
                            className="fixed bottom-20 right-6 w-12 h-12 bg-[#1C2A39] hover:bg-[#001a3d] border-2 border-white/20 rounded-full flex items-center justify-center shadow-2xl z-[9999] transition-all duration-300 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(0, 43, 91, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: "linear-gradient(135deg, #1C2A39 0%, #001a3d 100%)",
                            }}
                        >
                            <ChevronUp size={24} className="text-white drop-shadow-sm" />
                        </motion.button>
                    )
                }
            </AnimatePresence >
        </>
    );
}