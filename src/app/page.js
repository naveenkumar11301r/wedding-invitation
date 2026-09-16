"use client";

import { useState, useEffect } from "react";
import PetalDrift from "../components/PetalDrift";
import OpeningExperience from "../components/OpeningExperience";
import MusicPlayer from "../components/MusicPlayer";
import ReceptionDetails from "../components/ReceptionDetails";
import LocationSection from "../components/LocationSection";
import QRCodeSection from "../components/QRCodeSection";
import ClosingMessage from "../components/ClosingMessage";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant minimum delay to ensure smooth font loading and aesthetic entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`relative min-h-screen overflow-x-hidden selection:bg-[var(--color-blossom)]/30 selection:text-[var(--color-rose-ink)] ${!scrollUnlocked || isLoading ? "overflow-hidden h-screen" : ""}`}>

      {/* Preloader / Initial Loading Screen */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-cream)] transition-opacity duration-1000 pointer-events-none ${isLoading ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center">
          <span className="font-heading text-4xl text-[var(--color-rose-ink)] animate-pulse tracking-widest">N<span className="text-[var(--color-blossom)] mx-1">✿</span>R</span>
          <div className="mt-4 text-[var(--color-rose-ink)]/50 font-body text-[10px] tracking-[0.3em] uppercase">Loading...</div>
        </div>
      </div>

      {/* Background layer ambient drift */}
      <PetalDrift />

      {/* Interactive sticky objects */}
      <MusicPlayer />

      <div className="relative z-10 flex flex-col">
        <OpeningExperience onBloomComplete={() => setScrollUnlocked(true)} />

        {scrollUnlocked && (
          <>
            <ReceptionDetails />
            <LocationSection />
            <QRCodeSection />
            <ClosingMessage />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
}
