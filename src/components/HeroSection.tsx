"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sky-500 font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
                            Director | Data, AI & Analytics Strategy Leader
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                            Transforming businesses through <br className="hidden md:block" />
                            <span className="text-gradient">Data & AI.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                            I am a Strategic Data & AI Leader with 20+ years of experience partnering with business leaders to translate complex problems into measurable business outcomes — revenue growth, margin improvement, operational efficiency, and competitive advantage.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#experience"
                            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Explore My Journey <ArrowRight size={18} />
                        </Link>
                        <a
                            href="mailto:saijayakumar@gmail.com"
                            className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
