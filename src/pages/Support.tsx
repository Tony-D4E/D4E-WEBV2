import { useState, useRef } from 'react';
import { Footer } from '../sections/Footer';
import { 
  Headphones, 
  MessageSquare, 
  Phone, 
  Mail, 
  Upload, 
  X, 
  FileText, 
  Image, 
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Send,
  Clock,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const requestTypes = [
  { value: 'incident', label: 'Incident technique', icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-400/10' },
  { value: 'compte', label: 'Question sur mon compte', icon: Shield, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { value: 'formation', label: 'Demande de formation', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { value: 'evolution', label: 'Évolution / Nouvelle fonctionnalité', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-400/10' },
  { value: 'facturation', label: 'Facturation', icon: FileSpreadsheet, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
];

const faqItems = [
  {
    question: 'Comment réinitialiser mon mot de passe Odoo ?',
    answer: 'Sur la page de connexion Odoo, cliquez sur "Mot de passe oublié ?". Un email vous sera envoyé avec un lien de réinitialisation. Si vous ne recevez pas l\'email, vérifiez vos spams ou contactez-nous.',
  },
  {
    question: 'Où puis-je trouver mes factures ?',
    answer: 'Connectez-vous à Odoo, allez dans le module "Comptabilité" ou "Facturation", puis dans le menu "Factures". Vous pouvez filtrer par date ou par client pour trouver facilement vos documents.',
  },
  {
    question: 'Comment ajouter un nouvel utilisateur dans mon équipe ?',
    answer: 'Seuls les administrateurs peuvent ajouter des utilisateurs. Allez dans "Paramètres" > "Utilisateurs et sociétés" > "Utilisateurs", puis cliquez sur "Créer". Remplissez les informations et attribuez les droits d\'accès appropriés.',
  },
  {
    question: 'Le logiciel fonctionne-t-il hors ligne ?',
    answer: 'Odoo est une solution cloud qui nécessite une connexion Internet. Cependant, certaines fonctionnalités comme la saisie de temps ou les rapports de chantier peuvent être faites via l\'application mobile ElvyBat avec synchronisation différée.',
  },
  {
    question: 'Quel est le délai de réponse du support ?',
    answer: 'Notre équipe s\'engage à répondre sous 24 heures ouvrées pour les demandes standard, et sous 4 heures pour les incidents critiques (indiqués comme "Urgent" dans le formulaire).',
  },
];

const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
const maxFileSize = 10 * 1024 * 1024; // 10MB
const maxFiles = 5;

export function Support() {
  const [selectedType, setSelectedType] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [clientNumber, setClientNumber] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles: File[]) => {
    if (files.length + newFiles.length > maxFiles) {
      alert(`Maximum ${maxFiles} fichiers autorisés`);
      return;
    }

    const validFiles = newFiles.filter(file => {
      if (!allowedFileTypes.includes(file.type)) {
        alert(`Type de fichier non autorisé : ${file.name}`);
        return false;
      }
      if (file.size > maxFileSize) {
        alert(`Fichier trop volumineux : ${file.name} (max 10Mo)`);
        return false;
      }
      return true;
    });

    // Simulate upload progress
    validFiles.forEach(file => {
      setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    });

    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (fileName: string) => {
    setFiles(prev => prev.filter(f => f.name !== fileName));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return Image;
    if (fileType.includes('pdf')) return FileText;
    return FileSpreadsheet;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedType || !subject || !description || !email || !consent) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate fake ticket number
    const fakeTicketNumber = 'SUP-' + Date.now().toString().slice(-6);
    setTicketNumber(fakeTicketNumber);
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-[#0B0F19] pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mx-auto mb-8 glow-cyan">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white mb-4">
              Demande envoyée avec succès !
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Votre ticket de support a été créé.
            </p>
            <div className="p-6 bg-[#111827] rounded-2xl border border-[#00D4C8]/30 mb-8">
              <p className="text-sm text-gray-400 mb-2">Numéro de ticket</p>
              <p className="text-3xl font-black text-[#00D4C8]">{ticketNumber}</p>
            </div>
            <div className="space-y-4 text-gray-400 mb-8">
              <p>
                <Clock className="inline h-5 w-5 mr-2 text-[#00D4C8]" />
                Délai de réponse : sous 24h ouvrées
              </p>
              <p>
                <Mail className="inline h-5 w-5 mr-2 text-[#00D4C8]" />
                Une confirmation vous a été envoyée par email
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] text-white font-bold rounded-xl">
                <a href="/">Retour à l'accueil</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl">
                <a href="/tarifs">Voir nos offres</a>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8]/10 -top-40 -left-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4C8]/10 rounded-full border border-[#00D4C8]/30 mb-6">
              <Headphones className="h-5 w-5 text-[#00D4C8]" />
              <span className="text-sm font-bold text-[#00D4C8]">Support Client</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Besoin d'<span className="text-gradient">aide</span> ?
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Notre équipe vous répond sous 24h ouvrées. 
              Pour les urgences, appelez-nous directement.
            </p>

            {/* Contact Options */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-6 bg-[#111827] rounded-2xl border border-[#00D4C8]/30 glow-cyan-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Formulaire</h3>
                <p className="text-sm text-gray-400">Réponse sous 24h</p>
              </div>
              
              <div className="p-6 bg-[#111827] rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Chat</h3>
                <p className="text-sm text-gray-400">Bientôt disponible</p>
              </div>
              
              <a href="tel:+41582551115" className="p-6 bg-[#111827] rounded-2xl border border-white/10 hover:border-[#00D4C8]/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Téléphone</h3>
                <p className="text-sm text-gray-400">+41 58 255 11 15</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 lg:p-12 bg-[#111827] rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Send className="h-6 w-6 text-[#00D4C8]" />
              Formulaire de support
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Type de demande */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Type de demande <span className="text-red-400">*</span>
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {requestTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setSelectedType(type.value)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedType === type.value
                          ? 'border-[#00D4C8] bg-[#00D4C8]/10'
                          : 'border-white/10 hover:border-white/30 bg-[#0B0F19]'
                      }`}
                    >
                      <type.icon className={`h-5 w-5 mb-2 ${type.color}`} />
                      <span className="text-sm text-white">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Objet */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Objet <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex: Problème de connexion à Odoo"
                  className="w-full px-4 py-3 bg-[#0B0F19] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#00D4C8] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Description détaillée <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez votre problème en détail..."
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0B0F19] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#00D4C8] focus:outline-none transition-colors resize-none"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  {description.length}/2000 caractères
                </p>
              </div>

              {/* Email et N° client */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-[#0B0F19] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#00D4C8] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    N° client <span className="text-gray-500">(optionnel)</span>
                  </label>
                  <input
                    type="text"
                    value={clientNumber}
                    onChange={(e) => setClientNumber(e.target.value)}
                    placeholder="Ex: CLI-12345"
                    className="w-full px-4 py-3 bg-[#0B0F19] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#00D4C8] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Pièces jointes */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  <Upload className="inline h-4 w-4 mr-2" />
                  Pièces jointes <span className="text-gray-500">(max 5 fichiers, 10Mo chaque)</span>
                </label>
                
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative p-8 border-2 border-dashed rounded-xl text-center cursor-pointer transition-all ${
                    dragActive
                      ? 'border-[#00D4C8] bg-[#00D4C8]/10'
                      : 'border-white/20 hover:border-white/40 bg-[#0B0F19]'
                  }`}
                >
                  <Upload className="h-10 w-10 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400 mb-1">
                    Glissez-déposez vos fichiers ici
                  </p>
                  <p className="text-sm text-gray-500">
                    ou cliquez pour sélectionner
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    PDF, PNG, JPG, DOC, XLS (max 10Mo)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept={allowedFileTypes.join(',')}
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>

                {/* Liste des fichiers */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file) => {
                      const Icon = getFileIcon(file.type);
                      const progress = uploadProgress[file.name] || 0;
                      return (
                        <div
                          key={file.name}
                          className="flex items-center gap-3 p-3 bg-[#0B0F19] rounded-xl border border-white/10"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-[#00D4C8]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white truncate">{file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                            {progress < 100 && (
                              <div className="mt-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#00D4C8] transition-all"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.name)}
                            className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                          >
                            <X className="h-4 w-4 text-gray-400 hover:text-red-400" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Consentement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0B0F19] text-[#00D4C8] focus:ring-[#00D4C8]"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-400">
                  J'accepte que mes données personnelles soient traitées par Digital4Efficiency 
                  dans le cadre de ma demande de support, conformément à la 
                  <a href="#" className="text-[#00D4C8] hover:underline">politique de confidentialité</a>.
                  <span className="text-red-400"> *</span>
                </label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold py-4 rounded-xl glow-cyan disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Envoyer ma demande
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-gray-400">
              Consultez notre FAQ avant de contacter le support
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#00D4C8] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-gradient-to-r from-[#00B4A6]/10 to-[#06B6D4]/10 rounded-3xl border border-[#00D4C8]/20">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Lundi - Vendredi : 8h00 - 18h00</p>
                  <p>Samedi - Dimanche : Fermé</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Contact direct</h3>
                <div className="space-y-2">
                  <a href="tel:+41582551115" className="flex items-center gap-2 text-gray-400 hover:text-[#00D4C8] transition-colors">
                    <Phone className="h-4 w-4" />
                    +41 58 255 11 15
                  </a>
                  <a href="mailto:support@d4e.cool" className="flex items-center gap-2 text-gray-400 hover:text-[#00D4C8] transition-colors">
                    <Mail className="h-4 w-4" />
                    support@d4e.cool
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
