"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-200/50"
                    : "bg-white/80 backdrop-blur-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo & Brand Name */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                className="origin-pulse"
                            >
                                <Image
                                    src="/logo/one_origin_logo_bg.png"
                                    alt="One Origin Tech Logo"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                    priority
                                />
                            </motion.div>

                            <div className="flex items-center">
                                <span className="text-[22px] font-semibold tracking-[-0.01em] text-gray-900">
                                    One Origin
                                </span>
                                <span className="ml-1 text-[22px] font-normal tracking-[-0.01em] text-gray-500">
                                    Tech
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm tracking-wide group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-3">
                            {/* Desktop CTA */}
                            <a
                                href="https://cal.com/vinay-sehwag-gjrsq4/technical-discovery-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-gray-900 text-white font-medium text-sm rounded-full transition-all duration-500 ease-out group hover:bg-gold-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/40"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5">Book Your Clarity Call</span>
                                <span className="flex items-center justify-center w-8 h-8 bg-gold-500 rounded-lg transition-all duration-500 ease-out group-hover:bg-white group-hover:rotate-[-8deg] group-hover:scale-110">
                                    <ArrowRight className="w-4 h-4 text-white transition-all duration-300 group-hover:text-gold-500 group-hover:translate-x-0.5" />
                                </span>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 md:hidden border-l border-gray-200"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                    <span className="text-lg font-semibold text-gray-900">
                                        Menu
                                    </span>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <nav className="flex-1 py-6 px-4">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-3 text-gray-700 hover:text-gold-500 transition-colors font-medium text-base border-b border-gray-100"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <div className="p-4 border-t border-gray-200">
                                    <a
                                        href="https://cal.com/vinay-sehwag-gjrsq4/technical-discovery-call"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-3 w-full py-3 bg-gray-900 text-white font-medium rounded-full transition-all duration-500 ease-out group hover:bg-gold-500 hover:shadow-xl hover:shadow-gold-500/40"
                                    >
                                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">Book Your Clarity Call</span>
                                        <span className="flex items-center justify-center w-8 h-8 bg-gold-500 rounded-lg transition-all duration-500 ease-out group-hover:bg-white group-hover:rotate-[-8deg] group-hover:scale-110">
                                            <ArrowRight className="w-4 h-4 text-white transition-all duration-300 group-hover:text-gold-500 group-hover:translate-x-0.5" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer for fixed header */}
            <div className="h-16 md:h-20" />
        </>
    );
}
