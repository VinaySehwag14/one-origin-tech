import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

import { HomeHero } from "@/components/home/HomeHero";
import { HomeManifesto } from "@/components/home/HomeManifesto";
import { ServicesCards } from "@/components/home/ServicesCards";
import { AnimatedCTAButton } from "@/components/home/AnimatedCTAButton";
import { SelectedWorksCards } from "@/components/home/SelectedWorksCards";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedWrappers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Origin Tech | Engineering Ideas to Life",
  description: "One Origin is the digital product studio for founders who refuse to compromise on performance. Next.js, AI, and Mobile engineering at global standards.",
  alternates: {
    canonical: "https://oneorigintech.com",
  },
  openGraph: {
    title: "One Origin Tech | Engineering Ideas to Life",
    description: "The global Idea-to-Production studio. We bridge the gap between visionary concepts and scalable software.",
    url: "https://oneorigintech.com",
  },
};

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  return (
    <AnimatedSection
      className="py-24 md:py-32 bg-zinc-950"
      animation="stagger"
    >
      <div className="section-container">
        <AnimatedDiv className="text-center mb-16" animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Complete Solution
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Three pillars of technical excellence that power every project we deliver.
          </p>
        </AnimatedDiv>

        <ServicesCards />

        <AnimatedDiv
          className="text-center mt-12"
          animation="fadeInUp"
        >
          <AnimatedCTAButton />
        </AnimatedDiv>
      </div>
    </AnimatedSection>
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
    <AnimatedSection
      className="py-24 md:py-32 bg-zinc-50"
      animation="stagger"
    >
      <div className="section-container">
        <AnimatedDiv className="text-center mb-16" animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
            Ownership vs. Outsourcing
          </h2>
          <p className="text-zinc-600 text-lg">
            There&apos;s a difference. Here&apos;s what it looks like.
          </p>
        </AnimatedDiv>

        <AnimatedDiv
          className="max-w-4xl mx-auto overflow-visible"
          animation="fadeInUp"
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
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}

// ============================================
// SELECTED WORKS SECTION
// ============================================
function SelectedWorksSection() {
  return (
    <AnimatedSection
      className="py-24 md:py-32 bg-zinc-50"
      animation="stagger"
    >
      <div className="section-container">
        <AnimatedDiv className="text-center mb-16" animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
            Defined by Our Output
          </h2>
          <p className="text-zinc-600 text-lg">
            A curation of recent engineering challenges and production releases.
          </p>
        </AnimatedDiv>

        <SelectedWorksCards />

        {/* CTA */}
        <AnimatedDiv className="text-center mt-12" animation="fadeInUp">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 text-zinc-700 bg-white border border-zinc-200 hover:border-teal-200 hover:text-teal-600 font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <AnimatedSection
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      animation="stagger"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-50/50" />

      <div className="section-container relative z-10 text-center">
        <AnimatedDiv animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            Your project could be next.
          </h2>
        </AnimatedDiv>

        <AnimatedDiv animation="fadeInUp">
          <p className="text-zinc-600 text-lg max-w-xl mx-auto mb-10">
            Skip the email tag. Book a 30-minute technical roadmap call directly
            with our engineering team.
          </p>
        </AnimatedDiv>

        <AnimatedDiv animation="fadeInUp">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />
      <HomeManifesto />
      <ServicesSection />
      <ComparisonSection />
      <SelectedWorksSection />
      <CTASection />
    </main>
  );
}
