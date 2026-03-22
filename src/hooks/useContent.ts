import { useState, useEffect } from 'react';

interface HeroContent {
  badge: string;
  titre: string;
  description: string;
  cta: { principal: string; secondaire: string };
  stats: { valeur: string; label: string }[];
}

interface TeamMember {
  nom: string;
  role: string;
  description: string;
  email: string;
  telephone: string;
  photo: string;
  linkedin: string;
}

interface FAQItem {
  question: string;
  reponse: string;
}

interface SiteContent {
  hero: HeroContent;
  metiers: {
    titre: string;
    integrateur: {
      titre: string;
      sousTitre: string;
      description: string;
      services: { titre: string; desc: string }[];
    };
    editeur: {
      titre: string;
      sousTitre: string;
      description: string;
      produits: { nom: string; tag: string; desc: string; lien: string }[];
    };
  };
  tarifs: {
    titre: string;
    starterPack: {
      nom: string;
      prix: string;
      devise: string;
      description: string;
      features: string[];
      note: string;
    };
    support: {
      nom: string;
      options: { label: string; prix: string; unite: string }[];
    };
  };
  equipe: TeamMember[];
  faq: FAQItem[];
  contact: {
    telephone: string;
    email: string;
    adresses: { rue: string; ville: string; canton: string }[];
  };
}

export function useContent(): SiteContent | null {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    fetch('/content/site-content.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Erreur chargement contenu:', err));
  }, []);

  return content;
}
