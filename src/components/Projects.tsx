import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../datas/cvSections';

// const projects = [
//   {
//     title: "Plateforme de Streaming de Films Marocains",
//     description: "Une plateforme de streaming dédiée au cinéma marocain, permettant aux utilisateurs de regarder, enregistrer leur progression et gérer leurs listes de favoris.",
//     image: "https://images.unsplash.com/photo-1615986201152-7686a4867f30?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tech: ["ReactJS", "React Native", "Spring Boot", "PostgreSQL", "Microservices", "Docker"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "web"
//   },
//   {
//     title: "Application de Gestion des événements",
//     description: "Une application pour automatiser l'organisation des événements et la gestion des quotas de participation, intégrant Firebase pour l'authentification.",
//     image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
//     tech: ["NestJS", "React", "PostgreSQL", "Firebase", "CI/CD"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "web"
//   },
//   // {
//   //   title: "Application pour Supporters du Raja Club Athletic",
//   //   description: "Une plateforme communautaire pour les supporters du Raja CA, offrant des actualités, des forums et une gestion des adhésions.",
//   //   image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a0?w=800&h=400&fit=crop",
//   //   tech: ["NestJS", "React Native", "PostgreSQL", "Docker"],
//   //   github: "https://github.com/aminebouichidar/",
//   //   live: "https://demo.com",
//   //   category: "mobile"
//   // },
//   {
//     title: "Dashboard d'Analyse Alimenté par l'IA",
//     description: "Un tableau de bord utilisant des algorithmes d'apprentissage automatique pour analyser et prédire les tendances basées sur les données utilisateur.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
//     tech: ["Python", "TensorFlow", "React", "D3.js", "Scikit-learn"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "ai"
//   },
//   {
//     title: "Application de Gestion de Magasin",
//     description: "Une solution complète pour la gestion des stocks, des ventes et des achats, avec des rapports analytiques détaillés.",
//     image: "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tech: ["Laravel", "Vue.js", "MySQL"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "web"
//   },
//   {
//     title: "Application de Gestion de Cabinet de Pédiatrie",
//     description: "Un système permettant aux médecins de gérer les rendez-vous, le suivi des patients et la facturation.",
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
//     tech: ["Laravel", "React", "MySQL"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "web"
//   },
//   {
//     title: "Site Web de GASTI Consulting",
//     description: "Un site vitrine pour la société GASTI Consulting, offrant des services de conseil en stratégie et management.",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tech: ["WordPress", "PHP", "MySQL"],
//     github: null,
//     live: "https://gasti-consulting.com",
//     category: "web"
//   },
//   {
//     title: "Application de Gestion pour Avocats",
//     description: "Un outil permettant aux avocats de gérer leurs dossiers, fixer des rendez-vous et suivre leurs clients.",
//     image: "https://images.unsplash.com/photo-1731742274419-bf3748045fbe?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tech: ["Laravel", "React", "PostgreSQL"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "web"
//   },
//   {
//     title: "Application de Gestion pour Promoteurs Immobiliers",
//     description: "Une plateforme permettant aux promoteurs immobiliers de gérer leurs projets, suivre les ventes et gérer les contrats clients.",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tech: ["Laravel", "Vue.js", "PostgreSQL"],
//     github: "https://github.com/aminebouichidar/",
//     live: "https://demo.com",
//     category: "web"
//   }
// ];

// Extraction des technologies uniques pour les filtres
type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string | null;
  live?: string | null;
  category: string;
  role?: string;
};

const typedProjects: Project[] = projects as unknown as Project[];
const allTechnologies: string[] = [...new Set(typedProjects.flatMap((project) => project.tech))].sort();
const categories: string[] = [...new Set(typedProjects.map((project) => project.category))];

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        {project.role && (
          <span className="inline-block text-sm font-medium text-brand-600 dark:text-brand-400 mb-2 px-2 py-1 bg-brand-50 dark:bg-brand-900/20 rounded-md border border-brand-100 dark:border-brand-800/30 w-fit">
            {project.role}
          </span>
        )}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-brand-100 text-brand-900 dark:bg-brand-500/30 dark:text-brand-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
            {project.live && project.live !== "" && (
            <a
              href={project.live}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Visit Website</span>
            </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visibleProjects, setVisibleProjects] = useState<number>(3);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filtre des projets en fonction des technologies et catégories sélectionnées
  const filteredProjects: Project[] = typedProjects.filter((project: Project) => {
    const techMatch = selectedTech.length === 0 || 
      selectedTech.some((tech: string) => project.tech.includes(tech));
    const categoryMatch = selectedCategory === "" || 
      project.category === selectedCategory;
    return techMatch && categoryMatch;
  });

  const displayedProjects: Project[] = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const loadLess = () => {
    setVisibleProjects(3);
  };

  const toggleTech = (tech: string) => {
    setSelectedTech((prev: string[]) =>
      prev.includes(tech)
        ? prev.filter((t: string) => t !== tech)
        : [...prev, tech]
    );
    // Réinitialiser le nombre de projets visibles quand on change de filtre
    setVisibleProjects(3);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategory(prev => prev === category ? "" : category);
    // Réinitialiser le nombre de projets visibles quand on change de filtre
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">Projets</h2>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors self-center md:self-auto"
            >
              <Filter size={18} />
              <span>Filtres</span>
              {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
          
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Catégories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                        selectedCategory === category 
                          ? 'bg-brand-900 text-white border-brand-900' 
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {category === "web" ? "Web" : 
                       category === "mobile" ? "Mobile" : 
                       category === "ai" ? "IA/ML" : category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {allTechnologies.map(tech => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                        selectedTech.includes(tech) 
                          ? 'bg-brand-500/20 text-brand-800 dark:text-brand-300 border-brand-500/40' 
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Aucun projet ne correspond à ces critères.
              </p>
              <button
                onClick={() => {
                  setSelectedTech([]);
                  setSelectedCategory("");
                }}
                className="mt-4 px-4 py-2 bg-brand-900 text-white rounded-md hover:bg-brand-700 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={index} 
                    inView={inView} 
                  />
                ))}
              </div>
              
              {hasMoreProjects && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-center mt-12"
                >
                  <button
                    onClick={loadMore}
                    className="px-6 py-3 bg-brand-900 text-white rounded-md hover:bg-brand-700 transition-colors flex items-center gap-2"
                  >
                    <span>Voir plus de projets</span>
                    <ChevronDown size={18} />
                  </button>
                </motion.div>
              )}
              
              {visibleProjects > 3 && filteredProjects.length > 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center mt-6"
                >
                  <button
                    onClick={loadLess}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors flex items-center gap-1"
                  >
                    <span>Voir moins</span>
                    <ChevronUp size={18} />
                  </button>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}