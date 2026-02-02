"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    animate?: boolean;
    delay?: number;
}

const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function SectionWrapper({
    children,
    className = "",
    id,
    animate = true,
    delay = 0,
}: SectionWrapperProps) {
    const baseStyles = "w-full py-20 md:py-28 lg:py-32";

    if (!animate) {
        return (
            <section id={id} className={`${baseStyles} ${className}`}>
                <div className="section-container">{children}</div>
            </section>
        );
    }

    return (
        <motion.section
            id={id}
            className={`${baseStyles} ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    },
                },
            }}
        >
            <motion.div className="section-container" variants={fadeInUp}>
                {children}
            </motion.div>
        </motion.section>
    );
}

// Export motion variants for use in child components
export { fadeInUp };
