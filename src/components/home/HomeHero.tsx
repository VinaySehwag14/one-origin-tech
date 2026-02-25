"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export function HomeHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-50/60 via-white to-white">
            {/* Floating Abstract Blob - Right Side */}
            <motion.div
                className="absolute right-[5%] top-1/3 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-teal-200/30 via-teal-100/20 to-transparent blur-3xl pointer-events-none"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary Floating Blob - Left Side */}
            <motion.div
                className="absolute left-[10%] bottom-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-zinc-200/40 via-zinc-100/20 to-transparent blur-2xl pointer-events-none"
                animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Teal Pulse Origin Point */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="w-3 h-3 rounded-full bg-teal-500 shadow-lg shadow-teal-500/30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                    className="absolute w-24 h-24 rounded-full border border-teal-500/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                />
                <motion.div
                    className="absolute w-48 h-48 rounded-full border border-teal-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.9 }}
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6"
                    variants={fadeInUp}
                >
                    From Origin to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Ownership.</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed"
                    variants={fadeInUp}
                >
                    In a world of unfinished prototypes, we are the finishers.{" "}
                    <span className="text-zinc-900 font-medium">One Origin Tech</span> builds complete,
                    production-grade digital assets for leaders who refuse to compromise.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    variants={fadeInUp}
                >
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(20,184,166,0.3)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10">Start The Conversation</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 hover:border-teal-200 font-semibold text-lg rounded-lg transition-all duration-200 shadow-sm"
                    >
                        Our Philosophy
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
