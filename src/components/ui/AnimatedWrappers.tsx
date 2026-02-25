"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    animation?: "fadeInUp" | "stagger" | "none";
    delay?: number;
}

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export function AnimatedSection({
    children,
    animation = "fadeInUp",
    className,
    ...props
}: AnimatedSectionProps) {
    if (animation === "none") {
        return <section className={className} {...(props as any)}>{children}</section>;
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animation === "stagger" ? staggerContainer : fadeInUp}
            className={className}
            {...props}
        >
            {children}
        </motion.section>
    );
}

export function AnimatedDiv({
    children,
    animation = "fadeInUp",
    className,
    ...props
}: AnimatedSectionProps) {
    const { ref, ...rest } = props;
    if (animation === "none") {
        return <div className={className} {...(rest as any)}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation === "stagger" ? staggerContainer : fadeInUp}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
