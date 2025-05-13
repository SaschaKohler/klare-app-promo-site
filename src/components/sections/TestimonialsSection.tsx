'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';

// Testimonial Daten
const testimonials = [
  {
    text: "Die KLARE Methode hat mir geholfen, endlich Klarheit in allen Lebensbereichen zu finden. Ich freue mich schon sehr auf die App!",
    author: "Maria K.",
    role: "Unternehmerin"
  },
  {
    text: "Als Coach nutze ich die KLARE Methode in meiner Arbeit und sehe beeindruckende Ergebnisse. Die App wird ein Game-Changer sein!",
    author: "Thomas B.",
    role: "Life Coach"
  },
  {
    text: "Ich habe viele Selbstoptimierungs-Methoden ausprobiert, aber die KLARE Methode ist anders. Sie fühlt sich natürlich und ganzheitlich an.",
    author: "Julia M.",
    role: "Personaltrainerin"
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-dark-klare-bg" id="about" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Was andere über die <span className="text-klare-e dark:text-dark-klare-e">KLARE Methode</span> sagen
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Erfahre, wie die KLARE Methode bereits das Leben vieler Menschen positiv verändert hat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-dark-klare-card rounded-xl shadow-lg p-6 border border-gray-100 dark:border-dark-klare-border h-full flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary italic mb-6 flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-300">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-klare-text dark:text-dark-klare-text">{testimonial.author}</p>
                    <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}