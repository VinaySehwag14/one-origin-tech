import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Book a 30-minute technical roadmap call directly with our engineering team. Let's engineer your vision.",
    alternates: {
        canonical: "https://oneorigintech.com/contact",
    },
    openGraph: {
        title: "Contact One Origin Tech",
        description: "Book a 30-minute technical roadmap call directly with our engineering team.",
        url: "https://oneorigintech.com/contact",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
