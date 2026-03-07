"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Wavicle Data Solutions",
        role: "Director",
        duration: "April 2025 - Present",
        description: [
            "Own delivery and business outcomes for enterprise analytics and BI transformation programs across Insurance and Financial Services.",
            "Led large-scale BI modernization and cloud governance initiatives, improving delivery predictability and cost control.",
            "Drove margin optimization exceeding forecast through capacity planning, delivery discipline, and execution governance.",
            "Led organization-wide GenAI enablement strategy, including curriculum design and leadership alignment.",
            "Spearheaded Agentic AI accelerator strategy, shaping market-ready solutions and supporting go-to-market positioning."
        ]
    },
    {
        company: "LatentView Analytics",
        role: "Associate Director",
        duration: "August 2019 - April 2025",
        description: [
            "Led a $10M multi-client portfolio, ensuring delivery excellence and team scalability while maintaining high CSAT.",
            "Partnered with senior business stakeholders to define analytics roadmaps aligned to revenue growth and operational efficiency.",
            "Scaled and led 100+ Data Engineers and Data Scientists, focusing on leadership development and capability maturity.",
            "Enabled enterprise-wide transformation across Cloud Analytics, Predictive Intelligence, and GenAI/LLM-based solutions.",
            "Championed analytics adoption and value realization through executive storytelling and POV/POC strategies."
        ]
    },
    {
        company: "Cognizant Technology Solutions",
        role: "Project Manager",
        duration: "April 2015 - July 2019",
        description: [
            "Led the design and adoption of advanced machine learning solutions, ensuring models were aligned to measurable business objectives.",
            "Mentored and coached data scientists and analysts on problem framing, solution design, and analytical rigor.",
            "Drove proof-of-value and proof-of-concept initiatives to accelerate stakeholder buy-in and informed decision-making.",
            "Established ML-driven automation frameworks to eliminate manual workflows and improve operational efficiency.",
            "Led Quarterly Business Reviews (QBRs) with clients, delivering insights on revenue trends and growth opportunities."
        ]
    },
    {
        company: "Cognizant Technology Solutions",
        role: "Onsite Lead (USA)",
        duration: "February 2008 - April 2015",
        description: [
            "Led a $3M multi-year managed services engagement for a large insurance client, ensuring delivery stability and quality.",
            "Provided technical and delivery leadership to a 30-member offshore team within the Claims portfolio.",
            "Established testing and quality assurance frameworks ensuring robust validation across critical mainframe and Oracle systems.",
            "Translated complex business requirements into scalable solution designs through structured gap assessment and stakeholder interviews.",
            "Managed project governance, risks, and executive reporting to ensure transparency and alignment across global stakeholders."
        ]
    },
    {
        company: "Cognizant Technology Solutions",
        role: "Analyst / Developer",
        duration: "April 2005 - February 2008",
        description: [
            "Owned end-to-end support, enhancement, and modernization of mission-critical mainframe applications.",
            "Performed impact and feasibility analysis for credit risk-related algorithms supporting business decisions.",
            "Analyzed end-to-end data flows across heterogeneous systems enabling smooth integration.",
            "Designed, built, and validated new system interfaces to support evolving business needs."
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Career <span className="text-sky-500">Journey</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto md:mx-0">
                        Over two decades of experience evolving from building systems to building businesses enabled by data.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center text-sky-500 z-10">
                                <Briefcase size={14} />
                            </div>

                            <div className="glass-card p-6 md:p-8 relative group hover:border-sky-500/30 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/0 to-emerald-500/0 group-hover:from-sky-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                                        <h4 className="text-lg font-medium text-slate-300">{exp.company}</h4>
                                    </div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-slate-400 text-sm border border-white/10 whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>

                                <ul className="space-y-3 mt-4 text-slate-400 text-sm md:text-base">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-sky-500 mr-2 mt-1 flex-shrink-0">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
