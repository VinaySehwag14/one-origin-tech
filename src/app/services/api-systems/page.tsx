import { ArrowRight, Box, Layers, Link as LinkIcon, Network, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedDiv } from "@/components/ui/AnimatedWrappers";

const metrics = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<50ms", label: "P99 Latency" },
    { value: "10B+", label: "Requests/Month" },
];

export default function APISystemsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-zinc-950 text-white">
                {/* Background Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv
                            animation="stagger"
                            className="flex-1"
                        >
                            <AnimatedDiv animation="fadeInUp" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 font-medium text-sm mb-8">
                                <Network className="w-4 h-4" />
                                Backend Infrastructure
                            </AnimatedDiv>

                            <AnimatedDiv animation="fadeInUp" className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                                <h1 className="inline">APIs that <br className="hidden md:block" /></h1>
                                <span className="text-teal-400">Power Ecosystems.</span>
                            </AnimatedDiv>

                            <AnimatedDiv animation="fadeInUp" className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                                <p>RESTful, GraphQL, and gRPC backends designed for extreme scalability, strict security, and flawless developer experience.</p>
                            </AnimatedDiv>

                            <AnimatedDiv animation="fadeInUp">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
                                >
                                    Architect Your Backend
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </AnimatedDiv>
                        </AnimatedDiv>

                        {/* Animated Code Block Visual */}
                        <AnimatedDiv
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex-1 w-full max-w-lg"
                        >
                            <div className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-2 text-xs text-zinc-500 font-mono">api.ts</span>
                                </div>
                                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-zinc-300">
                                    <p><span className="text-pink-400">export</span> <span className="text-blue-400">default</span> <span className="text-purple-400">async function</span> <span className="text-yellow-200">handler</span>(</p>
                                    <p className="pl-4">req: <span className="text-teal-300">NextApiRequest</span>,</p>
                                    <p className="pl-4">res: <span className="text-teal-300">NextApiResponse</span></p>
                                    <p>) {'{'}</p>
                                    <p className="pl-4"><span className="text-pink-400">const</span> {'{'} data {'}'} = <span className="text-pink-400">await</span> <span className="text-yellow-200">validateSchema</span>(req.body);</p>
                                    <p className="pl-4"><span className="text-zinc-500 mt-2 block">// Distributed transation</span></p>
                                    <p className="pl-4"><span className="text-pink-400">const</span> result = <span className="text-pink-400">await</span> db.<span className="text-yellow-200">transaction</span>(<span className="text-pink-400">async</span> (tx) <span className="text-pink-400">=&gt;</span> {'{'}</p>
                                    <p className="pl-8"><span className="text-pink-400">return</span> tx.<span className="text-yellow-200">process</span>(data);</p>
                                    <p className="pl-4">{'}'});</p>
                                    <p className="pl-4 mt-2"><span className="text-pink-400">return</span> res.<span className="text-yellow-200">status</span>(<span className="text-orange-400">200</span>).<span className="text-yellow-200">json</span>(result);</p>
                                    <p>{'}'}</p>
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-12 bg-teal-600 outline outline-1 outline-teal-700">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-teal-500">
                        {metrics.map((metric, index) => (
                            <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0">
                                <span className="text-4xl md:text-5xl font-black text-white mb-2">{metric.value}</span>
                                <span className="text-teal-100 font-medium uppercase tracking-wider text-sm">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Array */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Enterprise Grade Core</h2>
                        <p className="text-zinc-600 text-lg">We build the backbone of your platform with precision engineering.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center">
                                <LinkIcon className="w-6 h-6 text-zinc-900" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900">Third-Party Integrations</h3>
                            <p className="text-zinc-600 leading-relaxed">Seamlessly connect your application with Stripe, Twilio, Salesforce, or any proprietary external API.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-zinc-900" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900">Zero-Trust Security</h3>
                            <p className="text-zinc-600 leading-relaxed">Rate limiting, JWT/OAuth authentication, and encrypted payloads standard on every endpoint.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center">
                                <Box className="w-6 h-6 text-zinc-900" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900">Microservices Architecture</h3>
                            <p className="text-zinc-600 leading-relaxed">Decoupled services using Docker and Kubernetes to ensure isolated failures and independent scaling.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
