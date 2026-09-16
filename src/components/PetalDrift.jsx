"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PetalDrift() {
    const [isClient, setIsClient] = useState(false);
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        // Only generate random math properties on the client to prevent hydration mismatch
        const generatedPetals = Array.from({ length: 12 }).map(() => ({
            left: `${Math.random() * 100}%`,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 20,
            x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
            rotate: [0, Math.random() * 360, Math.random() * 720]
        }));
        setPetals(generatedPetals);
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
            {petals.map((petal, i) => (
                <motion.div
                    key={i}
                    className="absolute top-[-5%]"
                    style={{
                        left: petal.left,
                    }}
                    animate={{
                        y: ["0vh", "110vh"],
                        x: petal.x,
                        rotate: petal.rotate,
                    }}
                    transition={{
                        duration: petal.duration, // Slow unhurried fall
                        repeat: Infinity,
                        ease: "linear",
                        delay: petal.delay, // Stagger spawns so there's never a dense field at once
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-blossom)" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.6] blur-[0.5px]">
                        <path d="M12 2C7 2 5 8 5 12C5 16 9 20 12 22C15 20 19 16 19 12C19 8 17 2 12 2Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
