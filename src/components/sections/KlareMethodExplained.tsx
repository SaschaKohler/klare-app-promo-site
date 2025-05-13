'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const klareSteps = [
  {
    letter: 'K',
    title: 'Klarheit',
    description: 'Ehrliche Selbsterkenntnis und Bewusstwerdung. Verstehe Deinen Ist-Zustand und identifiziere Inkongruenzen.',
    color: 'bg-klare-k'
  },
  {
    letter: 'L',
    title: 'Lebendigkeit',
    description: 'Aktivierung natürlicher Energie und Ressourcen. Verbinde Dich mit Deiner intrinsischen Motivation.',
    color: 'bg-klare-l'
  },
  {
    letter: 'A',
    title: 'Ausrichtung',
    description: 'Innere Kohärenz und Integration. Schaffe eine kongruente Werte-Hierarchie und Lebensvision.',
    color: 'bg-klare-a'
  },
  {
    letter: 'R',
    title: 'Realisierung',
    description: 'Nachhaltiges Handeln und Umsetzung. Komme vom Wissen zum tatsächlichen Handeln.',
    color: 'bg-klare-r'
  },
  {
    letter: 'E',
    title: 'Entfaltung',
    description: 'Mühelose Manifestation und kontinuierliches Wachstum. Lebe aus dem Zustand vollständiger Kongruenz.',
    color: 'bg-klare-e'
  }
];

export default function KlareMethodExplained() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="methode" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Der <span className="text-klare-a dark:text-dark-klare-a">5-Schritte-Prozess</span> der KLARE Methode
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Entdecke den transformativen Weg zu vollständiger Kongruenz in allen Lebensbereichen.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {klareSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 p-6 bg-white dark:bg-dark-klare-card rounded-xl shadow-md"
            >
              <div className={`${step.color} text-white font-bold text-3xl w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}>
                {step.letter}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-klare-text dark:text-dark-klare-text">{step.title}</h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}