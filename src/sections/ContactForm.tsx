import { useState } from 'react';
import { Send, Phone, Mail, Building2, MessageSquare, CheckCircle, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xdawrgoz';

const subjects = [
  { value: 'implementation', label: 'Implémentation Odoo' },
  { value: 'personnalisation', label: 'Personnalisation et Développement' },
  { value: 'formation', label: 'Formation' },
  { value: 'support', label: 'Support technique' },
  { value: 'elvybat', label: 'ElvyBat BTP' },
  { value: 'starterpack', label: 'Starter Pack 2500 CHF' },
  { value: 'autre', label: 'Autre demande' },
];

type FormData = {
  firstName: string; lastName: string; email: string;
  phone: string; company: string; subject: string; message: string;
};
const EMPTY: FormData = { firstName:'', lastName:'', email:'', phone:'', company:'', subject:'', message:'' };

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const subjectLabel = subjects.find(s => s.value === formData.subject)?.label ?? formData.subject;
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          prenom: formData.firstName, nom: formData.lastName,
          email: formData.email, telephone: formData.phone,
          entreprise: formData.company, sujet: subjectLabel,
          message: formData.message,
          _subject: '[D4E] Nouvelle demande - ' + subjectLabel,
        }),
      });
      if (res.ok) { setStatus('success'); }
      else { throw new Error('HTTP ' + res.status); }
    } catch (err) {
      setStatus('error');
      setErrorMsg("Erreur envoi. Contactez-nous à info@digital4efficiency.ch");
    }
  };

  if (status === 'success') {
    return (
      <section id="contact-form" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="p-12 bg-[#F8FAFC] rounded-3xl border border-[#CCFBF1]">
            <div className="w-20 h-20 rounded-full bg-[#00D4C8] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-[#0F1D3A] mb-4">Message envoyé !</h2>
            <p className="text-gray-500 mb-8">
              Merci <strong className="text-[#0F1D3A]">{formData.firstName}</strong>, notre équipe vous contacte sous 24h.
            </p>
            <button onClick={() => { setFormData(EMPTY); setStatus('idle'); }}
              className="px-6 py-3 text-gray-500 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
              Nouvelle demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Colonne gauche */}
          <div className="lg:col-span-2 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D4C8]/40 rounded-full bg-[#00D4C8]/5 mb-6">
              <MessageSquare className="h-4 w-4 text-[#00D4C8]" />
              <span className="text-sm font-bold text-[#00D4C8]">Contactez-nous</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F1D3A] tracking-tight leading-tight mb-4">
              Discutons de votre{' '}
              <span className="bg-[#00D4C8] text-white px-2 py-0.5 rounded-lg">projet</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Notre équipe vous recontacte sous 24h ouvrées.
            </p>

            <div className="flex flex-col gap-4">
              <a href="tel:+41582551115"
                className="flex items-center gap-4 p-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl hover:border-[#00D4C8]/40 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4C8] transition-colors">
                  <Phone className="h-5 w-5 text-[#00D4C8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Téléphone</p>
                  <p className="text-base font-bold text-[#0F1D3A]">+41 (0)58 255 11 15</p>
                </div>
              </a>
              <a href="mailto:info@digital4efficiency.ch"
                className="flex items-center gap-4 p-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl hover:border-[#00D4C8]/40 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4C8] transition-colors">
                  <Mail className="h-5 w-5 text-[#00D4C8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-base font-bold text-[#0F1D3A]">info@digital4efficiency.ch</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-[#00D4C8]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Bureaux</p>
                  <p className="text-base font-bold text-[#0F1D3A]">Genève et Sion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 bg-[#F8FAFC] rounded-3xl border border-gray-100 shadow-sm space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Prénom *</label>
                  <input name="firstName" required value={formData.firstName} onChange={handleChange}
                    placeholder="Jean" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] placeholder-gray-400 text-sm focus:outline-none focus:border-[#00D4C8] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Nom *</label>
                  <input name="lastName" required value={formData.lastName} onChange={handleChange}
                    placeholder="Dupont" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] placeholder-gray-400 text-sm focus:outline-none focus:border-[#00D4C8] transition-colors" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Email *</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleChange}
                    placeholder="jean@entreprise.ch" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] placeholder-gray-400 text-sm focus:outline-none focus:border-[#00D4C8] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Téléphone</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange}
                    placeholder="+41 79 123 45 67" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] placeholder-gray-400 text-sm focus:outline-none focus:border-[#00D4C8] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Entreprise</label>
                <input name="company" value={formData.company} onChange={handleChange}
                  placeholder="Votre entreprise SA" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] placeholder-gray-400 text-sm focus:outline-none focus:border-[#00D4C8] transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Sujet *</label>
                <select name="subject" required value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] text-sm focus:outline-none focus:border-[#00D4C8] transition-colors">
                  <option value="">Sélectionnez un sujet...</option>
                  {subjects.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0F1D3A] mb-2">Message *</label>
                <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#0F1D3A] placeholder-gray-400 text-sm focus:outline-none focus:border-[#00D4C8] transition-colors resize-none" />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600">{errorMsg}</p>
                </div>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#00D4C8] hover:bg-[#00B4A6] text-white font-bold rounded-2xl disabled:opacity-60 transition-colors text-base">
                {status === 'loading' ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Envoi en cours...</>
                ) : (
                  <><Send className="h-5 w-5" /> Envoyer ma demande <ArrowRight className="h-5 w-5" /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Vos données ne seront jamais partagées avec des tiers.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}