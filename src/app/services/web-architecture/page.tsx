"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield, Code, Server, Smartphone } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const features = [
    { icon: Globe, title: "Global Scale", description: "Deploy to edge networks worldwide for sub-100ms latency anywhere." },
    { icon: Zap, title: "Extreme Performance", description: "Server-side rendering and static generation for instant load times." },
    { icon: Shield, title: "Enterprise Security", description: "Built-in protection against DDoS, XSS, and CSRF attacks." },
    { icon: Code, title: "Modern Stack", description: "React 19, Next.js 15, and Tailwind CSS for rapid feature delivery." },
    { icon: Server, title: "Serverless Native", description: "Auto-scaling infrastructure with zero maintenance overhead." },
    { icon: Smartphone, title: "Responsive Default", description: "Flawless experiences across mobile, tablet, and desktop." },
];

export default function WebArchitecturePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-teal-50 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-medium text-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                            Next-Gen Infrastructure
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                            Web Architecture that <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Defies Limits.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl leading-relaxed">
                            We design and build SEO-optimized, server-rendered applications that load instantly and scale infinitely. Your digital flagship, engineered for the modern web.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Start Building
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="section-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-8 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                                <p className="text-zinc-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Interactive Tech Stack Visual */}
            <section className="py-32 overflow-hidden bg-white relative">
                <div className="section-container relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
                            >
                                Uncompromising <br /> Tech Decisions.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg text-zinc-600 mb-8"
                            >
                                We don't chase trends. We use battle-tested, enterprise-grade tooling that we know can handle massive scale and complex business logic.
                            </motion.p>
                        </div>

                        <div className="flex-1 relative w-full h-[400px]">
                            {/* Abstract decorative elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-zinc-200 rounded-full border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-teal-200 rounded-full"
                            />

                            {/* Floating "tech nodes" */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 left-1/4 px-6 py-3 bg-white shadow-xl rounded-xl border border-zinc-100 font-bold text-zinc-900"
                            >
                                Next.js 15
                            </motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-1/4 right-1/4 px-6 py-3 bg-zinc-900 shadow-xl rounded-xl font-bold text-white z-10"
                            >
                                React 19
                            </motion.div>
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 right-10 px-6 py-3 bg-teal-50 shadow-lg rounded-xl border border-teal-100 font-bold text-teal-700"
                            >
                                Tailwind
                            </motion.div>
                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 px-6 py-3 bg-white shadow-lg rounded-xl border border-zinc-100 font-bold text-zinc-900"
                            >
                                TypeScript
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
