'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/I18nProvider';

export default function FeaturesSection() {
  const { isEnglish } = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = isEnglish ? [
    {
      title: "Life Wheel Analysis",
      description: "Visualize your life areas and identify imbalances with the dynamic life wheel.",
      icon: "🎯"
    },
    {
      title: "Personal Insights",
      description: "Gain deep insights into your patterns and blockages through guided reflection exercises.",
      icon: "💡"
    },
    {
      title: "Progress Tracking",
      description: "Track your progress on the path to congruence with detailed reports and visualizations.",
      icon: "📊"
    },
    {
      title: "Meditation Exercises",
      description: "Strengthen your inner clarity with specially developed meditations and mindfulness exercises.",
      icon: "🧘"
    },
    {
      title: "Journal Function",
      description: "Document your thoughts, insights and progress with the built-in digital journal.",
      icon: "📓"
    },
    {
      title: "Resource Library",
      description: "Access an extensive collection of exercises, articles and tools for personal growth.",
      icon: "📚"
    }
  ] : [
    {
      title: "Lebensrad-Analyse",
      description: "Visualisiere deine Lebensbereiche und identifiziere Ungleichgewichte mit dem dynamischen Lebensrad.",
      icon: "🎯"
    },
    {
      title: "Persönliche Einsichten",
      description: "Erhalte tiefgehende Einblicke in deine Muster und Blockaden durch geführte Reflexionsübungen.",
      icon: "💡"
    },
    {
      title: "Fortschritts-Tracking",
      description: "Verfolge deinen Fortschritt auf dem Weg zur Kongruenz mit detaillierten Berichten und Visualisierungen.",
      icon: "📊"
    },
    {
      title: "Mediationsübungen",
      description: "Stärke deine innere Klarheit mit speziell entwickelten Meditationen und Achtsamkeitsübungen.",
      icon: "🧘"
    },
    {
      title: "Journal-Funktion",
      description: "Dokumentiere deine Gedanken, Erkenntnisse und Fortschritte mit dem eingebauten digitalen Tagebuch.",
      icon: "📓"
    },
    {
      title: "Ressourcen-Bibliothek",
      description: "Greife auf eine umfangreiche Sammlung von Übungen, Artikeln und Tools zur persönlichen Entwicklung zu.",
      icon: "📚"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-klare-bg" id="features" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            {isEnglish ? (
              <>Features That <span className="text-klare-l dark:text-dark-klare-l">Move You Forward</span></>
            ) : (
              <>Funktionen, die <span className="text-klare-l dark:text-dark-klare-l">dich weiterbringen</span></>
            )}
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            {isEnglish 
              ? "Discover the powerful tools in the CLEAR App"
              : "Entdecke die leistungsstarken Tools in der KLARE App"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-klare-card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-klare-text dark:text-dark-klare-text">{feature.title}</h3>
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-klare-text dark:text-dark-klare-text">
                {isEnglish ? "Advanced Analytics Dashboard" : "Erweitertes Analyse-Dashboard"}
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-klare-e dark:text-dark-klare-e text-xl mr-2 flex-shrink-0 mt-1" />
                  <span className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                    {isEnglish
                      ? "Visualize your progress over time with interactive charts"
                      : "Visualisiere deinen Fortschritt über die Zeit mit interaktiven Diagrammen"}
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-klare-e dark:text-dark-klare-e text-xl mr-2 flex-shrink-0 mt-1" />
                  <span className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                    {isEnglish
                      ? "Identify patterns and connections between different life areas"
                      : "Identifiziere Muster und Zusammenhänge zwischen verschiedenen Lebensbereichen"}
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-klare-e dark:text-dark-klare-e text-xl mr-2 flex-shrink-0 mt-1" />
                  <span className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                    {isEnglish
                      ? "Get personalized recommendations based on your data"
                      : "Erhalte personalisierte Empfehlungen basierend auf deinen Daten"}
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 relative h-60 md:h-80">
              <Image
                src="/images/app-screenshots-organized/analytics-dashboard.webp"
                alt={isEnglish ? "CLEAR App Analytics Dashboard" : "KLARE App Analyse-Dashboard"}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}