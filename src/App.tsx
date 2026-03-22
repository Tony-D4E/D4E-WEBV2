import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { Elvy } from './pages/Elvy';
import { ElvyBatPage } from './pages/ElvyBatPage';
import { TarifsPage } from './pages/TarifsPage';
import { Support } from './pages/Support';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      {/* Thème clair Kimi : fond blanc cassé */}
      <div className="min-h-screen bg-[#f8fafc]">
        <Navigation />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/elvy"     element={<Elvy />} />
          <Route path="/elvybat"  element={<ElvyBatPage />} />
          <Route path="/tarifs"   element={<TarifsPage />} />
          <Route path="/support"  element={<Support />} />
          {/* 404 */}
          <Route path="*"         element={<NotFound />} />
        </Routes>
        <WhatsAppWidget
          phoneNumber="41764344595"
          message="Bonjour Digital4Efficiency, j'ai une question concernant vos services Odoo."
        />
        <CookieBanner />
      </div>
    </HashRouter>
  );
}

export default App;
