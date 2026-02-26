import { AnimatedDiv } from "@/components/ui/AnimatedWrappers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | One Origin Tech",
    description: "Privacy Policy and data handling practices for One Origin Tech.",
    alternates: {
        canonical: "https://oneorigintech.com/legal/privacy",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <section className="py-24 md:py-32 bg-white min-h-screen">
            <div className="section-container max-w-4xl mx-auto">
                <AnimatedDiv
                    animation="fadeInUp"
                    className="space-y-12"
                >
                    <div className="border-b border-zinc-200 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-zinc-500">
                            Effective Date: January 1, 2024
                        </p>
                    </div>

                    <div className="space-y-10 text-zinc-600 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                1. Introduction
                            </h2>
                            <p>
                                Welcome to One Origin Tech ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy describes how we collect, use, and process your personal information when you visit our website or engage our engineering and consulting services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                2. Information We Collect
                            </h2>
                            <p className="mb-4">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. The personal information we collect may include:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Contact Data:</strong> Name, email address, phone number, and company details.</li>
                                <li><strong>Communication Data:</strong> Details of your interactions with our team, including roadmap calls booked via Cal.com.</li>
                                <li><strong>Automated Data:</strong> IP addresses, browser types, and usage data collected automatically through website analytics.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-4">We use the personal information collected via our website for a variety of business purposes, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Providing, developing, and improving our engineering services.</li>
                                <li>Communicating with you regarding technical proposals, support, and inquiries.</li>
                                <li>Administering our website and keeping it secure.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                4. How We Share Your Information
                            </h2>
                            <p>
                                We do not sell your personal information. We may share your information with trusted third-party service providers (such as hosting and analytics providers, or our booking integration via Cal.com) who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                5. Data Security
                            </h2>
                            <p>
                                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                6. Third-Party Websites
                            </h2>
                            <p>
                                Our website may contain links to third-party websites or services (e.g., Cal.com for meeting bookings). We are not responsible for the privacy practices of those third parties. We encourage you to read the privacy policies of any third-party websites you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                7. Contact Us
                            </h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, you may contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                                <p className="font-semibold text-zinc-900">One Origin Technologies Pvt. Ltd.</p>
                                <p>New Delhi, India</p>
                                <p>Email: <a href="mailto:info@oneorigintech.com" className="text-teal-600 hover:underline">info@oneorigintech.com</a></p>
                            </div>
                        </section>
                    </div>
                </AnimatedDiv>
            </div>
        </section>
    );
}
