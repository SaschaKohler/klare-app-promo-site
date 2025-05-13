'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiAward, FiCamera, FiHeart, FiPieChart, FiUser } from 'react-icons/fi';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
}

const Feature = ({ title, description, icon: Icon, colorClass }: FeatureProps) => {
  return (
    <div className="bg-white dark:bg-dark-klare-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <div className={`${colorClass} mb-5 text-4xl`}>
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-klare-text dark:text-dark-klare-text">{title}</h3>
      <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">{description}</p>
    </div>
  );
};

const features = [
  {
    title: 'Interaktives Lebensrad',
    description: 'Visualisiere und reflektiere alle Lebensbereiche auf einen Blick.',
    icon: FiPieChart,
    colorClass: 'text-klare-k'
  },
  {
    title: 'KLARE Fortschritts-Tracking',
    description: 'Verfolge deinen Fortschritt in jedem der 5 KLARE Schritte.',
    icon: FiAward,
    colorClass: 'text-klare-l'
  },
  {
    title: 'Persönliches Transformations-Journal',
    description: 'Dokumentiere Deinen Weg zu mehr Kongruenz mit dem Reflexions-Journal.',
    icon: FiUser,
    colorClass: 'text-klare-a'
  },
  {
    title: 'Visuelle Erinnerungen',
    description: 'Speichere Bilder und Momente, die Dich auf Deinem Weg inspirieren.',
    icon: FiCamera,
    colorClass: 'text-klare-r'
  },
  {
    title: 'Ressourcen-Bibliothek',
    description: 'Greife auf wertvolle Übungen und Inhalte für Deine Transformation zu.',
    icon: FiHeart,
    colorClass: 'text-klare-e'
  },
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-dark-klare-bg" id="features" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Die KLARE App für <span className="text-klare-k dark:text-dark-klare-k">Deine Transformation</span>
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Entdecke die Funktionen, die Dich auf dem Weg zu einem kongruenten und erfüllten Leben unterstützen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Feature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                colorClass={feature.colorClass}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}