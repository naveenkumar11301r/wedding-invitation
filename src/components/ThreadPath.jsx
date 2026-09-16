"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ThreadPath() {
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        // Measure full page height to calculate SVG length
        const handleResize = () => setPageHeight(document.documentElement.scrollHeight);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollY } = useScroll();

    // Create a smoother scroll progress
    const ySpring = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate percentage of progress based on total scrollable area
    const [maxScroll, setMaxScroll] = useState(1000);
    useEffect(() => {
        setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    }, [pageHeight]);

    const drawProgress = useTransform(ySpring, [0, maxScroll > 0 ? maxScroll : 2000], [0, 1]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
            <svg
                width="100"
                height={pageHeight || "200%"}
                viewBox={`0 0 100 ${pageHeight || 2000}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
            >
                <motion.path
                    d={`M50 0 L50 ${pageHeight || 2000}`}
                    stroke="var(--color-manjal)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ pathLength: drawProgress }}
                />
                <motion.path
                    d={`M50 0 L50 ${pageHeight || 2000}`}
                    stroke="var(--color-nightDeep)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="opacity-20"
                />
            </svg>
        </div>
    );
}
