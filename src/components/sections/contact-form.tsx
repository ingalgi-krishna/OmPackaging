'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, Building, MessageSquare, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InquiryType, ContactFormData } from '@/types';

interface ContactFormProps {
    data: InquiryType[];
}

export function ContactForm({ data }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        subject: '',
        message: '',
        urgency: 'normal',
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setSubmitMessage(data.message);

                // Reset form after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setSubmitMessage('');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: '',
                        subject: '',
                        message: '',
                        urgency: 'normal',
                    });
                }, 5000);
            } else {
                setSubmitMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClassName = "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2A39] focus:border-[#1C2A39] outline-none transition-colors bg-white text-gray-900";
    const selectClassName = "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2A39] focus:border-[#1C2A39] outline-none transition-colors bg-white text-gray-900 appearance-none cursor-pointer";

    return (
        <section className="py-8  bg-gray-50">
            <Container size="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="shadow-lg max-w-4xl mx-auto">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-[#1C2A39] text-xl flex items-center">
                                <MessageSquare size={22} className="mr-2" />
                                Send Us a Message
                            </CardTitle>
                            <p className="text-gray-600 text-sm mt-2">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </CardHeader>

                        <CardContent className="pt-0">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Personal Information */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                                <User size={14} className="mr-1" />
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className={inputClassName}
                                                placeholder="First name"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className={inputClassName}
                                                placeholder="Last name"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                                <Mail size={14} className="mr-1" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={inputClassName}
                                                placeholder="your.email@example.com"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                                <Phone size={14} className="mr-1" />
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={inputClassName}
                                                placeholder="+1 (555) 123-4567"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                            <Building size={14} className="mr-1" />
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className={inputClassName}
                                            placeholder="Your company name"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Inquiry Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Inquiry Type *
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="inquiryType"
                                                required
                                                value={formData.inquiryType}
                                                onChange={handleInputChange}
                                                className={selectClassName}
                                                disabled={isSubmitting}
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                                    backgroundPosition: 'right 0.5rem center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '1.5em 1.5em'
                                                }}
                                            >
                                                <option value="" className="text-gray-500">Select inquiry type</option>
                                                {data.map(type => (
                                                    <option key={type.id} value={type.id} className="text-gray-900 bg-white">
                                                        {type.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {formData.inquiryType && (
                                            <p className="mt-1 text-xs text-gray-500">
                                                {data.find(type => type.id === formData.inquiryType)?.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className={inputClassName}
                                                placeholder="Brief subject of your inquiry"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                                <Clock size={14} className="mr-1" />
                                                Urgency
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="urgency"
                                                    value={formData.urgency}
                                                    onChange={handleInputChange}
                                                    className={selectClassName}
                                                    disabled={isSubmitting}
                                                    style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                                        backgroundPosition: 'right 0.5rem center',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: '1.5em 1.5em'
                                                    }}
                                                >
                                                    <option value="low" className="text-gray-900 bg-white">Low</option>
                                                    <option value="normal" className="text-gray-900 bg-white">Normal</option>
                                                    <option value="high" className="text-gray-900 bg-white">High</option>
                                                    <option value="urgent" className="text-gray-900 bg-white">Urgent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2A39] focus:border-[#1C2A39] outline-none transition-colors resize-none bg-white text-gray-900"
                                            placeholder="Please provide details about your inquiry, requirements, or questions..."
                                            disabled={isSubmitting}
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            Be specific about your requirements for better assistance.
                                        </p>
                                    </div>

                                    {/* Error Message */}
                                    {submitMessage && !isSubmitted && (
                                        <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-red-600 text-sm">{submitMessage}</p>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="flex justify-between items-center pt-2">
                                        <p className="text-xs text-gray-500">
                                            * Required fields
                                        </p>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#1C2A39] hover:bg-[#001a3d] text-white px-6 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <Send size={16} className="mr-2" />
                                                    Send Message
                                                </div>
                                            )}
                                        </Button>
                                    </div>

                                    <div className="mt-3 p-2 bg-blue-50 rounded border-l-4 border-[#1C2A39]">
                                        <p className="text-xs text-[#1C2A39] font-medium">
                                            By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                        </p>
                                    </div>
                                </form>
                            ) : (
                                /* Success Message */
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center py-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <CheckCircle size={32} className="text-green-600" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-[#1C2A39] mb-3">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-600 mb-2 text-sm">
                                        {submitMessage || "Thank you for contacting us. We've received your message and will respond within 24 hours."}
                                    </p>
                                    <p className="text-gray-500 text-xs">
                                        You'll receive a confirmation email shortly with your inquiry details.
                                    </p>
                                </motion.div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </Container>
        </section>
    );
}