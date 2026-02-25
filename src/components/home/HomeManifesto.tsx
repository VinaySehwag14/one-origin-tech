"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const manifestoContent = [
    {
        text: "Technology has never been easier to start, but never harder to finish. AI tools generate fragments. Agencies sell roadmaps. Freelancers sell hours.",
        highlight: false,
    },
    {
        text: "One Origin Tech sells the destination.",
        highlight: true,
    },
    {
        text: "We take full ownership of the outcome, delivering sustainable, scalable systems that work for your business—not just until demo day.",
        highlight: false,
    },
];

// Word component with individual scroll-based reveal
function RevealWord({
    word,
    index,
    totalWords,
    scrollYProgress,
    highlight = false
}: {
    word: string;
    index: number;
    totalWords: number;
    scrollYProgress: any;
    highlight?: boolean;
}) {
    // Calculate when this word should start and end revealing
    const start = index / totalWords;
    const end = (index + 1) / totalWords;

    const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
    const blurValue = useTransform(scrollYProgress, [start, end], [4, 0]);
    const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

    return (
        <motion.span
            style={{
                opacity,
                filter,
            }}
            className={`inline-block mr-[0.25em] ${highlight ? 'text-zinc-900 font-bold' : 'text-zinc-700'}`}
        >
            {word}
        </motion.span>
    );
}

export function HomeManifesto() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.7"]
    });

    // Flatten all words with their metadata
    const allWords = manifestoContent.flatMap(paragraph =>
        paragraph.text.split(' ').map(word => ({
            word,
            highlight: paragraph.highlight,
            isParagraphStart: paragraph.text.split(' ')[0] === word,
        }))
    );

    const totalWords = allWords.length;

    return (
        <section
            ref={containerRef}
            className="py-24 md:py-32 bg-white relative overflow-hidden"
        >
            {/* Dot Pattern Background */}
            <div
                className="absolute inset-0 opacity-[0.25]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #d4d4d8 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="section-container max-w-5xl mx-auto relative z-10">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    The Crisis of <span className="text-teal-600">Incompletion.</span>
                </motion.h2>

                <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-center">
                    {manifestoContent.map((paragraph, pIndex) => (
                        <p
                            key={pIndex}
                            className={`mb-8 ${paragraph.highlight ? 'text-2xl md:text-3xl lg:text-4xl py-4' : ''}`}
                        >
                            {paragraph.text.split(' ').map((word, wIndex) => {
                                // Calculate global index for this word
                                const globalIndex = manifestoContent
                                    .slice(0, pIndex)
                                    .reduce((acc, p) => acc + p.text.split(' ').length, 0) + wIndex;

                                return (
                                    <RevealWord
                                        key={`${pIndex}-${wIndex}`}
                                        word={word}
                                        index={globalIndex}
                                        totalWords={totalWords}
                                        scrollYProgress={scrollYProgress}
                                        highlight={paragraph.highlight}
                                    />
                                );
                            })}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
