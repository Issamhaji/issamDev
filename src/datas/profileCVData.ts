// src/datas/profileCVData.ts

// Ce fichier contient des structures de données spécifiques à chaque profil
// pour personnaliser davantage les CV générés

// Interface pour les compétences mises en avant par profil
interface ProfileHighlights {
    header: string;
    subheader: string;
    keyPoints: string[];
  }
  
  // Interface pour les mots-clés par profil
  interface ProfileKeywords {
    skills: string[];
    tools: string[];
    methodologies: string[];
  }
  
  // Données spécifiques pour chaque profil
  export const profileSpecificData: Record<string, {
    highlights: ProfileHighlights;
    keywords: ProfileKeywords;
    summary: string;
  }> = {
    'data-analyst': {
      highlights: {
        header: "Analyste de Données",
        subheader: "Spécialiste en analyse et visualisation de données",
        keyPoints: [
          "Analyses de données complexes et interprétation de résultats",
          "Création de tableaux de bord et visualisations interactives",
          "Extraction et transformation de données (ETL)",
          "Reporting et présentation de résultats aux parties prenantes"
        ]
      },
      keywords: {
        skills: ["Analyse statistique", "SQL avancé", "Data Cleaning", "Data Mining"],
        tools: ["Excel", "Tableau", "Power BI", "Python", "Pandas", "SQL"],
        methodologies: ["ETL", "A/B Testing", "Business Intelligence"]
      },
      summary: "Analyste de données passionné par la transformation de données brutes en insights exploitables. Expertise en SQL, Python et outils de visualisation pour créer des tableaux de bord analytiques facilitant la prise de décision."
    },
    
    'data-scientist': {
      highlights: {
        header: "Data Scientist",
        subheader: "Spécialiste en sciences des données et modèles prédictifs",
        keyPoints: [
          "Développement de modèles prédictifs et d'algorithmes de machine learning",
          "Analyse statistique avancée et interprétation des résultats",
          "Traitement et préparation de données massives",
          "Recherche et implémentation de solutions innovantes basées sur les données"
        ]
      },
      keywords: {
        skills: ["Machine Learning", "Statistiques", "Data Modeling", "Python", "R"],
        tools: ["Scikit-learn", "TensorFlow", "Pandas", "Jupyter", "SQL"],
        methodologies: ["Méthodes statistiques", "Deep Learning", "Clustering", "Régression"]
      },
      summary: "Data Scientist avec une solide formation en science des données et intelligence artificielle. Expérience dans le développement de modèles prédictifs et l'extraction d'insights à partir de données complexes pour résoudre des problèmes métier."
    },
    
    'ai-engineer': {
      highlights: {
        header: "Ingénieur IA",
        subheader: "Spécialiste en développement de solutions d'intelligence artificielle",
        keyPoints: [
          "Conception et développement de modèles d'intelligence artificielle",
          "Implémentation d'algorithmes de deep learning et de computer vision",
          "Optimisation des performances des modèles d'IA",
          "Intégration de solutions d'IA dans des applications métier"
        ]
      },
      keywords: {
        skills: ["Deep Learning", "NLP", "Computer Vision", "Neural Networks"],
        tools: ["TensorFlow", "PyTorch", "Keras", "Docker", "Python"],
        methodologies: ["Transfer Learning", "Reinforcement Learning", "MLOps"]
      },
      summary: "Ingénieur en Intelligence Artificielle spécialisé dans le développement de solutions innovantes basées sur le deep learning. Expérience dans la conception, l'implémentation et le déploiement de modèles d'IA pour résoudre des défis complexes."
    },
    
    'fullstack': {
      highlights: {
        header: "Développeur Full Stack",
        subheader: "Expertise en développement web front-end et back-end",
        keyPoints: [
          "Développement d'applications web complètes et réactives",
          "Conception et implémentation d'APIs RESTful",
          "Architecture de bases de données et optimisation des requêtes",
          "Déploiement et maintenance d'applications en production"
        ]
      },
      keywords: {
        skills: ["JavaScript/TypeScript", "React", "Node.js", "REST APIs", "SQL/NoSQL"],
        tools: ["Git", "Docker", "Next.js", "Express", "MongoDB", "PostgreSQL"],
        methodologies: ["Agile/Scrum", "CI/CD", "TDD", "Clean Architecture"]
      },
      summary: "Développeur Full Stack passionné par la création d'applications web performantes et évolutives. Expertise en JavaScript/TypeScript avec React côté front-end et Node.js côté back-end, ainsi qu'une solide compréhension des bases de données et des architectures cloud."
    },
    
    'backend-developer': {
      highlights: {
        header: "Développeur Backend",
        subheader: "Spécialiste en développement d'APIs et services côté serveur",
        keyPoints: [
          "Conception et développement d'APIs RESTful et GraphQL",
          "Architecture de microservices et applications distribuées",
          "Gestion des bases de données relationnelles et NoSQL",
          "Sécurisation et optimisation des performances des applications"
        ]
      },
      keywords: {
        skills: ["Node.js", "Spring Boot", "Laravel", "SQL", "NoSQL", "Microservices"],
        tools: ["Express", "NestJS", "Docker", "Redis", "PostgreSQL", "MongoDB"],
        methodologies: ["Clean Code", "TDD", "SOLID", "Microservices", "Domain-Driven Design"]
      },
      summary: "Développeur Backend expérimenté dans la conception et l'implémentation de services robustes et évolutifs. Maîtrise des frameworks modernes et des architectures orientées API, avec une attention particulière pour les performances et la sécurité."
    },
    
    'frontend-developer': {
      highlights: {
        header: "Développeur Frontend",
        subheader: "Spécialiste en interfaces utilisateur modernes et réactives",
        keyPoints: [
          "Développement d'interfaces utilisateur riches et interactives",
          "Création d'applications web réactives et performantes",
          "Intégration d'APIs et gestion d'état côté client",
          "Optimisation des performances et de l'expérience utilisateur"
        ]
      },
      keywords: {
        skills: ["JavaScript/TypeScript", "React", "HTML5", "CSS3", "State Management", "Responsive Design"],
        tools: ["React", "Redux", "Tailwind CSS", "Bootstrap", "React Native"],
        methodologies: ["Component-Driven Development", "Mobile-First Design", "Progressive Enhancement"]
      },
      summary: "Développeur Frontend passionné par la création d'expériences utilisateur intuitives et esthétiques. Expertise en technologies web modernes pour construire des interfaces réactives, accessibles et optimisées."
    },
    
    'devops-engineer': {
      highlights: {
        header: "Ingénieur DevOps",
        subheader: "Spécialiste en infrastructures cloud et déploiement continu",
        keyPoints: [
          "Mise en place de pipelines CI/CD et automatisation des déploiements",
          "Configuration et gestion d'infrastructures cloud (Docker, Kubernetes)",
          "Monitoring et optimisation des performances des applications",
          "Sécurisation des infrastructures et gestion des accès"
        ]
      },
      keywords: {
        skills: ["CI/CD", "Cloud Infrastructure", "Containerization", "Scripting", "Monitoring"],
        tools: ["Docker", "Kubernetes", "Git", "Jenkins", "Terraform", "Linux"],
        methodologies: ["Infrastructure as Code", "Continuous Deployment", "Site Reliability Engineering"]
      },
      summary: "Ingénieur DevOps expérimenté dans l'automatisation des processus de développement et de déploiement. Expertise en conteneurisation, orchestration et infrastructures cloud pour assurer des déploiements fiables et évolutifs."
    },
    
    'network-admin': {
      highlights: {
        header: "Administrateur Systèmes et Réseaux",
        subheader: "Spécialiste en gestion des infrastructures IT",
        keyPoints: [
          "Administration et maintenance des systèmes et réseaux",
          "Configuration et dépannage des équipements réseau",
          "Sécurisation des infrastructures et gestion des accès",
          "Monitoring et optimisation des performances"
        ]
      },
      keywords: {
        skills: ["Administration Linux/Windows", "Sécurité Réseau", "Virtualization", "Monitoring"],
        tools: ["Windows Server", "Linux", "TCP/IP", "DNS", "DHCP", "Docker", "VM"],
        methodologies: ["Gestion des incidents", "ITIL", "Cybersécurité"]
      },
      summary: "Administrateur Systèmes et Réseaux avec une expertise dans la gestion et la maintenance des infrastructures IT. Expérience dans l'optimisation des configurations réseau, le support technique et l'implémentation de protocoles de sécurité pour assurer la disponibilité et la fiabilité des services."
    }
  };