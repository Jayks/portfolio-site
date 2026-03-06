"use client";

import { motion } from "framer-motion";
import { Code2, Award, Zap, Languages } from "lucide-react";

const skills = [
    "Data & AI Strategy",
    "Enterprise Analytics Transformation",
    "Business & Technology Alignment",
    "Generative AI & LLMs",
    "Predictive Analytics & Decision Intelligence",
    "Cloud & Analytics Platforms",
    "Operating Model & Governance Design",
    "Scaling High-Performance Data Teams"
];

const certifications = [
    "Databricks Certified Generative AI Engineer Associate",
    "Deep Learning with TensorFlow",
    "Building Resilient Streaming Systems on Google Cloud Platform",
    "IBM DB2"
];

const languages = [
    "Tamil (Professional)",
    "Telugu (Native)",
    "English (Professional)",
    "Hindi (Elementary)"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-sky-500/5 to-transparent blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Capabilities & <span className="text-sky-500">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        A blend of strategic leadership and technical understanding, enabling organizations to maximize ROI from data investments.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Core Skills */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-2 glass-card p-8"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <Zap className="text-sky-500" size={24} />
                            <h3 className="text-2xl font-semibold text-white">Core Competencies</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    variants={itemVariants}
                                    key={index}
                                    className="px-4 py-2 bg-slate-900/50 border border-sky-500/20 text-slate-300 rounded-lg text-sm md:text-base hover:bg-sky-500/10 hover:border-sky-500/40 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                                <Award className="text-emerald-500" size={20} />
                                <h3 className="text-lg font-semibold text-white">Certifications</h3>
                            </div>
                            <ul className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start text-sm text-slate-400">
                                        <span className="text-emerald-500 mr-2 mt-0.5">•</span>
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Languages */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                                <Languages className="text-sky-500" size={20} />
                                <h3 className="text-lg font-semibold text-white">Languages</h3>
                            </div>
                            <ul className="space-y-2">
                                {languages.map((lang, index) => (
                                    <li key={index} className="text-sm text-slate-400">
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
