"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Award, Zap, Languages, Brain, Binary, Globe, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

const skillGroups = [
    {
        title: "Strategic Leadership",
        icon: <Zap className="text-sky-500" size={24} />,
        skills: [
            "Data & AI Strategy",
            "Enterprise Analytics Transformation",
            "Business & Technology Alignment",
            "Operating Model & Governance Design",
            "Scaling High-Performance Data Teams",
            "Thought Leadership",
            "Stakeholder Management"
        ]
    },
    {
        title: "AI & Data Science",
        icon: <Brain className="text-emerald-500" size={24} />,
        skills: [
            "GenAI & Large Language Models (LLMs)",
            "Agentic AI Architecture",
            "Natural Language Processing (NLP)",
            "Machine Learning (Regression, Classification, Clustering)",
            "Deep Learning (TensorFlow)",
            "Predictive Analytics & Decision Intelligence",
            "Exploratory Data Analysis (EDA)"
        ]
    },
    {
        title: "Data Engineering & Platforms",
        icon: <Binary className="text-orange-500" size={24} />,
        skills: [
            "Databricks (Data Engineer & ML Associate)",
            "MLOps & Big Data (Spark, Hadoop, Hive)",
            "Cloud Platforms (AWS, Azure, GCP)",
            "Data Platforms (Snowflake, Databricks)",
            "Graph Databases (Neo4j)",
            "Relational Databases (Oracle, MySQL, DB2)",
            "Data Migration & Integration"
        ]
    }
];

const certifications = [
    {
        title: "Databricks Certified Generative AI Engineer Associate",
        issuer: "Databricks",
        badge: "/certs/genai-badge.png",
        fullCert: "/certs/genai-cert.png"
    },
    {
        title: "Databricks Certified Machine Learning Associate",
        issuer: "Databricks",
        badge: "/certs/ml-badge.png",
        fullCert: "/certs/ml-cert.png"
    },
    {
        title: "Databricks Certified Data Engineer Associate",
        issuer: "Databricks",
        badge: "/certs/data-engineer-badge.png",
        fullCert: "/certs/data-engineer-cert.png"
    },
    {
        title: "Deep Learning with TensorFlow",
        issuer: "Coursera",
        badge: null,
        fullCert: null
    },
    {
        title: "Building Resilient Streaming Systems",
        issuer: "Google Cloud Platform",
        badge: null,
        fullCert: null
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export default function SkillsSection() {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

    return (
        <section id="skills" className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-sky-500/5 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-radial from-emerald-500/5 to-transparent blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Capabilities & <span className="text-emerald-500">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        A blend of 20+ years of high-level strategy and deep technical mastery in the Data & AI ecosystem.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass-card p-8 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, index) => (
                                    <motion.span
                                        variants={itemVariants}
                                        key={index}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-lg text-xs md:text-sm hover:bg-white/10 hover:border-sky-500/40 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                <Award className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Certifications</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    layoutId={cert.fullCert ? `cert-${index}` : undefined}
                                    onClick={() => cert.fullCert && setSelectedCert(cert)}
                                    className={cn(
                                        "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 transition-all group relative overflow-hidden",
                                        cert.fullCert ? "cursor-pointer hover:border-emerald-500/40 hover:bg-white/10" : "cursor-default"
                                    )}
                                >
                                    <div className="flex-shrink-0 relative w-12 h-12 flex items-center justify-center">
                                        {cert.badge ? (
                                            <img src={cert.badge} alt={cert.title} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-500">
                                                <ShieldCheck size={20} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-bold text-slate-200 leading-tight group-hover:text-white transition-colors">
                                            {cert.title}
                                        </p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1.5 flex items-center gap-2">
                                            {cert.issuer}
                                            {cert.fullCert && (
                                                <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                                    &bull; Click to view
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <AnimatePresence>
                {selectedCert && selectedCert.fullCert && (
                    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={`cert-${certifications.indexOf(selectedCert)}`}
                            className="relative w-full max-w-6xl max-h-[90vh] bg-slate-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-950/80 backdrop-blur-md">
                                <div>
                                    <h2 className="text-xl font-bold text-white">{selectedCert.title}</h2>
                                    <p className="text-sm text-slate-400">{selectedCert.issuer}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-grow overflow-auto p-4 md:p-8 flex items-center justify-center bg-black/40">
                                <img
                                    src={selectedCert.fullCert}
                                    alt={selectedCert.title}
                                    className="max-w-full max-h-full object-contain shadow-2xl rounded-lg border border-white/5"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
