"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const klarePrinciples = [
  {
    letter: "K",
    title: "Klarheit",
    description:
      "Ehrliche Selbsterkenntnis und Bewusstwerdung als Basis jeder Veränderung. Verstehen des Ist-Zustands und Identifizieren von Inkongruenzen.",
    color: "klare-k",
    darkColor: "dark-klare-k",
    icon: "🔍",
  },
  {
    letter: "L",
    title: "Lebendigkeit",
    description:
      "Aktivierung natürlicher Energie und Ressourcen. Wiederverbindung mit intrinsischer Motivation und Lebenskraft.",
    color: "klare-l",
    darkColor: "dark-klare-l",
    icon: "⚡",
  },
  {
    letter: "A",
    title: "Ausrichtung",
    description:
      "Innere Kohärenz und Integration. Schaffung einer kongruenten Werte-Hierarchie und ganzheitlichen Lebensvision.",
    color: "klare-a",
    darkColor: "dark-klare-a",
    icon: "🧭",
  },
  {
    letter: "R",
    title: "Realisierung",
    description:
      "Nachhaltiges Handeln und Umsetzung. Vom Wissen zum tatsächlichen Handeln kommen durch systematische Schritte.",
    color: "klare-r",
    darkColor: "dark-klare-r",
    icon: "🚀",
  },
  {
    letter: "E",
    title: "Entfaltung",
    description:
      "Mühelose Manifestation und kontinuierliches Wachstum. Leben aus dem Zustand vollständiger Kongruenz.",
    color: "klare-e",
    darkColor: "dark-klare-e",
    icon: "🌱",
  },
];

export default function KlarePrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-white dark:bg-dark-klare-bg"
      id="principles"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Die 5 Prinzipien der{" "}
            <span className="bg-gradient-to-r from-klare-k via-klare-a to-klare-e dark:from-dark-klare-k dark:via-dark-klare-a dark:to-dark-klare-e bg-clip-text text-transparent">
              KLARE Methode
            </span>
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Entdecke die fünf Schritte zur ganzheitlichen Transformation und
            einem Leben in Kongruenz.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {klarePrinciples.map((principle, index) => (
            <motion.button
              key={index}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all
                ${
                  activePrinciple === index
                    ? `bg-${principle.color} dark:bg-${principle.darkColor} text-white shadow-lg scale-110`
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              onClick={() => setActivePrinciple(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: activePrinciple === index ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {principle.letter}
            </motion.button>
          ))}
        </div>

        <motion.div
          className={`max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md 
            ${activePrinciple !== null ? "border-l-4" : "border-l-0"} 
            ${activePrinciple !== null ? `border-${klarePrinciples[activePrinciple]?.color} dark:border-${klarePrinciples[activePrinciple]?.darkColor}` : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activePrinciple !== null ? (
            <>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">
                  {klarePrinciples[activePrinciple].icon}
                </span>
                <h3
                  className={`text-2xl font-bold text-${klarePrinciples[activePrinciple].color} dark:text-${klarePrinciples[activePrinciple].darkColor}`}
                >
                  {klarePrinciples[activePrinciple].title}
                </h3>
              </div>
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                {klarePrinciples[activePrinciple].description}
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                Wähle einen der Buchstaben, um mehr über das jeweilige Prinzip
                zu erfahren.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
