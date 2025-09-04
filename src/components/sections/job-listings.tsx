'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Clock, Briefcase, Filter, Search, Calendar } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { JobApplicationModal } from '@/components/modals/job-application-modal';

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    experience: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    postedDate: string;
    applicationDeadline: string;
}

interface JobListingsProps {
    data: Job[];
}

export function JobListings({ data }: JobListingsProps) {
    const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
    const [selectedType, setSelectedType] = useState<string>('all');
    const [selectedLocation, setSelectedLocation] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [showApplicationModal, setShowApplicationModal] = useState(false);

    // Get unique filter options
    const departments = ['all', ...new Set(data.map(job => job.department))];
    const types = ['all', ...new Set(data.map(job => job.type))];
    const locations = ['all', ...new Set(data.map(job => job.location))];

    // Filter jobs
    const filteredJobs = data.filter(job => {
        const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
        const matchesType = selectedType === 'all' || job.type === selectedType;
        const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
        const matchesSearch = searchTerm === '' ||
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesDepartment && matchesType && matchesLocation && matchesSearch;
    });

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleApply = (job: Job) => {
        setSelectedJob(job);
        setShowApplicationModal(true);
    };

    return (
        <section id="job-listings" className="section-padding bg-gray-50">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-berkeley">
                        Open Positions
                    </h2>
                    <p className="text-lg !text-gray-700 max-w-2xl mx-auto">
                        Explore exciting career opportunities and find the perfect role to grow your career with us.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-lg p-6 mb-8 shadow-sm"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Filter size={20} className="text-berkeley" />
                        <h3 className="font-semibold !text-berkeley">Filter Jobs</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                            />
                        </div>

                        {/* Department Filter */}
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>
                                    {dept === 'all' ? 'All Departments' : dept}
                                </option>
                            ))}
                        </select>

                        {/* Type Filter */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                        >
                            {types.map(type => (
                                <option key={type} value={type}>
                                    {type === 'all' ? 'All Types' : type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </option>
                            ))}
                        </select>

                        {/* Location Filter */}
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-picton focus:border-picton outline-none"
                        >
                            {locations.map(location => (
                                <option key={location} value={location}>
                                    {location === 'all' ? 'All Locations' : location}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-4 text-sm !text-gray-600">
                        Showing {filteredJobs.length} of {data.length} positions
                    </div>
                </motion.div>

                {/* Job Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {filteredJobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <CardTitle className="!text-berkeley mb-2">
                                                {job.title}
                                            </CardTitle>
                                            <div className="flex flex-wrap gap-2 text-sm">
                                                <span className="bg-picton/10 !text-picton px-2 py-1 rounded-full">
                                                    {job.department}
                                                </span>
                                                <span className="bg-gray-100 !text-gray-600 px-2 py-1 rounded-full capitalize">
                                                    {job.type.replace('-', ' ')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm !text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={14} />
                                            <span>{job.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>Posted {formatDate(job.postedDate)}</span>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <p className="!text-gray-600 leading-relaxed mb-6">
                                        {job.description}
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="font-semibold !text-berkeley mb-2">Key Requirements:</h4>
                                            <ul className="space-y-1">
                                                {job.requirements.slice(0, 3).map((req, reqIndex) => (
                                                    <li key={reqIndex} className="text-sm !text-gray-600 flex items-start">
                                                        <span className="w-1 h-1 bg-picton rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold !text-berkeley mb-2">Benefits:</h4>
                                            <ul className="space-y-1">
                                                {job.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                                                    <li key={benefitIndex} className="text-sm !text-gray-600 flex items-start">
                                                        <span className="w-1 h-1 bg-picton rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Button
                                            onClick={() => handleApply(job)}
                                            className="flex-1"
                                        >
                                            Apply Now
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                // Show job details modal or expand card
                                                console.log('View details for:', job.title);
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </div>

                                    <div className="mt-4 text-xs !text-gray-500">
                                        Application deadline: {formatDate(job.applicationDeadline)}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* No results message */}
                {filteredJobs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-12"
                    >
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Briefcase size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold !text-berkeley mb-2">
                            No positions found
                        </h3>
                        <p className="!text-gray-600 mb-6">
                            Try adjusting your filters or search terms to find more opportunities.
                        </p>
                        <Button
                            onClick={() => {
                                setSelectedDepartment('all');
                                setSelectedType('all');
                                setSelectedLocation('all');
                                setSearchTerm('');
                            }}
                            variant="outline"
                        >
                            Clear All Filters
                        </Button>
                    </motion.div>
                )}
            </Container>

            {/* Job Application Modal */}
            {showApplicationModal && selectedJob && (
                <JobApplicationModal
                    job={selectedJob}
                    isOpen={showApplicationModal}
                    onClose={() => {
                        setShowApplicationModal(false);
                        setSelectedJob(null);
                    }}
                />
            )}
        </section>
    );
}