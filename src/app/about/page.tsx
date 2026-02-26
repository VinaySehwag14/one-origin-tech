import Link from "next/link";
import { ArrowRight, Quote, Shield, Target, Sparkles } from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedWrappers";
import { WorldMapVisual } from "@/components/about/WorldMapVisual";

// ============================================
// SECTION 1: THE MANIFESTO (THE "WHY")
// ============================================
function ManifestoSection() {
    return (
        <AnimatedSection
            className="py-24 md:py-32 lg:py-40 bg-zinc-50 relative overflow-hidden"
            animation="stagger"
        >
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Bold Typography */}
                    <AnimatedDiv animation="fadeInUp">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                            The Crisis of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Incompletion.</span>
                        </h1>
                    </AnimatedDiv>

                    {/* Right: Manifesto Text */}
                    <AnimatedDiv
                        className="text-lg text-zinc-600 leading-relaxed space-y-6"
                        animation="fadeInUp"
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
                    </AnimatedDiv>
                </div>
            </div>
        </AnimatedSection>
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
        <AnimatedSection
            className="py-24 md:py-32 bg-zinc-50"
            animation="stagger"
        >
            <div className="section-container">
                <AnimatedDiv className="text-center mb-16" animation="fadeInUp">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Our Operating System.
                    </h2>
                    <p className="text-zinc-600 text-lg">
                        The core beliefs that guide everything we build.
                    </p>
                </AnimatedDiv>

                <div className="grid md:grid-cols-3 gap-8">
                    {coreBeliefs.map((belief) => (
                        <AnimatedDiv
                            key={belief.title}
                            className="group relative p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-teal-500/50 transition-all duration-300 shadow-sm overflow-hidden"
                            animation="fadeInUp"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8 group-hover:bg-teal-500/20 transition-colors duration-300">
                                    <belief.icon className="w-7 h-7 text-teal-400" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {belief.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    {belief.description}
                                </p>
                            </div>
                        </AnimatedDiv>
                    ))}
                </div>
            </div>
        </AnimatedSection>
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
        <AnimatedSection
            className="py-24 md:py-32 bg-white overflow-hidden"
            animation="stagger"
        >
            <div className="section-container">
                <AnimatedDiv className="text-center mb-12" animation="fadeInUp">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Global HQ. Silicon Valley Standards.
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        Headquartered in New Delhi, One Origin Tech serves a global
                        clientele. We combine the agility of a startup with the engineering
                        rigor of a Fortune 500 firm.
                    </p>
                </AnimatedDiv>

                {/* Map Container */}
                <AnimatedDiv
                    className="relative w-full aspect-[2/1] md:aspect-[2.5/1] max-w-6xl mx-auto bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden mb-16 shadow-2xl"
                    animation="fadeInUp"
                >
                    <WorldMapVisual />
                </AnimatedDiv>

                {/* Stats Row */}
                <AnimatedDiv
                    className="grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto"
                    animation="fadeInUp"
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
                </AnimatedDiv>
            </div>
        </AnimatedSection>
    );
}

// ============================================
// SECTION 4: THE LEADERSHIP
// ============================================
function LeadershipSection() {
    return (
        <AnimatedSection
            className="py-24 md:py-32 bg-zinc-50"
            animation="stagger"
        >
            <div className="section-container max-w-4xl mx-auto">
                <AnimatedDiv
                    className="relative p-10 md:p-16 bg-white rounded-[2.5rem] shadow-xl border border-zinc-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
                    animation="fadeInUp"
                >
                    {/* Decorative gradient corner */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/20 transition-colors duration-500" />

                    {/* Quote icon */}
                    <div className="absolute -top-6 left-12 w-14 h-14 rounded-2xl bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/20">
                        <Quote className="w-6 h-6 text-white" />
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
                </AnimatedDiv>
            </div>
        </AnimatedSection>
    );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
    return (
        <AnimatedSection
            className="py-24 md:py-32 bg-white"
            animation="stagger"
        >
            <div className="section-container text-center">
                <AnimatedDiv
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
                    animation="fadeInUp"
                >
                    <h2>Ready to finish what you started?</h2>
                </AnimatedDiv>

                <AnimatedDiv
                    className="text-zinc-600 text-lg max-w-xl mx-auto mb-10"
                    animation="fadeInUp"
                >
                    <p>Book a technical roadmap call and let&apos;s get you across the finish
                        line.</p>
                </AnimatedDiv>

                <AnimatedDiv animation="fadeInUp">
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(20,184,166,0.3)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10">Book Technical Roadmap Call</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </AnimatedDiv>
            </div>
        </AnimatedSection>
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
