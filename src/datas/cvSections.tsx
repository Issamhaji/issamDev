// src/data/cvSections.tsx

// Helper function for sorting by date
export const getDateFromPeriod = (period: string): number => {
  if (!period) return 0;
  const matches = period.match(/(\d{4})/g);
  if (!matches || matches.length === 0) return 0;
  return parseInt(matches[matches.length - 1]);
};

// Values for core principles/values section
export const values = [
  {
    icon: "Code",
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code"
  },
  {
    icon: "Brain",
    title: "Problem Solving",
    description: "Tackling complex challenges with innovative solutions"
  },
  {
    icon: "Heart",
    title: "User-Centric",
    description: "Creating experiences that users love"
  },
  {
    icon: "Zap",
    title: "Performance",
    description: "Optimizing for speed, SEO and efficiency"
  }
];

// Professional experiences data
export const experiences = [
  {
    company: "Egio",
    position: "Développeur Full Stack PHP - Symfony/Magento2",
    period: "02/2025 - Présent",
    location: "Rabat, Maroc",
    description: "Développement e-commerce full stack au sein d'une agence digitale (marwa & LDM), avec intégration entre Symfony et Magento2.",
    achievements: [
      "Intégration bidirectionnelle Symfony-Magento pour la synchronisation en temps réel des produits, commandes et stocks via API REST, permettant une gestion centralisée des données e-commerce.",
      "Développement de sites e-commerce full stack en utilisant Magento 2, avec intégration de solutions front-end modernes comme Alpine.js.",
      "Personnalisation de thèmes avancés tels que Hyvä pour une expérience utilisateur optimisée et conforme aux bonnes pratiques SEO.",
      "Intégration de solutions complémentaires comme Zendesk pour améliorer la gestion du support client et la qualité du parcours utilisateur."
    ]
  },
  {
    company: "Nokytech",
    position: "Développeur Full Stack PHP - Magento2",
    period: "01/2024 - 01/2025",
    location: "Casablanca, Maroc",
    description: "Développement de sites e-commerce full stack en utilisant Magento 2.",
    achievements: [
      "Développement de sites e-commerce full stack en utilisant Magento 2, avec intégration de solutions front-end modernes comme Alpine.js.",
      "Personnalisation de thèmes avancés tels que Hyvä pour une expérience utilisateur optimisée et respectueuse des bonnes pratiques SEO.",
      "Conception et intégration de fonctionnalités e-commerce côté back-end et front-end, en assurant la performance, la sécurité et l'optimisation pour le référencement naturel (SEO).",
      "Optimisation des sites pour le SEO technique : gestion des balises, URLs canoniques, vitesse de chargement, compatibilité mobile et architecture de liens internes.",
      "Collaboration avec des équipes pour la mise en place de solutions évolutives, incluant la gestion des catalogues, paiements et logistique."
    ]
  },
  {
    company: "SQLI",
    position: "Stagiaire Développeur Full Stack PHP",
    period: "03/2023 - 08/2023",
    location: "Rabat, Maroc",
    description: "Stage de développement full stack PHP avec focus sur Magento 2 et Symfony.",
    achievements: [
      "Création d'un site web e-commerce en se basant sur le framework Symfony & VueJS.",
      "Création d'un module splitorder dans la plateforme Magento qui divise les commandes en sous-commande selon un attribut choisi en admin.",
      "Technologies utilisées : Magento 2, XML, Symfony 6, Twig, VueJS, MySQL et Doctrine."
    ]
  }
];

// Education data
export const education = [
  {
    degree: "Master en science d'ingénieurie des données",
    institution: "Université Mohammed 5 de Rabat",
    period: "2021 - 2023",
    description: "Formation avancée en science des données, intelligence artificielle et développement logiciel à l'Université Mohammed 5 de Rabat."
  },
  {
    degree: "Licence Fondamentale en Science Mathématique et Informatique",
    institution: "Université Mohammed 5 de Rabat",
    period: "2021 - 2023",
    description: "Licence en mathématiques et informatique, avec une solide base en algorithmique, base de données et développement logiciel."
  },
  {
    degree: "DEUG",
    institution: "Université Mohammed 5 de Rabat",
    period: "2018 - 2021",
    description: "Diplôme d'Études Universitaires Générales en sciences à l'Université Mohammed 5 de Rabat."
  }
];

// Certifications data
export const certifications = [
  {
    name: "Développement Magento 2",
    issuer: "Magento / Adobe",
    year: "2024"
  },
  {
    name: "Symfony Framework",
    issuer: "SensioLabs",
    year: "2023"
  },
  {
    name: "Développement Full Stack PHP",
    issuer: "Formation professionnelle",
    year: "2023"
  }
];

