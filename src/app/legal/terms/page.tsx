import { Metadata } from "next";
import LegalClientLayout from "../LegalClientLayout";

export const metadata: Metadata = {
    title: "Terms of Service | One Origin Tech",
    description: "Terms of Service and conditions for using One Origin Tech's website and services.",
    alternates: {
        canonical: "https://oneorigintech.com/legal/terms",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsOfServicePage() {
    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            content: (
                <p>
                    By accessing or using the One Origin Tech website or our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                </p>
            ),
        },
        {
            id: "engineering-services",
            title: "Engineering Services",
            content: (
                <p>
                    One Origin Tech provides technical consulting, software engineering, and product development services. The specific scope, deliverables, and fees for any project will be agreed upon in a separate Statement of Work (SOW) or Master Services Agreement (MSA).
                </p>
            ),
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property",
            content: (
                <>
                    <p className="mb-4">
                        All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are the exclusive property of One Origin Tech and are protected by international copyright laws.
                    </p>
                    <p>
                        Regarding client projects, intellectual property rights for the developed software are assigned to the client upon full payment of all respective fees, subject to the specific terms outlined in the applicable SOW or MSA.
                    </p>
                </>
            ),
        },
        {
            id: "user-responsibilities",
            title: "User Responsibilities",
            content: (
                <>
                    <p className="mb-4">When using our website or communicating with our team, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate and complete information.</li>
                        <li>Use the website and services only for lawful purposes.</li>
                        <li>Refrain from transmitting any malware, viruses, or destructive code.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "limitation",
            title: "Limitation of Liability",
            content: (
                <p>
                    To the maximum extent permitted by applicable law, One Origin Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
                </p>
            ),
        },
        {
            id: "governing-law",
            title: "Governing Law",
            content: (
                <p>
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
                </p>
            ),
        },
        {
            id: "contact-us",
            title: "Contact Us",
            content: (
                <>
                    <p>
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="mt-8 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 text-zinc-300">
                        <p className="font-semibold text-white mb-2">One Origin Technologies Pvt. Ltd.</p>
                        <p>New Delhi, India</p>
                        <p className="mt-4">
                            Email: <a href="mailto:info@oneorigintech.com" className="text-teal-400 hover:text-teal-300 transition-colors">info@oneorigintech.com</a>
                        </p>
                    </div>
                </>
            ),
        },
    ];

    return (
        <LegalClientLayout
            title="Terms of Service"
            lastUpdated="January 1, 2024"
            sections={sections}
        />
    );
}
