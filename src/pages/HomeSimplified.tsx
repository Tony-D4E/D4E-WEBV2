import { useContent } from '../hooks/useContent';
import { Footer } from '../sections/Footer';
import { Button } from '@/components/ui/button';
import { 
  Award, ArrowRight, MapPin, CheckCircle, 
  Layers, Phone, Mail, Linkedin, ChevronDown, ChevronUp 
} from 'lucide-react';
import { useState } from 'react';

export function HomeSimplified() {
  const content = useContent();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!content) {
    return <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center text-white">Chargement...</div>;
  }

  const { hero, metiers, tarifs, equipe, faq, contact } = content;

  return (
    <main className="min-h-screen bg-[#0B0F19]">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[900px] h-[900px] bg-[#00D4C8]/20 -top-60 -right-60 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F59E0B]/20 to-[#FBBF24]/10 rounded-full border border-[#F59E0B]/30">
                <Award className="h-5 w-5 text-[#FBBF24]" />
                <span className="text-sm font-bold text-[#FBBF24]">{hero.badge}</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {hero.titre}
              </h1>
              <p className="text-xl text-gray-400 max-w-xl">{hero.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white font-bold px-8 rounded-xl">
                  <a href="/tarifs">{hero.cta.principal} <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-xl">
                  <a href="/#contact-form">{hero.cta.secondaire}</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {contact.adresses.map((adr, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <MapPin className="h-4 w-4 text-[#00D4C8]" />
                    <span className="text-sm text-gray-300">{adr.canton}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#00D4C8]/30 to-[#06B6D4]/20 rounded-full blur-[100px]" />
              <div className="relative p-8 bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-white/10 w-full max-w-md">
                <img src="/logo-d4e.png" alt="Digital4Efficiency" className="h-16 mx-auto mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  {hero.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-[#0B0F19] rounded-xl">
                      <div className="text-3xl font-black text-[#00D4C8]">{stat.valeur}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS MÉTIERS */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{metiers.titre}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Intégrateur */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{metiers.integrateur.titre}</h3>
                  <p className="text-[#FBBF24] font-semibold">{metiers.integrateur.sousTitre}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{metiers.integrateur.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {metiers.integrateur.services.map((s, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-[#0B0F19] rounded-xl">
                    <CheckCircle className="h-4 w-4 text-[#00D4C8] mt-0.5" />
                    <div>
                      <div className="font-semibold text-white text-sm">{s.titre}</div>
                      <div className="text-xs text-gray-500">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-bold rounded-xl">
                <a href="/#contact-form">Discuter de mon projet <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>

            {/* Éditeur */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{metiers.editeur.titre}</h3>
                  <p className="text-[#00D4C8] font-semibold">{metiers.editeur.sousTitre}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{metiers.editeur.description}</p>
              <div className="space-y-3 mb-6">
                {metiers.editeur.produits.map((p, i) => (
                  <a key={i} href={p.lien} className={`flex items-center justify-between p-4 rounded-xl transition-all ${p.tag === 'Disponible' ? 'bg-gradient-to-r from-[#00B4A6]/10 to-transparent border border-[#00D4C8]/30' : 'bg-[#0B0F19] border border-white/5'}`}>
                    <div>
                      <div className="font-semibold text-white">{p.nom}</div>
                      <div className="text-xs text-gray-500">{p.desc}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${p.tag === 'Disponible' ? 'bg-[#00D4C8] text-white' : 'bg-gray-700 text-gray-400'}`}>{p.tag}</div>
                  </a>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl">
                <a href="/elvy">Découvrir la gamme <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{tarifs.titre}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Starter Pack */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tarifs.starterPack.nom}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-black text-white">{tarifs.starterPack.prix}</span>
                  <span className="text-xl text-gray-400">{tarifs.starterPack.devise}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{tarifs.starterPack.note}</p>
              </div>
              <p className="text-gray-400 mb-6">{tarifs.starterPack.description}</p>
              <ul className="space-y-3 mb-8">
                {tarifs.starterPack.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00D4C8]" />
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-bold rounded-xl">
                <a href="/#contact-form">Je veux ce pack <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>

            {/* Support */}
            <div className="p-8 bg-[#111827] rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{tarifs.support.nom}</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {tarifs.support.options.map((opt, i) => (
                  <div key={i} className="text-center p-4 bg-[#0B0F19] rounded-xl">
                    <div className="text-xs text-gray-500 mb-1">{opt.label}</div>
                    <div className="text-lg font-bold text-white">{opt.prix}</div>
                    <div className="text-xs text-gray-500">{opt.unite}</div>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl">
                <a href="/support">Demander un devis <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Vos interlocuteurs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {equipe.map((membre, i) => (
              <div key={i} className="p-6 bg-[#111827] rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <img src={membre.photo} alt={membre.nom} className="w-20 h-20 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{membre.nom}</h3>
                    <p className="text-[#00D4C8] text-sm font-semibold mb-2">{membre.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{membre.description}</p>
                    <div className="flex gap-2">
                      <a href={`mailto:${membre.email}`} className="p-2 bg-white/5 rounded-lg hover:bg-white/10">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </a>
                      <a href={`tel:+41${membre.telephone}`} className="p-2 bg-white/5 rounded-lg hover:bg-white/10">
                        <Phone className="h-4 w-4 text-gray-400" />
                      </a>
                      <a href={membre.linkedin} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10">
                        <Linkedin className="h-4 w-4 text-gray-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="bg-[#111827] rounded-xl border border-white/10 overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5">
                  <span className="font-semibold text-white pr-4">{item.question}</span>
                  {expandedFaq === i ? <ChevronUp className="h-5 w-5 text-[#00D4C8]" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{item.reponse}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-8">Discutons de votre projet</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white font-bold px-8 rounded-xl">
              <a href="/#contact-form">Prendre rendez-vous <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-xl">
              <a href={`tel:${contact.telephone.replace(/\s/g, '')}`}><Phone className="mr-2 h-5 w-5" /> {contact.telephone}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
