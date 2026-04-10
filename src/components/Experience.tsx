import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { experiences, getDateFromPeriod } from '../datas/cvSections';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [showAll, setShowAll] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  
  // Sort experiences
  const sortedExperiences = [...experiences].sort((a, b) => {
    // Mettre "Présent" en premier
    if (a.period.includes("Présent") && !b.period.includes("Présent")) return -1;
    if (!a.period.includes("Présent") && b.period.includes("Présent")) return 1;
    
    // Sinon, trier par date
    return getDateFromPeriod(b.period) - getDateFromPeriod(a.period);
  });
  
  // Nombre d'expériences à afficher initialement
  const initialCount = 3;
  
  // Expériences à afficher
  const displayedExperiences = showAll ? sortedExperiences : sortedExperiences.slice(0, initialCount);
  
  const handleToggleShow = () => {
    setIsExpanding(true);
    setShowAll(!showAll);
    // Ajout d'un délai pour permettre l'animation avant de scroller
    setTimeout(() => {
      setIsExpanding(false);
    }, 600);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">expériences professionnelles</h2>

          <div className="space-y-8">
            <AnimatePresence>
              {displayedExperiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.position}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.5, delay: isExpanding ? index * 0.1 : 0 }}
                  className="relative pl-8 border-l-2 border-[#071C0F] dark:border-[#60855A]"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-[#071C0F] dark:bg-[#60855A] rounded-full" />
                  
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <Building2 className="text-[#071C0F] dark:text-[#60855A]" />
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#071C0F] dark:text-[#60855A]">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Bouton "Voir plus" / "Voir moins" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={handleToggleShow}
              className="flex items-center gap-2 px-6 py-3 bg-[#071C0F] dark:bg-[#60855A] text-white rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              {showAll ? (
                <>
                  Voir moins <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Voir plus ({sortedExperiences.length - initialCount}) <ChevronDown size={18} />
                </>
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}