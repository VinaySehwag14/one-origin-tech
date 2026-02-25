"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export function NeuralNetVisual() {
    return (
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
    );
}
