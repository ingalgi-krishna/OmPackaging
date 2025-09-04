'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';

interface BrochureStripProps {
    title?: string;
    description?: string;
    downloadText?: string;
    fileSize?: string;
    fileName?: string;
    variant?: 'default' | 'gradient' | 'minimal';
}

export function BrochureStrip({
    title = "Download Our Complete Brochure",
    description = "Get detailed information about our packaging solutions, services, and capabilities in one comprehensive document.",
    downloadText = "Download Brochure",
    fileSize = "2.5 MB",
    fileName = "om-india-company-profile.pdf",
    variant = 'default'
}: BrochureStripProps) {

    const handleDownload = async () => {
        try {
            // Create the download link
            const link = document.createElement('a');
            link.href = `/downloads/${fileName}`;
            link.download = fileName;
            link.target = '_blank'; // Open in new tab as fallback

            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Optional: Track download event
            // gtag('event', 'download', {
            //     'event_category': 'brochure',
            //     'event_label': fileName
            // });

        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: open in new window
            window.open(`/downloads/${fileName}`, '_blank');
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'gradient':
                return 'bg-gradient-to-r from-berkeley to-picton';
            case 'minimal':
                return 'bg-gray-50 border-t border-b border-gray-200';
            default:
                return 'bg-berkeley';
        }
    };

    const getTextColor = () => {
        return variant === 'minimal' ? '#002B5B' : '#FFFFFF';
    };

    const getDescriptionColor = () => {
        return variant === 'minimal' ? '#6B7280' : 'rgba(255, 255, 255, 0.9)';
    };

    return (
        <section className={`py-6 md:py-8 lg:py-10 ${getVariantClasses()}`}>
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-6"
                >
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                            <motion.div
                                whileHover={{ rotate: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FileText
                                    size={24}
                                    className="md:w-7 md:h-7 lg:w-8 lg:h-8"
                                    style={{ color: variant === 'minimal' ? '#00B0F0' : '#FFFFFF' }}
                                />
                            </motion.div>
                            <h3
                                className="text-lg md:text-xl lg:text-2xl font-bold leading-tight"
                                style={{ color: getTextColor() }}
                            >
                                {title}
                            </h3>
                        </div>

                        <p
                            className="text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed"
                            style={{ color: getDescriptionColor() }}
                        >
                            {description}
                        </p>

                        {/* File info - Hidden on mobile for cleaner look */}
                        <div
                            className="hidden md:flex items-center justify-center lg:justify-start gap-3 mt-3 text-xs md:text-sm"
                            style={{ color: getDescriptionColor() }}
                        >
                            <span>PDF Format</span>
                            <span>•</span>
                            <span>{fileSize}</span>
                            <span>•</span>
                            <span className="hidden lg:inline">Last Updated: {new Date().toLocaleDateString()}</span>
                            <span className="lg:hidden">Updated Today</span>
                        </div>
                    </div>

                    {/* Download Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 w-full sm:w-auto"
                    >
                        <button
                            onClick={handleDownload}
                            className={`
                                w-full sm:w-auto px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 
                                text-sm md:text-base lg:text-lg font-semibold 
                                rounded-lg md:rounded-xl shadow-lg hover:shadow-xl 
                                transition-all duration-300 group
                                flex items-center justify-center
                                ${variant === 'minimal'
                                    ? 'bg-picton hover:bg-picton/90 text-white'
                                    : 'bg-white hover:bg-gray-100 text-berkeley'
                                }
                            `}
                            style={{
                                backgroundColor: variant === 'minimal' ? '#00B0F0' : '#FFFFFF',
                                color: variant === 'minimal' ? '#FFFFFF' : '#002B5B'
                            }}
                        >
                            <Download
                                size={16}
                                className="mr-2 group-hover:animate-bounce md:w-5 md:h-5"
                            />
                            <span className="truncate">{downloadText}</span>
                            <ArrowRight
                                size={16}
                                className="ml-2 group-hover:translate-x-1 transition-transform duration-300 md:w-5 md:h-5 flex-shrink-0"
                            />
                        </button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}