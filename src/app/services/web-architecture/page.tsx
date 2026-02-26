import { ArrowRight, Globe, Zap, Shield, Code, Server, Smartphone } from "lucide-react";
import Link from "next/link";
import { AnimatedDiv } from "@/components/ui/AnimatedWrappers";
import { TechStackVisual } from "./TechStackVisual";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Architecture | Next-Gen Infrastructure",
    description: "We design and build SEO-optimized, server-rendered applications that load instantly and scale infinitely.",
    alternates: {
        canonical: "https://oneorigintech.com/services/web-architecture",
    },
    openGraph: {
        title: "Web Architecture | One Origin Tech",
        description: "Web Architecture that Defies Limits. Next-Gen Infrastructure for the modern web.",
        url: "https://oneorigintech.com/services/web-architecture",
    },
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
                    <AnimatedDiv
                        animation="stagger"
                        className="max-w-4xl"
                    >
                        <AnimatedDiv animation="fadeInUp" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-medium text-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                            Next-Gen Infrastructure
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeInUp" className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                            <h1 className="inline">Web Architecture that <br className="hidden md:block" /></h1>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Defies Limits.</span>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeInUp" className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl leading-relaxed">
                            <p>We design and build SEO-optimized, server-rendered applications that load instantly and scale infinitely. Your digital flagship, engineered for the modern web.</p>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeInUp">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Start Building
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </AnimatedDiv>
                    </AnimatedDiv>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="section-container">
                    <AnimatedDiv
                        animation="stagger"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, index) => (
                            <AnimatedDiv
                                key={index}
                                animation="fadeInUp"
                                className="p-8 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                                <p className="text-zinc-600">{feature.description}</p>
                            </AnimatedDiv>
                        ))}
                    </AnimatedDiv>
                </div>
            </section>

            {/* Interactive Tech Stack Visual */}
            <section className="py-32 overflow-hidden bg-white relative">
                <div className="section-container relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <AnimatedDiv
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
                            >
                                <h2>Uncompromising <br /> Tech Decisions.</h2>
                            </AnimatedDiv>
                            <AnimatedDiv
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg text-zinc-600 mb-8"
                            >
                                <p>We don't chase trends. We use battle-tested, enterprise-grade tooling that we know can handle massive scale and complex business logic.</p>
                            </AnimatedDiv>
                        </div>

                        <TechStackVisual />
                    </div>
                </div>
            </section>
        </main>
    );
}
