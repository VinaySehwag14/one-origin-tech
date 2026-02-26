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
// DATA ARRAYS
// ============================================
const services = [
    {
        title: "Next-Gen Web Architecture",
        icon: Globe,
        color: "teal",
        description:
            "From high-conversion headless e-commerce to real-time financial dashboards. We build React/Next.js applications that load instantly and scale infinitely.",
        capabilities: [
            "React 19 & Next.js 15 Apps",
            "Headless E-Commerce (Shopify/Saleor)",
            "WebRTC & Real-time Dashboards",
            "Micro-frontend Architectures",
        ],
        link: "/services/web-architecture",
    },
    {
        title: "Cloud-Native AI Integration",
        icon: Brain,
        color: "amber",
        description:
            "We don't build generic chatbots. We build deeply integrated RAG pipelines, LLM-powered automation, and custom predictive models for your proprietary data.",
        capabilities: [
            "Enterprise RAG Systems",
            "Custom LLM Fine-tuning",
            "Autonomous Agents",
            "Document Intelligence",
        ],
        link: "/services/cloud-native-ai",
    },
    {
        title: "Scalable API & Backend Systems",
        icon: FileCode,
        color: "indigo",
        description:
            "The invisible powerhouse of your application. We design rock-solid GraphQL and RESTful APIs capable of handling millions of concurrent requests seamlessly.",
        capabilities: [
            "Distributed Node/Python Backends",
            "High-Volume Transaction Processing",
            "Serverless & Edge Architectures",
            "Advanced Caching Strategies",
        ],
        link: "/services/api-systems",
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
                        Engineering Capabilities
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        variants={fadeInUp}
                    >
                        We build{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            Digital Flagships.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed"
                        variants={fadeInUp}
                    >
                        From zero to one, and one to a million. We provide comprehensive
                        engineering across the modern stack.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// SERVICE STACK
// ============================================
function ServiceStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    });

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-zinc-50 relative">
            {/* Scroll Progress Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200">
                <motion.div
                    className="absolute top-0 left-0 w-full bg-teal-600 origin-top"
                    style={{ scaleY: scrollYProgress }}
                />
            </div>

            <div className="section-container">
                <div className="space-y-24 md:space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-8">
                                <motion.div variants={fadeInUp}>
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}
                                        style={{
                                            backgroundColor:
                                                service.color === "teal"
                                                    ? "#f0fdfa"
                                                    : service.color === "amber"
                                                        ? "#fffbeb"
                                                        : "#eef2ff",
                                        }}
                                    >
                                        <service.icon
                                            className={`w-8 h-8 ${service.color === "teal"
                                                ? "text-teal-600"
                                                : service.color === "amber"
                                                    ? "text-amber-600"
                                                    : "text-indigo-600"
                                                }`}
                                        />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-zinc-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeInUp}>
                                    <h4 className="font-semibold text-zinc-900 mb-4 uppercase tracking-wider text-sm">
                                        Core Capabilities
                                    </h4>
                                    <ul className="space-y-3">
                                        {service.capabilities.map((cap, i) => (
                                            <li key={i} className="flex items-center gap-3 text-zinc-600">
                                                <ArrowRight className="w-4 h-4 text-teal-600" />
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeInUp}>
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors group"
                                    >
                                        Deep Dive
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Abstract Visual representation */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-square w-full max-w-md mx-auto">
                                    <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden group">
                                        <div
                                            className={`absolute inset-0 opacity-10 ${service.color === "teal"
                                                ? "bg-teal-500"
                                                : service.color === "amber"
                                                    ? "bg-amber-500"
                                                    : "bg-indigo-500"
                                                } transition-opacity duration-500 group-hover:opacity-20`}
                                        />
                                        <div className="absolute inset-8 border border-zinc-200/50 rounded-2xl p-8 flex flex-col justify-between">
                                            <div
                                                className={`w-full h-1/2 rounded-xl ${service.color === "teal"
                                                    ? "bg-teal-50"
                                                    : service.color === "amber"
                                                        ? "bg-amber-50"
                                                        : "bg-indigo-50"
                                                    } mb-4 animate-pulse`}
                                            />
                                            <div className="absolute inset-4 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                                <service.icon
                                                    className="w-20 h-20 text-teal-600/30"
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
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="section-container">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
                        How We Ship
                    </h2>
                    <p className="text-zinc-600 text-lg">
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
                            <div className="relative p-6 md:p-8 bg-zinc-50 rounded-2xl border border-zinc-200 h-full">
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shadow-md">
                                    {index + 1}
                                </div>

                                {/* Arrow connector (desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-teal-600" />
                                    </div>
                                )}

                                <div className="pt-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
                                        <step.icon
                                            className="w-6 h-6 text-teal-600"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-zinc-600">{step.description}</p>
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
        <section className="py-16 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
            <div className="section-container mb-8">
                <h3 className="text-center text-xl font-semibold text-zinc-900 mb-2">
                    Our Weaponry
                </h3>
                <p className="text-center text-zinc-600">
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
                            className="flex items-center gap-3 text-zinc-400 hover:text-teal-600 transition-colors duration-300 cursor-default"
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
            className="py-24 md:py-32 bg-white"
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
                    Ready to engineer your vision?
                </motion.h2>

                <motion.div variants={fadeInUp}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Book Technical Roadmap Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default function ServicesClient() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <ServiceStackSection />
            <ProcessSection />
            <TechMarquee />
            <CTASection />
        </main>
    );
}
