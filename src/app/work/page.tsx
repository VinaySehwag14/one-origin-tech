import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
    title: "Selected Works | Our Projects & Portfolio",
    description: "A curation of recent engineering challenges and production releases by One Origin Tech. Explore our work in E-Commerce, IoT, SaaS, and AI.",
    alternates: {
        canonical: "https://oneorigintech.com/work",
    },
    openGraph: {
        title: "Selected Works | One Origin Tech",
        description: "A curation of recent engineering challenges and production releases by One Origin Tech.",
        url: "https://oneorigintech.com/work",
    },
};

export default function WorkPage() {
    return <WorkClient />;
}
