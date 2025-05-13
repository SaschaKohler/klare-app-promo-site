"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const lifeAreas = [
  {
    id: "health",
    label: "Gesundheit",
    color: "text-klare-k dark:text-dark-klare-k",
  },
  {
    id: "career",
    label: "Karriere",
    color: "text-klare-l dark:text-dark-klare-l",
  },
  {
    id: "relationships",
    label: "Beziehungen",
    color: "text-klare-a dark:text-dark-klare-a",
  },
  {
    id: "finances",
    label: "Finanzen",
    color: "text-klare-r dark:text-dark-klare-r",
  },
  {
    id: "personal",
    label: "Persönliches Wachstum",
    color: "text-klare-e dark:text-dark-klare-e",
  },
];

export default function LifeWheelPreviewSection() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-white dark:bg-dark-klare-bg"
      id="life-wheel-preview"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Entdecke dein{" "}
            <span className="text-klare-l dark:text-dark-klare-l">
              Lebensrad
            </span>
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Das Lebensrad ist ein kraftvolles Tool zur Selbstreflexion und ein
            Kernbestandteil der KLARE Methode. Wähle einen Bereich, um mehr zu
            erfahren.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Interactive Life Wheel */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
            {lifeAreas.map((area, index) => {
              const angle = index * 72 - 90; // 360 / 5 = 72 degrees per segment
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * 120 + 160; // 160 is half of container width
              const y = Math.sin(radian) * 120 + 160; // 160 is half of container height

              return (
                <motion.div
                  key={area.id}
                  className={`absolute w-16 h-16 -ml-8 -mt-8 flex items-center justify-center rounded-full cursor-pointer ${
                    selectedArea === area.id
                      ? "bg-gray-100 dark:bg-gray-800 shadow-lg"
                      : "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  style={{ left: x, top: y }}
                  onClick={() => setSelectedArea(area.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`text-sm font-medium ${area.color}`}>
                    {area.label}
                  </span>
                </motion.div>
              );
            })}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-klare-text dark:text-dark-klare-text">
                KLARE
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {selectedArea ? (
              <div>
                <h3
                  className={`text-xl font-bold mb-3 ${lifeAreas.find((a) => a.id === selectedArea)?.color}`}
                >
                  {lifeAreas.find((a) => a.id === selectedArea)?.label}
                </h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
                  {selectedArea === "health" &&
                    "Deine körperliche und mentale Gesundheit ist die Basis für alles andere. Wie gut sorgst du für dich selbst? Wie ist deine Energie, dein Schlaf, deine Ernährung?"}
                  {selectedArea === "career" &&
                    "Deine berufliche Erfüllung geht über finanzielle Aspekte hinaus. Fühlst du dich gefordert? Lebst du deine Berufung? Bist du auf dem richtigen Weg?"}
                  {selectedArea === "relationships" &&
                    "Beziehungen geben unserem Leben Bedeutung. Wie tief und authentisch sind deine Verbindungen zu anderen? Fühlst du dich verstanden und wertgeschätzt?"}
                  {selectedArea === "finances" &&
                    "Finanzen schaffen Freiheit und Sicherheit. Wie ist deine finanzielle Situation? Hast du Klarheit über deine Finanzen und eine Strategie für die Zukunft?"}
                  {selectedArea === "personal" &&
                    "Persönliches Wachstum hält uns lebendig. Lernst du Neues? Entwickelst du dich weiter? Lebst du im Einklang mit deinen tiefsten Werten?"}
                </p>
                <p className="text-klare-text dark:text-dark-klare-text font-medium">
                  In der KLARE App erfährst du, wie du mehr Kongruenz in diesem
                  Bereich erreichen kannst.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-3 text-klare-text dark:text-dark-klare-text">
                  Wähle einen Lebensbereich
                </h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                  Klicke auf einen der Bereiche im Lebensrad, um mehr darüber zu
                  erfahren, wie die KLARE Methode dir helfen kann, mehr
                  Kongruenz in diesem Bereich zu erreichen.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
