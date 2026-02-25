"use client";

import { motion } from "framer-motion";
import { Globe, Brain, Building2 } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const services = [
    {
        icon: Globe,
        title: "Full-Cycle Engineering",
        description:
            "Web & Mobile applications built on Next.js 15. We don't use templates; we architect custom solutions.",
    },
    {
        icon: Brain,
        title: "Responsible AI",
        description:
            "We don't just bolt on chatbots. We integrate AI that optimizes your business logic and decision-making.",
    },
    {
        icon: Building2,
        title: "System Architecture",
        description:
            "Scalable databases, secure APIs, and cloud infrastructure designed for long-term growth.",
    },
];

export function ServicesCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    className="relative p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-teal-500/50 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]"
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ y: -4 }}
                >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-teal-600/20 transition-colors">
                        <service.icon className="w-7 h-7 text-teal-400" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {service.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
