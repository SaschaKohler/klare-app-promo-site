'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { useI18n } from '@/lib/i18n/I18nProvider';

export default function CallToAction() {
  const { isEnglish } = useI18n();
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="call-to-action">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-klare rounded-3xl py-16 px-8 md:py-20 md:px-12 text-center text-white overflow-hidden relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-klare-k via-klare-a to-klare-e opacity-90"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {isEnglish ? "Ready for more congruence in your life?" : "Bereit für mehr Kongruenz in deinem Leben?"}
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-100">
              {isEnglish 
                ? "Sign up to receive updates about the CLEAR App and be among the first to get access."
                : "Melde dich an, um Updates zur KLARE App zu erhalten und sei unter den Ersten, die Zugang bekommen."}
            </p>
            
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3 mb-4">
              <input
                type="email"
                placeholder={isEnglish ? "Your email address" : "Deine E-Mail-Adresse"}
                className="flex-grow px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-klare-a hover:text-klare-k font-medium px-5 py-3 rounded-full transition-colors flex items-center justify-center"
              >
                {isEnglish ? "Get Updates" : "Updates erhalten"}
                <FiArrowRight className="ml-2" />
              </button>
            </form>
            
            <p className="text-sm text-gray-200">
              {isEnglish 
                ? "We respect your privacy. No spam emails."
                : "Wir respektieren deine Privatsphäre. Keine Spam-Mails."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}