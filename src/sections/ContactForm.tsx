import { useState } from 'react';
import { Send, Phone, Mail, Building2, MessageSquare, CheckCircle, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xdawrgoz';

const subjects = [
  { value: 'implementation', label: 'Implementation Odoo' },
  { value: 'personnalisation', label: 'Personnalisation et Developpement' },
  { value: 'formation', label: 'Formation' },
  { value: 'support', label: 'Support technique' },
  { value: 'elvybat', label: 'ElvyBat BTP' },
  { value: 'starterpack', label: 'Starter Pack 2500 CHF' },
  { value: 'autre', label: 'Autre demande' },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const EMPTY: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          prenom: formData.firstName,
          nom: formData.lastName,
          email: formData.email,
          telephone: formData.phone,
          entreprise: formData.company,
          sujet: subjectLabel,
          message: formData.message,
          _subject: '[D4E] Nouvelle demande - ' + subjectLabel,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        throw new Error('HTTP ' + res.status);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg("Erreur envoi. Contactez-nous a info@digital4efficiency.ch");
    }
  };

  if (status === 'success') {
    return (
      <section id="contact-form" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 bg-white rounded-3xl border-2 border-[#00B4A6]/30 shadow-lg">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-4">Message envoye !</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Merci <strong className="text-slate-700">{formData.firstName}</strong>, notre equipe vous contacte sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/41764344595"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-xl font-semibold text-sm"
              >
                <span>WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => { setFormData(EMPTY); setStatus('idle'); }}
                className="px-6 py-3 text-slate-500 border border-slate-200 rounded-xl text-sm font-semibold"
              >
                Nouvelle demande
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4A6]/10 rounded-full border border-[#00B4A6]/30">
              <MessageSquare className="h-4 w-4 text-[#00B4A6]" />
              <span className="text-sm font-bold text-[#00B4A6]">Contactez-nous</span>
            </div>
            <h2 className="text-4xl font-black text-slate-800 tracking-tight leading-tight">
              Discutons de votre{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4A6] to-[#06B6D4]">
                projet
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Notre equipe vous recontacte sous 24h ouvrees.
            </p>
            <div className="space-y-3">
              <a href="tel:+41582551115" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#00B4A6]/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#00B4A6]/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#00B4A6] group-hover:to-[#06B6D4] transition-all">
                  <Phone className="h-5 w-5 text-[#00B4A6] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Telephone</div>
                  <div className="text-sm font-semibold text-slate-700">+41 (0)58 255 11 15</div>
                </div>
              </a>
              <a href="mailto:info@digital4efficiency.ch" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#00B4A6]/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#00B4A6]/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#00B4A6] group-hover:to-[#06B6D4] transition-all">
                  <Mail className="h-5 w-5 text-[#00B4A6] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-slate-700">info@digital4efficiency.ch</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl">
                <div className="w-11 h-11 rounded-xl bg-[#00B4A6]/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-[#00B4A6]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Bureaux</div>
                  <div className="text-sm font-semibold text-slate-700">Geneve et Sion</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="firstName">
                    Prenom *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jean"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#00B4A6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="lastName">
                    Nom *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Dupont"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#00B4A6] transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@entreprise.ch"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#00B4A6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="phone">
                    Telephone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+41 79 123 45 67"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#00B4A6] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="company">
                  Entreprise
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Votre entreprise SA"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#00B4A6] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="subject">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#00B4A6] transition-all"
                >
                  <option value="">Selectionnez un sujet...</option>
                  {subjects.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Decrivez votre projet..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#00B4A6] transition-all resize-none"
                />
              </div>
              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-600">{errorMsg}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white font-bold rounded-2xl disabled:opacity-60 hover:opacity-90 transition-all"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Envoi en cours...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    <span>Envoyer ma demande</span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </button>
              <p className="text-center text-xs text-slate-400">
                Vos donnees ne seront jamais partagees avec des tiers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
