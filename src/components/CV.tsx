import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, GraduationCap, Award, BookOpen, Plus, Minus, ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
// Import the data from your data file
import { education, certifications } from '../datas/cvSections';
import { generateCVByProfile } from '../utils/cvGenerator';
import { profileSpecificData } from '../datas/profileCVData';

// Define interfaces for the data structures
interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export default function CV() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // États pour gérer l'affichage des formations et certifications
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  // Nouvel état pour le menu déroulant
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  
  // Référence pour le menu déroulant (pour le fermer en cliquant ailleurs)
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Profils disponibles pour le téléchargement
  const profiles = [
    { id: 'data-analyst', title: 'Data Analyst' },
    { id: 'data-scientist', title: 'Data Scientist' },
    { id: 'ai-engineer', title: 'AI Engineer' },
    { id: 'fullstack', title: 'Fullstack Developer' },
    { id: 'java', title: 'JAVA Developer' },
    { id: 'tester', title: 'Junior Tester' }
  ];

  // Fermer le menu déroulant en cliquant ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fonction pour gérer le téléchargement du CV
  const handleDownloadCV = (profileId: string) => {
    // Fermer le menu après la sélection
    setDropdownOpen(false);
    setSelectedProfile(profileId);

    // Appeler la fonction de génération du CV
    const profileData = profileSpecificData[profileId];
    if (profileData) {
      generateCVByProfile(profileId, profileData);
    }
  };

  // Tri des formations de la plus récente à la plus ancienne
  const sortedEducation = [...education].sort((a: EducationItem, b: EducationItem) => {
    // Extraire les années de fin
    const aEndYear = parseInt(a.period.split(' - ')[1] || a.period);
    const bEndYear = parseInt(b.period.split(' - ')[1] || b.period);
    return bEndYear - aEndYear;
  });

  // Tri des certifications de la plus récente à la plus ancienne
  const sortedCertifications = [...certifications].sort((a: CertificationItem, b: CertificationItem) => 
    parseInt(b.year) - parseInt(a.year)
  );

  // Nombre d'éléments à afficher initialement
  const initialCount = 2;

  // Formations à afficher
  const displayedEducation = showAllEducation 
    ? sortedEducation 
    : sortedEducation.slice(0, initialCount);

  // Certifications à afficher
  const displayedCertifications = showAllCertifications 
    ? sortedCertifications 
    : sortedCertifications.slice(0, initialCount);

  // Gestion de l'expansion des cartes pour voir les détails
  const toggleItemExpansion = (type: string, index: number) => {
    const itemId = `${type}-${index}`;
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="cv" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Curriculum Vitae</h2>
            
            {/* Menu déroulant pour télécharger le CV */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-[#071C0F] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 duration-300"
              >
                <Download size={20} />
                <span>Télécharger mon CV</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    <div className="py-2 px-1">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-3 mb-1">Sélectionner un profil</h3>
                      {profiles.map((profile) => (
                        <button
                          key={profile.id}
                          onClick={() => handleDownloadCV(profile.id)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md flex items-center gap-2"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#60855A]"></span>
                          <span>{profile.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Section Éducation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[#071C0F] dark:text-[#60855A]" size={24} />
                <h3 className="text-2xl font-semibold">Parcours académiques</h3>
              </div>
              
              <div className="space-y-6 relative">
                <AnimatePresence>
                  {displayedEducation.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20, height: "auto" }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${expandedItem === `edu-${index}` ? 'ring-2 ring-[#071C0F] dark:ring-[#60855A]' : 'hover:shadow-xl'}`}
                      onClick={() => toggleItemExpansion('edu', index)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold mb-2">{edu.degree}</h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.period}</p>
                        </div>
                        <ChevronRight 
                          className={`text-[#071C0F] dark:text-[#60855A] transition-transform duration-300 ${expandedItem === `edu-${index}` ? 'rotate-90' : ''}`} 
                          size={20} 
                        />
                      </div>
                      
                      <AnimatePresence>
                        {expandedItem === `edu-${index}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                          >
                            <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Bouton "Voir plus" pour l'éducation */}
                {sortedEducation.length > initialCount && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setShowAllEducation(!showAllEducation)}
                    className="flex items-center justify-center gap-2 mt-4 w-full py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-[#071C0F] dark:text-[#60855A] hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    {showAllEducation ? (
                      <>
                        <Minus size={16} />
                        <span>Voir moins</span>
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        <span>Voir {sortedEducation.length - initialCount} autres formations</span>
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>

            {/* Section Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-[#071C0F] dark:text-[#60855A]" size={24} />
                <h3 className="text-2xl font-semibold">Attestations</h3>
              </div>
              
              <div className="space-y-6 relative">
                <AnimatePresence>
                  {displayedCertifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 20, height: "auto" }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${expandedItem === `cert-${index}` ? 'ring-2 ring-[#071C0F] dark:ring-[#60855A]' : 'hover:shadow-xl'}`}
                      onClick={() => toggleItemExpansion('cert', index)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="text-[#071C0F] dark:text-[#60855A]" size={20} />
                            <h4 className="font-semibold">{cert.name}</h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">{cert.year}</p>
                        </div>
                        <ChevronRight 
                          className={`text-[#071C0F] dark:text-[#60855A] transition-transform duration-300 ${expandedItem === `cert-${index}` ? 'rotate-90' : ''}`} 
                          size={20} 
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Bouton "Voir plus" pour les certifications */}
                {sortedCertifications.length > initialCount && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setShowAllCertifications(!showAllCertifications)}
                    className="flex items-center justify-center gap-2 mt-4 w-full py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-[#071C0F] dark:text-[#60855A] hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    {showAllCertifications ? (
                      <>
                        <Minus size={16} />
                        <span>Voir moins</span>
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        <span>Voir {sortedCertifications.length - initialCount} autres certifications</span>
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>
          </div>
          
          {/* Indicateur de sélection de profil */}
          {selectedProfile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 bg-green-50 dark:bg-green-900 dark:bg-opacity-20 rounded-lg border border-green-200 dark:border-green-800"
            >
              <p className="text-green-800 dark:text-green-400 text-sm">
                Vous avez sélectionné le profil <strong>{profiles.find(p => p.id === selectedProfile)?.title}</strong>. Votre CV est en cours de génération.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}