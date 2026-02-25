"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const projects = [
    {
        id: "vaanra",
        name: "VAANRA",
        category: "E-Commerce",
        description: "Global E-commerce Infrastructure",
        tags: ["Next.js", "Shopify Headless", "Stripe"],
        gradient: "from-emerald-500/20 to-teal-500/5",
    },
    {
        id: "saheeba",
        name: "SAHEEBA",
        category: "IoT / Mobile",
        description: "Real-time IoT & Community Platform",
        tags: ["React Native", "WebSocket", "Geolocation"],
        gradient: "from-purple-500/20 to-pink-500/5",
    },
    {
        id: "ai-workspace",
        name: "AI WORKSPACE",
        category: "SaaS",
        description: "Enterprise Document Intelligence",
        tags: ["Next.js 15", "OpenAI", "Vector DB"],
        gradient: "from-amber-500/20 to-orange-500/5",
    },
];

export function SelectedWorksCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={project.name}
                    className="group relative p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 overflow-hidden"
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                >
                    <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                    <div className="relative z-10 flex flex-col h-full">
                        {/* Category Badge */}
                        <div className="inline-flex px-3 py-1 bg-zinc-100/80 backdrop-blur-sm text-zinc-900 border border-zinc-200/50 text-xs font-bold uppercase tracking-wider rounded-full mb-6 self-start group-hover:border-zinc-300 transition-colors">
                            {project.category}
                        </div>

                        {/* Project Name */}
                        <h3 className="text-3xl font-black text-zinc-900 mb-3 tracking-tight group-hover:text-teal-700 transition-colors">
                            {project.name}
                        </h3>

                        <p className="text-zinc-600 mb-8 flex-grow text-lg">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-semibold rounded-md group-hover:border-zinc-300 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Link */}
                        <Link
                            href={`/work/${project.id}`}
                            className="inline-flex items-center gap-2 text-zinc-900 font-bold group-hover:text-teal-600 transition-colors"
                        >
                            View Case Study
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
