"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, BrainCircuit, Database, FileText, Lock, Search } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function AIWorkspaceCaseStudyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Top Navigation Bar */}
            <div className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-16 md:top-20 z-40">
                <div className="section-container py-4 flex items-center justify-between">
                    <Link href="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-600 font-medium transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Work
                    </Link>
                    <span className="text-zinc-400 text-sm font-medium">Case Study 03</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-zinc-50">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-medium text-sm mb-8">
                            <BrainCircuit className="w-4 h-4" />
                            SaaS / AI
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                            AI WORKSPACE
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            Enterprise document intelligence. Chat with thousands of PDFs instantly with exact source citations.
                        </motion.p>

                        {/* Meta Grid */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-zinc-200 mt-12 text-left">
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Role</h4>
                                <p className="text-zinc-900 font-medium">AI Integration</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Platform</h4>
                                <p className="text-zinc-900 font-medium">Web App SaaS</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Timeline</h4>
                                <p className="text-zinc-900 font-medium">10 Weeks</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Core Stack</h4>
                                <p className="text-zinc-900 font-medium">OpenAI, Pinecone</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-24 md:py-32 bg-white">
                <div className="section-container">
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="md:col-span-4"
                        >
                            <h2 className="text-3xl font-bold text-zinc-900 mb-6 sticky top-32">The Challenge</h2>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="md:col-span-8 space-y-8 text-lg text-zinc-600 leading-relaxed"
                        >
                            <p className="text-2xl text-zinc-900 font-medium leading-snug">
                                Legal and compliance teams were spending roughly 40% of their work week simply searching for specific clauses across fragmented, massive PDF repositories.
                            </p>
                            <p>
                                When ChatGPT launched, the client tried pasting documents in, but hit context token limits immediately. They needed an enterprise-grade solution that could "read" a library of 10,000+ internal rules, policies, and contracts, and accurately answer questions based <em>strictly</em> on that proprietary data, without hallucinating.
                            </p>
                            <p>
                                The system required granular role-based access control (RBAC), preventing junior analysts from querying highly confidential executive documents.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Architecture / Solution */}
            <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="section-container relative z-10">
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="md:col-span-4"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 sticky top-32">The Architecture</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="md:col-span-8"
                        >
                            <motion.p variants={fadeInUp} className="text-2xl text-zinc-300 font-light leading-snug mb-12">
                                We constructed a secure <span className="text-amber-400 font-medium">Retrieval-Augmented Generation (RAG)</span> pipeline using a specialized vector database and custom chunking algorithms.
                            </motion.p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                        <Database className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Semantic Vector Search</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        Documents are parsed, chunked contextually, converted into high-dimensional embeddings using OpenAI models, and stored in Pinecone for instant similarity retrieval.
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                        <Lock className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Enterprise Guardrails</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        We implemented strict prompt engineering and system prompts to force the LLM to only answer from retrieved context, providing exact page-number citations, entirely eliminating hallucinations.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Results / Metrics */}
            <section className="py-24 md:py-32 bg-white">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
                        >
                            Engineering Impact
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-600"
                        >
                            The workspace transformed how the firm interacted with their unstructured data, turning a massive liability into an instant knowledge graph.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-amber-50 rounded-3xl p-10 text-center border border-amber-100"
                        >
                            <Search className="w-8 h-8 text-amber-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-amber-700 mb-4">2sec</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Query Speed</h4>
                            <p className="text-amber-800 font-medium text-sm">Average time from natural language question to cited answer.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-orange-50 rounded-3xl p-10 text-center border border-orange-100"
                        >
                            <FileText className="w-8 h-8 text-orange-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-orange-700 mb-4">100k+</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Documents</h4>
                            <p className="text-orange-800 font-medium text-sm">Successfully ingested, embedded, and actively searchable.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-yellow-50 rounded-3xl p-10 text-center border border-yellow-100"
                        >
                            <BrainCircuit className="w-8 h-8 text-yellow-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-yellow-700 mb-4">0%</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Hallucination Rate</h4>
                            <p className="text-yellow-800 font-medium text-sm">In production, thanks to aggressive retrieval constraints.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200">
                <div className="section-container text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
                            Ready to scale your own architecture?
                        </motion.h2>
                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Book Technical Discovery
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
