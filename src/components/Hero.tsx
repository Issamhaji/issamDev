import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient and subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white dark:from-gray-900 dark:via-gray-900/60 dark:to-gray-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-900/20 dark:bg-brand-500/20 blur-3xl" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src="/img/me.jpg"
              alt="Issam Haji"
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-xl ring-4 ring-white/70 dark:ring-gray-800/60"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-900 to-brand-700"
          >
            Issam Haji
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
          >
            Développeur Full Stack PHP – Symfony / Magento 2
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Spécialiste e-commerce Magento 2 &amp; Symfony, passionné par la création d'expériences numériques performantes avec du code propre et des solutions innovantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a href="https://www.linkedin.com/in/issam-haji-46b113221/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-900 transition-colors" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:issamhaji606@gmail.com" className="text-gray-600 hover:text-brand-900 transition-colors" title="Email">
              <Mail size={24} />
            </a>
            <a href="tel:+212620312407" className="text-gray-600 hover:text-brand-900 transition-colors" title="Téléphone">
              <Phone size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="bg-[#06402B] text-white px-8 py-3 rounded-full font-medium hover:bg-brand-700 transition-colors inline-block shadow-sm"
              >
                Voir mes projets
              </a>
              <a
                href="mailto:issamhaji606@gmail.com"
                className="px-8 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:border-brand-900 dark:hover:border-brand-400 text-gray-700 dark:text-gray-200 hover:text-brand-900 dark:hover:text-brand-400 transition-colors inline-block"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
