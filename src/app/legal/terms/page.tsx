"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TermsOfServicePage() {
    return (
        <section className="py-24 md:py-32 bg-white min-h-screen">
            <div className="section-container max-w-4xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="space-y-12"
                >
                    <div className="border-b border-zinc-200 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-zinc-500">
                            Effective Date: January 1, 2024
                        </p>
                    </div>

                    <div className="space-y-10 text-zinc-600 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing or using the One Origin Tech website or our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                2. Engineering Services
                            </h2>
                            <p>
                                One Origin Tech provides technical consulting, software engineering, and product development services. The specific scope, deliverables, and fees for any project will be agreed upon in a separate Statement of Work (SOW) or Master Services Agreement (MSA).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                3. Intellectual Property
                            </h2>
                            <p className="mb-4">
                                All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are the exclusive property of One Origin Tech and are protected by international copyright laws.
                            </p>
                            <p>
                                Regarding client projects, intellectual property rights for the developed software are assigned to the client upon full payment of all respective fees, subject to the specific terms outlined in the applicable SOW or MSA.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                4. User Responsibilities
                            </h2>
                            <p className="mb-4">When using our website or communicating with our team, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and complete information.</li>
                                <li>Use the website and services only for lawful purposes.</li>
                                <li>Refrain from transmitting any malware, viruses, or destructive code.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                5. Limitation of Liability
                            </h2>
                            <p>
                                To the maximum extent permitted by applicable law, One Origin Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                6. Governing Law
                            </h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                7. Contact Us
                            </h2>
                            <p>
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                                <p className="font-semibold text-zinc-900">One Origin Technologies Pvt. Ltd.</p>
                                <p>New Delhi, India</p>
                                <p>Email: <a href="mailto:hello@oneorigintech.com" className="text-teal-600 hover:underline">hello@oneorigintech.com</a></p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
