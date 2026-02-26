"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ShoppingBag, Zap, Layers, TrendingUp } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function VaanraClient() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-zinc-50">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    {/* Inline Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between mb-16 md:mb-24"
                    >
                        <Link href="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-600 font-medium transition-colors text-sm group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Work
                        </Link>
                        <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Case Study 01</span>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium text-sm mb-8">
                            <ShoppingBag className="w-4 h-4" />
                            Headless E-Commerce
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                            VAANRA
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            Architecting a zero-downtime, sub-second headless storefront for massive influencer traffic spikes.
                        </motion.p>

                        {/* Meta Grid */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-zinc-200 mt-12 text-left">
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Role</h4>
                                <p className="text-zinc-900 font-medium">Full-Stack Architecture</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Platform</h4>
                                <p className="text-zinc-900 font-medium">Web App Storefront</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Timeline</h4>
                                <p className="text-zinc-900 font-medium">12 Weeks</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Core Stack</h4>
                                <p className="text-zinc-900 font-medium">Next.js 15, Shopify API</p>
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
                                Vaanra's legacy Shopify theme routinely crashed or suffered 10+ second load times during major influencer product drops, directly hemorrhaging revenue.
                            </p>
                            <p>
                                When multiple influencers posted links simultaneously, the monolithic architecture couldn't cache dynamic inventory states fast enough. The client needed a storefront that felt as instantaneous as a native app, regardless of concurrent user volume.
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
                                We migrated Vaanra completely off standard Shopify Liquid templates into a <span className="text-teal-400 font-medium">Headless Next.js Architecture</span> deployed on the edge.
                            </motion.p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
                                        <Layers className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">React 19 Server Components</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        By pushing the rendering payload to the server, we stripped the client-side JavaScript bundle to the bare minimum, resulting in near-instant First Contentful Paint.
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
                                        <Zap className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Storefront API</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        We utilized Shopify's GraphQL Storefront API strictly as a headless backend for product data and checkout mutations, completely abstracting the UI layer.
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
                            The transition to a custom headless stack yielded massive performance and conversion enhancements within the first 30 days of launch.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-emerald-50 rounded-3xl p-10 text-center border border-emerald-100"
                        >
                            <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-emerald-700 mb-4">+40%</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Conversion Rate</h4>
                            <p className="text-emerald-800 font-medium text-sm">During high-traffic flash sales events.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-teal-50 rounded-3xl p-10 text-center border border-teal-100"
                        >
                            <Zap className="w-8 h-8 text-teal-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-teal-700 mb-4">98</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Lighthouse Score</h4>
                            <p className="text-teal-800 font-medium text-sm">Consistently ranking in global top percentiles.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-blue-50 rounded-3xl p-10 text-center border border-blue-100"
                        >
                            <Layers className="w-8 h-8 text-blue-600 mx-auto mb-6" />
                            <div className="text-5xl md:text-6xl font-black text-blue-700 mb-4">Zero</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Downtime</h4>
                            <p className="text-blue-800 font-medium text-sm">Under sustained 10,000+ concurrent user loads.</p>
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
