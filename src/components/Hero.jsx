"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KolamMotif, LampFlame } from "./DecorativeElements";
import weddingData from "../config/weddingData";

export default function Hero() {
    const [isLit, setIsLit] = useState(!weddingData.settings.enableOpeningAnimation);

    return (
        <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
            {/* The Lamp Interaction */}
            <div className="relative z-10 flex flex-col items-center justify-center cursor-pointer mb-12" onClick={() => setIsLit(true)}>
                {!isLit ? (
                    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center">
                        {/* Unlit Lamp Silhouette */}
                        <div className="w-16 h-12 bg-gray-800 rounded-b-full border-t border-gray-700" />
                        <span className="text-gray-400 mt-6 text-sm tracking-widest uppercase font-sans">tap to light the first lamp</span>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative flex flex-col items-center"
                    >
                        {/* expanding radial glow */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 4, opacity: 0.15 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute w-64 h-64 bg-[var(--color-manjal)] rounded-full blur-3xl"
                        />

                        <LampFlame className="absolute -top-3 left-1/2 -translate-x-1/2 z-20" />
                        <div className="w-16 h-12 bg-[#8B5A2B] rounded-b-full border-t-2 border-[var(--color-manjal)] relative z-10" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[3]">
                            <KolamMotif delay={0} />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Main Content Reveal */}
            <AnimatePresence>
                {isLit && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="text-center z-20 flex flex-col items-center w-full max-w-[1200px] min-h-screen justify-center relative px-2"
                    >


                        <div className="relative z-40 flex flex-col items-center justify-center mt-12 md:mt-0">
                            <p className="text-[var(--color-manjal)] text-sm md:text-base tracking-widest uppercase font-sans mb-8 mt-12 md:mt-2 relative z-40">
                                Together with their families
                            </p>

                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-jasmine)] mb-2 relative group flex flex-col gap-4 z-40">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F0E6D2] to-white shimmer">{weddingData.couple.partnerTwo.toUpperCase()}</span>
                                <span className="text-[var(--color-manjal)] font-light italic text-4xl">&</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F0E6D2] to-white shimmer">{weddingData.couple.partnerOne.toUpperCase()}</span>
                            </h1>

                            <p className="text-[var(--color-jasmine)]/70 text-sm md:text-base tracking-widest uppercase font-sans mt-12 mb-4 relative z-40">
                                invite you to celebrate Our wedding
                            </p>

                            <p className="text-xl md:text-2xl font-serif text-[var(--color-manjal)] relative z-40">
                                {new Date(weddingData.reception.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .shimmer {
          background-size: 200% auto;
          animation: shine 5s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
        </section >
    );
}
