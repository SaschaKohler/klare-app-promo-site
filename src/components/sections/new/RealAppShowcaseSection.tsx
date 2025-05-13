"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RealAppShowcaseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // App Screenshots with descriptive information
  const appScreenshots = [
    {
      id: "welcome",
      name: "Willkommen",
      description: "Der Startpunkt deiner Transformationsreise",
      image: "/images/app-screenshots-organized/welcome-screen.png",
      color: "from-klare-k/30 to-klare-k/10",
      darkColor: "dark:from-dark-klare-k/40 dark:to-dark-klare-k/20",
    },
    {
      id: "dashboard",
      name: "Dashboard",
      description: "Personalisierte Übersicht deines Fortschritts",
      image: "/images/app-screenshots-organized/home-dashboard.png",
      color: "from-klare-l/30 to-klare-l/10",
      darkColor: "dark:from-dark-klare-l/40 dark:to-dark-klare-l/20",
    },
    {
      id: "lifewheel",
      name: "Lebensrad",
      description: "Visualisiere deine Lebensbereiche",
      image: "/images/app-screenshots-organized/life-wheel.png",
      color: "from-klare-a/30 to-klare-a/10",
      darkColor: "dark:from-dark-klare-a/40 dark:to-dark-klare-a/20",
    },
    {
      id: "journal",
      name: "Journal",
      description: "Reflexion für tiefere Selbsterkenntnis",
      image: "/images/app-screenshots-organized/journal-templates.png",
      color: "from-klare-r/30 to-klare-r/10",
      darkColor: "dark:from-dark-klare-r/40 dark:to-dark-klare-r/20",
    },
    {
      id: "resources",
      name: "Ressourcen",
      description: "Aktiviere deine persönlichen Ressourcen",
      image: "/images/app-screenshots-organized/resources-library.png",
      color: "from-klare-e/30 to-klare-e/10",
      darkColor: "dark:from-dark-klare-e/40 dark:to-dark-klare-e/20",
    },
    {
      id: "klare-method",
      name: "KLARE-Methode",
      description: "Entdecke deinen Weg zur Kongruenz",
      image: "/images/app-screenshots-organized/klare-k-module.png",
      color: "from-klare-k/30 to-klare-k/10",
      darkColor: "dark:from-dark-klare-k/40 dark:to-dark-klare-k/20",
    },
    {
      id: "vision-board",
      name: "Vision Board",
      description: "Visualisiere deine Ziele und Träume",
      image: "/images/app-screenshots-organized/vision-board.png",
      color: "from-klare-a/30 to-klare-a/10",
      darkColor: "dark:from-dark-klare-a/40 dark:to-dark-klare-a/20",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Automatische Rotation der aktiven Screenshots
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [inView, appScreenshots.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-klare-bg dark:to-gray-900 overflow-hidden"
      id="showcase"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-white">
            <span className="text-klare-l dark:text-klare-l">Entdecke</span> die
            KLARE Methode App
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            Eine intuitive Benutzeroberfläche, die dich durch deinen
            persönlichen Transformationsprozess begleitet.
          </p>
        </div>

        <div className="relative mb-16">
          {/* Device Frame */}
          <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[40px] p-2.5 shadow-2xl">
            {/* Inner Bezel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-b-3xl z-20"></div>

            {/* Screen */}
            <div className="w-full h-full rounded-[32px] overflow-hidden relative">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-black z-10 flex justify-between items-center px-6">
                <span className="text-white text-xs">17:08</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-1 bg-white rounded-sm"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Screenshot Carousel */}
              <div className="relative w-full h-full">
                {appScreenshots.map((screenshot, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.div
                      key={screenshot.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: direction * 300 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -direction * 300,
                        zIndex: isActive ? 1 : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.5 },
                        x: { type: "spring", stiffness: 300, damping: 30 },
                      }}
                    >
                      <Image
                        src={screenshot.image}
                        alt={screenshot.name}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-white/30 rounded-full z-10"></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-10 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous screenshot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next screenshot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {appScreenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-klare-l w-8"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Screenshot Description */}
        <motion.div
          className={`max-w-md mx-auto text-center p-6 rounded-xl bg-gradient-to-br ${appScreenshots[activeIndex].color} ${appScreenshots[activeIndex].darkColor} dark:bg-opacity-30`}
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
            {appScreenshots[activeIndex].name}
          </h3>
          <p className="text-klare-text-secondary dark:text-gray-200">
            {appScreenshots[activeIndex].description}
          </p>
        </motion.div>

        {/* App Store Badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-klare-text-secondary dark:text-gray-300">
            Bald verfügbar:
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
                src="/images/app-store-badges/google-play-badge-de.svg"
                width={120}
                height={40}
                alt="Im Google Play Store herunterladen"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-klare-k/20 dark:bg-dark-klare-k/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-klare-k dark:text-dark-klare-k"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
              Intuitives Design
            </h3>
            <p className="text-klare-text-secondary dark:text-gray-300">
              Einfach zu navigieren, selbst für Technologie-Einsteiger. Die App
              führt dich sanft durch jeden Schritt deiner Transformation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-klare-l/20 dark:bg-dark-klare-l/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-klare-l dark:text-dark-klare-l"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
              Personalisierte Erfahrung
            </h3>
            <p className="text-klare-text-secondary dark:text-gray-300">
              Die App passt sich deinen individuellen Bedürfnissen und deinem
              Fortschritt an, für ein maßgeschneidertes Transformationserlebnis.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-klare-a/20 dark:bg-dark-klare-a/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-klare-a dark:text-dark-klare-a"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
              Daten-Privatsphäre
            </h3>
            <p className="text-klare-text-secondary dark:text-gray-300">
              Deine persönlichen Daten bleiben geschützt. Die App speichert
              sensible Informationen lokal auf deinem Gerät.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-klare-r/20 dark:bg-dark-klare-r/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-klare-r dark:text-dark-klare-r"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
              Fortschritts-Tracking
            </h3>
            <p className="text-klare-text-secondary dark:text-gray-300">
              Verfolge deine Entwicklung visuell und erkenne Muster für eine
              nachhaltige Transformation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-klare-e/20 dark:bg-dark-klare-e/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-klare-e dark:text-dark-klare-e"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
              Regelmäßige Updates
            </h3>
            <p className="text-klare-text-secondary dark:text-gray-300">
              Die App entwickelt sich kontinuierlich weiter mit neuen Funktionen
              und Verbesserungen basierend auf Nutzer-Feedback.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-klare-k/20 dark:bg-dark-klare-k/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-klare-k dark:text-dark-klare-k"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-klare-text dark:text-white mb-2">
              Offline-Funktionalität
            </h3>
            <p className="text-klare-text-secondary dark:text-gray-300">
              Nutze die App auch ohne Internetverbindung. Synchronisiere deine
              Daten, wenn du wieder online bist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

