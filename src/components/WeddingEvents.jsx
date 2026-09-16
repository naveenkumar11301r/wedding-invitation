"use client";

import { motion } from "framer-motion";
import { KolamMotif, LeafGarland } from "./DecorativeElements";
import weddingData from "../config/weddingData";

export default function WeddingEvents() {
    return (
        <section id="events" className="relative py-16 md:py-32 px-4 z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="absolute top-0 w-full"><LeafGarland /></div>
            <div className="absolute top-16"><KolamMotif delay={0} /></div>

            <div className="w-full flex flex-col gap-24 mt-32">
                {weddingData.events.map((evt, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center text-center p-8 border border-[var(--color-manjal)]/20 rounded-xl relative overflow-hidden group"
                    >
                        {/* Background Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-manjal)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-jasmine)] mb-2 relative z-10">{evt.title}</h3>
                        <p className="text-[var(--color-manjal)] font-sans tracking-widest text-sm mb-6 relative z-10">{evt.time}</p>

                        <p className="text-gray-300 font-sans relative z-10">{evt.venue}</p>
                        <p className="text-gray-400 font-sans text-sm relative z-10 mb-6">{evt.address}</p>

                        {evt.mapUrl && (
                            <a
                                href={evt.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 text-[var(--color-nightDeep)] bg-[var(--color-manjal)] hover:bg-[var(--color-kumkumam)] transition-colors duration-300 px-6 py-2 rounded-full uppercase tracking-widest text-xs font-semibold"
                            >
                                Get Directions
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
