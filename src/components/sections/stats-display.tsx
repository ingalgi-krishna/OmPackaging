'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { useEffect, useState } from 'react';

interface Stat {
    id: string;
    value: string;
    label: string;
    icon?: string;
}

interface StatsDisplayProps {
    data: Stat[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'dark' | 'gradient';
}

// Hook for counting animation
function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, setHasStarted };
}

// Extract number from string like "20000+" -> 20000
function extractNumber(value: string): number {
    const match = value.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

// Format number back to original format
function formatValue(originalValue: string, currentCount: number): string {
    const hasPlus = originalValue.includes('+');
    const hasK = originalValue.toLowerCase().includes('k');

    if (hasK && currentCount >= 1000) {
        const kValue = Math.floor(currentCount / 1000);
        return `${kValue}k${hasPlus ? '+' : ''}`;
    }

    return `${currentCount}${hasPlus ? '+' : ''}`;
}

export function StatsDisplay({
    data,
    title,
    subtitle,
    variant = 'default'
}: StatsDisplayProps) {
    const getVariantClasses = () => {
        switch (variant) {
            case 'dark':
                return 'bg-berkeley text-white';
            case 'gradient':
                return 'bg-gradient-to-br from-berkeley to-picton text-white';
            default:
                return 'bg-gray-50';
        }
    };

    const getTextColor = () => {
        return variant === 'default' ? '#1C2A39' : '#FDFDFD';
    };

    return (
        <section className={`section-padding ${getVariantClasses()}`}>
            <Container size="xl">
                {/* Header */}
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        {title && (
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: getTextColor() }}
                            >
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p
                                className="text-lg max-w-2xl mx-auto"
                                style={{
                                    color: variant === 'default' ? '#374151' : 'rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}

                {/* Stats Grid */}
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {data.map((stat, index) => {
                        const targetNumber = extractNumber(stat.value);

                        return (
                            <StatCard
                                key={stat.id}
                                stat={stat}
                                targetNumber={targetNumber}
                                index={index}
                                variant={variant}
                            />
                        );
                    })}
                </div>

            </Container>
        </section>
    );
}

// Individual stat card component
function StatCard({
    stat,
    targetNumber,
    index,
    variant
}: {
    stat: Stat;
    targetNumber: number;
    index: number;
    variant: string;
}) {
    const { count, setHasStarted } = useCountUp(targetNumber, 2000 + index * 200);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: index * 0.1
                }
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setHasStarted(true)}
            className="text-center group"
        >
            {/* Number */}
            <motion.div
                className="mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <span
                    className="text-4xl md:text-5xl lg:text-6xl font-bold block"
                    style={{
                        color: variant === 'default' ? '#00B1F1ff' : '#FDFDFD'
                    }}
                >
                    {formatValue(stat.value, count)}
                </span>
            </motion.div>

            {/* Label */}
            <p
                className="text-sm md:text-base font-medium uppercase tracking-wide"
                style={{
                    color: variant === 'default' ? '#1C2A39' : 'rgba(255, 255, 255, 0.9)'
                }}
            >
                {stat.label}
            </p>

            {/* Decorative line */}
            <motion.div
                className="w-12 h-1 mx-auto mt-3 rounded-full"
                style={{
                    backgroundColor: variant === 'default' ? '#00B1F1ff' : 'rgba(255, 255, 255, 0.3)'
                }}
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
            />
        </motion.div>
    );
}