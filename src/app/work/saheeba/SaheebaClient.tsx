"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Battery, MapPin, Smartphone, Activity } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function SaheebaClient() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-zinc-50">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    {/* Inline Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between mb-16 md:mb-24"
                    >
                        <Link href="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-600 font-medium transition-colors text-sm group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Work
                        </Link>
                        <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Case Study 02</span>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-medium text-sm mb-8">
                            <Smartphone className="w-4 h-4" />
                            IoT / Mobile
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                            SAHEEBA
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            Real-time IoT & Community Platform combining mapping precision with massive concurrent users.
                        </motion.p>

                        {/* Meta Grid */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-zinc-200 mt-12 text-left">
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Role</h4>
                                <p className="text-zinc-900 font-medium">Mobile Engineering</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Platform</h4>
                                <p className="text-zinc-900 font-medium">iOS & Android</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Timeline</h4>
                                <p className="text-zinc-900 font-medium">16 Weeks</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Core Stack</h4>
                                <p className="text-zinc-900 font-medium">React Native, WebSockets</p>
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
                                Creating a real-time tracking application is rarely a UI problem—it is a battery drain and data throughput problem.
                            </p>
                            <p>
                                Saheeba needed a cross-platform mobile app capable of broadcasting continuous high-frequency GPS telemetry to a central server, while simultaneously receiving and rendering the live positions of hundreds of other community members on a dynamic interactive map.
                            </p>
                            <p>
                                Standard polling methods exhausted phone batteries in under two hours and resulted in choppy, inaccurate "jumping" cars on the map. We needed a deeply integrated native solution.
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
                                We abandoned HTTP polling in favor of a <span className="text-purple-400 font-medium">persistent bi-directional WebSocket connection</span> paired with custom native iOS/Android location modules.
                            </motion.p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                                        <Battery className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Smart Telemetry Throttling</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        We wrote native OS background tasks utilizing accelerometer data to determine if a vehicle was stationary, dynamically adjusting the GPS ping rate from 1s to 30s to save battery.
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Vector Mapping Interpolation</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        Instead of raw coordinate jumps, we used Mapbox GL with custom mathematical interpolation to animate vehicle markers smoothly along recorded road splines.
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
                            The result was a highly performant application that felt like magic—real-time physics mixed with a community social layer.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-purple-50 rounded-3xl p-10 text-center border border-purple-100"
                        >
                            <Activity className="w-8 h-8 text-purple-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-purple-700 mb-4">&lt;50ms</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Latency</h4>
                            <p className="text-purple-800 font-medium text-sm">Glass-to-glass websocket transmission time.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-pink-50 rounded-3xl p-10 text-center border border-pink-100"
                        >
                            <Battery className="w-8 h-8 text-pink-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-pink-700 mb-4">-65%</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Battery Usage</h4>
                            <p className="text-pink-800 font-medium text-sm">Reduction in background power consumption.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-indigo-50 rounded-3xl p-10 text-center border border-indigo-100"
                        >
                            <Smartphone className="w-8 h-8 text-indigo-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-indigo-700 mb-4">60fps</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Map Rendering</h4>
                            <p className="text-indigo-800 font-medium text-sm">Sustained frame rate with 500+ markers.</p>
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
