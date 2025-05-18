'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clearSteps = [
  {
    letter: 'C',
    title: 'Clarity',
    description: 'Honest self-awareness and recognition. Understand your current state and identify incongruences.',
    color: 'bg-klare-k'
  },
  {
    letter: 'L',
    title: 'Liveliness',
    description: 'Activation of natural energy and resources. Connect with your intrinsic motivation.',
    color: 'bg-klare-l'
  },
  {
    letter: 'E',
    title: 'Evolvement',
    description: 'Inner coherence and integration. Create a congruent hierarchy of values and a life vision.',
    color: 'bg-klare-a'
  },
  {
    letter: 'A',
    title: 'Action',
    description: 'Sustainable behavior and implementation. Move from knowledge to actual action.',
    color: 'bg-klare-r'
  },
  {
    letter: 'R',
    title: 'Realization',
    description: 'Effortless manifestation and continuous growth. Live from a state of complete congruence.',
    color: 'bg-klare-e'
  }
];

export default function ClearMethodExplained() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="methode" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            The <span className="text-klare-a dark:text-dark-klare-a">5-Step Process</span> of the CLEAR Method
          </h2>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Discover the transformative path to complete congruence in all areas of life.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {clearSteps.map((step, index) => (
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