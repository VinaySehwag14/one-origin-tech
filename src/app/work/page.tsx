"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-navy-950"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className="section-container text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                    variants={fadeInUp}
                >
                    Selected <span className="text-gold-gradient">Works.</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
                    variants={fadeInUp}
                >
                    A curation of recent engineering challenges and production releases.
                </motion.p>
            </div>
        </motion.section>
    );
}

// ============================================
// PROJECT CARDS
// ============================================
const projects = [
    {
        id: "vaanra",
        name: "VAANRA",
        category: "E-Commerce",
        description: "Global E-commerce Infrastructure",
        longDescription:
            "A high-performance dropshipping engine built to handle traffic spikes during flash sales. Headless architecture with real-time inventory sync.",
        role: "Full-Stack Development",
        stack: ["Next.js", "Shopify Headless", "Stripe"],
        outcome: "40% increase in conversion speed",
        gradient: "from-emerald-500/10 to-cyan-500/10",
    },
    {
        id: "saheeba",
        name: "SAHEEBA",
        category: "IoT / Mobile",
        description: "Real-time IoT & Community Platform",
        longDescription:
            "Community-driven vehicle tracking platform with sub-second latency. Live location sharing with optimized battery consumption.",
        role: "Mobile Engineering",
        stack: ["React Native", "WebSocket", "Geolocation API"],
        outcome: "Real-time tracking with <50ms latency",
        gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
        id: "ai-workspace",
        name: "AI WORKSPACE",
        category: "SaaS",
        description: "Enterprise Document Intelligence",
        longDescription:
            "AI-powered document analysis tool for enterprise. Upload documents, ask questions in natural language, get instant insights.",
        role: "AI Integration",
        stack: ["Next.js 15", "OpenAI API", "Neon DB", "Vector DB"],
        outcome: "Automated document processing for enterprise",
        gradient: "from-gold-500/10 to-orange-500/10",
    },
];

function ProjectsSection() {
    return (
        <section className="bg-navy-900 py-12 md:py-20">
            <div className="section-container">
                <div className="space-y-16 md:space-y-24">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <div
                                className={`relative rounded-3xl bg-gradient-to-br ${project.gradient} border border-navy-700 overflow-hidden`}
                            >
                                <div className="p-8 md:p-12 lg:p-16">
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                        {/* Content */}
                                        <motion.div variants={fadeInUp}>
                                            {/* Category Badge */}
                                            <div className="inline-block px-3 py-1 bg-navy-800 text-gold-500 text-sm font-medium rounded-full mb-6">
                                                {project.category}
                                            </div>

                                            {/* Project Name */}
                                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                                                {project.name}
                                            </h2>

                                            <p className="text-xl text-slate-300 mb-4">
                                                {project.description}
                                            </p>

                                            <p className="text-slate-400 leading-relaxed mb-8">
                                                {project.longDescription}
                                            </p>

                                            {/* Details Grid */}
                                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                                <div>
                                                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">
                                                        Role
                                                    </p>
                                                    <p className="text-white font-medium">
                                                        {project.role}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">
                                                        Outcome
                                                    </p>
                                                    <p className="text-gold-500 font-medium">
                                                        {project.outcome}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Stack Tags */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-navy-800 text-slate-300 text-sm rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <button className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all duration-200">
                                                View Case Study
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </motion.div>

                                        {/* Visual Placeholder */}
                                        <motion.div
                                            className="relative aspect-[4/3] rounded-2xl bg-navy-800/50 border border-navy-600 overflow-hidden flex items-center justify-center"
                                            variants={fadeInUp}
                                        >
                                            <div className="text-center p-8">
                                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-navy-700/50 flex items-center justify-center">
                                                    <span className="text-4xl font-bold text-gold-500/30">
                                                        {project.name[0]}
                                                    </span>
                                                </div>
                                                <p className="text-slate-500 text-sm">
                                                    Project Screenshot
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// THE LAB SECTION
// ============================================
const labProjects = [
    {
        title: "Open Source Next.js Starter",
        description: "Production-ready template with auth, db, and payments.",
        link: "#",
        type: "github",
    },
    {
        title: "React Native UI Kit",
        description: "60+ components. Dark mode. Gesture animations.",
        link: "#",
        type: "figma",
    },
    {
        title: "AI Agent Experiment",
        description: "Autonomous support agent with memory.",
        link: "#",
        type: "demo",
    },
];

function LabSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-navy-950"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        The Lab.
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Internal experiments and open source contributions.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labProjects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            className="group p-6 bg-navy-900 rounded-2xl border border-navy-700 hover:border-gold-500/50 transition-all duration-300"
                            variants={fadeInUp}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                                    {project.type === "github" ? (
                                        <Github className="w-5 h-5 text-gold-500" />
                                    ) : (
                                        <ExternalLink className="w-5 h-5 text-gold-500" />
                                    )}
                                </div>
                                <span className="text-xs text-slate-500 uppercase tracking-wider">
                                    {project.type}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm">{project.description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-navy-900 border-t border-navy-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    variants={fadeInUp}
                >
                    Your project could be next.
                </motion.h2>

                <motion.p
                    className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
                    variants={fadeInUp}
                >
                    Let&apos;s discuss how we can turn your vision into a production-ready
                    digital asset.
                </motion.p>

                <motion.div variants={fadeInUp}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
                    >
                        Start a Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}

// ============================================
// MAIN PAGE
// ============================================
export default function WorkPage() {
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <LabSection />
            <CTASection />
        </>
    );
}
