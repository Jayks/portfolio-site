"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X, LayoutGrid, Database, Cloud, Brain, Search, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudy {
    title: string;
    client: string;
    role: string;
    category: string;
    icon: React.ReactNode;
    shortDescription: string;
    challenge: string[];
    solution: string[];
    impact: string[];
}

const portfolioItems: CaseStudy[] = [
    {
        title: "Enterprise Data Platform Modernization",
        client: "Global Foodservice Distribution Leader",
        role: "Engagement Lead / Delivery Oversight",
        category: "Cloud & Data Engineering",
        icon: <Cloud size={24} />,
        shortDescription: "Consolidated siloed legacy data into a cloud-native AWS data lake to enable unified analytics and predictive churn modeling.",
        challenge: [
            "Legacy and siloed data systems prevented a unified view of customers and operations.",
            "Limited ability to predict and prevent customer churn in a competitive distribution market.",
            "Slow data processing restricted real-time operational decision-making."
        ],
        solution: [
            "Led the modernization of the enterprise data platform and analytics ecosystem.",
            "Built a cloud-native data lake on Amazon Web Services consolidating enterprise datasets.",
            "Enabled machine learning models to detect churn signals and customer trends.",
            "Delivered integrated analytics for supply chain visibility and commercial performance insights."
        ],
        impact: [
            "Enabled predictive customer retention insights for proactive engagement.",
            "Improved operational visibility across distribution and supply chain networks.",
            "Established a scalable enterprise data platform supporting large-scale analytics workloads."
        ]
    },
    {
        title: "Databricks Data Platform Modernization",
        client: "Global Automobile Enterprise",
        role: "Delivery head / Platform Modernization",
        category: "Data Modernization",
        icon: <Database size={24} />,
        shortDescription: "Accelerated analytics by 5x and reduced compute costs by 40% through a custom-built Spark-based modular pipeline framework.",
        challenge: [
            "Slow and inefficient data pipelines delayed analytics and reporting.",
            "High infrastructure costs due to inefficient legacy processing frameworks.",
            "Fragmented governance and access controls across enterprise data assets."
        ],
        solution: [
            "Modernized the platform on Databricks with scalable pipelines using Apache Spark.",
            "Implemented Unity Catalog for centralized governance and fine-grained data access control.",
            "Introduced CI/CD automation for reliable and standardized deployments.",
            "Built a modular pipeline framework to accelerate development of new data products."
        ],
        impact: [
            "Platform modernization delivered in < 2 months.",
            "3–5× faster pipeline execution and improved data availability.",
            "30–40% reduction in compute costs through optimized processing."
        ]
    },
    {
        title: "Enterprise BI Modernization",
        client: "Global Insurer",
        role: "Program Lead / Delivery Oversight",
        category: "Analytics & BI",
        icon: <LayoutGrid size={24} />,
        shortDescription: "Migrated ~1000 dashboards from Tableau to Power BI with zero business disruption, significantly reducing licensing costs.",
        challenge: [
            "High licensing and infrastructure costs from ~1000 Tableau dashboards.",
            "Limited integration with the Microsoft analytics ecosystem.",
            "Inconsistent data models across dashboards causing maintenance challenges."
        ],
        solution: [
            "Led enterprise migration program from Tableau to Microsoft Power BI.",
            "Developed migration framework including automated conversion accelerators.",
            "Standardized data models and semantic layers to ensure reporting consistency.",
            "Implemented governance and security controls integrated with Microsoft ecosystem."
        ],
        impact: [
            "Successfully migrated ~1000 dashboards with minimal disruption.",
            "Reduced BI licensing and operational costs through platform consolidation.",
            "Improved report performance, scalability, and user adoption."
        ]
    },
    {
        title: "R&D Knowledge Digitization & Retrieval",
        client: "Global Oil and Gas Company",
        role: "Engagement Lead / Analytics Program Oversight",
        category: "AI & Graph Data",
        icon: <Brain size={24} />,
        shortDescription: "Digitized physical research files using OCR and Neo4j graph database, preventing costly duplicate laboratory experiments.",
        challenge: [
            "Critical R&D results were stored in physical documents and scanned PDFs.",
            "Absence of a centralized repository or single source of truth for experimental data.",
            "Scientists often repeated experiments unknowingly, leading to wasted effort and cost."
        ],
        solution: [
            "Led the development of an automated R&D knowledge digitization platform.",
            "Implemented OCR-based extraction to parse technical details from scanned files.",
            "Stored research context in Neo4j graph database to capture compound-experiment relationships.",
            "Integrated an AI-powered chatbot for natural language knowledge retrieval."
        ],
        impact: [
            "Digitized and structured previously inaccessible R&D knowledge.",
            "Reduced duplicate experimentation effort by enabling experiment discovery.",
            "Created a scalable knowledge graph foundation for future AI insights."
        ]
    },
    {
        title: "Enterprise Technical Knowledge Chatbot",
        client: "Specialty Chemicals / Manufacturing",
        role: "Engagement Lead / AI Solution Oversight",
        category: "Generative AI",
        icon: <Search size={24} />,
        shortDescription: "Early-stage enterprise AI assistant enabling conversational access to manual/guides across heterogeneous document formats.",
        challenge: [
            "Technical product information was stored across multiple siloed formats and repositories.",
            "Engineers struggled to quickly locate accurate information from large volumes of documentation.",
            "Manual search slowed troubleshooting and customer support processes."
        ],
        solution: [
            "Led development of an enterprise knowledge chatbot using Azure cloud architecture.",
            "Built automated pipelines to parse and index PDFs, Word files, and Excel sheets.",
            "Structured knowledge into QnA Maker for conversational question-answering.",
            "Enhanced system with NLP capabilities for precise answer extraction."
        ],
        impact: [
            "Enabled conversational access to large volumes of technical documentation.",
            "Reduced time required for engineers to locate relevant information.",
            "Established a scalable framework for AI-driven support automation."
        ]
    }
];

