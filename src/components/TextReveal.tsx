"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* Content for One Origin Tech - Brand Voice */
const textContent = `Let's do a quick code audit. Open your repo. Look at the commits from last month versus the features released. If the gap is big, something's off. You are writing code, but not shipping assets. That gap has a cost. Every week of delayed deployment is market share lost to a competitor whose engineering simply felt more complete.`;

export default function TextReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to this specific component
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.5"],
    });

    const words = textContent.split(" ");

    return (
        <section
            ref={containerRef}
            className="relative py-32 px-6 min-h-[150vh] bg-gray-900"
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pointer-events-none" />

            <div className="max-w-4xl mx-auto sticky top-32 relative z-10">
                {/* The Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-gold-500 mb-8 uppercase tracking-widest"
                >
                    The Reality Check
                </motion.h2>

                {/* The Reveal Text */}
                <p className="flex flex-wrap text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] text-white">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word
                                key={i}
                                range={[start, end]}
                                progress={scrollYProgress}
                            >
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </section>
    );
}

interface WordProps {
    children: string;
    range: [number, number];
    progress: MotionValue<number>;
}

const Word = ({ children, range, progress }: WordProps) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    const blur = useTransform(progress, range, [5, 0]);

    return (
        <span className="relative mr-3 mt-2 inline-block">
            <motion.span
                style={{
                    opacity,
                    filter: useTransform(blur, (v) => `blur(${v}px)`)
                }}
                className="transition-colors duration-200"
            >
                {children}
            </motion.span>
        </span>
    );
};
