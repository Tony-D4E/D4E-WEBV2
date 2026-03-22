import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

const offices = [
  { 
    city: 'Genève', 
    address: 'Chemin du Pavillon 2', 
    postal: '1218 Le Grand-Saconnex',
  },
  { 
    city: 'Sion', 
    address: 'Place du Midi 48', 
    postal: '1950 Sion',
  },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden">
      <div className="blob-glow w-[600px] h-[600px] bg-[#00D4C8] -bottom-40 -left-40" />
      <div className="blob-glow w-[400px] h-[400px] bg-[#7C3AED] top-20 right-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Discutons de votre <span className="text-gradient">projet</span>
          </h2>
          <p className="text-lg text-gray-400">
            Prêt à transformer votre entreprise ? Contactez-nous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="p-8 bg-[#111827] rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Envoyez-nous un message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center mb-4 glow-cyan-sm">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Message envoyé !</h4>
                <p className="text-gray-400">On vous recontacte vite.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Nom</Label>
                    <Input 
                      placeholder="Jean Dupont" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Email</Label>
                    <Input 
                      type="email" 
                      placeholder="jean@entreprise.ch" 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Entreprise</Label>
                  <Input 
                    placeholder="Votre entreprise" 
                    value={formData.company} 
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Message</Label>
                  <Textarea 
                    placeholder="Décrivez votre projet..." 
                    rows={4}
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                    className="bg-[#0B0F19] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00D4C8] rounded-xl resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-[#00B4A6] to-[#06B6D4] hover:opacity-90 text-white font-bold rounded-xl glow-cyan-sm">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Nos bureaux</h3>
            {offices.map((o, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#111827] rounded-xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] flex items-center justify-center glow-cyan-sm">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{o.city}</h4>
                  <p className="text-gray-400 text-sm">{o.address}</p>
                  <p className="text-gray-400 text-sm">{o.postal}</p>
                </div>
              </div>
            ))}

            <div className="p-6 bg-gradient-to-br from-[#00B4A6] to-[#06B6D4] rounded-xl glow-cyan">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Contact rapide
              </h4>
              <div className="space-y-3">
                <a href="tel:+41582551115" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                  +41 (0)58 255 11 15
                </a>
                <a href="mailto:info@digital4efficiency.ch" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  info@digital4efficiency.ch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
