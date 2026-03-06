"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black/20 mt-20">
            <div className="container mx-auto px-6 py-12 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white tracking-tight">
                            Jayakumar<span className="text-sky-500">.</span>
                        </h3>
                        <p className="text-slate-400 max-w-xs mx-auto md:mx-0">
                            Transforming complex problems into measurable business outcomes through Data & AI.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Contact</h3>
                        <ul className="space-y-3 flex flex-col items-center md:items-start text-slate-400">
                            <li>
                                <a href="mailto:saijayakumar@gmail.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                                    <Mail size={16} /> saijayakumar@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:8754469055" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                                    <Phone size={16} /> +91-8754469055
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/jayakumarsekar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                                >
                                    <Linkedin size={16} /> /jayakumarsekar
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Quick Links</h3>
                        <ul className="flex flex-col items-center md:items-start space-y-2 text-slate-400">
                            <li><Link href="#about" className="hover:text-sky-400 transition-colors">About</Link></li>
                            <li><Link href="#experience" className="hover:text-sky-400 transition-colors">Experience</Link></li>
                            <li><Link href="#skills" className="hover:text-sky-400 transition-colors">Skills & Certifications</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
                    <p>© {currentYear} Jayakumar Sekar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
