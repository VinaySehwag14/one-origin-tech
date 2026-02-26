import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Services | Web, Mobile & AI Engineering",
    description: "We architect scalable, production-grade systems using the world's most advanced stack across Next-Gen Web, Native Mobile, and Artificial Intelligence.",
    alternates: {
        canonical: "https://oneorigintech.com/services",
    },
    openGraph: {
        title: "Services | One Origin Tech",
        description: "We architect scalable, production-grade systems using the world's most advanced stack.",
        url: "https://oneorigintech.com/services",
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
