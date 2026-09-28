"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        // Construct target date from weddingData: 13-11-2026 6:00 PM
        const dateParts = weddingData.reception.date.split('-');
        // Fallback for safety
        if (dateParts.length !== 3) return;
        const [day, month, year] = dateParts;
        const targetDate = new Date(`${year}-${month}-${day}T18:00:00`).getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeBlocks = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
    ];

    return (
        <section className="relative py-8 md:py-12 flex flex-col items-center justify-center z-10 text-center w-full px-4 overflow-hidden">
            <div className="flex items-center gap-4 mb-10 w-full justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
                    <BloomMotif size={48} onBloomComplete={() => setContentVisible(true)} />
                </motion.div>
                <span className="font-body text-base md:text-lg tracking-[0.4em] font-black text-[#2D1B24] uppercase flex">
                    {Array.from("The Countdown").map((l, i) => (
                        <motion.span
                            key={i}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                            style={{ display: "inline-block", whiteSpace: "pre", textShadow: "0px 4px 10px rgba(45,27,36,0.2)" }}
                        >
                            {l}
                        </motion.span>
                    ))}
                </span>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={contentVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex gap-3 md:gap-6 justify-center items-center flex-wrap"
            >
                {timeBlocks.map((block, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white/70 backdrop-blur-xl p-4 md:p-6 rounded-[32px] border border-[var(--color-blossom-light)] shadow-[0_8px_32px_rgba(242,168,198,0.2)] w-[85px] md:w-32 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        {/* Sequential Shimmer Effect using framer-motion */}
                        <motion.div
                            initial={{ left: "-150%", skewX: -15 }}
                            animate={{ left: "200%" }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 4.5,
                                ease: "linear",
                                delay: idx * 1.5
                            }}
                            className="absolute inset-y-0 w-[150%] bg-gradient-to-tr from-transparent via-white/80 to-transparent pointer-events-none z-10"
                        />

                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={block.value}
                                initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: 20, opacity: 0, filter: "blur(8px)", position: "absolute" }}
                                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                className="font-heading text-4xl md:text-6xl text-[var(--color-rose-ink)] drop-shadow-sm mb-1 leading-none"
                            >
                                {block.value.toString().padStart(2, '0')}
                            </motion.span>
                        </AnimatePresence>
                        <span className="font-body text-[9px] md:text-xs text-[#2D1B24]/80 tracking-[0.2em] md:tracking-[0.3em] font-bold mt-2 uppercase">
                            {block.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
