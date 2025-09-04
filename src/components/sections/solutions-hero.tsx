'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

interface SolutionsHeroData {
    title: string;
    subtitle: string;
    description: string;
}

interface SolutionsHeroProps {
    data: SolutionsHeroData;
}

export function SolutionsHero({ data }: SolutionsHeroProps) {
    return (
        <section className="section-padding bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/general/pallet_manufacturing.png')] opacity-5" />

            <Container size="xl" className="relative z-10">
                <div className="max-w-4xl text-left">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {data.title}
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-xl !text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {data.subtitle}
                    </motion.h2>

                    <motion.p
                        className="text-m !text-white/90 leading-relaxed mb-8 max-w-5xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {data.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:!text-[#002B5B] transition-all duration-300"
                            >
                                <span>Get Custom Quote</span>
                                <ArrowRight size={18} />
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:!text-[#002B5B]"
                            onClick={() => window.open('/downloads/om-india-company-profile.pdf', '_blank')}
                        >
                            <Download size={18} className="mr-2" />
                            Download Catalog
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}