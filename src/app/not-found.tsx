import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Page Not Found | One Origin Tech",
    description: "The page you are looking for does not exist.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Dynamic Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="max-w-xl w-full text-center relative z-10 space-y-8">
                {/* Error Code */}
                <div className="relative inline-block">
                    <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600 tracking-tighter mix-blend-overlay opacity-80 select-none">
                        404
                    </h1>
                    <div className="absolute -inset-x-20 top-1/2 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent -translate-y-1/2" />
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        System Defect Detected Let&apos;s reroute.
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-md mx-auto">
                        The endpoint you&apos;re trying to access doesn&apos;t seem to exist. It might have been depreciated, moved, or never existed.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-teal-600/20 w-full sm:w-auto justify-center"
                    >
                        <Home className="w-5 h-5" />
                        Home Directory
                    </Link>
                    <Link
                        href="javascript:history.back()"
                        className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 font-semibold rounded-lg transition-colors w-full sm:w-auto justify-center"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </Link>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>
    );
}
