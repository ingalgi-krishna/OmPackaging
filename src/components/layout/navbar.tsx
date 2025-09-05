'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    Clock,
    ChevronDown,
    ExternalLink,
    MessageCircle,
    Search,
    User,
    FileText,
    Package,
    Palette,
    Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Image from "next/image";
// --- Search Modal Component ---
interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const searchableItems = [
        ...NAV_LINKS,
        { label: 'Seaworthy Wooden Box Packaging', href: '/solutions#seaworthy-wooden-boxes' },
        { label: 'Industrial Heavy Machinery Packaging', href: '/solutions#industrial-machinery-boxes' },
        { label: 'Wooden Pallets', href: '/solutions#wooden-pallets' },
        { label: 'ISPM-15 Heat Treatment', href: '/solutions#ismp15-heat-treatment' },
        { label: 'VCI Packing', href: '/solutions#vci-packing' },
        { label: 'Request a Quote', href: '/contact' },
        { label: 'Careers', href: '/careers' },
    ];

    const filteredResults = searchTerm
        ? searchableItems.filter(item =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white w-full max-w-xl mx-auto mt-20 rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center p-4 border-b">
                            <Search size={20} className="text-gray-400 mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for wooden packaging solutions, treatments, or services..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
                            />
                            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-4 max-h-[60vh] overflow-y-auto">
                            {searchTerm && filteredResults.length > 0 && (
                                <ul className="space-y-2">
                                    {filteredResults.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href} onClick={onClose} className="block p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                                <p className="font-medium text-gray-800">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {searchTerm && filteredResults.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No results found for "{searchTerm}"</p>
                                </div>
                            )}
                            {!searchTerm && (
                                <div className="text-center py-8 text-gray-400">
                                    <p>Start typing to search our packaging solutions.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    const solutionsCategories = [
        {
            title: 'Wooden Packaging Solutions',
            items: ['Seaworthy Boxes', 'Machinery Packaging', 'Wooden Crates', 'Plywood Boxes'],
            href: '/solutions#wooden-packaging',
            icon: Package
        },
        {
            title: 'Wooden Pallets',
            items: ['Two-Way Pallets', 'Four-Way Pallets', 'Heavy-Duty Pallets', 'Collar Pallets'],
            href: '/solutions#wooden-pallets',
            icon: Palette
        },
        {
            title: 'Specialized Solutions',
            items: ['VCI Packing', 'Aluminum Vacuum', 'Lashing & Choking', 'Rubber Wood Boxes'],
            href: '/solutions#specialized-packaging',
            icon: Package
        },
        {
            title: 'Treatment Services',
            items: ['ISPM-15 Heat Treatment', 'Fumigation', 'Custom Packing', 'Palletization'],
            href: '/solutions#treatment-services',
            icon: Settings
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
                >
                    <Container size="xl">
                        <div className="py-6">
                            <div className="grid lg:grid-cols-2 gap-6">
                                {/* Solutions Categories */}
                                <div>
                                    <h3 className="font-semibold text-[#002B5B] mb-4 flex items-center">
                                        <Package size={18} className="mr-2 text-picton" />
                                        Our Packaging Solutions
                                    </h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {solutionsCategories.map((category, index) => {
                                            const IconComponent = category.icon;
                                            return (
                                                <Link
                                                    key={index}
                                                    href={category.href}
                                                    onClick={onClose}
                                                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                                >
                                                    <div className="flex items-center mb-1">
                                                        <IconComponent size={16} className="mr-2 text-picton" />
                                                        <h4 className="font-medium text-gray-800 group-hover:text-picton transition-colors">
                                                            {category.title}
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1 ml-6">
                                                        {category.items.map((item, itemIndex) => (
                                                            <span key={itemIndex} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <h3 className="font-semibold text-[#002B5B] mb-4 flex items-center">
                                        <Phone size={18} className="mr-2 text-picton" />
                                        Get In Touch
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Phone size={14} className="text-picton" />
                                                <span className="text-sm font-medium text-gray-800">Call Us</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{COMPANY_INFO.phone}</p>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="text-xs px-3 py-1 h-auto bg-[#002B5B] text-white hover:bg-picton"
                                                    onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
                                                >
                                                    Call
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="text-xs px-3 py-1 h-auto bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                                                    onClick={() => {
                                                        const cleanPhone = COMPANY_INFO.whatsapp.replace(/[^\d]/g, '');
                                                        window.open(`https://wa.me/${cleanPhone}`, '_blank');
                                                    }}
                                                >
                                                    <MessageCircle size={12} className="mr-1" />
                                                    WhatsApp
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Mail size={14} className="text-picton" />
                                                <span className="text-sm font-medium text-gray-800">Email Us</span>
                                            </div>
                                            <p className="text-sm text-gray-600 break-all mb-2">{COMPANY_INFO.email}</p>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="text-xs px-3 py-1 h-auto border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                                                onClick={() => window.location.href = `mailto:${COMPANY_INFO.email}`}
                                            >
                                                Send Email
                                            </Button>
                                        </div>

                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FileText size={14} className="text-picton" />
                                                <span className="text-sm font-medium text-gray-800">Quick Actions</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="text-xs px-3 py-1 h-auto bg-[#002B5B] text-white hover:bg-picton"
                                                    onClick={() => {
                                                        window.location.href = '/contact';
                                                        onClose();
                                                    }}
                                                >
                                                    Request Quote
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="text-xs px-3 py-1 h-auto border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                                                    onClick={() => {
                                                        window.open('/downloads/om-india-company-profile.pdf', '_blank');
                                                        onClose();
                                                    }}
                                                >
                                                    Download Catalog
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeAllMenus = () => {
        setIsOpen(false);
        setIsMegaMenuOpen(false);
    };

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-[#002B5B] text-white py-2 text-sm hidden lg:block">
                <Container size="xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone size={14} />
                                <span>{COMPANY_INFO.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail size={14} />
                                <span>{COMPANY_INFO.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin size={14} />
                                <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Clock size={14} />
                                <span>All Days, 24Hrs</span>
                            </div>
                            <div className="h-4 w-px bg-white/30" />
                            <div className="flex items-center space-x-1 text-xs">
                                <span>GST: {COMPANY_INFO.businessDetails.gstNumber}</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <nav className={cn(
                "sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300",
                isScrolled && "shadow-lg backdrop-blur-md bg-white/95"
            )}>
                <Container size="xl">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group"
                            onClick={closeAllMenus}
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >

                                <Image
                                    src="/logos/logo.png"   // replace with actual logo path
                                    alt="Logo"
                                    width={32}             // controls rendered size
                                    height={32}
                                    className="object-contain lg:w-12 lg:h-12"
                                />

                                <div className="absolute -inset-1 bg-gradient-to-br from-picton/20 to-[#002B5B]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                            <div className="hidden sm:block">
                                <div className="text-lg lg:text-xl font-bold text-[#002B5B] group-hover:text-picton transition-colors">
                                    {COMPANY_INFO.name}
                                </div>
                                <div className="text-xs text-gray-600 -mt-1">
                                    Total Packaging Solutions
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <div className="text-lg font-bold text-[#002B5B]">Om India</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {NAV_LINKS.map((link) => (
                                <div key={link.href} className="relative">
                                    {link.label === 'Solutions & Services' ? (
                                        <button
                                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                                            onMouseLeave={() => setIsMegaMenuOpen(false)}
                                            style={{
                                                color: pathname === link.href || pathname.startsWith('/solutions')
                                                    ? '#002B5B'
                                                    : undefined,
                                                backgroundColor: pathname === link.href || pathname.startsWith('/solutions')
                                                    ? '#E3F2FD'
                                                    : undefined
                                            }}
                                            className={cn(
                                                "flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md",
                                                pathname === link.href || pathname.startsWith('/solutions')
                                                    ? "font-semibold"
                                                    : "text-gray-700 hover:text-picton hover:bg-picton/5"
                                            )}
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown size={14} className={cn(
                                                "transition-transform duration-200",
                                                isMegaMenuOpen && "rotate-180"
                                            )} />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: pathname === link.href ? '#002B5B' : undefined,
                                                backgroundColor: pathname === link.href ? '#E3F2FD' : undefined
                                            }}
                                            className={cn(
                                                "block px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md",
                                                pathname === link.href
                                                    ? "font-semibold"
                                                    : "text-gray-700 hover:text-picton hover:bg-picton/5"
                                            )}
                                            onClick={closeAllMenus}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center space-x-3 text-[#002B5B]">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search size={16} />
                            </Button>

                            <Button
                                variant="outline"
                                size="sm"
                                className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                                onClick={() => window.open('/downloads/om-india-company-profile.pdf', '_blank')}
                            >
                                <FileText size={16} className="mr-2" />
                                Download Brochure
                            </Button>

                            <Button
                                size="sm"
                                className="bg-[#002B5B] text-white hover:bg-picton"
                                onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
                            >
                                <Phone size={16} className="mr-2" />
                                Call Now
                            </Button>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex lg:hidden items-center space-x-2 text-[#002B5B]">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search size={16} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
                            >
                                <Phone size={16} />
                            </Button>

                            <button
                                onClick={toggleMenu}
                                className="p-2 text-[#002B5B] hover:text-picton transition-colors"
                                aria-label="Toggle mobile menu"
                                aria-expanded={isOpen}
                            >
                                <motion.div
                                    animate={{ rotate: isOpen ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </button>
                        </div>
                    </div>
                </Container>

                {/* Mega Menu */}
                <div
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                    <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
                        >
                            <Container size="xl">
                                <div className="py-4 space-y-1">
                                    {NAV_LINKS.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={closeAllMenus}
                                            style={{
                                                color: pathname === link.href || (link.href === '/solutions' && pathname.startsWith('/solutions'))
                                                    ? '#002B5B'
                                                    : undefined,
                                                backgroundColor: pathname === link.href || (link.href === '/solutions' && pathname.startsWith('/solutions'))
                                                    ? '#E3F2FD'
                                                    : undefined
                                            }}
                                            className={cn(
                                                "block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg",
                                                pathname === link.href || (link.href === '/solutions' && pathname.startsWith('/solutions'))
                                                    ? "font-semibold"
                                                    : "text-gray-700 hover:bg-picton/10 hover:text-picton"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}

                                    <div className="pt-4 border-t border-gray-100 mt-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <Button
                                                size="sm"
                                                className="bg-[#002B5B] text-white hover:bg-picton"
                                                onClick={() => {
                                                    window.open('/downloads/om-india-company-profile.pdf', '_blank');
                                                    closeAllMenus();
                                                }}
                                            >
                                                <FileText size={16} className="mr-1" />
                                                Download Brochure
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white"
                                                onClick={() => {
                                                    const cleanPhone = COMPANY_INFO.whatsapp.replace(/[^\d]/g, '');
                                                    window.open(`https://wa.me/${cleanPhone}`, '_blank');
                                                    closeAllMenus();
                                                }}
                                            >
                                                <MessageCircle size={16} className="mr-1" />
                                                WhatsApp
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Mobile Business Info */}
                                    <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                                        <div className="text-sm">
                                            <div className="flex items-center space-x-2 text-gray-600">
                                                <Phone size={14} />
                                                <span>{COMPANY_INFO.phone}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-600 mt-1">
                                                <Mail size={14} />
                                                <span>{COMPANY_INFO.email}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-600 mt-1">
                                                <MapPin size={14} />
                                                <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</span>
                                            </div>
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            <div>ISPM-15 Certified | GST: {COMPANY_INFO.businessDetails.gstNumber}</div>
                                            <div>Premium Wooden Packaging Specialists</div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}