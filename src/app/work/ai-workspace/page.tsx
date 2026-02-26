import { Metadata } from "next";
import AIWorkspaceClient from "./AIWorkspaceClient";

export const metadata: Metadata = {
    title: "AI Workspace Case Study | One Origin Tech",
    description: "Enterprise document intelligence. Chat with thousands of PDFs instantly with exact source citations. Built with Next.js and OpenAI.",
    alternates: {
        canonical: "https://oneorigintech.com/work/ai-workspace",
    },
    openGraph: {
        title: "AI Workspace Case Study | One Origin Tech",
        description: "Enterprise document intelligence. Chat with thousands of PDFs instantly with exact source citations.",
        url: "https://oneorigintech.com/work/ai-workspace",
    },
};

export default function AIWorkspacePage() {
    return <AIWorkspaceClient />;
}
