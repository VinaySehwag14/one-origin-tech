"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {
    company: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms of Service", href: "/legal/terms" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-gray-50 border-t border-gray-200">
            {/* Teal gradient fade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold-500/5 pointer-events-none" />

            <div className="section-container relative py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src="/logo/one_origin_logo_bg.png"
                                    alt="One Origin Tech"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-contain"
                                />
                            </motion.div>
                            <div className="flex items-center">
                                <span className="text-xl font-semibold text-gray-900">
                                    One Origin
                                </span>
                                <span className="ml-1 text-xl font-normal text-gray-500">
                                    Tech
                                </span>
                            </div>
                        </Link>

                        <p className="mt-4 text-gray-600 max-w-sm leading-relaxed">
                            The global &quot;Idea-to-Production&quot; studio. We bridge the gap
                            between visionary concepts and scalable software.
                        </p>

                        <p className="mt-6 text-gold-500 font-medium">
                            New Delhi • Global
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-gold-500 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-gold-500 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} One Origin Technologies Pvt. Ltd. All
                        rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:hello@oneorigintech.com"
                            className="text-gray-500 hover:text-gold-500 transition-colors duration-200 text-sm"
                        >
                            hello@oneorigintech.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
