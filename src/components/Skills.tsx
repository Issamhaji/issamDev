import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { skills } from '../datas/cvSections'

// const skills = {
//   frontend: [
//     { name: 'ReactJS', level: 85 },
//     { name: 'React Native', level: 75 },
//     { name: 'JavaScript', level: 85 },
//     { name: 'TypeScript', level: 75 },
//     { name: 'HTML/CSS', level: 90 },
//     { name: 'Tailwind CSS', level: 80 },
//     { name: 'Bootstrap', level: 80 }
//   ],
//   backend: [
//     { name: 'Node.js', level: 85 },
//     { name: 'NestJS', level: 80 },
//     { name: 'Express.js', level: 80 },
//     { name: 'Spring Boot', level: 70 },
//     { name: 'Laravel', level: 65 },
//     { name: 'PostgreSQL', level: 75 },
//     { name: 'MySQL', level: 80 },
//     { name: 'Firebase', level: 70 },
//     { name: 'MongoDB', level: 70 },
//     { name: 'GraphQL', level: 65 },
//     { name: 'Redis', level: 60 }
//   ],
//   devops: [
//     { name: 'Docker', level: 75 },
//     { name: 'CI/CD', level: 70 },
//     { name: 'Git/GitHub', level: 85 },
//     { name: 'Linux', level: 70 }
//   ],
//   data_science: [
//     { name: 'Python', level: 80 },
//     { name: 'Pandas', level: 75 },
//     { name: 'NumPy', level: 75 },
//     { name: 'Scikit-learn', level: 70 },
//     { name: 'TensorFlow', level: 60 },
//     { name: 'Matplotlib', level: 70 }
//   ],
//   artificial_intelligence: [
//     { name: 'Machine Learning', level: 75 },
//     { name: 'Deep Learning', level: 65 },
//     { name: 'Computer Vision', level: 60 },
//     { name: 'Natural Language Processing (NLP)', level: 65 },
//     { name: 'Reinforcement Learning', level: 55 }
//   ],
//   network_system_admin: [
//     { name: 'Linux Administration', level: 70 },
//     { name: 'Windows Server', level: 60 },
//     { name: 'Networking (TCP/IP, DNS, DHCP)', level: 65 },
//     { name: 'Virtualization (Docker, VM)', level: 75 },
//     { name: 'Cloud Computing (AWS, Firebase)', level: 65 },
//     { name: 'Cybersecurity Basics', level: 60 }
//   ]
// };

// Mapping des catégories vers des noms lisibles
const categoryLabels: Record<string, string> = {
  backend: 'Back-End & Base de données',
  frontend: 'Front-End',
  devops: 'Outils & DevOps',
  ecommerce: 'E-Commerce & Magento 2',
  // fallback snake_case keys
  data_science: 'Data Science',
  artificial_intelligence: 'Intelligence Artificielle',
  network_system_admin: 'Systèmes & Réseaux',
};

const formatCategoryName = (key: string): string => {
  if (categoryLabels[key]) return categoryLabels[key];
  const words = key.split('_');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Composant pour afficher une compétence
const SkillBar = ({ skill, index, inView, delay = 0 }) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, x: -10 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: delay + index * 0.05 }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-[#071C0F] h-2.5 rounded-full"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </motion.div>
);

// Composant Modal pour afficher toutes les compétences
const SkillsModal = ({ category, skills, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{formatCategoryName(category)} Skills</h3>
          <button 
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#071C0F] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [modalState, setModalState] = useState({
    isOpen: false,
    category: null
  });

  const openModal = (category) => {
    setModalState({
      isOpen: true,
      category
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      category: null
    });
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Compétence technique</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <div key={category} className="mb-8 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-6">{formatCategoryName(category)}</h3>
                <div className="space-y-4">
                  {categorySkills.slice(0, 3).map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                      inView={inView} 
                      delay={categoryIndex * 0.1}
                    />
                  ))}
                </div>
                
                {categorySkills.length > 3 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.3 }}
                    onClick={() => openModal(category)}
                    className="mt-6 px-4 py-2 bg-[#071C0F] text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center text-sm"
                  >
                    <span>Voir plus</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {modalState.isOpen && (
        <SkillsModal 
          category={modalState.category} 
          skills={skills[modalState.category]} 
          isOpen={modalState.isOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}