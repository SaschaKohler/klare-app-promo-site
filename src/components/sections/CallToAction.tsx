'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-klare-k to-klare-a text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Sei unter den Ersten, die die KLARE App nutzen
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Melde Dich jetzt für Updates an und erhalte frühzeitigen Zugang zur Beta-Version.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="w-full py-3 px-6 rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="whitespace-nowrap bg-white text-klare-k hover:bg-gray-100 py-3 px-6 rounded-full font-medium transition-all text-lg shadow-lg flex items-center justify-center gap-2">
              Anmelden
              <FiArrowRight />
            </button>
          </div>
          
          <p className="mt-6 text-sm text-white/80">
            Wir respektieren Deine Privatsphäre und senden Dir nur relevante Updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}