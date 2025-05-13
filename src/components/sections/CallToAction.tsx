'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'klare-app-promo'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Vielen Dank für Deine Anmeldung!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Ein Fehler ist aufgetreten.');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error 
        ? error.message 
        : 'Bitte versuche es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

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
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="w-full py-3 px-6 rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading || status === 'success'}
              />
              <button 
                type="submit"
                disabled={isLoading || status === 'success'} 
                className="whitespace-nowrap bg-white text-klare-k hover:bg-gray-100 py-3 px-6 rounded-full font-medium transition-all text-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? 'Wird angemeldet...' : 
                 status === 'success' ? (
                  <>
                    Angemeldet <FiCheck />
                  </>
                 ) : (
                  <>
                    Anmelden <FiArrowRight />
                  </>
                 )
                }
              </button>
            </div>
            
            {status !== 'idle' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 font-medium ${status === 'error' ? 'text-red-300' : 'text-green-300'}`}
              >
                {message}
              </motion.p>
            )}
          </form>
          
          <p className="mt-6 text-sm text-white/80">
            Wir respektieren Deine Privatsphäre und senden Dir nur relevante Updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}