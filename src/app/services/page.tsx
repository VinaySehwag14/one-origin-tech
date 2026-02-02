"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Globe,
    Smartphone,
    Brain,
    Search,
    FileCode,
    Hammer,
    Rocket,
} from "lucide-react";

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
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
    return (
        <section className="relative py-24 md:py-32 lg:py-40 bg-navy-950 overflow-hidden">
            {/* 3D Wireframe Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                    <motion.div
                        className="w-full h-full border border-gold-500/30 rounded-lg"
                        animate={{ rotateY: 360, rotateX: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformStyle: "preserve-3d" }}
                    />
                </div>
            </div>

            <motion.div
                className="section-container relative z-10"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="max-w-4xl">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                        variants={fadeInUp}
                    >
                        Engineering Excellence.{" "}
                        <span className="text-gold-gradient">No Compromises.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed"
                        variants={fadeInUp}
                    >
                        We don&apos;t just write code. We architect scalable, production-grade
                        systems using the world&apos;s most advanced stack.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}

// ============================================
// SERVICE STACK SECTION (Sticky Scroll)
// ============================================
const serviceStack = [
    {
        id: "web",
        icon: Globe,
        title: "Next-Gen Web Architecture",
        description:
            "SEO-optimized, server-rendered applications built on Next.js 15. We build dashboards, SaaS platforms, and e-commerce engines that load in <100ms.",
        tags: ["Next.js", "React 19", "Vercel", "Tailwind"],
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "mobile",
        icon: Smartphone,
        title: "Native Mobile Experiences",
        description:
            "One codebase, two native apps. We use React Native to deploy fluid, gesture-driven apps to iOS and Android simultaneously.",
        tags: ["React Native", "Expo", "TypeScript"],
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: "ai",
        icon: Brain,
        title: "Artificial Intelligence",
        description:
            "We make your software smart. From RAG (Retrieval Augmented Generation) for document analysis to autonomous agents that handle support.",
        tags: ["OpenAI", "Python", "Vercel AI SDK", "Vector DB"],
        color: "from-gold-500/20 to-orange-500/20",
    },
];

function ServiceStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="bg-navy-900 py-24 md:py-32">
            <div className="section-container">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Engineering Stack
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Three specialized domains. One unified approach to excellence.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {serviceStack.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div
                                className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br ${service.color} border border-navy-700 overflow-hidden`}
                            >
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />

                                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                    {/* Content */}
                                    <div>
                                        <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center mb-6">
                                            <service.icon
                                                className="w-7 h-7 text-gold-500"
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-navy-800 text-gold-500 text-sm font-medium rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual */}
                                    <div className="hidden md:flex items-center justify-center">
                                        <div className="relative w-64 h-64">
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl bg-navy-800/50 border border-navy-600"
                                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                                transition={{
                                                    duration: 6,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                            <div className="absolute inset-4 rounded-xl bg-navy-700/50 flex items-center justify-center">
                                                <service.icon
                                                    className="w-20 h-20 text-gold-500/30"
                                                    strokeWidth={0.5}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// PROCESS TIMELINE
// ============================================
const processSteps = [
    {
        icon: Search,
        title: "Discovery",
        description: "We deconstruct your vision and challenge your assumptions.",
    },
    {
        icon: FileCode,
        title: "Blueprint",
        description: "System architecture, database schema, and UI/UX wireframes.",
    },
    {
        icon: Hammer,
        title: "Build",
        description: "Two-week sprints. Transparent code access. Weekly demos.",
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "CI/CD deployment, load testing, and analytics setup.",
    },
];

function ProcessSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    return (
        <section className="py-24 md:py-32 bg-navy-950 overflow-hidden">
            <div className="section-container">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        How We Ship
                    </h2>
                    <p className="text-slate-400 text-lg">
                        A battle-tested process from concept to production.
                    </p>
                </motion.div>

                {/* Horizontal scroll container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="flex-shrink-0 w-72 md:w-auto md:flex-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="relative p-6 md:p-8 bg-navy-900 rounded-2xl border border-navy-700 h-full">
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gold-500 text-navy-950 font-bold flex items-center justify-center">
                                    {index + 1}
                                </div>

                                {/* Arrow connector (desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-gold-500" />
                                    </div>
                                )}

                                <div className="pt-4">
                                    <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-4">
                                        <step.icon
                                            className="w-6 h-6 text-gold-500"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-400">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// TECH MARQUEE
// ============================================
const techLogos = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Neon",
    "Vercel",
    "AWS",
    "Docker",
    "Stripe",
    "OpenAI",
];

function TechMarquee() {
    return (
        <section className="py-16 bg-navy-900 border-y border-navy-700 overflow-hidden">
            <div className="section-container mb-8">
                <h3 className="text-center text-xl font-semibold text-white mb-2">
                    Our Weaponry
                </h3>
                <p className="text-center text-slate-400">
                    Modern tools for modern problems
                </p>
            </div>

            <div className="relative">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...techLogos, ...techLogos].map((logo, index) => (
                        <div
                            key={`${logo}-${index}`}
                            className="flex items-center gap-3 text-slate-500 hover:text-gold-500 transition-colors duration-300 cursor-default"
                        >
                            <span className="text-lg font-medium">{logo}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-navy-950"
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
                    Ready to engineer your vision?
                </motion.h2>

                <motion.div variants={fadeInUp}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
                    >
                        Book Technical Roadmap Call
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
export default function ServicesPage() {
    return (
        <>
            <HeroSection />
            <ServiceStackSection />
            <ProcessSection />
            <TechMarquee />
            <CTASection />
        </>
    );
}
