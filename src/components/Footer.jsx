"use client";

import { motion } from "framer-motion";
import weddingData from "../config/weddingData";

export default function Footer() {
    return (
        <footer className="py-16 px-6 text-center font-body text-xs tracking-widest uppercase text-[var(--color-rose-ink)] font-medium relative z-20 flex justify-center">

            <div className="relative inline-flex items-center justify-center py-4 px-6 md:px-10 rounded-full bg-[var(--color-blossom-light)]/10 border border-white/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.8)] overflow-hidden backdrop-blur-sm group">

                {/* The sweeping glass shine */}
                <motion.div
                    initial={{ x: "-150%" }}
                    animate={{ x: "200%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear",
                        repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-10 w-1/2 h-full bg-gradient-to-r from-transparent via-[var(--color-rose-ink)] to-transparent opacity-25 blur-[2px] skew-x-[-25deg]"
                />

                <span className="relative z-20 flex flex-wrap justify-center items-center gap-y-2">
                    {weddingData.couple.combinedTitle}
                    <span className="mx-3 text-[var(--color-blossom)]/80">✿</span>
                    {weddingData.reception.date.split('-').join('/')}
                    <span className="mx-3 text-[var(--color-blossom)]/80">✿</span>
                    {weddingData.reception.venue}
                </span>

            </div>

        </footer>
    );
}
