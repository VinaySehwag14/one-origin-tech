"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-50/60 via-white to-white">
      {/* Floating Abstract Blob - Right Side */}
      <motion.div
        className="absolute right-[5%] top-1/3 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-teal-200/30 via-teal-100/20 to-transparent blur-3xl pointer-events-none"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Floating Blob - Left Side */}
      <motion.div
        className="absolute left-[10%] bottom-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-zinc-200/40 via-zinc-100/20 to-transparent blur-2xl pointer-events-none"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Teal Pulse Origin Point */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-3 h-3 rounded-full bg-teal-500 shadow-lg shadow-teal-500/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border border-teal-500/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full border border-teal-500/10"
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6"
          variants={fadeInUp}
        >
          From Origin to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Ownership.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          In a world of unfinished prototypes, we are the finishers.{" "}
          <span className="text-zinc-900 font-medium">One Origin Tech</span> builds complete,
          production-grade digital assets for leaders who refuse to compromise.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(20,184,166,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start The Conversation</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 hover:border-teal-200 font-semibold text-lg rounded-lg transition-all duration-200 shadow-sm"
          >
            Our Philosophy
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
// ============================================
// MANIFESTO SECTION - Word-by-Word Scroll Reveal
// ============================================
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
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
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

function ManifestoSection() {
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
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
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
      className="py-24 md:py-32 bg-zinc-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Complete Solution
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Three pillars of technical excellence that power every project we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-teal-500/50 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]"
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-teal-600/20 transition-colors">
                <service.icon className="w-7 h-7 text-teal-400" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
        >
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
        </motion.div>
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
      className="py-24 md:py-32 bg-zinc-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
            Ownership vs. Outsourcing
          </h2>
          <p className="text-zinc-600 text-lg">
            There&apos;s a difference. Here&apos;s what it looks like.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto overflow-visible"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-3 relative">
            {/* Criteria Column */}
            <div className="bg-white rounded-l-2xl border border-zinc-200 border-r-0">
              <div className="p-4 md:p-6 text-zinc-600 font-medium bg-zinc-100 rounded-tl-2xl">Criteria</div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.criteria}
                  className={`p-4 md:p-6 text-zinc-900 font-medium ${index !== comparisonData.length - 1 ? "border-b border-zinc-200" : ""}`}
                >
                  {row.criteria}
                </div>
              ))}
            </div>

            {/* Industry Standard Column */}
            <div className="bg-white border-t border-b border-zinc-200">
              <div className="p-4 md:p-6 text-zinc-600 font-medium text-center bg-zinc-100">Industry Standard</div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.criteria}
                  className={`p-4 md:p-6 text-zinc-500 text-center flex items-center justify-center gap-2 ${index !== comparisonData.length - 1 ? "border-b border-zinc-200" : ""}`}
                >
                  <X className="w-4 h-4 text-zinc-300" />
                  <span>{row.industry}</span>
                </div>
              ))}
            </div>

            {/* One Origin Column - HIGHLIGHTED */}
            <div className="bg-white rounded-r-2xl border-4 border-teal-600 shadow-xl relative -ml-px z-10 transform scale-[1.02]">
              <div className="p-4 md:p-6 font-bold text-center bg-teal-600 text-white rounded-tr-xl">
                One Origin Tech
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.criteria}
                  className={`p-4 md:p-6 text-zinc-900 text-center bg-teal-50/30 flex items-center justify-center gap-2 ${index !== comparisonData.length - 1 ? "border-b border-teal-100" : ""}`}
                >
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="font-medium">{row.oneOrigin}</span>
                </div>
              ))}
            </div>
          </div>
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
    id: "vaanra",
    name: "VAANRA",
    category: "E-Commerce",
    description: "Global E-commerce Infrastructure",
    tags: ["Next.js", "Shopify Headless", "Stripe"],
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    id: "saheeba",
    name: "SAHEEBA",
    category: "IoT / Mobile",
    description: "Real-time IoT & Community Platform",
    tags: ["React Native", "WebSocket", "Geolocation"],
    gradient: "from-purple-500/20 to-pink-500/5",
  },
  {
    id: "ai-workspace",
    name: "AI WORKSPACE",
    category: "SaaS",
    description: "Enterprise Document Intelligence",
    tags: ["Next.js 15", "OpenAI", "Vector DB"],
    gradient: "from-amber-500/20 to-orange-500/5",
  },
];

function SelectedWorksSection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-zinc-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="section-container">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
            Defined by Our Output
          </h2>
          <p className="text-zinc-600 text-lg">
            A curation of recent engineering challenges and production releases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 overflow-hidden"
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Category Badge */}
                <div className="inline-flex px-3 py-1 bg-zinc-100/80 backdrop-blur-sm text-zinc-900 border border-zinc-200/50 text-xs font-bold uppercase tracking-wider rounded-full mb-6 self-start group-hover:border-zinc-300 transition-colors">
                  {project.category}
                </div>

                {/* Project Name */}
                <h3 className="text-3xl font-black text-zinc-900 mb-3 tracking-tight group-hover:text-teal-700 transition-colors">
                  {project.name}
                </h3>

                <p className="text-zinc-600 mb-8 flex-grow text-lg">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-semibold rounded-md group-hover:border-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/work/${project.id}`}
                  className="inline-flex items-center gap-2 text-zinc-900 font-bold group-hover:text-teal-600 transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-12" variants={fadeInUp}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 text-zinc-700 bg-white border border-zinc-200 hover:border-teal-200 hover:text-teal-600 font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
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
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-50/50" />

      <div className="section-container relative z-10 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6"
          variants={fadeInUp}
        >
          Your project could be next.
        </motion.h2>

        <motion.p
          className="text-zinc-600 text-lg max-w-xl mx-auto mb-10"
          variants={fadeInUp}
        >
          Skip the email tag. Book a 30-minute technical roadmap call directly
          with our engineering team.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
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
