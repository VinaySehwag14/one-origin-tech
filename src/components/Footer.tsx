"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "info@oneorigintech.com", href: "mailto:info@oneorigintech.com" },
        { label: "Contact", href: "/contact" },
    ],
    services: [
        { label: "Web Architecture", href: "/services/web-architecture" },
        { label: "Cloud Native AI", href: "/services/cloud-native-ai" },
        { label: "API Systems", href: "/services/api-systems" },
        { label: "Our Work", href: "/work" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms of Service", href: "/legal/terms" },
    ],
    social: [
        { label: "X / Twitter", icon: Twitter, href: "#" },
        { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/one-origin-tech/" },
    ]
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Footer() {
    return (
        <footer className="relative bg-zinc-950 text-zinc-300 overflow-hidden pt-20 md:pt-32">
            {/* Subtle glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="section-container relative z-10">
                {/* CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Have an idea? <br />
                            <span className="text-zinc-500">Let&apos;s build it.</span>
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-teal-50 transition-colors duration-300 group"
                        >
                            Start a Project
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                    </div>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-800">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                                <div className="relative w-12 h-12 bg-transparent rounded-xl flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/logo/o2tech-logo.svg"
                                        alt="One Origin Tech"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white tracking-tight leading-none">One Origin</span>
                                    <span className="text-sm font-medium text-teal-500 tracking-widest uppercase mt-0.5">Tech</span>
                                </div>
                            </Link>

                            <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
                                The global &quot;Idea-to-Production&quot; studio. We bridge the gap
                                between visionary concepts and scalable software.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-semibold mb-6">Services</h4>
                            <ul className="space-y-4">
                                {footerLinks.services.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="relative overflow-hidden">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                                                <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-teal-400">{link.label}</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-6">Company</h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="relative overflow-hidden">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                                                <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-teal-400">{link.label}</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-6">Legal</h4>
                            <ul className="space-y-4">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="relative overflow-hidden">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                                                <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-teal-400">{link.label}</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                    <p>
                        © {new Date().getFullYear()} One Origin Technologies Pvt. Ltd. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2">
                        <span>Built in</span>
                        <span className="text-zinc-300 font-medium">New Delhi</span>
                        <span>•</span>
                        <span>Serving Global</span>
                    </div>
                </div>
            </div>

            {/* Massive Background Text */}
            <div className="relative w-full overflow-hidden select-none pointer-events-none mt-8 flex justify-center pb-8">
                <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-black leading-none text-zinc-900">
                    ONE ORIGIN
                </h1>
            </div>
        </footer>
    );
}
