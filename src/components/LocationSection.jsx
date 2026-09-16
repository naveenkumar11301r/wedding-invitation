"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function LocationSection() {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <section id="location" className="relative py-8 md:py-12 px-6 flex flex-col items-center justify-center z-10 text-center">

            <div className="flex items-center gap-4 mb-8">
                <span className="font-body text-sm tracking-widest font-bold text-[var(--color-rose-ink)]/90 uppercase">The Venue</span>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    <BloomMotif size={48} onBloomComplete={() => setContentVisible(true)} />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="max-w-2xl w-full flex flex-col items-center"
            >
                <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-rose-ink)] mb-4 italic">
                    {weddingData.reception.venue}
                </h2>

                {weddingData.reception.mapUrl ? (
                    <motion.a
                        href={weddingData.qrCode?.url || weddingData.reception.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        animate={{
                            boxShadow: [
                                "0 0 0px 0px rgba(216, 173, 102, 0)",
                                "0 0 15px 5px rgba(216, 173, 102, 0.4)",
                                "0 0 0px 0px rgba(216, 173, 102, 0)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-6 font-body text-[var(--color-rose-ink)] tracking-widest uppercase text-xs font-bold bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/80 px-8 py-3 rounded-full hover:bg-[var(--color-gold)]/20 hover:-translate-y-1 transition-transform duration-300 relative z-20"
                    >
                        Get Directions
                    </motion.a>
                ) : (
                    <p className="font-body text-[var(--color-rose-ink)]/80 text-lg mt-4 max-w-sm mx-auto">
                        {weddingData.reception.address}
                    </p>
                )}

                <div className="w-full h-64 md:h-96 mt-16 rounded-[40px] p-2 bg-[var(--color-blossom-light)]/20 border border-[var(--color-gold)]/30 relative drop-shadow-sm pointer-events-auto overflow-hidden">
                    <div className="w-full h-full rounded-[32px] overflow-hidden bg-white/50 relative">
                        {weddingData.reception.mapUrl ? (
                            <>
                                <div className="absolute inset-0 flex items-center justify-center font-heading italic text-[var(--color-rose-ink)]/40 text-lg animate-pulse">
                                    Loading map...
                                </div>
                                <iframe
                                    src={weddingData.reception.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full absolute inset-0 opacity-80 mix-blend-multiply rounded-[32px] z-10"
                                ></iframe>
                            </>
                        ) : (
                            <div className="w-full h-full bg-[var(--color-cream)] flex items-center justify-center font-heading italic text-[var(--color-rose-ink)]/40 p-6">
                                See you at Vasuki Mahal
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
