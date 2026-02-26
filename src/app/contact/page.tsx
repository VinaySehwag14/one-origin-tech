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
            className="py-24 md:py-32 bg-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className="section-container text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
                    variants={fadeInUp}
                >
                    Let&apos;s Engineer{" "}
                    <span className="text-teal-600">Your Vision.</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto"
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
                theme: "light",
                styles: { branding: { brandColor: "#0D9488" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <motion.section
            className="py-12 md:py-20 bg-zinc-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
                    {/* Cal.com Embed Container */}
                    <div className="relative p-2 rounded-3xl bg-white shadow-sm border border-zinc-200">
                        <div className="bg-white rounded-2xl overflow-hidden">
                            <Cal
                                calLink="oneorigintech/30min"
                                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                config={{ layout: "month_view", theme: "light" }}
                            />
                        </div>
                    </div>

                    {/* Fallback link */}
                    <p className="text-center text-zinc-500 text-sm mt-4">
                        Having trouble?{" "}
                        <a
                            href="https://cal.com/oneorigintech/30min?overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:text-teal-700 underline"
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
            className="py-24 md:py-32 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="section-container">
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                        What happens on this call?
                    </h2>
                    <p className="text-zinc-600">
                        Here&apos;s what to expect from your 30-minute session.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {callExpectations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200"
                            variants={fadeInUp}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                                <item.icon className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-zinc-600 text-sm">{item.description}</p>
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
            className="py-16 bg-zinc-50 border-t border-zinc-200"
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
                        <p className="text-zinc-600 mb-2">Not ready to book?</p>
                        <a
                            href="mailto:info@oneorigintech.com"
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            info@oneorigintech.com
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-600">
                        <MapPin className="w-5 h-5 text-teal-600" />
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
