"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnimatedCTAButton() {
    return (
        <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                boxShadow: ["0px 0px 0px rgba(20, 184, 166, 0)", "0px 0px 20px rgba(20, 184, 166, 0.5)", "0px 0px 0px rgba(20, 184, 166, 0)"],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg shadow-md transition-colors duration-200"
            >
                Book Your Clarity Call
                <ArrowRight className="w-5 h-5" />
            </Link>
        </motion.div>
    );
}
