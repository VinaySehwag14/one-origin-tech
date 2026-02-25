"use client";

import { motion } from "framer-motion";

export function TechStackVisual() {
    return (
        <div className="flex-1 relative w-full h-[400px]">
            {/* Abstract decorative elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-zinc-200 rounded-full border-dashed"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-teal-200 rounded-full"
            />

            {/* Floating "tech nodes" */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 px-6 py-3 bg-white shadow-xl rounded-xl border border-zinc-100 font-bold text-zinc-900"
            >
                Next.js 15
            </motion.div>
            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 px-6 py-3 bg-zinc-900 shadow-xl rounded-xl font-bold text-white z-10"
            >
                React 19
            </motion.div>
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-10 px-6 py-3 bg-teal-50 shadow-lg rounded-xl border border-teal-100 font-bold text-teal-700"
            >
                Tailwind
            </motion.div>
            <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 px-6 py-3 bg-white shadow-lg rounded-xl border border-zinc-100 font-bold text-zinc-900"
            >
                TypeScript
            </motion.div>
        </div>
    );
}
