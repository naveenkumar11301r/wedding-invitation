"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function QRCodeSection() {
    const [contentVisible, setContentVisible] = useState(false);

    if (!weddingData.qrCode?.url) return null;

    return (
        <section id="qr-code" className="relative py-8 md:py-12 px-6 flex flex-col items-center justify-center z-10 text-center">

            <div className="flex items-center gap-4 mb-8">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    <BloomMotif size={48} onBloomComplete={() => setContentVisible(true)} />
                </motion.div>
                <span className="font-body text-sm tracking-widest font-bold text-[var(--color-rose-ink)]/90 uppercase">Find Us Instantly</span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="max-w-md w-full flex flex-col items-center"
            >
                <p className="font-serif italic text-lg text-[var(--color-rose-ink)] mb-8">
                    Scan to pull up {weddingData.reception.venue} on your maps app.
                </p>

                <div className="p-8 bg-[var(--color-blossom-light)] border border-[var(--color-gold)]/40 rounded-[32px] drop-shadow-sm relative">
                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                        <QRCodeSVG
                            value={weddingData.qrCode.url}
                            size={180}
                            fgColor="var(--color-rose-ink)"
                            bgColor="#ffffff"
                            level="H"
                        />
                    </div>

                    {/* Small decorative corner bloom */}
                    <div className="absolute -top-4 -right-4 rotate-[15deg]">
                        <BloomMotif size={40} />
                    </div>
                </div>

            </motion.div>

        </section>
    );
}
