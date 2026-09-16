"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function ReceptionDetails() {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <section id="details" className="relative py-8 md:py-12 px-6 flex flex-col items-center justify-center z-10 text-center overflow-hidden">
            <div className="w-full max-w-[1200px] flex flex-col items-center relative">

                {/* Naan (Mobile View - Top Left) */}
                <div className="flex md:hidden w-full justify-start pl-8 mb-6 relative z-20">
                    <motion.img
                        initial={{ opacity: 0, x: -20, rotate: -15, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -5, scale: 1 }}
                        animate={{ y: [-5, 5, -5] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 1 },
                            x: { duration: 1, type: 'spring' },
                            rotate: { duration: 1 },
                            scale: { duration: 1, type: 'spring' },
                            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                        }}
                        src="/Naan.png"
                        alt="Naan"
                        className="w-32 h-auto drop-shadow-md mix-blend-multiply"
                    />
                </div>

                {/* Naan (Left Image Desktop) - Animated & Blended */}
                <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -15, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -5, scale: 1, y: [-10, 10, -10] }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        opacity: { duration: 1.2 },
                        x: { duration: 1.2, type: 'spring' },
                        rotate: { duration: 1.2 },
                        scale: { duration: 1.2, type: 'spring' },
                        y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                    }}
                    className="hidden md:block absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-48 md:w-56 lg:w-72 z-20 pointer-events-none mix-blend-multiply"
                >
                    <img src="/Naan.png" alt="Naan" className="w-full h-auto drop-shadow-lg opacity-95" />
                </motion.div>

                <div className="flex items-center gap-4 mb-8 relative z-30">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    >
                        <BloomMotif size={48} onBloomComplete={() => setContentVisible(true)} />
                    </motion.div>
                    <span className="font-body text-sm tracking-widest font-bold text-[var(--color-rose-ink)]/90 uppercase">The Evening</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="max-w-xl w-full bg-[var(--color-blossom-light)]/20 p-8 md:p-12 rounded-[40px] relative z-30 shadow-sm"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-rose-ink)] mb-4 italic">
                        {weddingData.reception.day}, {weddingData.reception.date}
                    </h2>
                    <p className="font-body text-[var(--color-rose-ink)]/80 text-lg mb-8">
                        {weddingData.reception.startTime} to {weddingData.reception.endTime}
                    </p>
                    <p className="font-body tracking-widest font-bold uppercase text-[var(--color-rose-ink)] drop-shadow-[0_0_12px_rgba(242,168,198,0.8)]">
                        {weddingData.reception.venue}
                    </p>
                    <p className="font-body text-[var(--color-rose-ink)]/70 text-sm mt-3 max-w-sm mx-auto leading-relaxed mb-8">
                        {weddingData.reception.address}
                    </p>

                    <a
                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+-+Naveen+%26+Ramya&dates=20261113T123000Z/20261113T163000Z&details=Join+Naveen+%26+Ramya+for+an+evening+to+remember.&location=Shree+Vasuki+Mahal,+38,+Raja+Mill+Rd,+Pollachi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[var(--color-rose-ink)]/30 text-[var(--color-rose-ink)] uppercase tracking-widest text-xs font-semibold hover:bg-[var(--color-rose-ink)] hover:text-white transition-all duration-500 shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        Add to Calendar
                    </a>
                </motion.div>

                {/* Nee (Mobile View - Bottom Right) */}
                <div className="flex md:hidden w-full justify-end pr-8 mt-6 relative z-20">
                    <motion.img
                        initial={{ opacity: 0, x: 20, rotate: 15, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 5, scale: 1 }}
                        animate={{ y: [5, -5, 5] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 1, delay: 0.2 },
                            x: { duration: 1, type: 'spring', delay: 0.2 },
                            rotate: { duration: 1, delay: 0.2 },
                            scale: { duration: 1, type: 'spring', delay: 0.2 },
                            y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }
                        }}
                        src="/Nee.png"
                        alt="Nee"
                        className="w-28 h-auto drop-shadow-md mix-blend-multiply"
                    />
                </div>

                {/* Nee (Right Image Desktop) - Animated & Blended */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 15, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 5, scale: 1, y: [10, -10, 10] }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        opacity: { duration: 1.2 },
                        x: { duration: 1.2, type: 'spring' },
                        rotate: { duration: 1.2 },
                        scale: { duration: 1.2, type: 'spring' },
                        y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
                    }}
                    className="hidden md:block absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-40 md:w-48 lg:w-60 z-20 pointer-events-none mix-blend-multiply"
                >
                    <img src="/Nee.png" alt="Nee" className="w-full h-auto drop-shadow-lg opacity-95" />
                </motion.div>

            </div>
        </section>
    );
}
