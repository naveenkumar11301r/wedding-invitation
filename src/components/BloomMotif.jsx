"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BloomMotif({ className = "", size = 64, onBloomComplete }) {
    const [hasBloomed, setHasBloomed] = useState(false);

    return (
        <motion.div
            className={`relative inline-flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
            onViewportEnter={() => {
                if (!hasBloomed) {
                    setHasBloomed(true);
                    if (onBloomComplete) setTimeout(onBloomComplete, 600); // Trigger follow-through action slightly after bloom starts
                }
            }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* 5 Petals unfurling */}
            {[0, 72, 144, 216, 288].map((rot, i) => (
                <motion.div
                    key={rot}
                    className="absolute w-[40%] h-[40%] origin-bottom"
                    style={{ bottom: "50%", rotate: rot }}
                    initial={{ scaleY: 0.1, scaleX: 0.1, opacity: 0, rotateX: 60 }}
                    animate={hasBloomed ? { scaleY: 1, scaleX: 1, opacity: 1, rotateX: 0 } : {}}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1], // Soft natural ease, no elastic bounce
                        delay: i * 0.05 // Tiny stagger for organic open
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-[var(--color-blossom)] drop-shadow-sm opacity-90">
                        <path d="M50 0 C70 0, 100 40, 100 70 C100 90, 70 100, 50 100 C30 100, 0 90, 0 70 C0 40, 30 0, 50 0 Z" />
                    </svg>
                </motion.div>
            ))}

            {/* Bud Center */}
            <motion.div
                className="w-[30%] h-[30%] bg-[var(--color-gold)] rounded-full z-10 opacity-80"
                animate={hasBloomed ? { scale: [1, 1.2, 1], opacity: 0.8 } : { scale: 0.8 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </motion.div>
    );
}
