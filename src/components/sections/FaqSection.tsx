'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

// FAQ Daten
const faqData = [
  {
    question: 'Wann wird die KLARE App verfügbar sein?',
    answer: 'Die KLARE App wird voraussichtlich im Herbst 2025 im App Store und bei Google Play verfügbar sein. Melde dich für Updates an, um als Erster informiert zu werden und Zugang zur Beta-Version zu erhalten.'
  },
  {
    question: 'Was ist die KLARE Methode?',
    answer: 'Die KLARE Methode ist ein transformationsorientierter Ansatz zur persönlichen Entwicklung, der auf Kongruenz statt Optimierung setzt. Sie besteht aus 5 Schritten: Klarheit, Lebendigkeit, Ausrichtung, Realisierung und Entfaltung.'
  },
  {
    question: 'Für wen ist die KLARE App geeignet?',
    answer: 'Die KLARE App ist für alle geeignet, die nach einem ganzheitlichen Ansatz zur persönlichen Entwicklung suchen. Sie richtet sich an Menschen, die ihre Lebensqualität verbessern und mehr Kongruenz in allen Lebensbereichen erreichen möchten.'
  },
  {
    question: 'Brauche ich Vorkenntnisse, um die App zu nutzen?',
    answer: 'Nein, die App ist so gestaltet, dass sie ohne Vorkenntnisse genutzt werden kann. Sie führt dich Schritt für Schritt durch den Prozess und bietet alle notwendigen Erklärungen und Ressourcen.'
  },
  {
    question: 'Wird es ein Abo-Modell oder einen einmaligen Kauf geben?',
    answer: 'Die genauen Preismodelle werden noch finalisiert. Es wird voraussichtlich eine kostenlose Basisversion sowie ein Premium-Abonnement mit zusätzlichen Funktionen und Inhalten geben.'
  },
  {
    question: 'Kann ich die App auch offline nutzen?',
    answer: 'Ja, die Kernfunktionen der App sind auch offline verfügbar. Für einige Features wie die Synchronisation zwischen Geräten oder den Zugriff auf die vollständige Ressourcen-Bibliothek wird eine Internetverbindung benötigt.'
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-klare-bg" id="faq" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Häufig gestellte <span className="text-klare-r dark:text-dark-klare-r">Fragen</span>
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Hier findest Du Antworten auf die häufigsten Fragen zur KLARE App und Methode.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className={`border rounded-lg overflow-hidden ${
                  openIndex === index 
                    ? 'border-klare-r dark:border-dark-klare-r' 
                    : 'border-gray-200 dark:border-dark-klare-border'
                } bg-white dark:bg-dark-klare-card`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none text-klare-text dark:text-dark-klare-text"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <FiChevronUp className="text-klare-r dark:text-dark-klare-r" />
                  ) : (
                    <FiChevronDown className="text-gray-400 dark:text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}