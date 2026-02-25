"use client";

import { motion } from "framer-motion";

export function MapPulseNode() {
    return (
        <motion.div
            className="absolute"
            style={{ left: "72%", top: "42%" }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
        >
            {/* Pulse ring */}
            <div className="absolute -inset-4 rounded-full bg-teal-500/20 animate-ping" />
            <div className="absolute -inset-6 rounded-full bg-teal-500/10 animate-pulse" />

            {/* Core dot */}
            <div className="relative">
                <div className="w-5 h-5 rounded-full bg-teal-600 shadow-lg shadow-teal-600/50" />

                {/* Label */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-teal-100 shadow-sm">
                    <p className="text-zinc-900 font-semibold text-sm">New Delhi</p>
                    <p className="text-teal-600 text-xs font-medium">Global HQ</p>
                </div>
            </div>
        </motion.div>
    );
}
