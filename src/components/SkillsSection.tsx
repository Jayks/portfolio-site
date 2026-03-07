"use client";

import { motion } from "framer-motion";
import { Code2, Award, Zap, Languages, Brain, Binary, Globe, ShieldCheck } from "lucide-react";

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
    { title: "Databricks Certified Generative AI Engineer Associate", issuer: "Databricks" },
    { title: "Databricks Certified Machine Learning Associate", issuer: "Databricks" },
    { title: "Databricks Certified Data Engineer Associate", issuer: "Databricks" },
    { title: "Deep Learning with TensorFlow", issuer: "Coursera" },
    { title: "Building Resilient Streaming Systems", issuer: "Google Cloud Platform" }
];

const languages = [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Professional" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Elementary" }
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group">
                                    <ShieldCheck size={16} className="text-emerald-500 opacity-50 group-hover:opacity-100" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-200 leading-tight">{cert.title}</p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
