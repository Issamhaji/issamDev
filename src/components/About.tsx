import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, MapPin, ShoppingCart, Zap } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce Expert",
      description: "Développement et personnalisation avancée sur Magento 2 & Hyvä Theme"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "PHP Full Stack",
      description: "Symfony, Laravel, Magento 2 – architecture robuste et maintenable"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Technique",
      description: "Optimisation des performances, balises, URLs et expérience utilisateur"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intégration API",
      description: "Synchronisation via API REST entre Symfony, Magento et services tiers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">À propos de moi</h2>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Développeur Full Stack PHP spécialisé en e-commerce, avec une expertise solide sur <strong>Magento 2</strong> et <strong>Symfony</strong>. 
              Passionné par la conception et le développement de solutions performantes, j'interviens aussi bien côté back-end (PHP, API REST, Doctrine) 
              que front-end (Alpine.js, Hyvä Theme, VueJS).
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              J'ai contribué à des projets e-commerce B2B et B2C dans des secteurs variés — nautisme, pharmacie, décoration et cosmétique — 
              en garantissant performance, sécurité et optimisation SEO technique.
            </p>

            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-4">
              <MapPin size={16} className="text-brand-700 dark:text-brand-400" />
              <span>Sala Al Jadida – Rabat, Maroc</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-[#60855A] rounded-full flex items-center justify-center text-[#071C0F] dark:text-[#A9F28C]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
