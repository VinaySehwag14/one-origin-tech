"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Brain, Building2, Check, X } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Teal Pulse Origin Point */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-3 h-3 rounded-full bg-gold-500 origin-pulse"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border border-gold-500/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full border border-gold-500/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          variants={fadeInUp}
        >
          From Origin to{" "}
          <span className="text-gold-gradient">Ownership.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          In a world of unfinished prototypes, we are the finishers.{" "}
          <span className="text-gray-900">One Origin Tech</span> builds complete,
          production-grade digital assets for leaders who refuse to compromise.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Start The Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-gray-900 border border-gray-300 hover:border-gold-500 hover:text-gold-500 font-semibold text-lg rounded-lg transition-all duration-200"
          >
            Our Philosophy
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// ============================================
// MANIFESTO SECTION
// ============================================
function ManifestoSection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          variants={fadeInUp}
        >
          The Crisis of <span className="text-gold-500">Incompletion.</span>
        </motion.h2>

        <motion.div
          className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6"
          variants={fadeInUp}
        >
          <p>
            Technology has never been easier to start, but never harder to finish.
            AI tools generate fragments. Agencies sell roadmaps. Freelancers sell
            hours.
          </p>
          <p className="text-gray-900 font-medium">
            One Origin Tech sells the destination.
          </p>
          <p>
            We take full ownership of the outcome, delivering sustainable,
            scalable systems that work for your business—not just until demo day.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// SERVICES SECTION
// ============================================
const services = [
  {
    icon: Globe,
    title: "Full-Cycle Engineering",
    description:
      "Web & Mobile applications built on Next.js 15. We don't use templates; we architect custom solutions.",
  },
  {
    icon: Brain,
    title: "Responsible AI",
    description:
      "We don't just bolt on chatbots. We integrate AI that optimizes your business logic and decision-making.",
  },
  {
    icon: Building2,
    title: "System Architecture",
    description:
      "Scalable databases, secure APIs, and cloud infrastructure designed for long-term growth.",
  },
];

function ServicesSection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Complete Solution
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three pillars of technical excellence that power every project we deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative p-8 bg-gray-50 rounded-2xl border border-gray-200 card-hover group"
              variants={fadeInUp}
              custom={index}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                <service.icon className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ============================================
// COMPARISON SECTION
// ============================================
const comparisonData = [
  {
    criteria: "Focus",
    industry: "Speed & Shortcuts",
    oneOrigin: "Quality & Completion",
  },
  {
    criteria: "AI Strategy",
    industry: '"Generate and Paste"',
    oneOrigin: '"Architect and Verify"',
  },
  {
    criteria: "Relationship",
    industry: "Vendor (Transactional)",
    oneOrigin: "Partner (Long-term)",
  },
  {
    criteria: "Outcome",
    industry: "A Project",
    oneOrigin: "An Asset",
  },
];

function ComparisonSection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ownership vs. Outsourcing
          </h2>
          <p className="text-gray-600 text-lg">
            There&apos;s a difference. Here&apos;s what it looks like.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200"
          variants={fadeInUp}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-100">
            <div className="p-4 md:p-6 text-gray-600 font-medium">Criteria</div>
            <div className="p-4 md:p-6 text-gray-600 font-medium text-center border-x border-gray-200">
              Industry Standard
            </div>
            <div className="p-4 md:p-6 text-gold-500 font-semibold text-center">
              One Origin Tech
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={row.criteria}
              className={`grid grid-cols-3 bg-white ${index !== comparisonData.length - 1 ? "border-b border-gray-200" : ""
                }`}
            >
              <div className="p-4 md:p-6 text-gray-900 font-medium">
                {row.criteria}
              </div>
              <div className="p-4 md:p-6 text-gray-500 text-center border-x border-gray-200 flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-500/50" />
                <span>{row.industry}</span>
              </div>
              <div className="p-4 md:p-6 text-gray-900 text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-gold-500" />
                <span className="font-medium">{row.oneOrigin}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// SELECTED WORKS SECTION
// ============================================
const projects = [
  {
    name: "VAANRA",
    category: "E-Commerce",
    description: "Global E-commerce Infrastructure",
    tags: ["Next.js", "Shopify Headless", "Stripe"],
  },
  {
    name: "SAHEEBA",
    category: "IoT / Mobile",
    description: "Real-time IoT & Community Platform",
    tags: ["React Native", "WebSocket", "Geolocation"],
  },
  {
    name: "AI WORKSPACE",
    category: "SaaS",
    description: "Enterprise Document Intelligence",
    tags: ["Next.js 15", "OpenAI", "Vector DB"],
  },
];

function SelectedWorksSection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Defined by Our Output
          </h2>
          <p className="text-gray-600 text-lg">
            A curation of recent engineering challenges and production releases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-gold-500 transition-all duration-300"
              variants={fadeInUp}
              custom={index}
            >
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-gray-100 text-gold-500 text-xs font-medium rounded-full mb-4">
                {project.category}
              </div>

              {/* Project Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-gold-500 font-medium hover:gap-3 transition-all duration-200"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-12" variants={fadeInUp}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 border border-gray-300 hover:border-gold-500 hover:text-gold-500 font-medium rounded-lg transition-all duration-200"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-500/5" />

      <div className="section-container relative z-10 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          variants={fadeInUp}
        >
          Your project could be next.
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg max-w-xl mx-auto mb-10"
          variants={fadeInUp}
        >
          Skip the email tag. Book a 30-minute technical roadmap call directly
          with our engineering team.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Book a Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <ComparisonSection />
      <SelectedWorksSection />
      <CTASection />
    </>
  );
}
