import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, MessageSquare, Search } from 'lucide-react';

export function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.3 + 0.05,
        size: Math.random() * 2 + 0.5,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,180,166,${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,180,166,${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  const links = [
    { to: '/',        icon: Home,           label: 'Accueil',  desc: 'Page principale' },
    { to: '/tarifs',  icon: Search,         label: 'Tarifs',   desc: 'Voir nos offres' },
    { to: '/#contact-form', icon: MessageSquare, label: 'Contact', desc: 'Parler à notre équipe' },
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
      <div className="absolute w-[500px] h-[500px] bg-[#00B4A6]/8 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* 404 */}
        <div className="relative mb-6 select-none">
          <span
            className="text-[160px] sm:text-[200px] font-black leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '1.5px rgba(0,180,166,0.2)' }}
          >
            404
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4A6]/10 rounded-full border border-[#00B4A6]/30 mb-5">
          <div className="w-2 h-2 rounded-full bg-[#00B4A6] animate-ping" />
          <span className="text-sm font-semibold text-[#00B4A6]">Page introuvable</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 tracking-tight">
          Cette page a disparu dans le cloud
        </h1>
        <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          L'URL que vous cherchez n'existe pas ou a été déplacée.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {links.map(({ to, icon: Icon, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="group p-5 bg-white border border-slate-200 hover:border-[#00B4A6]/50 hover:shadow-md rounded-2xl transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00B4A6]/10 flex items-center justify-center mb-3 group-hover:bg-gradient-to-br group-hover:from-[#00B4A6] group-hover:to-[#06B6D4] transition-all">
                <Icon className="h-5 w-5 text-[#00B4A6] group-hover:text-white transition-colors" />
              </div>
              <div className="font-bold text-slate-800 text-sm mb-0.5">{label}</div>
              <div className="text-slate-400 text-xs">{desc}</div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Revenir en arrière
        </button>
      </div>
    </div>
  );
}
