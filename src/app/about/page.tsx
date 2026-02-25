"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Quote, Shield, Target, Sparkles } from "lucide-react";

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
// SECTION 1: THE MANIFESTO (THE "WHY")
// ============================================
function ManifestoSection() {
    return (
        <motion.section
            className="py-24 md:py-32 lg:py-40 bg-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Bold Typography */}
                    <motion.div variants={fadeInUp}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                            The Crisis of{" "}
                            <span className="text-teal-600">Incompletion.</span>
                        </h1>
                    </motion.div>

                    {/* Right: Manifesto Text */}
                    <motion.div
                        className="text-lg text-zinc-600 leading-relaxed space-y-6"
                        variants={fadeInUp}
                    >
                        <p>
                            Technology has never been easier to start. AI tools generate code.
                            Agencies sell &ldquo;Discovery Phases.&rdquo; Freelancers sell quick MVPs.
                        </p>
                        <p>
                            But looking at the landscape, we saw a crisis:{" "}
                            <span className="text-zinc-900 font-semibold">Incompletion.</span>
                        </p>
                        <p>
                            Projects that start with excitement but die in development hell.
                            Code that works in a demo but breaks at scale. Roadmaps that never
                            reach a destination.
                        </p>
                        <p>
                            <span className="text-teal-600 font-semibold">One Origin Tech</span>{" "}
                            was built to solve this. We exist to ensure that your digital
                            vision travels from a single, clear origin to a complete,
                            production-grade asset.{" "}
                            <span className="text-zinc-900 font-medium">
                                We don&apos;t just build. We finish.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

// ============================================
// SECTION 2: THE CORE BELIEFS
// ============================================
const coreBeliefs = [
    {
        icon: Shield,
        title: "Ownership > Outsourcing",
        description:
            "We don't rent you developers who follow orders. We provide engineers who take responsibility for the outcome. If it breaks, we own it.",
    },
    {
        icon: Target,
        title: "The 'Finisher' Mindset",
        description:
            "In a world of distraction, completion is a competitive advantage. We prioritize long-term architecture over short-term hacks.",
    },
    {
        icon: Sparkles,
        title: "Responsible AI",
        description:
            "AI is a tool, not a replacement for thinking. We use intelligence to accelerate execution, not to bypass quality standards.",
    },
];

function CoreBeliefsSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-zinc-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Our Operating System.
                    </h2>
                    <p className="text-zinc-600 text-lg">
                        The core beliefs that guide everything we build.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {coreBeliefs.map((belief) => (
                        <motion.div
                            key={belief.title}
                            className="p-8 bg-white rounded-2xl border border-zinc-200 hover:border-teal-200 transition-colors shadow-sm"
                            variants={fadeInUp}
                        >
                            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                                <belief.icon className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                                {belief.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {belief.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// ============================================
// SECTION 3: THE GLOBAL STANDARD (TRUST)
// ============================================
const globalStats = [
    { value: "100%", label: "IP Ownership", sublabel: "(Yours)" },
    { value: "0", label: "Template Usage", sublabel: "(Custom Only)" },
    { value: "24/7", label: "System Monitoring", sublabel: "" },
];

function GlobalStandardSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-white overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Global HQ. Silicon Valley Standards.
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        Headquartered in New Delhi, One Origin Tech serves a global
                        clientele. We combine the agility of a startup with the engineering
                        rigor of a Fortune 500 firm.
                    </p>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    className="relative aspect-[2/1] max-w-4xl mx-auto bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden mb-16 shadow-sm"
                    variants={fadeInUp}
                >
                    {/* Grid lines for map effect */}
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={`h-${i}`}
                                className="absolute w-full h-px bg-teal-600/20"
                                style={{ top: `${(i + 1) * 10}%` }}
                            />
                        ))}
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={`v-${i}`}
                                className="absolute h-full w-px bg-teal-600/20"
                                style={{ left: `${(i + 1) * 10}%` }}
                            />
                        ))}
                    </div>

                    {/* HQ Location - New Delhi with Teal Pulse */}
                    <motion.div
                        className="absolute"
                        style={{ left: "72%", top: "42%" }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        {/* Pulse ring */}
                        <div className="absolute -inset-4 rounded-full bg-teal-500/20 animate-ping" />
                        <div className="absolute -inset-6 rounded-full bg-teal-500/10 animate-pulse" />

                        {/* Core dot */}
                        <div className="relative">
                            <div className="w-5 h-5 rounded-full bg-teal-600 shadow-lg shadow-teal-600/50" />

                            {/* Label */}
                            <div className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-teal-100 shadow-sm">
                                <p className="text-zinc-900 font-semibold text-sm">New Delhi</p>
                                <p className="text-teal-600 text-xs font-medium">Global HQ</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto"
                    variants={fadeInUp}
                >
                    {globalStats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-2">
                                {stat.value}
                            </div>
                            <p className="text-zinc-900 font-medium text-sm md:text-base">
                                {stat.label}
                            </p>
                            {stat.sublabel && (
                                <p className="text-zinc-500 text-xs md:text-sm">
                                    {stat.sublabel}
                                </p>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

// ============================================
// SECTION 4: THE LEADERSHIP
// ============================================
function LeadershipSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-zinc-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container max-w-4xl mx-auto">
                <motion.div
                    className="relative p-8 md:p-12 bg-white rounded-3xl shadow-sm border border-zinc-200"
                    variants={fadeInUp}
                >
                    {/* Quote icon */}
                    <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Photo placeholder */}
                        <div className="w-24 h-24 rounded-full bg-zinc-50 border-2 border-teal-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-teal-600/50">F</span>
                        </div>

                        <div>
                            <blockquote className="text-xl md:text-2xl text-zinc-900 leading-relaxed mb-6 font-medium">
                                &ldquo;We built this company for the leaders who are tired of
                                &lsquo;almost&rsquo; launching. We are here to get you across
                                the finish line.&rdquo;
                            </blockquote>

                            <div>
                                <p className="text-teal-600 font-semibold">
                                    — Founder, One Origin Tech
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
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
                    Ready to finish what you started?
                </motion.h2>

                <motion.p
                    className="text-zinc-600 text-lg max-w-xl mx-auto mb-10"
                    variants={fadeInUp}
                >
                    Book a technical roadmap call and let&apos;s get you across the finish
                    line.
                </motion.p>

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

// ============================================
// MAIN PAGE
// ============================================
export default function AboutPage() {
    return (
        <>
            <ManifestoSection />
            <CoreBeliefsSection />
            <GlobalStandardSection />
            <LeadershipSection />
            <CTASection />
        </>
    );
}
