"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
    {
        title: "Enterprise BI Transformation",
        category: "Analytics Strategy",
        description: "Modernized legacy reports into self-serve BI dashboards for a global insurance client, reducing reporting time by 60%.",
        link: "#"
    },
    {
        title: "GenAI Agentic Accelerator",
        category: "AI Enablement",
        description: "Led the development of a market-ready Agentic AI accelerator focusing on intelligent document processing.",
        link: "#"
    },
    {
        title: "Customer Churn Prediction",
        category: "Machine Learning",
        description: "Designed a predictive ML pipeline identifying at-risk customers, preserving $5M in annual recurring revenue.",
        link: "#"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex justify-between items-end"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Featured <span className="text-emerald-500">Work</span>
                        </h2>
                        <p className="text-slate-400">
                            A selection of transformative projects and initiatives showcasing the intersection of data strategy, AI enablement, and measurable business value.
                        </p>
                    </div>
                    <Link href="https://linkedin.com/in/jayakumarsekar" target="_blank" className="hidden md:flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors">
                        View full portfolio on LinkedIn <ArrowRight size={16} />
                    </Link>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card group overflow-hidden relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="h-48 bg-slate-900 border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                                {/* Abstract visualization background */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-slate-900 to-black group-hover:scale-110 transition-transform duration-700" />
                                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center text-white/50 group-hover:text-emerald-400 transition-colors z-10">
                                    <ExternalLink size={24} />
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <span className="text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm flex-grow mb-6">
                                    {item.description}
                                </p>
                                <a
                                    href={item.link}
                                    className="text-white text-sm font-medium flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity mt-auto"
                                >
                                    Read Case Study <ArrowRight size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
