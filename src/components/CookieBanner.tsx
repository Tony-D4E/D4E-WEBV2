import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Attendre 1 seconde avant d'afficher pour ne pas être intrusif
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-6">
          {!showDetails ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-[#00D4C8]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Nous utilisons des cookies</h3>
                  <p className="text-sm text-gray-400">
                    Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. 
                    En continuant à naviguer, vous acceptez notre{' '}
                    <a href="/privacy" className="text-[#00D4C8] hover:underline">
                      politique de confidentialité
                    </a>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(true)}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  Personnaliser
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAcceptNecessary}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Refuser
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white hover:opacity-90"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#00D4C8]" />
                  Gérer les préférences de cookies
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3">
                {/* Cookies nécessaires */}
                <div className="p-4 bg-[#0B0F19] rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="font-semibold text-white">Cookies nécessaires</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">Toujours actifs</span>
                  </div>
                  <p className="text-sm text-gray-400 pl-6">
                    Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                  </p>
                </div>

                {/* Cookies analytiques */}
                <div className="p-4 bg-[#0B0F19] rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#00D4C8]" />
                      <span className="font-semibold text-white">Cookies analytiques</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 pl-6">
                    Nous aident à comprendre comment les visiteurs interagissent avec notre site.
                    (Google Analytics)
                  </p>
                </div>

                {/* Cookies marketing */}
                <div className="p-4 bg-[#0B0F19] rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="font-semibold text-white">Cookies marketing</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 pl-6">
                    Utilisés pour vous proposer des publicités pertinentes.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Retour
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Refuser tout
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white hover:opacity-90"
                >
                  Enregistrer mes préférences
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