// Projects data - Les vrais projets d'Issam Haji
export const projects = [
  {
    title: "THS Diffusion",
    description: "Site e-commerce B2C développé avec Magento 2 et thème Hyvä. Personnalisation avancée du thème, optimisation SEO technique, Alpine.js pour le front-end et intégration de solutions de paiement.",
    image: "/images/projects/thsdiffusion.png",
    tech: ["Magento 2", "Hyvä Theme", "Alpine.js", "PHP", "MySQL", "SEO"],
    github: null,
    live: "https://thsdiffusion.com/",
    category: "ecommerce"
  },
  {
    title: "Les Drug Stores Du Maroc",
    description: "Plateforme e-commerce B2C développée sur Magento 2. Intégration de fonctionnalités avancées de gestion de catalogues produits, optimisation des performances et expérience utilisateur soignée.",
    image: "/images/projects/lesdrugstoresdumaroc.png",
    tech: ["Magento 2", "PHP", "MySQL", "Alpine.js", "SEO"],
    github: null,
    live: "https://lesdrugstoresdumaroc.com/",
    category: "ecommerce"
  },
  {
    title: "Xtremsboat",
    description: "Site e-commerce B2C spécialisé dans les équipements nautiques. Développé avec Magento 2, avec personnalisation de thème avancée et intégration de modules spécifiques au secteur marin.",
    image: "/images/projects/xtremsboat.png",
    tech: ["Magento 2", "PHP", "Hyvä Theme", "Alpine.js", "MySQL"],
    github: null,
    live: "https://www.xtremsboat.com/fr/",
    category: "ecommerce"
  },
  {
    title: "Alliance Yachts",
    description: "Site e-commerce B2C dédié à la vente et location de yachts et bateaux de plaisance. Architecture Magento 2 avec customisations spécifiques au secteur de la plaisance.",
    image: "/images/projects/allianceyachts.png",
    tech: ["Magento 2", "PHP", "Alpine.js", "MySQL", "SEO"],
    github: null,
    live: "https://allianceyachts.fr/",
    category: "ecommerce"
  },
  {
    title: "SRA Pharmazon",
    description: "Plateforme B2B e-commerce pharmaceutique développée avec Magento 2 et intégration Symfony. Synchronisation des stocks et commandes via API REST, gestion des catalogues B2B et workflows métier spécifiques.",
    image: "/images/projects/pharmazon.png",
    tech: ["Magento 2", "Symfony", "API REST", "PHP", "MySQL", "B2B"],
    github: null,
    live: "https://www.sra-pharmazon.com/",
    category: "ecommerce"
  },
  {
    title: "Tapis d'Entrée",
    description: "Site e-commerce B2B/B2C spécialisé dans la vente de tapis et paillassons. Développé avec Magento 2, avec des fonctionnalités avancées de filtrage produit, optimisation SEO et intégration de solutions logistiques.",
    image: "/images/projects/tapisdentree.png",
    tech: ["Magento 2", "PHP", "Alpine.js", "MySQL", "SEO", "B2B/B2C"],
    github: null,
    live: "https://www.tapisdentree.fr/",
    category: "ecommerce"
  }
];


// Skills data by category
export const skills = {
  backend: [
    { name: 'PHP', level: 90 },
    { name: 'Magento 2', level: 88 },
    { name: 'Symfony 6', level: 82 },
    { name: 'Laravel', level: 75 },
    { name: 'API REST', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'Doctrine', level: 78 },
    { name: 'MariaDB', level: 75 },
    { name: 'MongoDB', level: 65 },
    { name: 'Firebase', level: 60 }
  ],
  frontend: [
    { name: 'HTML/CSS', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'Alpine.js', level: 82 },
    { name: 'VueJS 3', level: 78 },
    { name: 'NuxtJS', level: 72 },
    { name: 'Hyvä Theme', level: 85 },
    { name: 'Twig', level: 80 },
    { name: 'JAVA', level: 60 }
  ],
  devops: [
    { name: 'Git / GitLab', level: 85 },
    { name: 'Docker', level: 72 },
    { name: 'Linux', level: 75 },
    { name: 'Slack', level: 80 },
    { name: 'Trello', level: 78 },
    { name: 'Jira', level: 75 },
    { name: 'SQL Server', level: 70 }
  ],
  ecommerce: [
    { name: 'Magento 2 (Back-end)', level: 90 },
    { name: 'Magento 2 (Front-end)', level: 85 },
    { name: 'SEO Technique', level: 82 },
    { name: 'Hyvä Theme', level: 85 },
    { name: 'Zendesk', level: 70 },
    { name: 'XML / Layout Magento', level: 80 }
  ]
};