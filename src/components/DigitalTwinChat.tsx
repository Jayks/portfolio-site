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

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener("open-digital-twin", handleOpenChat);
        return () => window.removeEventListener("open-digital-twin", handleOpenChat);
    }, []);

    // Prevent scroll when chat is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

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
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-[100]">
                {!isOpen && (
                    <motion.button
                        layoutId="chat-window"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-sky-500/40 border border-sky-400/30"
                    >
                        <MessageSquare size={28} />
                    </motion.button>
                )}
            </div>

            {/* Centered Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Chat Window */}
                        <motion.div
                            layoutId="chat-window"
                            initial={{ opacity: 0, scale: 0.8, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-4xl h-[700px] max-h-[90vh] flex flex-col bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_-12px_rgba(14,165,233,0.3)] overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-500/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 border border-sky-500/30 shadow-inner">
                                        <Bot size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                                            Jayakumar&apos;s Digital Twin
                                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                        </h3>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Professional AI Assistant</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div
                                ref={scrollRef}
                                className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03)_0%,transparent_100%)]"
                            >
                                {messages.map((m, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={i}
                                        className={cn(
                                            "flex gap-4 max-w-[80%] md:max-w-[70%]",
                                            m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl shrink-0 flex items-center justify-center shadow-lg",
                                            m.role === "assistant" ? "bg-slate-900 border border-sky-500/20 text-sky-400" : "bg-sky-500 text-white"
                                        )}>
                                            {m.role === "assistant" ? <Bot size={20} /> : <User size={20} />}
                                        </div>
                                        <div className={cn(
                                            "p-4 rounded-2xl md:rounded-3xl text-sm md:text-base leading-relaxed shadow-sm",
                                            m.role === "assistant"
                                                ? "bg-white/5 text-slate-200 border border-white/10"
                                                : "bg-gradient-to-br from-sky-500 to-sky-600 text-white"
                                        )}>
                                            {m.content}
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                    <div className="flex gap-4 mr-auto max-w-[80%]">
                                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                                            <Bot size={20} />
                                        </div>
                                        <div className="p-4 rounded-3xl bg-white/5 text-slate-400 border border-white/10 flex items-center gap-3">
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce" />
                                            </div>
                                            <span className="text-xs font-medium tracking-wide">Thinking...</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Bottom Section */}
                            <div className="p-6 bg-slate-950/50 border-t border-white/5 space-y-4">
                                {/* Example Questions */}
                                {messages.length < 4 && !isLoading && (
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {exampleQuestions.map((q, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSend(q)}
                                                className="text-xs px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-sky-500 hover:text-white hover:border-sky-400 transition-all shadow-lg"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Input Area */}
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSend(input);
                                    }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full blur opacity-10 group-focus-within:opacity-25 transition duration-500" />
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Ask me anything about my journey..."
                                            className="w-full bg-slate-900/80 border border-white/10 rounded-full py-4 pl-6 pr-16 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500/50 shadow-inner"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!input.trim() || isLoading}
                                            className="absolute right-2.5 w-11 h-11 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:bg-slate-800 disabled:scale-100 transition-all"
                                        >
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </form>

                                <p className="text-[10px] text-center text-slate-600 uppercase tracking-[0.2em] font-bold">
                                    Powered by GPT-4o & Career Insights
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
