import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Navigation } from './sections/Navigation';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import Footer from './components/Footer';

/* -- Lazy loading par route : seul le code de la page visitée est chargé -- */
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Elvy = lazy(() => import('./pages/Elvy').then(m => ({ default: m.Elvy })));
const OdooPage = lazy(() => import('./pages/OdooPage'));
const ElvyBatPage = lazy(() => import('./pages/ElvyBatPage'));
const ElvyScanPage = lazy(() => import('./pages/ElvyScanPage'));
const ElvyPrintPage = lazy(() => import('./pages/ElvyPrintPage'));
const ElvyInsurancePage = lazy(() => import('./pages/ElvyInsurancePage'));
const ElvyEducaPage = lazy(() => import('./pages/ElvyEducaPage'));
const TarifsPage = lazy(() => import('./pages/TarifsPage').then(m => ({ default: m.TarifsPage })));
const Support = lazy(() => import('./pages/Support').then(m => ({ default: m.Support })));
const ConditionsPage = lazy(() => import('./pages/ConditionsPage'));
const CguPage = lazy(() => import('./pages/CguPage'));
const EntreprisePage = lazy(() => import('./pages/EntreprisePage'));
const JobsPage = lazy(() => import('./pages/JobsPage'));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

/* -- SEO : titre et description par page -- */
const DEFAULT_META = {
  title: 'D4E - Partenaire Odoo Gold | Intégrateur ERP Suisse',
  desc: "Partenaire Odoo Gold en Suisse. Intégration ERP sur mesure, formation et support. Solutions métiers Elvy pour BTP, construction et plus.",
};

const META: Record<string, { title: string; desc: string }> = {
  '/': DEFAULT_META,
  '/odoo': {
    title: 'Intégration Odoo en Suisse | D4E Partenaire Gold',
    desc: "Implémentation Odoo par un partenaire Gold suisse : cadrage, déploiement, formation et support. Genève, Sion et toute la Suisse romande.",
  },
  '/elvy': {
    title: 'Solutions métiers Elvy sur Odoo | D4E',
    desc: "La gamme Elvy : des solutions Odoo verticalisées, co-construites avec des entrepreneurs. BTP, impression, assurance, éducation et plus.",
  },
  '/elvybat': {
    title: 'ElvyBât - Gestion de chantiers sur Odoo | D4E',
    desc: "Pilotez vos chantiers et maîtrisez vos marges : devis, situations, avancements, régie et facturation pour les entreprises du bâtiment.",
  },
  '/elvyscan': {
    title: 'ElvyScan - Chiffrez vos soumissions BTP CAN/CFC sans ressaisie | D4E',
    desc: "ElvyScan lit vos soumissions BTP, vous chiffrez à l'écran et vos prix sont réécrits sur le PDF original de l'architecte. Prêt à renvoyer en quelques minutes.",
  },
  '/elvyprint': {
    title: "ElvyPrint - Gestion des systèmes d'impression | D4E",
    desc: "Contrats, compteurs et interventions automatisés pour les professionnels des systèmes d'impression, sur Odoo.",
  },
  '/elvyinsurance': {
    title: 'ElvyInsurance - Courtage en assurance sur Odoo | D4E',
    desc: "Polices, commissions et comptabilité dans un seul outil pour les courtiers en assurance.",
  },
  '/elvyeduca': {
    title: 'ElvyEduca - Gestion de la formation sur Odoo | D4E',
    desc: "Admissions, scolarité et facturation unifiées pour les écoles et centres de formation.",
  },
  '/tarifs': {
    title: "Nos offres d'intégration Odoo | D4E",
    desc: "Des packs d'intégration Odoo clairs et sans surprise, du démarrage à la solution métier complète.",
  },
  '/support': {
    title: 'Support et formation Odoo | D4E',
    desc: "Support réactif et formation continue pour vos équipes Odoo, assurés depuis la Suisse romande.",
  },
  '/entreprise': {
    title: 'Qui sommes-nous | D4E - Digital4Efficiency',
    desc: "D4E, intégrateur Odoo Gold fondé en 2019. Équipes à Genève, Sion et Barcelone, plus de 160 références en Suisse romande.",
  },
  '/jobs': {
    title: 'Rejoignez-nous | Carrières chez D4E',
    desc: "Consultants, développeurs, chefs de projet : rejoignez une équipe Odoo Gold en pleine croissance.",
  },
  '/conditions-generales': {
    title: 'Conditions générales | D4E',
    desc: 'Conditions générales de vente de D4E - Digital4Efficiency Sàrl.',
  },
  '/cgu': {
    title: "Conditions générales d'utilisation | D4E",
    desc: "Conditions générales d'utilisation des services et logiciels D4E.",
  },
};

function SeoMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = META[pathname] ?? DEFAULT_META;
    document.title = meta.title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute('content', meta.desc);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SeoMeta />
      <Navigation />
      <WhatsAppWidget phoneNumber="41764344595" />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/odoo"          element={<OdooPage />} />
          <Route path="/elvy"          element={<Elvy />} />
          <Route path="/elvybat"       element={<ElvyBatPage />} />
          <Route path="/elvyscan"      element={<ElvyScanPage />} />
          <Route path="/elvyprint"     element={<ElvyPrintPage />} />
          <Route path="/elvyinsurance" element={<ElvyInsurancePage />} />
          <Route path="/elvyeduca"     element={<ElvyEducaPage />} />
          <Route path="/tarifs"        element={<TarifsPage />} />
          <Route path="/support"       element={<Support />} />
          <Route path="/conditions-generales" element={<ConditionsPage />} />
          <Route path="/cgu"           element={<CguPage />} />
          <Route path="/entreprise"    element={<EntreprisePage />} />
          <Route path="/jobs"          element={<JobsPage />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
