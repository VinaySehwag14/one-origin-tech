import { ArrowRight, Bot, BrainCircuit, Cpu, Database, Fingerprint, Lock, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";
import { AnimatedDiv } from "@/components/ui/AnimatedWrappers";
import { NeuralNetVisual } from "./NeuralNetVisual";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Native AI | Artificial Intelligence Engineering",
    description: "Applied Artificial Intelligence. We architect scalable, production-grade AI architectures that deeply integrate into your business operations.",
    alternates: {
        canonical: "https://oneorigintech.com/services/cloud-native-ai",
    },
    openGraph: {
        title: "Cloud Native AI | One Origin Tech",
        description: "Applied Artificial Intelligence. Intelligence, Engineered for Scale.",
        url: "https://oneorigintech.com/services/cloud-native-ai",
    },
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
                    <AnimatedDiv
                        animation="stagger"
                        className="max-w-4xl"
                    >
                        <AnimatedDiv animation="fadeInUp" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium text-sm mb-8">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            Applied Artificial Intelligence
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeInUp" className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                            <h1 className="inline">Intelligence, <br className="hidden md:block" /></h1>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Engineered for Scale.</span>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeInUp" className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl leading-relaxed">
                            <p>We don't just use APIs. We build robust, scalable AI architectures that deeply integrate into your business operations and drive exponential value.</p>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeInUp">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Discuss Your AI Strategy
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </AnimatedDiv>
                    </AnimatedDiv>
                </div>
            </section>

            {/* Interactive Neural Network Visual */}
            <section className="py-24 overflow-hidden bg-white border-y border-zinc-100 relative">
                <div className="section-container relative z-10">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                        <div className="flex-1 relative w-full h-[400px]">
                            {/* Neural Net Nodes Demo */}
                            <NeuralNetVisual />
                        </div>

                        <div className="flex-1">
                            <AnimatedDiv
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
                            >
                                <h2>Model Agnostic. <br /> Results Driven.</h2>
                            </AnimatedDiv>
                            <AnimatedDiv
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg text-zinc-600"
                            >
                                <p>We don't lock you into a single vendor. We architect routing layers that dynamically select the best models for specific tasks—balancing cost, speed, and accuracy in real-time.</p>
                            </AnimatedDiv>
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

                    <AnimatedDiv
                        animation="stagger"
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {capabilities.map((item, index) => (
                            <AnimatedDiv
                                key={index}
                                animation="fadeInUp"
                                className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-zinc-100 hover:border-indigo-100 transition-colors duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-indigo-600 transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </AnimatedDiv>
                </div>
            </section>
        </main>
    );
}
