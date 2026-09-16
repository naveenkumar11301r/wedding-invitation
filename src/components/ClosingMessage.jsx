"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function ClosingMessage() {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <section className="relative py-16 md:py-32 px-6 flex flex-col items-center justify-center z-10 text-center min-h-[60vh] overflow-hidden">

            {/* Giant background bloom mimicking the final calm reveal */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none mix-blend-multiply scale-[2] md:scale-[3] -z-10">
                <BloomMotif size={600} onBloomComplete={() => setContentVisible(true)} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
                className="max-w-2xl w-full"
            >
                <p className="font-heading text-3xl md:text-5xl text-[var(--color-rose-ink)] leading-relaxed italic mb-12">
                    With joy in our hearts, <br />
                    we can't wait to celebrate this evening with you.
                </p>

                <p className="font-body text-[var(--color-rose-ink)]/70 tracking-widest uppercase text-sm">
                    — {weddingData.couple.combinedTitle}
                </p>
            </motion.div>

        </section>
    );
}
