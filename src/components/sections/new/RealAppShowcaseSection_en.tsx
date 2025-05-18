'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/I18nProvider';

export default function RealAppShowcaseSection() {
  const { isEnglish } = useI18n();
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="showcase">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            {isEnglish ? "App Preview" : "So sieht die App aus"}
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            {isEnglish 
              ? "Experience the intuitive user interface and powerful features"
              : "Erlebe die intuitive Benutzeroberfläche und kraftvolle Funktionen"}
          </p>
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden md:gap-16"
          >
            {/* Devices Showcase */}
            <div className="relative flex justify-center w-full md:w-auto md:order-2">
              {/* iPhone Device */}
              <div className="relative z-20 w-64 md:w-72 h-[530px] md:h-[600px]">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/app-screenshots-organized/iphone-frame-with-screen.webp"
                    alt={isEnglish ? "CLEAR App on iPhone" : "KLARE App auf iPhone"}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* iPad Device - Hidden on Mobile */}
              <div className="hidden md:block absolute left-[-180px] top-[100px] z-10 w-[300px] h-[400px] opacity-80">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/app-screenshots-organized/ipad-frame-with-screen.webp"
                    alt={isEnglish ? "CLEAR App on iPad" : "KLARE App auf iPad"}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Feature Highlights */}
            <div className="w-full md:w-1/3 md:order-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-klare-card p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-klare-k dark:text-dark-klare-k">
                  {isEnglish ? "Intuitive Navigation" : "Intuitive Navigation"}
                </h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                  {isEnglish 
                    ? "Easily navigate through the app with a clean, user-friendly interface designed for seamless interaction."
                    : "Navigiere einfach durch die App mit einer klaren, benutzerfreundlichen Oberfläche, die für nahtlose Interaktion entwickelt wurde."}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-klare-card p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-klare-a dark:text-dark-klare-a">
                  {isEnglish ? "Interactive Exercises" : "Interaktive Übungen"}
                </h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                  {isEnglish 
                    ? "Engage with dynamic exercises and activities designed to deepen your self-awareness and congruence."
                    : "Beschäftige dich mit dynamischen Übungen und Aktivitäten, die deine Selbsterkenntnis und Kongruenz vertiefen."}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-klare-card p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-klare-e dark:text-dark-klare-e">
                  {isEnglish ? "Cross-Device Sync" : "Geräteübergreifende Synchronisation"}
                </h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                  {isEnglish 
                    ? "Seamlessly switch between your phone, tablet, and future web app with automatic data synchronization."
                    : "Wechsle nahtlos zwischen deinem Smartphone, Tablet und der zukünftigen Web-App mit automatischer Datensynchronisation."}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}