export default function PortfolioSection() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="portfolio" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex justify-between items-end"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Featured <span className="text-emerald-500">Work</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Strategic Data & AI transformations delivering measurable business value across industries.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedId(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group cursor-pointer overflow-hidden border border-white/5 hover:border-sky-500/30 transition-all"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {item.shortDescription}
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium">View Case Study</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-sky-500 transition-all">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Modal */}
                <AnimatePresence>
                    {selectedId !== null && (
                        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12 overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="relative w-full max-w-5xl h-[85vh] md:h-[800px] bg-slate-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                            >
                                {/* Modal Header */}
                                <div className="sticky top-0 z-10 p-6 md:p-10 flex items-center justify-between bg-gradient-to-b from-slate-950/100 to-slate-950/0 backdrop-blur-sm">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 border border-sky-500/30">
                                            {portfolioItems[selectedId].icon}
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                                {portfolioItems[selectedId].title}
                                            </h2>
                                            <p className="text-emerald-500 text-sm font-bold uppercase tracking-widest">
                                                {portfolioItems[selectedId].category}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-lg"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Modal Content - Scrollable */}
                                <div className="flex-grow overflow-y-auto px-6 md:px-10 pb-16 space-y-12 scrollbar-hide">
                                    {/* Overview Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                                                <Terminal size={14} className="text-sky-500" /> Client
                                            </h4>
                                            <p className="text-white font-medium">{portfolioItems[selectedId].client}</p>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                                                <Terminal size={14} className="text-sky-500" /> My Role
                                            </h4>
                                            <p className="text-white font-medium">{portfolioItems[selectedId].role}</p>
                                        </div>
                                    </div>

                                    {/* Main Content Sections */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className="w-1 h-6 bg-sky-500 rounded-full" />
                                                Business Challenge
                                            </h3>
                                            <ul className="space-y-4">
                                                {portfolioItems[selectedId].challenge.map((c, i) => (
                                                    <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                                                        <span className="text-sky-500/50 mt-1">•</span>
                                                        {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                                                Solution Delivered
                                            </h3>
                                            <ul className="space-y-4">
                                                {portfolioItems[selectedId].solution.map((s, i) => (
                                                    <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                                                        <span className="text-emerald-500/50 mt-1">•</span>
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className="w-1 h-6 bg-orange-500 rounded-full" />
                                                Impact & Results
                                            </h3>
                                            <ul className="space-y-4">
                                                {portfolioItems[selectedId].impact.map((imp, i) => (
                                                    <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                                                        <span className="text-orange-500/50 mt-1">•</span>
                                                        {imp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
