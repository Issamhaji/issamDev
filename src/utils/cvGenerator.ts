import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Il faut ajouter cette bibliothèque pour créer des tableaux facilement
import { education, certifications, experiences, skills, projects } from '../datas/cvSections';
import { profileSpecificData } from '../datas/profileCVData';

// Définir les interfaces pour les données filtrées
interface FilteredCVData {
  education: typeof education;
  certifications: typeof certifications;
  experiences: typeof experiences;
  skills: {
    [key: string]: { name: string; level: number }[];
  };
  projects: typeof projects;
}

// Interface pour les données de contact
interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

// Fonction pour filtrer les données en fonction du profil sélectionné
const filterDataByProfile = (profileId: string): FilteredCVData => {
  // Créer un objet de base avec toutes les données
  const baseData = {
    education: [...education],
    certifications: [...certifications],
    experiences: [...experiences],
    skills: { ...skills },
    projects: [...projects]
  };
  
  // Filtrer les expériences pertinentes selon le profil
  switch (profileId) {
    case 'data-analyst':
      return {
        ...baseData,
        experiences: experiences.filter(exp => 
          exp.description.toLowerCase().includes('data') || 
          exp.description.toLowerCase().includes('analyse') ||
          exp.achievements?.some(ach => ach.toLowerCase().includes('data'))
        ),
        skills: {
          'Analyses de données': skills.data_science,
          'Programmation': skills.backend.filter(s => ['Python', 'SQL'].some(tech => s.name.includes(tech))),
          'Visualisation': skills.data_science.filter(s => ['Matplotlib', 'Pandas'].some(tech => s.name.includes(tech)))
        },
        projects: projects.filter(p => 
          p.tech.some(t => ['Python', 'Pandas', 'Matplotlib', 'D3.js', 'SQL'].includes(t)) ||
          p.description.toLowerCase().includes('data') ||
          p.description.toLowerCase().includes('analyse')
        )
      };
      
    case 'data-scientist':
      return {
        ...baseData,
        experiences: experiences.filter(exp => 
          exp.description.toLowerCase().includes('data') || 
          exp.description.toLowerCase().includes('machine learning') ||
          exp.position.toLowerCase().includes('data') ||
          exp.achievements?.some(ach => ach.toLowerCase().includes('data') || ach.toLowerCase().includes('machine learning'))
        ),
        skills: {
          'Data Science': skills.data_science,
          'Machine Learning': skills.artificial_intelligence,
          'Programmation': skills.backend.filter(s => ['Python', 'SQL'].some(tech => s.name.includes(tech)))
        },
        projects: projects.filter(p => 
          p.tech.some(t => ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'].includes(t)) ||
          p.description.toLowerCase().includes('ia') ||
          p.description.toLowerCase().includes('machine learning') ||
          p.description.toLowerCase().includes('intelligence artificielle')
        )
      };
      
    // Les autres cas...
    
    default:
      return baseData;
  }
};

// Fonction pour générer une barre de compétence visuelle
const generateSkillBar = (level: number): string => {
  const maxBars = 10;
  const filledBars = Math.round((level / 100) * maxBars);
  let barText = '|';
  
  for (let i = 0; i < maxBars; i++) {
    barText += i < filledBars ? '█' : '░';
  }
  
  barText += '| ' + level + '%';
  return barText;
};

// Fonction principale pour générer le CV en PDF
export const generateCVByProfile = (profileId: string, profileData: any, contactInfo: ContactInfo) => {
  const { highlights, keywords, summary } = profileData;
  const filteredData = filterDataByProfile(profileId);
  
  // Créer un nouveau document PDF
  const doc = new jsPDF();
  let yPos = 15; // Position Y initiale
  const leftMargin = 15;
  const rightMargin = 195;
  const lineHeight = 7;
  
  // Titre du CV
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text("Bouichidar Amine", doc.internal.pageSize.width / 2, yPos, { align: 'center' });
  yPos += 10;
  
  // Informations de contact
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Disposition horizontale des informations de contact
  doc.text(`Email: amine.bouichidar@gmail.com`, leftMargin, yPos);
  doc.text(`Tél: (+212) 6 05 98 12 54`, rightMargin, yPos, { align: 'right' });
  yPos += lineHeight;
  
  doc.text(`Adresse: GPE Addoha al Khair 102, app 09, Sala al Jadida`, leftMargin, yPos);
  doc.text(`LinkedIn: in/Amine-bouichidar`, rightMargin, yPos, { align: 'right' });

  // if (contactInfo.linkedin) {
  //   doc.text(`LinkedIn: in/Amine-bouichidar`, rightMargin, yPos, { align: 'right' });
  // }
  yPos += lineHeight;
  
  // if (contactInfo.github) {
  doc.text(`GitHub: amine.bouichidar`, leftMargin, yPos);
  // }
  // if (contactInfo.website) {
  doc.text(`Site web: amine-bouichidar.me`, rightMargin, yPos, { align: 'right' });
  // }
  yPos += 2 * lineHeight;
  
  // Ligne de séparation
  doc.setDrawColor(100, 100, 100);
  doc.line(leftMargin, yPos, rightMargin, yPos);
  yPos += lineHeight;
  
  // Points forts / Headline
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(highlights.header, leftMargin, yPos);
  yPos += lineHeight;
  
  doc.setFontSize(12);
  doc.text(highlights.subheader, leftMargin, yPos);
  yPos += 2 * lineHeight;
  
  // Résumé
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("RÉSUMÉ", leftMargin, yPos);
  yPos += lineHeight;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Traiter le texte du résumé pour le diviser en lignes
  const summaryLines = doc.splitTextToSize(summary, rightMargin - leftMargin);
  doc.text(summaryLines, leftMargin, yPos);
  yPos += summaryLines.length * 5 + lineHeight;
  
  // Points clés
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("POINTS CLÉS", leftMargin, yPos);
  yPos += lineHeight;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  highlights.keyPoints.forEach(point => {
    doc.text(`• ${point}`, leftMargin + 5, yPos);
    yPos += lineHeight;
  });
  yPos += lineHeight;
  
  // Compétences
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("COMPÉTENCES", leftMargin, yPos);
  yPos += lineHeight;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  Object.entries(filteredData.skills).forEach(([category, skillsArray]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(category, leftMargin, yPos);
    yPos += lineHeight;
    
    doc.setFont('helvetica', 'normal');
    skillsArray.forEach(skill => {
      doc.text(skill.name, leftMargin + 5, yPos);
      doc.text(generateSkillBar(skill.level), leftMargin + 60, yPos);
      yPos += 5;
    });
    yPos += 2;
  });
  yPos += lineHeight;
  
  // Ajouter une nouvelle page si nécessaire
  if (yPos > 250) {
    doc.addPage();
    yPos = 15;
  }
  
  // Expériences professionnelles
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("EXPÉRIENCES PROFESSIONNELLES", leftMargin, yPos);
  yPos += lineHeight;
  
  doc.setFontSize(10);
  filteredData.experiences.forEach(exp => {
    // Vérifier s'il faut ajouter une nouvelle page
    if (yPos > 250) {
      doc.addPage();
      yPos = 15;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(exp.position, leftMargin, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`${exp.company}, ${exp.location} | ${exp.startDate} - ${exp.endDate || 'Présent'}`, rightMargin, yPos, { align: 'right' });
    yPos += lineHeight;
    
    const descLines = doc.splitTextToSize(exp.description, rightMargin - leftMargin);
    doc.text(descLines, leftMargin + 5, yPos);
    yPos += descLines.length * 5;
    
    if (exp.achievements && exp.achievements.length > 0) {
      doc.text("Réalisations:", leftMargin + 5, yPos);
      yPos += lineHeight;
      
      exp.achievements.forEach(ach => {
        const achLines = doc.splitTextToSize(`• ${ach}`, rightMargin - leftMargin - 10);
        doc.text(achLines, leftMargin + 10, yPos);
        yPos += achLines.length * 5;
      });
    }
    
    yPos += lineHeight;
  });
  
  // Formation
  if (yPos > 230) {
    doc.addPage();
    yPos = 15;
  }
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("FORMATION", leftMargin, yPos);
  yPos += lineHeight;
  
  doc.setFontSize(10);
  filteredData.education.forEach(edu => {
    doc.setFont('helvetica', 'bold');
    doc.text(edu.degree, leftMargin, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`${edu.institution}, ${edu.location} | ${edu.startDate} - ${edu.endDate || 'Présent'}`, rightMargin, yPos, { align: 'right' });
    yPos += lineHeight;
    
    if (edu.description) {
      const eduLines = doc.splitTextToSize(edu.description, rightMargin - leftMargin);
      doc.text(eduLines, leftMargin + 5, yPos);
      yPos += eduLines.length * 5;
    }
    
    yPos += 5;
  });
  
  // Certifications si espace disponible
  if (yPos < 240 && filteredData.certifications.length > 0) {
    yPos += lineHeight;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("CERTIFICATIONS", leftMargin, yPos);
    yPos += lineHeight;
    
    doc.setFontSize(10);
    filteredData.certifications.forEach(cert => {
      doc.setFont('helvetica', 'bold');
      doc.text(cert.name, leftMargin, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(`${cert.issuer} | ${cert.date}`, rightMargin, yPos, { align: 'right' });
      yPos += lineHeight;
    });
  }
  
  // Projets notables si espace disponible
  if (yPos < 220 && filteredData.projects.length > 0) {
    yPos += lineHeight;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("PROJETS NOTABLES", leftMargin, yPos);
    yPos += lineHeight;
    
    doc.setFontSize(10);
    filteredData.projects.slice(0, 2).forEach(proj => {
      doc.setFont('helvetica', 'bold');
      doc.text(proj.title, leftMargin, yPos);
      yPos += lineHeight;
      
      doc.setFont('helvetica', 'normal');
      const projLines = doc.splitTextToSize(proj.description, rightMargin - leftMargin);
      doc.text(projLines, leftMargin + 5, yPos);
      yPos += projLines.length * 5;
      
      doc.text(`Technologies: ${proj.tech.join(', ')}`, leftMargin + 5, yPos);
      yPos += lineHeight * 1.5;
    });
  }
  
  // Mots-clés en bas de la dernière page
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  const keywordsText = `Compétences: ${keywords.skills.join(', ')} | Outils: ${keywords.tools.join(', ')} | Méthodologies: ${keywords.methodologies.join(', ')}`;
  const keywordsLines = doc.splitTextToSize(keywordsText, rightMargin - leftMargin);
  
  // Positionner les mots-clés au bas de la page
  const lastPageYPos = doc.internal.pageSize.height - 15;
  doc.text(keywordsLines, leftMargin, lastPageYPos);
  
  // Enregistrer le PDF
  doc.save(`${profileId}-cv.pdf`);
};

// Version mise à jour de la fonction d'aperçu
export const previewFilteredData = (profileId: string) => {
  return filterDataByProfile(profileId);
};

// Exemple d'utilisation avec les données de contact
export const generateAndDownloadCV = (profileId: string) => {
  const profileData = profileSpecificData[profileId];
  const contactInfo: ContactInfo = {
    name: "Votre Nom Complet",
    email: "votre.email@exemple.com",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue Exemple, 75000 Paris, France",
    linkedin: "linkedin.com/in/votre-profil",
    github: "github.com/votre-compte",
    website: "www.votre-site.com"
  };
  
  generateCVByProfile(profileId, profileData, contactInfo);
};