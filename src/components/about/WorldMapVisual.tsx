"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Topography/Dotted abstract representation of a world map
// Simplified coordinate paths for major continents to keep DOM light and purely visual
const worldPaths = [
    // North America
    "M 150 150 Q 180 120 250 140 T 350 180 Q 300 220 250 250 T 150 200 Z",
    // South America
    "M 280 260 Q 320 280 340 350 T 290 450 Q 250 400 230 320 T 280 260 Z",
    // Europe
    "M 450 120 Q 500 100 550 130 T 600 160 Q 550 200 480 180 T 450 120 Z",
    // Africa
    "M 450 200 Q 520 180 580 240 T 550 350 Q 500 380 430 300 T 450 200 Z",
    // Asia
    "M 550 120 Q 700 80 850 150 T 900 250 Q 800 300 700 250 T 550 120 Z",
    // Australia
    "M 750 350 Q 820 320 880 360 T 850 420 Q 780 450 720 400 T 750 350 Z",
];

// Connection points originating from New Delhi HQ
const connections = [
    { id: "sf", name: "San Francisco", startX: 680, startY: 180, endX: 180, endY: 170, color: "#14b8a6" },
    { id: "lon", name: "London", startX: 680, startY: 180, endX: 480, endY: 130, color: "#f59e0b" },
    { id: "tyo", name: "Tokyo", startX: 680, startY: 180, endX: 860, endY: 160, color: "#a855f7" },
    { id: "sin", name: "Singapore", startX: 680, startY: 180, endX: 740, endY: 260, color: "#ec4899" },
    { id: "syd", name: "Sydney", startX: 680, startY: 180, endX: 840, endY: 390, color: "#3b82f6" },
];

export function WorldMapVisual() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden flex items-center justify-center">
            {/* Background Grid & Radar Sweep */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <motion.div
                className="absolute w-[200%] h-[200%] origin-center pointer-events-none"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, rgba(20, 184, 166, 0.1) 60deg, rgba(20, 184, 166, 0.4) 90deg, transparent 90deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/80 pointer-events-none" />

            {/* SVG Map Container */}
            <svg
                className="w-full h-full max-w-[1000px] opacity-80"
                viewBox="0 0 1000 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Abstract Continents */}
                {worldPaths.map((path, i) => (
                    <motion.path
                        key={i}
                        d={path}
                        stroke="rgba(161, 161, 170, 0.15)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="rgba(63, 63, 70, 0.05)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }}
                    />
                ))}

                {/* Global Connections */}
                {connections.map((conn, i) => {
                    // Calculate SVG quadratic bezier curve path for arc effect
                    const cx = (conn.startX + conn.endX) / 2;
                    const cy = Math.min(conn.startY, conn.endY) - 100; // Arc upwards
                    const pathD = `M ${conn.startX} ${conn.startY} Q ${cx} ${cy} ${conn.endX} ${conn.endY}`;

                    return (
                        <g key={conn.id}>
                            {/* Arc Line */}
                            <motion.path
                                d={pathD}
                                stroke={conn.color}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                fill="none"
                                style={{ opacity: 0.6 }}
                                initial={{ pathLength: 0, strokeDashoffset: 100 }}
                                whileInView={{ pathLength: 1, strokeDashoffset: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, delay: 1 + i * 0.3, ease: "easeOut" }}
                            />

                            {/* Ping traveling along arc */}
                            <motion.circle
                                r="3"
                                fill={conn.color}
                                style={{ filter: `drop-shadow(0 0 6px ${conn.color})` }}
                            >
                                <animateMotion
                                    dur={`${2 + Math.random()}s`}
                                    repeatCount="indefinite"
                                    path={pathD}
                                    keyPoints="0;1"
                                    keyTimes="0;1"
                                    calcMode="linear"
                                />
                            </motion.circle>

                            {/* Destination Hub Node */}
                            <motion.circle
                                cx={conn.endX}
                                cy={conn.endY}
                                r="4"
                                fill={conn.color}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 2.2 + i * 0.3 }}
                            />
                            <motion.circle
                                cx={conn.endX}
                                cy={conn.endY}
                                r="12"
                                stroke={conn.color}
                                strokeWidth="1"
                                fill="none"
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 2.2 + i * 0.3, repeat: Infinity, ease: "easeOut" }}
                            />

                            {/* Destination Label */}
                            <motion.text
                                x={conn.endX}
                                y={conn.endY - 15}
                                fill="rgba(255,255,255,0.7)"
                                fontSize="10"
                                fontWeight="500"
                                textAnchor="middle"
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 2.5 + i * 0.3 }}
                            >
                                {conn.name}
                            </motion.text>
                        </g>
                    );
                })}

                {/* Global HQ (Origin) Node - New Delhi */}
                <g>
                    <motion.circle
                        cx="680"
                        cy="180"
                        r="6"
                        fill="#14b8a6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    />
                    <motion.circle
                        cx="680"
                        cy="180"
                        r="20"
                        fill="rgba(20, 184, 166, 0.2)"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.text
                        x="680"
                        y="210"
                        fill="#14b8a6"
                        fontSize="12"
                        fontWeight="bold"
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        One Origin HQ
                    </motion.text>
                </g>
            </svg>
        </div>
    );
}
