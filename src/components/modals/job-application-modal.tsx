'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
}

interface JobApplicationModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        coverLetter: '',
        experience: '',
        expectedSalary: '',
        availability: '',
        referralSource: '',
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setResumeFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Auto close after success message
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                coverLetter: '',
                experience: '',
                expectedSalary: '',
                availability: '',
                referralSource: '',
            });
            setResumeFile(null);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                    >
                        <Card className="relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                                <X size={18} />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <CardHeader className="pb-4">
                                        <CardTitle className="!text-berkeley pr-8">
                                            Apply for {job.title}
                                        </CardTitle>
                                        <div className="flex flex-wrap gap-2 text-sm">
                                            <span className="bg-picton/10 !text-picton px-2 py-1 rounded-full">
                                                {job.department}
                                            </span>
                                            <span className="bg-gray-100 !text-gray-600 px-2 py-1 rounded-full">
                                                {job.location}
                                            </span>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Personal Information */}
                                            <div>
                                                <h3 className="text-lg font-semibold !text-berkeley mb-4 flex items-center">
                                                    <User size={20} className="mr-2" />
                                                    Personal Information
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            First Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            required
                                                            value={formData.firstName}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Last Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            required
                                                            value={formData.lastName}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Phone Number *
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            required
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Resume Upload */}
                                            <div>
                                                <h3 className="text-lg font-semibold !text-berkeley mb-4 flex items-center">
                                                    <FileText size={20} className="mr-2" />
                                                    Resume/CV
                                                </h3>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-picton transition-colors">
                                                    <input
                                                        type="file"
                                                        id="resume"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                    <label htmlFor="resume" className="cursor-pointer">
                                                        <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                                                        {resumeFile ? (
                                                            <p className="!text-berkeley font-medium">
                                                                {resumeFile.name}
                                                            </p>
                                                        ) : (
                                                            <>
                                                                <p className="!text-gray-600 mb-1">
                                                                    Click to upload your resume
                                                                </p>
                                                                <p className="!text-gray-500 text-sm">
                                                                    PDF, DOC, DOCX (Max 5MB)
                                                                </p>
                                                            </>
                                                        )}
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Additional Information */}
                                            <div>
                                                <h3 className="text-lg font-semibold !text-berkeley mb-4">
                                                    Additional Information
                                                </h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Years of Experience
                                                        </label>
                                                        <select
                                                            name="experience"
                                                            value={formData.experience}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        >
                                                            <option value="">Select experience level</option>
                                                            <option value="0-1">0-1 years</option>
                                                            <option value="2-3">2-3 years</option>
                                                            <option value="4-5">4-5 years</option>
                                                            <option value="6-10">6-10 years</option>
                                                            <option value="10+">10+ years</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Expected Salary (Optional)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="expectedSalary"
                                                            value={formData.expectedSalary}
                                                            onChange={handleInputChange}
                                                            placeholder="e.g., ₹8-12 LPA"
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Availability
                                                        </label>
                                                        <select
                                                            name="availability"
                                                            value={formData.availability}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        >
                                                            <option value="">Select availability</option>
                                                            <option value="immediate">Immediate</option>
                                                            <option value="2-weeks">2 weeks notice</option>
                                                            <option value="1-month">1 month notice</option>
                                                            <option value="2-months">2+ months notice</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            How did you hear about this position?
                                                        </label>
                                                        <select
                                                            name="referralSource"
                                                            value={formData.referralSource}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                                                        >
                                                            <option value="">Select source</option>
                                                            <option value="website">Company Website</option>
                                                            <option value="linkedin">LinkedIn</option>
                                                            <option value="job-portal">Job Portal</option>
                                                            <option value="referral">Employee Referral</option>
                                                            <option value="social-media">Social Media</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium !text-gray-700 mb-2">
                                                            Cover Letter (Optional)
                                                        </label>
                                                        <textarea
                                                            name="coverLetter"
                                                            value={formData.coverLetter}
                                                            onChange={handleInputChange}
                                                            rows={4}
                                                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none resize-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="flex gap-4 pt-4">
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="flex-1"
                                                >
                                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={onClose}
                                                    disabled={isSubmitting}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    </CardContent>
                                </>
                            ) : (
                                /* Success Message */
                                <CardContent className="text-center py-12">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <span className="text-2xl">✓</span>
                                    </motion.div>
                                    <h3 className="text-2xl font-bold !text-berkeley mb-4">
                                        Application Submitted!
                                    </h3>
                                    <p className="!text-gray-600 mb-6">
                                        Thank you for your interest in the {job.title} position.
                                        We've received your application and will review it shortly.
                                    </p>
                                    <p className="!text-gray-500 text-sm">
                                        You'll receive a confirmation email within the next few minutes.
                                        We'll be in touch if your profile matches our requirements.
                                    </p>
                                </CardContent>
                            )}
                        </Card>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}