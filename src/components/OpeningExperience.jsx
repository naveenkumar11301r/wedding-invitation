"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import weddingData from "../config/weddingData";
import BloomMotif from "./BloomMotif";

export default function OpeningExperience({ onBloomComplete }) {
    const [isOpen, setIsOpen] = useState(!weddingData.settings.enableOpeningAnimation);

    useEffect(() => {
        if (!weddingData.settings.enableOpeningAnimation) {
            onBloomComplete();
        }
    }, [onBloomComplete]);

    const handleTap = () => {
        if (isOpen) return;
        setIsOpen(true);
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event('playMusic'));
        }
        setTimeout(onBloomComplete, 1200);
    };

    return (
        <section className={`relative flex flex-col justify-center px-6 lg:px-24 z-10 overflow-hidden transition-all duration-1000 ${isOpen ? 'py-8 lg:py-16' : 'min-h-[90vh]'}`}>

            {!isOpen ? (
                <motion.button
                    onClick={handleTap}
                    className="absolute inset-0 m-auto flex flex-col items-center justify-center gap-6 group cursor-pointer bg-transparent border-none appearance-none w-fit h-fit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Pulsing closed bud */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-24 h-24 bg-[var(--color-blossom)] rounded-full shadow-[0_0_20px_rgba(242,168,198,0.3)] relative overflow-hidden flex items-center justify-center"
                    >
                        <div className="w-4 h-4 bg-[var(--color-cream)] rounded-full rotate-45 transform" />
                    </motion.div>
                    <p className="font-body text-sm tracking-widest text-[var(--color-rose-ink)]/70 uppercase">tap to reveal</p>
                </motion.button>
            ) : (
                <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between relative mt-16 md:mt-0">

                    {/* Left Side Quote - Asymmetric mapping */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="hidden lg:flex flex-col gap-4 mt-32 max-w-[300px]"
                    >
                        <div className="w-8 h-[1px] bg-[var(--color-gold)] mb-2" />
                        <p className="font-heading italic text-[var(--color-rose-ink)]/90 text-xl md:text-2xl leading-relaxed">
                            A love story<br />
                            rooted in time,<br />
                            grown from the whispers<br />
                            of destiny's design.<br />
                            Like blossoms unfolding<br />
                            beneath the spring sun,<br />
                            two separate journeys<br />
                            have finally become one.
                        </p>
                        <p className="font-script text-5xl md:text-6xl text-[var(--color-rose-ink)]/80 mt-4">
                            Endlessly
                        </p>
                    </motion.div>

                    {/* Centerpiece / Names cascading diagonally */}
                    <div className="relative flex flex-col items-center lg:items-end lg:-mr-12 w-full lg:w-auto">



                        {/* Diagonal accent graphic replacing the spread */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className="absolute -top-12 -left-12 opacity-[0.15] -z-10"
                        >
                            <BloomMotif size={250} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                            className="absolute -bottom-16 -right-16 opacity-[0.1] -z-10 blur-sm scale-x-[-1]"
                        >
                            <BloomMotif size={180} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.2 }}
                            className="text-center lg:text-right flex flex-col items-center lg:items-end w-full"
                        >
                            <h1 className="font-script text-7xl md:text-8xl lg:text-[140px] text-[var(--color-rose-ink)] leading-[0.7] transform -rotate-3 mb-2 lg:mb-4 relative w-full text-center">
                                {weddingData.couple.partnerOne}
                            </h1>

                            <div className="w-full flex justify-center lg:justify-end lg:pr-[25%] opacity-90 z-10 my-4 lg:my-0">
                                <span className="font-heading not-italic text-4xl md:text-5xl text-[var(--color-gold)]">&</span>
                            </div>

                            <h1 className="font-script text-7xl md:text-8xl lg:text-[140px] text-[var(--color-rose-ink)] leading-[0.7] transform -rotate-3 w-full text-center lg:text-right mt-2 lg:mt-4 mix-blend-multiply">
                                {weddingData.couple.partnerTwo}
                            </h1>
                        </motion.div>

                        {/* Right side details aligned vertically */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1.2 }}
                            className="font-body text-[var(--color-rose-ink)] flex flex-col items-center lg:items-end text-center lg:text-right mt-16 lg:mt-24 w-full"
                        >
                            <div className="hidden lg:block w-32 h-[1px] bg-[var(--color-gold)]/40 mb-8" />
                            <p className="tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4 text-[var(--color-rose-ink)]/90">Invite you to celebrate our wedding</p>
                            <p className="text-xl md:text-2xl mb-1 font-heading italic text-[var(--color-rose-ink)] tracking-wider">
                                {weddingData.reception.day}, {weddingData.reception.date}
                            </p>
                            <p className="text-[var(--color-rose-ink)]/90 mb-4 text-base font-medium tracking-wide">
                                {weddingData.reception.startTime} – {weddingData.reception.endTime}
                            </p>
                            <span className="bg-[var(--color-gold)]/20 text-[var(--color-rose-ink)] border border-[var(--color-rose-ink)]/30 px-6 py-2 rounded-full tracking-[0.25em] font-bold uppercase text-[10px] drop-shadow-sm">
                                {weddingData.reception.venue}
                            </span>
                        </motion.div>

                    </div>
                </div>
            )}
        </section>
    );
}
