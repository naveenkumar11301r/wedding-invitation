"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import weddingData from "../config/weddingData";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const handlePlayEvent = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.error("Audio play failed:", e));
            }
        };
        window.addEventListener('playMusic', handlePlayEvent);
        return () => window.removeEventListener('playMusic', handlePlayEvent);
    }, [isPlaying]);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error(e));
        }
        setIsPlaying(!isPlaying);
    };

    if (!weddingData.music?.enabled || !weddingData.music?.src) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-body text-[10px] tracking-widest uppercase text-[var(--color-rose-ink)] shadow-sm pointer-events-none"
                        aria-live="polite"
                    >
                        Playing {weddingData.music.title || 'Our Song'}
                    </motion.div>
                )}
            </AnimatePresence>

            <audio ref={audioRef} src={weddingData.music.src} loop />

            <motion.button
                onClick={toggleMusic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="w-14 h-14 bg-[var(--color-blossom)] rounded-full shadow-lg flex items-center justify-center relative hover:bg-[#eb9abd] transition-colors"
            >
                {!isPlaying ? (
                    // Closed bud state
                    <div className="w-4 h-4 bg-[var(--color-cream)] rounded-full shadow-sm drop-shadow-sm rotate-45" />
                ) : (
                    // Open blossom spinning
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                        className="relative w-8 h-8 flex items-center justify-center"
                    >
                        {[0, 72, 144, 216, 288].map(rot => (
                            <div
                                key={rot}
                                className="absolute w-[40%] h-[40%] origin-bottom"
                                style={{ bottom: "50%", rotate: `${rot}deg` }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full fill-[var(--color-cream)]">
                                    <path d="M50 0 C70 0, 100 40, 100 70 C100 90, 70 100, 50 100 C30 100, 0 90, 0 70 C0 40, 30 0, 50 0 Z" />
                                </svg>
                            </div>
                        ))}
                        <div className="w-[30%] h-[30%] bg-[var(--color-gold)] rounded-full z-10 absolute" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
}
