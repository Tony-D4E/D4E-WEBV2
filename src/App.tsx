import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CookieBanner } from './components/CookieBanner';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { Elvy } from './pages/Elvy';
import OdooPage from './pages/OdooPage';
import ElvyBatPage from './pages/ElvyBatPage';
import ElvyPrintPage from './pages/ElvyPrintPage';
import ElvyInsurancePage from './pages/ElvyInsurancePage';
import ElvyEducaPage from './pages/ElvyEducaPage';
import { TarifsPage } from './pages/TarifsPage';
import { Support } from './pages/Support';
import CguPage from './pages/CguPage';
import EntreprisePage from './pages/EntreprisePage';
import JobsPage from './pages/JobsPage';
import { NotFound } from './pages/NotFound';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8fafc]">
        <Navigation />
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/odoo"          element={<OdooPage />} />
          <Route path="/elvy"          element={<Elvy />} />
          <Route path="/elvybat"       element={<ElvyBatPage />} />
          <Route path="/elvyprint"     element={<ElvyPrintPage />} />
          <Route path="/elvyinsurance" element={<ElvyInsurancePage />} />
          <Route path="/elvyeduca"     element={<ElvyEducaPage />} />
          <Route path="/tarifs"        element={<TarifsPage />} />
          <Route path="/support"       element={<Support />} />
          <Route path="/cgu"           element={<CguPage />} />
          <Route path="/entreprise"    element={<EntreprisePage />} />
          <Route path="/jobs"          element={<JobsPage />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppWidget
          phoneNumber="41764344595"
          message="Bonjour Digital4Efficiency, j'ai une question concernant vos services Odoo."
        />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
