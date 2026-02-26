import { Metadata } from "next";
import LegalClientLayout from "../LegalClientLayout";

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
    const sections = [
        {
            id: "introduction",
            title: "Introduction",
            content: (
                <p>
                    Welcome to One Origin Tech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy describes how we collect, use, and process your personal information when you visit our website or engage our engineering and consulting services.
                </p>
            ),
        },
        {
            id: "information-we-collect",
            title: "Information We Collect",
            content: (
                <>
                    <p className="mb-4">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. The personal information we collect may include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Contact Data:</strong> Name, email address, phone number, and company details.</li>
                        <li><strong>Communication Data:</strong> Details of your interactions with our team, including roadmap calls booked via Cal.com.</li>
                        <li><strong>Automated Data:</strong> IP addresses, browser types, and usage data collected automatically through website analytics.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "how-we-use",
            title: "How We Use Your Information",
            content: (
                <>
                    <p className="mb-4">We use the personal information collected via our website for a variety of business purposes, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Providing, developing, and improving our engineering services.</li>
                        <li>Communicating with you regarding technical proposals, support, and inquiries.</li>
                        <li>Administering our website and keeping it secure.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "how-we-share",
            title: "How We Share Your Information",
            content: (
                <p>
                    We do not sell your personal information. We may share your information with trusted third-party service providers (such as hosting and analytics providers, or our booking integration via Cal.com) who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
                </p>
            ),
        },
        {
            id: "data-security",
            title: "Data Security",
            content: (
                <p>
                    We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                </p>
            ),
        },
        {
            id: "third-party",
            title: "Third-Party Websites",
            content: (
                <p>
                    Our website may contain links to third-party websites or services (e.g., Cal.com for meeting bookings). We are not responsible for the privacy practices of those third parties. We encourage you to read the privacy policies of any third-party websites you visit.
                </p>
            ),
        },
        {
            id: "contact-us",
            title: "Contact Us",
            content: (
                <>
                    <p>
                        If you have questions or comments about this Privacy Policy, you may contact us at:
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
            title="Privacy Policy"
            lastUpdated="January 1, 2024"
            sections={sections}
        />
    );
}
