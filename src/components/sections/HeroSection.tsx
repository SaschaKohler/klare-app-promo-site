"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white dark:bg-dark-klare-bg py-20 md:py-32 mt-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">
            Verwandle Dein Leben <br /> Mit der{" "}
            <span className="text-klare-a dark:text-dark-klare-a">
              KLARE Methode
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg text-klare-text-secondary dark:text-dark-klare-text-secondary">
            Entdecke einen ganzheitlichen Ansatz zur persönlichen
            Transformation. Kongruenz statt Optimierung - die KLARE App
            begleitet Dich auf Deinem Weg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-klare-k text-white hover:bg-klare-k/90 py-3 px-6 rounded-full font-medium transition-all text-lg shadow-lg flex items-center justify-center">
              <a href="/#call-to-action">Jetzt für Updates anmelden</a>
            </button>
            <button className="bg-transparent hover:bg-gray-100 border-2 border-klare-k text-klare-k py-3 px-6 rounded-full font-medium transition-all text-lg flex items-center justify-center">
              <a href="/blog">Mehr erfahren</a>
            </button>
          </div>
          <p className="mt-4 text-klare-text-secondary text-sm">
            App-Launch: Herbst 2025
          </p>
          <div className="flex flex-row space-x-4 mt-6">
            <a
              href="#"
              className="w-32 h-auto transform transition-transform hover:scale-105"
            >
              <Image
                src="/images/app-store-badges/app-store-badge-de.svg"
                width={120}
                height={40}
                alt="Im Apple App Store herunterladen"
                className="w-full h-auto"
              />
            </a>
            <a
              href="#"
              className="w-32 h-auto transform transition-transform hover:scale-105"
            >
              <Image
                src="/images/app-store-badges/google_play_store_badge_en.svg"
                width={120}
                height={40}
                alt="Im Google Play Store herunterladen"
                className="w-full h-auto"
              />
            </a>
          </div>
        </motion.div>

        {/* App Screenshots */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative flex space-x-4">
            {/* Main App Screenshot */}
            <div className="relative z-20 w-56 h-[480px] rounded-[28px] overflow-hidden shadow-xl border-[3px] border-gray-800">
              <div className="absolute inset-0 bg-black/5 w-full h-full"></div>
              <Image
                src="/images/app-screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-05-07 at 17.10.16.png"
                fill
                className="object-cover"
                alt="KLARE Methode App Dashboard"
                priority
              />
            </div>

            {/* Background App Screenshots */}
            <div className="hidden md:block absolute -left-20 opacity-80 z-10 w-48 h-[420px] rounded-[28px] overflow-hidden shadow-lg border-[2px] border-gray-800 rotate-6 top-10">
              <div className="absolute inset-0 bg-black/5 w-full h-full"></div>
              <Image
                src="/images/app-screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-05-07 at 17.09.40.png"
                fill
                className="object-cover"
                alt="KLARE Methode App Lebensrad"
                priority
              />
            </div>

            <div className="hidden md:block absolute -right-20 opacity-80 z-10 w-48 h-[420px] rounded-[28px] overflow-hidden shadow-lg border-[2px] border-gray-800 -rotate-6 top-10">
              <div className="absolute inset-0 bg-black/5 w-full h-full"></div>
              <Image
                src="/images/app-screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-05-07 at 17.10.36.png"
                fill
                className="object-cover"
                alt="KLARE Methode App Journal"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
