"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, Cpu, Database, Fingerprint, Lock, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const capabilities = [
    { icon: BrainCircuit, title: "LLM Orchestration", description: "Multi-agent systems leveraging GPT-4, Claude, and specialized local models." },
    { icon: Database, title: "Vector Databases", description: "High-performance RAG pipelines using strict Pinecone and Milvus integrations." },
    { icon: Workflow, title: "Automated Workflows", description: "Replacing complex manual operations with deterministic AI pipelines." },
    { icon: Fingerprint, title: "Custom Fine-Tuning", description: "Training foundations models on your proprietary enterprise data securely." },
    { icon: Lock, title: "Private AI", description: "Deploying self-hosted open-source models for absolute data privacy." },
    { icon: Cpu, title: "Edge Inference", description: "Optimized model deployment for low-latency edge computing requirements." },
];

export default function CloudNativeAIPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
                {/* AI specific background glow */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-indigo-50/80 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-teal-50 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium text-sm mb-8">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            Applied Artificial Intelligence
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                            Intelligence, <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Engineered for Scale.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl leading-relaxed">
                            We don't just use APIs. We build robust, scalable AI architectures that deeply integrate into your business operations and drive exponential value.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Discuss Your AI Strategy
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Neural Network Visual */}
            <section className="py-24 overflow-hidden bg-white border-y border-zinc-100 relative">
                <div className="section-container relative z-10">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                        <div className="flex-1 relative w-full h-[400px]">
                            {/* Neural Net Nodes Demo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="relative w-full h-full max-w-md"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {/* Center core */}
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-indigo-200 flex items-center justify-center bg-white shadow-xl z-20"
                                    >
                                        <Bot className="w-10 h-10 text-indigo-600" />
                                    </motion.div>

                                    {/* Orbiting rings */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-zinc-200 border-dashed"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-teal-100"
                                    />

                                    {/* Floating specific models */}
                                    <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-10 px-4 py-2 bg-zinc-900 text-white text-sm font-bold rounded-lg shadow-lg">GPT-4o</motion.div>
                                    <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-20 right-0 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm font-bold rounded-lg shadow-lg">Claude 3.5</motion.div>
                                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-10 left-20 px-4 py-2 bg-teal-50 text-teal-700 border border-teal-100 text-sm font-bold rounded-lg shadow-lg">Llama 3</motion.div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <motion.h2
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
                            >
                                Model Agnostic. <br /> Results Driven.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg text-zinc-600"
                            >
                                We don't lock you into a single vendor. We architect routing layers that dynamically select the best models for specific tasks—balancing cost, speed, and accuracy in real-time.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Grid */}
            <section className="py-24 bg-zinc-50 border-t border-zinc-200">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Core Capabilities</h2>
                        <p className="text-zinc-600 text-lg">Building the intelligence layer of the modern enterprise.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {capabilities.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-zinc-100 hover:border-indigo-100 transition-colors duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-indigo-600 transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
