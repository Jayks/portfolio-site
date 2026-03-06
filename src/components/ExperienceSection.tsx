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
            "Led organization-wide GenAI enablement strategy, shaping market-ready Agentic AI accelerators.",
            "Drove margin optimization, exceeding forecast through capacity planning and execution governance."
        ]
    },
    {
        company: "LatentView Analytics",
        role: "Associate Director",
        duration: "April 2023 - April 2025",
        description: [
            "Led a $10M multi-client portfolio, scaling 100+ Data Engineers and Data Scientists.",
            "Partnered with senior business stakeholders to define analytics roadmaps aligned to revenue growth and operational efficiency.",
            "Enabled enterprise-wide transformation in Predictive Analytics, BI, and GenAI & LLM-based solutions."
        ]
    },
    {
        company: "LatentView Analytics",
        role: "Analytics Manager",
        duration: "August 2019 - March 2023",
        description: [
            "Drove complex analytics deliveries and mentored teams on problem framing, solution design, and analytical rigor.",
            "Championed analytics adoption and value realization across clients."
        ]
    },
    {
        company: "Cognizant",
        role: "Manager",
        duration: "June 2018 - July 2019",
        description: [
            "Led the design and adoption of advanced machine learning solutions.",
            "Mentored and coached data scientists, driving proof-of-value and proof-of-concept initiatives."
        ]
    },
    {
        company: "Cognizant",
        role: "Technical Lead & Onsite Manager",
        duration: "February 2008 - May 2018",
        description: [
            "Led a $3M multi-year managed services engagement for a large insurance client.",
            "Provided technical leadership to a 30-member offshore team.",
            "Established testing, quality assurance frameworks, and automated operational processes."
        ]
    },
    {
        company: "Cognizant",
        role: "Associate",
        duration: "February 2005 - February 2008",
        description: [
            "Owned end-to-end support, enhancement, and modernization of mission-critical mainframe applications.",
            "Designed and built new system interfaces supporting evolving business needs."
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
                            <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center text-sky-500">
                                <Briefcase size={14} />
                            </div>

                            <div className="glass-card p-6 md:p-8 relative group hover:border-sky-500/30 transition-colors">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/0 to-emerald-500/0 group-hover:from-sky-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-lg font-medium text-sky-400">{exp.company}</h4>
                                    </div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10 whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>

                                <ul className="space-y-2 mt-4 text-slate-400 text-sm md:text-base">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-emerald-500 mr-2 mt-1">▹</span>
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
