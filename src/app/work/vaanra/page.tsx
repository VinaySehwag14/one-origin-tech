import { Metadata } from "next";
import VaanraClient from "./VaanraClient";

export const metadata: Metadata = {
    title: "Vaanra Case Study | Headless E-Commerce",
    description: "Architecting a zero-downtime, sub-second headless storefront for massive influencer traffic spikes. Built with Next.js and Shopify API.",
    alternates: {
        canonical: "https://oneorigintech.com/work/vaanra",
    },
    openGraph: {
        title: "Vaanra Case Study | One Origin Tech",
        description: "Architecting a zero-downtime, sub-second headless storefront for massive influencer traffic spikes.",
        url: "https://oneorigintech.com/work/vaanra",
    },
};

export default function VaanraPage() {
    return <VaanraClient />;
}
