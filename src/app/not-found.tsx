'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-lg mx-auto"
                >
                    {/* 404 Number */}
                    <motion.h1
                        className="text-8xl md:text-9xl font-bold mb-4"
                        style={{ color: '#002B5B' }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        404
                    </motion.h1>

                    {/* Message */}
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{ color: '#002B5B' }}
                    >
                        Page Not Found
                    </h2>

                    <p className="text-gray-600 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center justify-center px-6 py-3 border-2 rounded-lg hover:bg-gray-50 transition-colors"
                            style={{
                                borderColor: '#002B5B',
                                color: '#002B5B'
                            }}
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Go Back
                        </button>

                        <Link
                            href="/"
                            className="flex items-center justify-center px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#002B5B' }}
                        >
                            <Home size={20} className="mr-2" />
                            Go Home
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}