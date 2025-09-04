'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    position: string;
    company?: string;
    bio: string;
    expertise: string[];
    placeholder?: boolean;
}

interface TeamSectionProps {
    boardOfDirectors: TeamMember[];
    expertTeam: TeamMember[];
}

export function TeamSection({ boardOfDirectors, expertTeam }: TeamSectionProps) {
    return (
        <section className="section-padding bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#002B5B' }}>
                        Board Of Directors & Expert Team
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Our leadership team and expert professionals are dedicated to delivering exceptional packaging solutions and outstanding customer service.
                    </p>
                </motion.div>

                {/* Board of Directors */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#002B5B' }}>
                        Board of Directors
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {boardOfDirectors.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader className="text-center">
                                        <div
                                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                            style={{ backgroundColor: '#002B5B20' }}
                                        >
                                            <span
                                                className="text-2xl font-bold"
                                                style={{ color: '#002B5B' }}
                                            >
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <CardTitle style={{ color: '#002B5B' }}>{member.name}</CardTitle>
                                        <p style={{ color: '#00B0F0' }} className="font-medium">
                                            {member.position}
                                        </p>
                                        {member.company && (
                                            <p className="text-gray-600 text-sm">{member.company}</p>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {member.bio}
                                        </p>
                                        {member.expertise.length > 0 && (
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm mb-2"
                                                    style={{ color: '#002B5B' }}
                                                >
                                                    Expertise:
                                                </h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {member.expertise.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="text-xs px-2 py-1 rounded-full"
                                                            style={{
                                                                backgroundColor: '#00B0F020',
                                                                color: '#00B0F0'
                                                            }}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Expert Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#002B5B' }}>
                        Expert Team
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertTeam.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className={`h-full transition-all duration-300 ${member.placeholder ? 'border-dashed border-2 hover:border-picton/50' : 'hover:shadow-lg'}`}>
                                    <CardHeader className="text-center">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${member.placeholder
                                                ? 'border-2 border-dashed border-gray-300'
                                                : ''
                                                }`}
                                            style={{
                                                backgroundColor: member.placeholder ? 'transparent' : '#002B5B20'
                                            }}
                                        >
                                            {member.placeholder ? (
                                                <Plus size={24} className="text-gray-400" />
                                            ) : (
                                                <span
                                                    className="text-lg font-bold"
                                                    style={{ color: '#002B5B' }}
                                                >
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            )}
                                        </div>
                                        <CardTitle
                                            className={`text-lg ${member.placeholder ? 'text-gray-500' : ''}`}
                                            style={{ color: member.placeholder ? '#9CA3AF' : '#002B5B' }}
                                        >
                                            {member.name || member.position}
                                        </CardTitle>
                                        {!member.placeholder && (
                                            <p style={{ color: '#00B0F0' }} className="font-medium text-sm">
                                                {member.position}
                                            </p>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <p className={`text-sm leading-relaxed ${member.placeholder ? 'text-gray-400 italic text-center' : 'text-gray-600'}`}>
                                            {member.bio}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}