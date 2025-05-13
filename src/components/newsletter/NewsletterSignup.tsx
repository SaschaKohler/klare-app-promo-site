'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  source?: string;
  className?: string;
  colorScheme?: {
    primary: string;
    secondary?: string;
    background?: string;
    text?: string;
  };
}

export default function NewsletterSignup({
  title = 'Bleibe auf dem Laufenden',
  description = 'Abonniere unseren Newsletter und erhalte Updates zur KLARE App.',
  buttonText = 'Abonnieren',
  source = 'newsletter-component',
  className = '',
  colorScheme = {
    primary: 'bg-klare-k',
    secondary: 'text-klare-k',
    background: 'bg-white',
    text: 'text-gray-800',
  },
}: NewsletterSignupProps) {
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
          source 
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
    <div className={`rounded-xl shadow-lg ${colorScheme.background || 'bg-white'} p-6 ${className}`}>
      <div className="text-center mb-5">
        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${colorScheme.primary} mb-4`}>
          <FiMail className="w-6 h-6 text-white" />
        </span>
        <h3 className={`text-xl font-bold ${colorScheme.text || 'text-gray-800'}`}>
          {title}
        </h3>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>

      <form onSubmit={handleSubscribe}>
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-${colorScheme.secondary?.replace('text-', '') || 'klare-k'} focus:border-transparent`}
            required
            disabled={isLoading || status === 'success'}
          />
          
          <button
            type="submit"
            disabled={isLoading || status === 'success'}
            className={`w-full py-3 px-4 rounded-lg ${colorScheme.primary} hover:opacity-90 text-white font-medium transition-all duration-200 flex items-center justify-center disabled:opacity-70`}
          >
            {isLoading ? 'Wird angemeldet...' : 
             status === 'success' ? (
              <>
                Angemeldet <FiCheck className="ml-2" />
              </>
             ) : buttonText
            }
          </button>
        </div>
        
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-start"
          >
            <FiCheck className="mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{message}</p>
          </motion.div>
        )}
        
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-start"
          >
            <FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{message}</p>
          </motion.div>
        )}
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Wir respektieren Deine Privatsphäre und senden Dir nur relevante Updates.
        </p>
      </form>
    </div>
  );
}