"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    className?: string;
    asMotion?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-gold-500 text-navy-950 hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5",
    outline:
        "bg-transparent text-white border border-white/30 hover:border-gold-500 hover:text-gold-500",
    ghost:
        "bg-transparent text-white hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            children,
            className = "",
            asMotion = false,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-navy-950 disabled:opacity-50 disabled:cursor-not-allowed";

        const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

        if (asMotion) {
            return (
                <motion.button
                    ref={ref as React.Ref<HTMLButtonElement>}
                    className={combinedClassName}
                    whileTap={{ scale: 0.98 }}
                    {...(props as HTMLMotionProps<"button">)}
                >
                    {children}
                </motion.button>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
