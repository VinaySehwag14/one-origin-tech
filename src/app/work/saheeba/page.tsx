import { Metadata } from "next";
import SaheebaClient from "./SaheebaClient";

export const metadata: Metadata = {
    title: "Saheeba Case Study | Mobile Engineering",
    description: "Real-time IoT & Community Platform combining mapping precision with massive concurrent users. Built with React Native and WebSockets.",
    alternates: {
        canonical: "https://oneorigintech.com/work/saheeba",
    },
    openGraph: {
        title: "Saheeba Case Study | One Origin Tech",
        description: "Real-time IoT & Community Platform combining mapping precision with massive concurrent users.",
        url: "https://oneorigintech.com/work/saheeba",
    },
};

export default function SaheebaPage() {
    return <SaheebaClient />;
}
