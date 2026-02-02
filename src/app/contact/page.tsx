"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Users, Lightbulb, Calculator } from "lucide-react";

// Animation variants
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

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-navy-950"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className="section-container text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
                    variants={fadeInUp}
                >
                    Let&apos;s Engineer{" "}
                    <span className="text-gold-gradient">Your Vision.</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
                    variants={fadeInUp}
                >
                    Skip the email tag. Book a 30-minute technical roadmap call directly
                    with our engineering team.
                </motion.p>
            </div>
        </motion.section>
    );
}

// ============================================
// CAL.COM BOOKING SECTION
// ============================================
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function BookingSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#D4AF37" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <motion.section
            className="py-12 md:py-20 bg-navy-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
                    {/* Cal.com Embed Container */}
                    <div className="relative p-2 rounded-3xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/20">
                        <div className="glass-dark rounded-2xl overflow-hidden">
                            <Cal
                                calLink="vinay-sehwag-gjrsq4/technical-discovery-call"
                                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                config={{ layout: "month_view", theme: "dark" }}
                            />
                        </div>
                    </div>

                    {/* Fallback link */}
                    <p className="text-center text-slate-500 text-sm mt-4">
                        Having trouble?{" "}
                        <a
                            href="https://cal.com/vinay-sehwag-gjrsq4/technical-discovery-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-500 hover:text-gold-400 underline"
                        >
                            Book directly on Cal.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}

// ============================================
// WHAT HAPPENS ON CALL SECTION
// ============================================
const callExpectations = [
    {
        icon: Users,
        title: "No Sales Pressure",
        description:
            "We are engineers, not salespeople. We'll discuss architecture, not upsells.",
    },
    {
        icon: Lightbulb,
        title: "Feasibility Check",
        description:
            "We'll tell you immediately if your idea is technically viable and scalable.",
    },
    {
        icon: Calculator,
        title: "Rough Estimates",
        description:
            "You'll leave the call with a ballpark timeline and budget range.",
    },
];

function ExpectationsSection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-navy-950"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        What happens on this call?
                    </h2>
                    <p className="text-slate-400">
                        Here&apos;s what to expect from your 30-minute session.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {callExpectations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="p-6 bg-navy-900 rounded-2xl border border-navy-700"
                            variants={fadeInUp}
                        >
                            <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// ============================================
// ALTERNATIVE CONTACT SECTION
// ============================================
function AlternativeContactSection() {
    return (
        <motion.section
            className="py-16 bg-navy-900 border-t border-navy-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
                    variants={fadeInUp}
                >
                    <div>
                        <p className="text-slate-400 mb-2">Not ready to book?</p>
                        <a
                            href="mailto:hello@oneorigintech.com"
                            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            hello@oneorigintech.com
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-5 h-5 text-gold-500" />
                        <span>HQ: New Delhi, India (Serving Global Clients)</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

// ============================================
// MAIN PAGE
// ============================================
export default function ContactPage() {
    return (
        <>
            <HeroSection />
            <BookingSection />
            <ExpectationsSection />
            <AlternativeContactSection />
        </>
    );
}
