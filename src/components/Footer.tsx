import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-[#50C878]">
              Issam Haji
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1 font-medium">
              Développeur Full Stack PHP – Symfony / Magento 2
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Spécialiste e-commerce passionné par la création de solutions web performantes, scalables et optimisées SEO.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/issam-haji-46b113221/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:issamhaji606@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+212620312407" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  À propos de moi
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  Expérience professionnelle
                </a>
              </li>
              <li>
                <a href="#cv" className="text-gray-600 dark:text-gray-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:issamhaji606@gmail.com" className="hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  issamhaji606@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+33756755511" className="hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  +33 7 56 75 55 11
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+212620312407" className="hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  +212 6 20 31 24 07
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                <span>Sala Al Jadida – Rabat, Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="shrink-0" />
                <a href="https://www.linkedin.com/in/issam-haji-46b113221/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 dark:hover:text-brand-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>{currentYear} Issam Haji. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}