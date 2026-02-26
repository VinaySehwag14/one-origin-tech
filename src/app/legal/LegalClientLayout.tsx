"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface LegalProps {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
}

export default function LegalClientLayout({ title, lastUpdated, sections }: LegalProps) {
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((s) => document.getElementById(s.id));
            let currentActive = activeSection;

            for (const el of sectionElements) {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If the section is near the top of the viewport
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentActive = el.id;
                    }
                }
            }
            if (currentActive !== activeSection) {
                setActiveSection(currentActive);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Trigger once to set initial state correctly
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection, sections]);

    return (
        <section className="relative min-h-screen bg-zinc-950 text-zinc-300 selection:bg-teal-500/30 font-sans pt-24 pb-32 overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="mb-16 md:mb-24">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                            {title}
                        </h1>
                        <p className="text-zinc-500 md:text-lg">
                            Last Updated: <span className="text-zinc-400 font-medium">{lastUpdated}</span>
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Sticky Sidebar / Table of Contents */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="lg:w-1/4 shrink-0"
                    >
                        <div className="sticky top-32">
                            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
                                Chapters
                            </h3>
                            <nav className="flex flex-col gap-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => {
                                            const el = document.getElementById(section.id);
                                            if (el) {
                                                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                                                window.scrollTo({ top: y, behavior: "smooth" });
                                            }
                                        }}
                                        className={`text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium ${activeSection === section.id
                                                ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                                                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 border border-transparent"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </motion.div>

                    {/* Main Content Areas */}
                    <div className="lg:w-3/4 max-w-3xl space-y-24">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px 0px 0px 0px", once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="scroll-mt-32"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-4 border-b border-zinc-800">
                                    <span className="text-teal-500/50 mr-4 font-mono font-normal">
                                        {(index + 1).toString().padStart(2, "0")}
                                    </span>
                                    {section.title}
                                </h2>
                                <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 prose-headings:text-white prose-p:leading-relaxed prose-a:text-teal-400 hover:prose-a:text-teal-300 prose-strong:text-zinc-200">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
