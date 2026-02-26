"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ============================================
// ANIMATIONS
// ============================================
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

// ============================================
// PROJECTS DATA
// ============================================
const projects = [
    {
        id: "vaanra",
        name: "VAANRA",
        category: "E-Commerce",
        role: "Full-Stack engineering",
        description:
            "A high-performance headless e-commerce build designed to handle massive spike traffic during influencer drops. Migrated from monolithic Shopify to a bespoke Next.js edge-rendered storefront.",
        outcome: "40% increase in checkout conversions during peak load.",
        stack: ["Next.js", "React Server Components", "Shopify Storefront API", "Tailwind CSS"],
    },
    {
        id: "saheeba",
        name: "SAHEEBA",
        category: "Mobile App / IoT",
        role: "Mobile App Development",
        description:
            "A real-time community application featuring live vector mapping and high-frequency WebSocket telemetry to track a massive fleet of vehicles simultaneously with under 50ms latency.",
        outcome: "Sustained 60fps map rendering with 500+ active vehicle markers.",
        stack: ["React Native", "WebSockets", "Mapbox GL", "Node.js Custom Backend"],
    },
    {
        id: "ai-workspace",
        name: "Enterprise AI Workspace",
        category: "SaaS / Internal Tools",
        role: "AI Integration & Architecture",
        description:
            "A secure, private RAG (Retrieval-Augmented Generation) pipeline allowing legal teams to chat with 10,000+ proprietary contracts seamlessly. Strictly grounded to prevent LLM hallucinations.",
        outcome: "Reduced document retrieval and synthesis time from 40 hours to 4 seconds.",
        stack: ["Next.js 15", "Pinecone Vector DB", "OpenAI Advanced Models", "PostgreSQL"],
    },
];

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-zinc-950 text-white">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="section-container relative z-10">
                <motion.div
                    className="max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 font-medium text-sm mb-8"
                        variants={fadeInUp}
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        Selected Works
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        variants={fadeInUp}
                    >
                        Engineering{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            in Production.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
                        variants={fadeInUp}
                    >
                        A curation of our recent technical challenges, architectural solutions, and the
                        measurable business impact they forged.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// PROJECTS FEED
// ============================================
function ProjectsSection() {
    return (
        <section className="py-24 md:py-32 bg-zinc-50">
            <div className="section-container max-w-6xl mx-auto">
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <div className="grid md:grid-cols-12 gap-12 items-center">
                                {/* Project Number Background */}
                                <div className="hidden md:block absolute -left-20 top-0 text-[200px] font-black leading-none text-zinc-100 -z-10 select-none">
                                    0{index + 1}
                                </div>

                                <div className="md:col-span-12 relative z-10">
                                    <div className={`flex flex-col md:flex-row gap-12 lg:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                        {/* Text Content */}
                                        <motion.div className="flex-1 space-y-8" variants={fadeInUp}>
                                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-zinc-200 rounded-full shadow-sm">
                                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                                <span className="text-sm font-semibold text-zinc-900 tracking-wide">{project.category}</span>
                                            </div>

                                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight">
                                                {project.name}
                                            </h2>

                                            <div className="space-y-4">
                                                <h3 className="text-xl text-zinc-900 font-bold">{project.role}</h3>
                                                <p className="text-lg text-zinc-600 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                                                        <ArrowRight className="w-4 h-4 text-teal-700" />
                                                    </div>
                                                    <p className="text-teal-600 font-medium">
                                                        {project.outcome}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Stack Tags */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-zinc-100 text-zinc-600 text-sm rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <Link href={`/work/${project.id}`} className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all duration-200">
                                                View Case Study
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </motion.div>

                                        {/* Visual Placeholder */}
                                        <motion.div
                                            className="relative aspect-[4/3] rounded-2xl bg-zinc-100 border border-zinc-200 overflow-hidden flex items-center justify-center"
                                            variants={fadeInUp}
                                        >
                                            <div className="text-center p-8">
                                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                                                    <span className="text-4xl font-bold text-zinc-300">
                                                        {project.name[0]}
                                                    </span>
                                                </div>
                                                <p className="text-zinc-500 text-sm">
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
            className="py-24 md:py-32 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        The Lab.
                    </h2>
                    <p className="text-zinc-600 text-lg">
                        Internal experiments and open source contributions.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labProjects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            className="group p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-teal-200 transition-all duration-300"
                            variants={fadeInUp}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-zinc-200 group-hover:bg-teal-50 transition-colors">
                                    {project.type === "github" ? (
                                        <Github className="w-5 h-5 text-teal-600" />
                                    ) : (
                                        <ExternalLink className="w-5 h-5 text-teal-600" />
                                    )}
                                </div>
                                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                                    {project.type}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-teal-700 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-zinc-600 text-sm">{project.description}</p>
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
            className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
                    variants={fadeInUp}
                >
                    Your project could be next.
                </motion.h2>

                <motion.p
                    className="text-zinc-600 text-lg max-w-xl mx-auto mb-10"
                    variants={fadeInUp}
                >
                    Let&apos;s discuss how we can turn your vision into a production-ready
                    digital asset.
                </motion.p>

                <motion.div variants={fadeInUp}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
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
export default function WorkClient() {
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <LabSection />
            <CTASection />
        </>
    );
}
