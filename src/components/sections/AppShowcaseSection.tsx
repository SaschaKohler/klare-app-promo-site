"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function AppShowcaseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // App-Screens mit erweiterten Inhalten
  const appScreens = [
    {
      name: "Home",
      color: "bg-gradient-to-b from-klare-k to-klare-k/80",
      darkColor:
        "dark:bg-gradient-to-b dark:from-dark-klare-k dark:to-dark-klare-k/80",
      content: ["Tägliche Impulse", "Transformations-Fortschritt"],
    },
    {
      name: "Lebensrad",
      color: "bg-gradient-to-b from-klare-l to-klare-l/80",
      darkColor:
        "dark:bg-gradient-to-b dark:from-dark-klare-l dark:to-dark-klare-l/80",
      content: ["Bewertung deiner Lebensbereiche", "Kongruenz-Analyse"],
    },
    {
      name: "Journal",
      color: "bg-gradient-to-b from-klare-a to-klare-a/80",
      darkColor:
        "dark:bg-gradient-to-b dark:from-dark-klare-a dark:to-dark-klare-a/80",
      content: ["Reflexionen erfassen", "Fortschritt dokumentieren"],
    },
    {
      name: "Ressourcen",
      color: "bg-gradient-to-b from-klare-r to-klare-r/80",
      darkColor:
        "dark:bg-gradient-to-b dark:from-dark-klare-r dark:to-dark-klare-r/80",
      content: ["Übungen & Meditationen", "Transformationstechniken"],
    },
    {
      name: "Profil",
      color: "bg-gradient-to-b from-klare-e to-klare-e/80",
      darkColor:
        "dark:bg-gradient-to-b dark:from-dark-klare-e dark:to-dark-klare-e/80",
      content: ["Persönliche Einstellungen", "Transformationsreise"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start mit Journal (Mitte)

  // Automatische Rotation der aktiven Screens
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % appScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView, appScreens.length]);

  return (
    <section
      className="py-20 bg-white dark:bg-dark-klare-bg overflow-hidden"
      id="showcase"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Ein{" "}
            <span className="text-klare-l dark:text-dark-klare-l">
              intuitives Erlebnis
            </span>{" "}
            für Deine Transformation
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Die KLARE Methode App bietet Dir eine intuitive und ansprechende
            Benutzeroberfläche, die Dich durch den gesamten
            Transformationsprozess begleitet.
          </p>
        </div>

        <div className="relative mb-10">
          {/* Dunkler Hintergrund */}
          <div className="absolute inset-x-0 h-[540px] bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden my-4"></div>

          {/* 3D Carousel */}
          <div className="relative flex justify-center items-center h-[600px] perspective-[1000px]">
            {appScreens.map((screen, index) => {
              // Nur die drei sichtbaren Screens berechnen (aktiv, links, rechts)
              let position = index - activeIndex;

              // Zirkuläre Navigation
              if (position < -2) position += appScreens.length;
              if (position > 2) position -= appScreens.length;

              // Nur die mittleren 3 Screens rendern
              if (position < -1 || position > 1) return null;

              // Position berechnen
              const translateX = position * 190; // Abstand zwischen den Screens
              const scale = position === 0 ? 1 : 0.85; // Mittlerer Screen größer
              const zIndex = 10 - Math.abs(position * 5);
              const opacity = position === 0 ? 1 : 0.8;
              const rotateY = position * 15; // Leichte Drehung

              return (
                <motion.div
                  key={index}
                  className={`absolute w-[260px] h-[520px] rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ease-out`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {/* Phone Frame */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-gray-900 bg-black">
                    {/* Status Bar */}
                    <div className="h-8 w-full bg-black flex items-center justify-between px-4">
                      <div className="w-16 h-1.5 bg-gray-700 rounded-full"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                    </div>

                    {/* Screen Content */}
                    <div
                      className={`h-full w-full ${screen.color} ${screen.darkColor} flex flex-col items-center pt-8`}
                    >
                      {/* Central Circle with Name */}
                      <div className="mt-24 mb-10 w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {screen.name}
                        </span>
                      </div>

                      {/* Content Boxes */}
                      <div className="w-full px-6 space-y-6">
                        {screen.content.map((item, i) => (
                          <motion.div
                            key={i}
                            className="h-16 w-full bg-white/10 rounded-lg flex items-center justify-center"
                            initial={{ x: 20, opacity: 0 }}
                            animate={
                              position === 0 && inView
                                ? { x: 0, opacity: 1 }
                                : {}
                            }
                            transition={{ duration: 0.3, delay: i * 0.2 + 0.3 }}
                          >
                            <span className="text-white/90 text-sm px-4 text-center">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Screen Indicators */}
          <div className="relative flex justify-center mt-0 space-x-2">
            {appScreens.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-white w-6" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* App Store Badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
            Bald verfügbar:
          </p>
          <div className="flex gap-4">
            <div className="h-12 w-36 bg-black dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105">
              <span className="text-sm">App Store</span>
            </div>
            <div className="h-12 w-36 bg-gray-800 dark:bg-gray-700 border border-transparent dark:border-gray-600 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105">
              <span className="text-sm">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

