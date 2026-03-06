"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const exampleQuestions = [
    "Tell me about your AI strategy experience.",
    "What was your role at Wavicle?",
    "How did you scale teams at LatentView?",
    "What is your educational background?",
];

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function DigitalTwinChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I'm Jayakumar's Digital Twin. How can I help you learn more about my 20-year career in Data & AI?",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    // Listen for custom event to open chat from Navbar
    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener("open-digital-twin", handleOpenChat);
        return () => window.removeEventListener("open-digital-twin", handleOpenChat);
    }, []);

    const handleSend = async (content: string) => {
        if (!content.trim() || isLoading) return;

        const newMessages = [...messages, { role: "user" as const, content }];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({ role: m.role, content: m.content }))
                }),
            });

            const data = await response.json();
            if (data.message) {
                setMessages([...newMessages, { role: "assistant", content: data.message }]);
            } else {
                throw new Error(data.error || "Failed to get response");
            }
        } catch (error) {
            setMessages([
                ...newMessages,
                { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-500/20 glass border border-sky-400/30"
                    >
                        <MessageSquare size={24} />
                    </motion.button>
                )}

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-sky-500/10 to-emerald-500/10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">Digital Twin</h3>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] text-slate-400 uppercase tracking-widest">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-hide"
                        >
                            {messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full shrink-0 flex items-center justify-center",
                                        m.role === "assistant" ? "bg-slate-800 text-sky-400" : "bg-sky-500 text-white"
                                    )}>
                                        {m.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm leading-relaxed",
                                        m.role === "assistant" ? "bg-white/5 text-slate-300 border border-white/5" : "bg-sky-500 text-white"
                                    )}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 mr-auto max-w-[85%]">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center">
                                        <Bot size={16} />
                                    </div>
                                    <div className="p-3 rounded-2xl bg-white/5 text-slate-300 border border-white/5 flex items-center gap-2">
                                        <Loader2 size={16} className="animate-spin" />
                                        <span className="text-xs">Digital twin is thinking...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Example Questions Footer */}
                        {messages.length < 3 && !isLoading && (
                            <div className="p-4 border-t border-white/5 bg-black/20">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Sparkles size={10} /> Suggested Questions
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exampleQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(q)}
                                            className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white hover:border-sky-500/30 transition-all text-left"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-slate-950">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend(input);
                                }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about my career..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white disabled:opacity-50 disabled:bg-slate-700 transition-all"
                                >
                                    <Send size={14} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
