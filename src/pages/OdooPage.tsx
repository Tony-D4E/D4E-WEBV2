
import { useState, useEffect } from 'react';
import { BarChart3, Wrench, HardHat, Factory, ShoppingCart, Truck, Heart, GraduationCap, Zap, Target, Users, Store, RefreshCw, Cpu, CreditCard, Package, Webhook } from 'lucide-react';

const CSS = `
  .op * { box-sizing: border-box; }
  .op { background: #f8fafc; color: #1e293b; font-family: 'Inter', -apple-system, sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
  .op h1,.op h2,.op h3,.op h4 { font-family: 'Space Grotesk', 'Inter', sans-serif; letter-spacing: -.02em; }
  .op .tg { background: linear-gradient(to right,#00E5CC,#00D4C8,#06B6D4); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .op .tgg { background: linear-gradient(to right,#F59E0B,#FBBF24,#FCD34D); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .op .cg { background:rgba(17,24,39,.8); backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,.1); box-shadow:0 4px 24px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.05); }
  .op .cgh:hover { border-color:rgba(0,212,200,.5)!important; box-shadow:0 0 40px rgba(0,212,200,.15); }
  .op .bg-t { transition:all .3s cubic-bezier(.4,0,.2,1); }
  .op .bg-t:hover { transform:translateY(-2px); box-shadow:0 10px 40px -10px rgba(0,212,200,.5); }
  .op .blob { position:absolute; border-radius:9999px; pointer-events:none; filter:blur(120px); }
  .op .aos { opacity:0; }
  .op .aos.on { animation:opFiu .8s cubic-bezier(.16,1,.3,1) forwards; }
  .op .d1.on{animation-delay:.1s} .op .d2.on{animation-delay:.2s} .op .d3.on{animation-delay:.3s} .op .d4.on{animation-delay:.4s}
  @keyframes opFiu { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
  .op .sg>*{opacity:0;transform:translateY(20px)}
  .op .sg.on>*:nth-child(1){animation:opFiu .5s .1s forwards}
  .op .sg.on>*:nth-child(2){animation:opFiu .5s .2s forwards}
  .op .sg.on>*:nth-child(3){animation:opFiu .5s .3s forwards}
  .op .sg.on>*:nth-child(4){animation:opFiu .5s .4s forwards}
  .op .sg.on>*:nth-child(5){animation:opFiu .5s .5s forwards}
  .op .sg.on>*:nth-child(6){animation:opFiu .5s .6s forwards}
  @keyframes opPulse{0%,100%{opacity:1}50%{opacity:.3}}
  .op .pulse{animation:opPulse 2s infinite}
  .op .stag-dk{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,200,.12);border:1px solid rgba(0,212,200,.35);border-radius:999px;padding:7px 18px;font-size:16px;color:#00D4C8;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:22px}
  .op .stag-lk{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,200,.08);border:1px solid rgba(0,212,200,.25);border-radius:999px;padding:7px 18px;font-size:16px;color:#00B4A6;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:22px}
  .op .sdot{width:6px;height:6px;border-radius:50%;background:currentColor;animation:opPulse 2s infinite}
  .op .dk{background:#0B0F19!important;color:#fff!important}
  .op .dk2{background:#0F172A!important;color:#fff!important}
  .op .dk h1,.op .dk h2,.op .dk h3,.op .dk h4,.op .dk2 h1,.op .dk2 h2,.op .dk2 h3,.op .dk2 h4{color:#fff!important}
  .op .dk p,.op .dk2 p{color:#E2E8F0!important}
  .op .lk{background:#F8FAFC!important} .op .lk2{background:#FFFFFF!important}
  .op .lk{box-shadow:0 -4px 24px rgba(0,0,0,0.06)!important}
  .op .lk h1,.op .lk h2,.op .lk h3,.op .lk h4{color:#1e293b!important}
  .op .lk p,.op .lk2 p{color:#334155!important}
  .op section{padding:112px 64px;position:relative;overflow:hidden;width:100%}
  .op *{box-sizing:border-box}
  .op .tg{background:linear-gradient(to right,#00E5CC,#00D4C8,#06B6D4)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important}
  .op .tgg{background:linear-gradient(to right,#F59E0B,#FBBF24,#FCD34D)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important}
  .op .con{width:100%}
  .op .sh2{font-size:clamp(2.2rem,5vw,4rem);font-weight:900;line-height:1.05;margin-bottom:20px;margin-top:0;letter-spacing:-1.5px}
  .op .card{border:1px solid;border-radius:1rem;transition:all .3s}
  .op .card-dk{background:rgba(255,255,255,0.09);border-color:rgba(255,255,255,0.1);border-radius:16px;border-left-width:4px}
  .op .card-lk{background:#fff;border-color:#e2e8f0;box-shadow:0 2px 16px rgba(0,0,0,.06);border-radius:16px}
  .op .card-lk:hover{border-color:rgba(0,212,200,.4)!important;box-shadow:0 8px 32px rgba(0,212,200,0.12)}
  .op .card-teal{border-left:4px solid #00D4C8!important;background:rgba(255,255,255,0.07)!important}
  .op .card-gold{border-left:4px solid #F59E0B!important;background:rgba(255,255,255,0.07)!important}
  .op .ac h3,.op .ac h4{font-size:1.25rem!important;font-weight:800!important;color:#FFFFFF!important;margin:0 0 12px!important;letter-spacing:-0.3px}
  .op .ac p{font-size:0.95rem!important;color:#CBD5E1!important;line-height:1.7!important;margin:0 0 16px!important}
  .op .ac .mtt,.op .ac .mtg{font-size:12px!important;padding:4px 12px!important;border-radius:6px!important}

  .op .card-teal:hover,.op .card-gold:hover{background:rgba(255,255,255,0.1)!important}
  .op .imod{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,.12);border-left:4px solid #00D4C8;border-radius:14px;padding:16px 20px;transition:all .2s;display:flex;align-items:center;justify-content:space-between;gap:16px}
  .op .imod:hover{border-color:rgba(0,212,200,.4);border-left-color:#00D4C8;background:rgba(255,255,255,0.12);transform:translateX(4px)}
  .op .imod{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,.12);border-left:4px solid #00D4C8;border-radius:14px;padding:16px 20px;transition:all .2s;display:flex;align-items:center;justify-content:space-between;gap:16px}
  .op .imod:hover{border-color:rgba(0,212,200,.4);border-left-color:#00D4C8;background:rgba(255,255,255,0.12);transform:translateX(4px)}
  .op .imod-g{background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,.2);border-left:4px solid #F59E0B;border-radius:14px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;transition:all .2s}
  .op .mtt{background:rgba(0,212,200,.18);color:#00D4C8;font-size:12px;padding:4px 12px;border-radius:6px;font-weight:700;white-space:nowrap;flex-shrink:0}
  .op .mtg{background:rgba(245,158,11,.18);color:#F59E0B;font-size:12px;padding:4px 12px;border-radius:6px;font-weight:700;white-space:nowrap;flex-shrink:0}
  .op .itab{background:transparent;border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:11px 22px;font-size:15px;font-weight:600;color:#94A3B8;cursor:pointer;transition:all .2s;font-family:inherit;display:inline-flex;align-items:center;gap:10px}
  .op .itab:hover{color:#fff;border-color:rgba(255,255,255,.3);background:rgba(255,255,255,0.05)}
  .op .itab.on{background:rgba(0,212,200,.12);border-color:#00D4C8;color:#00D4C8;font-weight:700;box-shadow:0 0 16px rgba(0,212,200,0.2)}
  .op .itab.elvy.on{background:rgba(245,158,11,.12);border-color:#F59E0B;color:#F59E0B;font-weight:700;box-shadow:0 0 16px rgba(245,158,11,0.2)}
  .op .imod h4,.op .imod-g h4{font-size:1rem!important;font-weight:700!important;color:#FFFFFF!important;margin:0 0 3px!important;letter-spacing:-0.2px}
  .op .imod p,.op .imod-g p{font-size:0.85rem!important;color:#CBD5E1!important;margin:0!important;line-height:1.5!important}
  .op .eb{background:#00D4C8;color:#0B0F19;font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;text-transform:uppercase;letter-spacing:.5px}
  .op .rg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#e2e8f0;border:1px solid #e2e8f0;border-radius:1rem;overflow:hidden}
  .op .rsn{background:#fff;padding:36px 28px;transition:all .2s;border-top:3px solid transparent}
  .op .rsn:hover{background:#F8FAFC}
  .op .card-teal-lk{border-top:3px solid #00D4C8!important}
  .op .card-gold-lk{border-top:3px solid #F59E0B!important}
  .op .rn{font-family:'Space Grotesk',sans-serif;font-size:64px;font-weight:900;color:rgba(0,180,166,0.2);line-height:1;margin-bottom:16px;letter-spacing:-2px}
  .op .rh{font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:800;margin-bottom:10px;color:#0F1D3A;letter-spacing:-0.3px}
  .op .rp{font-size:16px;color:#475569;line-height:1.75} .op .rp strong{color:#00B4A6;font-weight:600}
  .op .ag{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .op .ac{padding:32px;display:flex;flex-direction:column;gap:0} .op .ac.w{grid-column:span 2}
  .op .aico{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;padding:12px;flex-shrink:0}
  .op .imod-col{max-width:580px;width:100%}
  .op .int-conn{background:#fff;border:1px solid #e2e8f0;border-radius:1rem;padding:20px;text-align:center;transition:all .3s}
  .op .int-conn:hover{border-color:rgba(0,212,200,.4);transform:translateY(-3px);box-shadow:0 4px 20px rgba(0,212,200,.08)}
  .op .tag{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:5px 12px;font-size:13px;color:#334155;display:inline-block}
  .op .p3{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:1rem;padding:26px;transition:border-color .2s}
  .op .p3:hover{border-color:rgba(0,212,200,.3)}
  .op .sec-p{font-size:17px;line-height:1.8;color:#94A3B8;max-width:640px;margin-top:0}
  .op .sec-p strong{color:#fff}
  .op .btn-p{background:linear-gradient(to right,#00B4A6,#00D4C8);color:#fff;padding:18px 40px;border-radius:14px;font-weight:800;font-size:17px;text-decoration:none;font-family:'Space Grotesk',sans-serif;display:inline-block;transition:all .2s;box-shadow:0 6px 24px rgba(0,212,200,0.35)}
  .op .btn-p:hover{transform:translateY(-2px);box-shadow:0 10px 40px -10px rgba(0,212,200,.5)}
  .op .btn-s{border:1px solid rgba(255,255,255,.2);color:#E2E8F0;padding:15px 32px;border-radius:10px;font-weight:500;font-size:16px;text-decoration:none;display:inline-block;transition:all .2s}
  .op .btn-s:hover{border-color:rgba(0,212,200,.3);color:#00D4C8}
  .op .btn-sl{border:1px solid #e2e8f0;color:#334155;padding:13px 28px;border-radius:10px;font-weight:500;font-size:15px;text-decoration:none;display:inline-block;transition:all .2s}
  .op .btn-sl:hover{border-color:#00D4C8;color:#00B4A6}

  @keyframes rsnIn {
    0%   { opacity:0; transform:translateY(48px) scale(0.96); }
    60%  { opacity:1; transform:translateY(-6px) scale(1.01); }
    100% { opacity:1; transform:translateY(0) scale(1); }
  }
  @keyframes numReveal {
    0%   { opacity:0; transform:scale(0.5) rotate(-8deg); color:rgba(0,180,166,0); }
    70%  { opacity:1; transform:scale(1.15) rotate(2deg); }
    100% { opacity:1; transform:scale(1) rotate(0deg); }
  }
  @keyframes shimmer {
    0%   { background-position:-200% 0; }
    100% { background-position:200% 0; }
  }
  @keyframes borderPulse {
    0%,100% { border-top-color:rgba(0,212,200,0.3); }
    50%      { border-top-color:rgba(0,212,200,1); }
  }
  .op .rsn-animated {
    opacity:0;
    transform:translateY(48px) scale(0.96);
  }
  .op .sg.on .rsn-animated:nth-child(1) { animation:rsnIn 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) forwards; }
  .op .sg.on .rsn-animated:nth-child(2) { animation:rsnIn 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) forwards; }
  .op .sg.on .rsn-animated:nth-child(3) { animation:rsnIn 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) forwards; }
  .op .sg.on .rsn-animated:nth-child(4) { animation:rsnIn 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
  .op .sg.on .rsn-animated:nth-child(5) { animation:rsnIn 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) forwards; }
  .op .sg.on .rsn-animated:nth-child(6) { animation:rsnIn 0.7s 0.55s cubic-bezier(0.16,1,0.3,1) forwards; }
  .op .sg.on .rsn-animated .rn-anim { animation:numReveal 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both; }
  .op .rsn-animated { transition:border-top-color 0.3s, box-shadow 0.3s, transform 0.3s; }
  .op .rsn-animated:hover {
    transform:translateY(-6px) !important;
    border-top-color:rgba(0,212,200,0.9) !important;
    box-shadow:0 12px 40px rgba(0,212,200,0.12), 0 2px 8px rgba(0,0,0,0.08) !important;
  }
  .op .rsn-animated:hover .rn-anim {
    color:rgba(0,212,200,0.35) !important;
    transition:color 0.3s;
  }
  .op .rg-grid { background:transparent; border:none; border-radius:0; overflow:visible; gap:20px; }
  .op .rsn-animated {
    border-radius:16px !important;
    border:1px solid #e2e8f0 !important;
    border-top:3px solid rgba(0,212,200,0.3) !important;
    background:#FFFFFF !important;
    padding:36px 32px !important;
    box-shadow:0 2px 12px rgba(0,0,0,0.05) !important;
  }

  /* RANIM_START */
  @keyframes rF{0%{opacity:0;transform:perspective(500px) rotateX(-35deg) translateY(36px)}65%{opacity:1;transform:perspective(500px) rotateX(3deg) translateY(-3px)}100%{opacity:1;transform:perspective(500px) rotateX(0) translateY(0)}}
  @keyframes rP{0%{transform:scale(0) rotate(-12deg);opacity:0}70%{transform:scale(1.18) rotate(2deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}
  .op .rsn{background:#fff!important;border:1px solid #e2e8f0!important;border-top:4px solid #00D4C8!important;border-radius:16px!important;padding:36px 32px!important;box-shadow:0 2px 16px rgba(0,0,0,.06)!important;opacity:0;transform:perspective(500px) rotateX(-35deg) translateY(36px);transition:transform .3s,box-shadow .3s!important}
  .op .rsn:hover{transform:translateY(-8px)!important;box-shadow:0 16px 48px rgba(0,212,200,.18)!important}
  .op .sg.on .rsn:nth-child(1){animation:rF .65s .05s cubic-bezier(.23,1,.32,1) forwards}
  .op .sg.on .rsn:nth-child(2){animation:rF .65s .17s cubic-bezier(.23,1,.32,1) forwards}
  .op .sg.on .rsn:nth-child(3){animation:rF .65s .29s cubic-bezier(.23,1,.32,1) forwards}
  .op .sg.on .rsn:nth-child(4){animation:rF .65s .41s cubic-bezier(.23,1,.32,1) forwards}
  .op .sg.on .rsn:nth-child(5){animation:rF .65s .53s cubic-bezier(.23,1,.32,1) forwards}
  .op .sg.on .rsn:nth-child(6){animation:rF .65s .65s cubic-bezier(.23,1,.32,1) forwards}
  .op .sg.on .rsn:nth-child(1) .rn{animation:rP .45s .5s cubic-bezier(.23,1,.32,1) both}
  .op .sg.on .rsn:nth-child(2) .rn{animation:rP .45s .62s cubic-bezier(.23,1,.32,1) both}
  .op .sg.on .rsn:nth-child(3) .rn{animation:rP .45s .74s cubic-bezier(.23,1,.32,1) both}
  .op .sg.on .rsn:nth-child(4) .rn{animation:rP .45s .86s cubic-bezier(.23,1,.32,1) both}
  .op .sg.on .rsn:nth-child(5) .rn{animation:rP .45s .98s cubic-bezier(.23,1,.32,1) both}
  .op .sg.on .rsn:nth-child(6) .rn{animation:rP .45s 1.1s cubic-bezier(.23,1,.32,1) both}
  .op .rn{font-size:64px!important;font-weight:900!important;color:rgba(0,180,166,.18)!important;letter-spacing:-2px!important}
  .op .rh{font-size:20px!important;font-weight:800!important;color:#0F1D3A!important}
  .op .rg-grid{background:transparent!important;border:none!important;gap:20px!important;overflow:visible!important}
/* RANIM_END */

  @keyframes antFloat {
    0%,100% { transform:translateY(0px); }
    50%      { transform:translateY(-8px); }
  }
  @keyframes antGlow {
    0%,100% { box-shadow:0 0 0 0 rgba(0,212,200,0.5); }
    70%     { box-shadow:0 0 0 14px rgba(0,212,200,0); }
  }
  .ant-card {
    animation:antFloat 4s ease-in-out infinite;
  }
  .ant-photo {
    animation:antGlow 2.5s ease-out infinite;
  }

  @media(max-width:900px){
    .op section{padding:64px 20px}
    .op .ag{grid-template-columns:1fr} .op .ac.w{grid-column:span 1}
    .op .rg-grid{grid-template-columns:1fr}
    .op .p3g{grid-template-columns:1fr!important}
    .op .ind-cols{grid-template-columns:1fr!important}
    .op .imod-col{max-width:580px}
    .op .int-cols{grid-template-columns:1fr!important}
    .op .hero-h1{font-size:clamp(40px,10vw,60px)!important;white-space:normal!important}
    .op .hero-badge{position:static!important;display:block;margin-bottom:20px}
    .op .hero-badge img{height:56px!important;max-width:240px!important}
    .op .hero-stats{flex-direction:column}
    .op .hero-promise{grid-template-columns:1fr!important}
    .op .ant-card{position:static!important;margin-top:40px}
  }
`;

type IndId = 'fi'|'sv'|'bt'|'in'|'co'|'lo'|'sa'|'ed';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function OdooPage() {
  const [ind, setInd] = useState<IndId>('fi');

  useEffect(() => {
    const el = document.createElement('style');
    el.id = 'op-css';
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => document.getElementById('op-css')?.remove();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.op .aos');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ind]);

  const INDS = {
    fi: { emo:'🏛', icon:'BarChart3', title:'Finance', sub:'Reporting, conformite, clotures rapides', gold:false,
      body:'Les directions financieres passent encore trop de temps sur des taches que la machine peut faire. <strong style={{color:\'#fff\'}}>Odoo coupe dans tout ca.</strong> Reconciliation bancaire automatique, clotures en quelques heures, chaque chiffre remonte en temps reel.',
      checks:['Reconciliation bancaire automatique par IA','Multi-devises, multi-societes, multi-taxes','KPIs financiers en temps reel, sans export','Packages de localisation fiscale par pays'],
      mods:[{n:'Comptabilite',t:'Core',d:'Facturation, taxes, clotures, audit trail'},{n:'Analytique BI',t:'Reporting',d:'Centres de profit, reporting multidimensionnel'},{n:'Tresorerie',t:'Finance',d:'Previsions cash-flow, paiements'},{n:'Notes de frais',t:'RH',d:'Validation mobile, remboursements auto'}]},
    sv: { emo:'🧩', icon:'Wrench', title:'Services', sub:'Projets, temps, facturation sans fuite', gold:false,
      body:'Les ESN, cabinets et agences ont un ennemi commun : <strong style={{color:\'#fff\'}}>les heures qui s\'evaporent sans etre facturees.</strong> Odoo Project relie tout dans une seule boucle.',
      checks:['Timesheets lies directement a la facturation','Vue Gantt, Kanban, liste sur chaque mission','Portail client pour validation des livrables','Rentabilite par projet, consultant, client'],
      mods:[{n:'Project',t:'Core',d:'Taches, jalons, dependances, vues multiples'},{n:'Timesheets',t:'Temps',d:'Saisie, validation, lien facturation'},{n:'Helpdesk',t:'Support',d:'Tickets, SLA, satisfaction client'},{n:'Field Service',t:'Terrain',d:'Interventions, planning mobile'}]},
    bt: { emo:'🏗', icon:'HardHat', title:'Construction BTP', sub:'ElvyBat, notre solution maison sur Odoo', gold:true,
      body:'Le BTP c\'est notre terrain de jeu depuis le debut. On a construit ElvyBat parce qu\'on n\'a pas trouve une solution qui comprenait vraiment les enjeux d\'un chef de chantier. <strong style={{color:\'#fff\'}}>1 400+ chantiers geres. Ce n\'est pas de la theorie.</strong>',
      checks:['Rentabilite chantier visible en temps reel','Pointage terrain mobile, meme hors ligne','IA vocale multilingue pour bons de regie','Chiffrage integre, devis en quelques clics'],
      mods:[{n:'ElvyBat',t:'Coeur',d:'Gestion de chantiers, marges, plannings'},{n:'ElvyCalc',t:'Chiffrage',d:'Metres, estimations, devis automatises'},{n:'ElvyTime',t:'Pointage',d:'Suivi des equipes, heures chantier'},{n:'ElvyService IA',t:'IA',d:'Rapports vocaux, bons de regie, facturation'}]},
    in: { emo:'⚙️', icon:'Factory', title:'Industrie', sub:'Production, supply chain, tracabilite', gold:false,
      body:'Odoo Manufacturing connecte nomenclature, ordres de fab et controle qualite dans un flux unique. <strong style={{color:\'#fff\'}}>La tracabilite devient un avantage, pas une contrainte.</strong>',
      checks:['MRP et ordonnancement intelligent des ateliers','Nomenclatures multicouches, suivi composants','Controle qualite et tracabilite lot/serie','Maintenance preventive et predictive'],
      mods:[{n:'Manufacturing',t:'Core',d:'Ordres de fabrication, BOM, suivi atelier'},{n:'Maintenance',t:'GMAO',d:'Interventions preventives, equipements'},{n:'Qualite',t:'Conformite',d:'Points de controle, non-conformites'},{n:'PLM',t:'Produit',d:'Cycle de vie produit, versions, ECO'}]},
    co: { emo:'🛒', icon:'ShoppingCart', title:'Commerce', sub:'Multi-canal, stocks, relation client', gold:true,
      body:'Caisse, e-commerce, marketplace : un seul back-office. <strong style={{color:\'#fff\'}}>Quand un produit est epuise en boutique, il disparait automatiquement du site.</strong>',
      checks:['Caisse, site web, marketplace unifies','Programme de fidelite multicanal integre','Gestion des retours et SAV automatisee','Rapports de ventes temps reel par canal'],
      mods:[{n:'Point of Sale',t:'Retail',d:'Caisse tactile, paiements, remises'},{n:'eCommerce',t:'Digital',d:'Boutique native, SEO, passerelles paiement'},{n:'CRM',t:'Fidelite',d:'Segmentation, campagnes, historique'},{n:'Inventory',t:'Stock',d:'Stock temps reel, reapprovisionnement auto'}]},
    lo: { emo:'🚛', icon:'Truck', title:'Logistique', sub:'Flux, entrepots, expeditions sans friction', gold:false,
      body:'La logistique, c\'est la guerre contre le temps perdu. <strong style={{color:\'#fff\'}}>On a vu des equipes gagner 2 heures par jour</strong> rien qu\'avec l\'optimisation du picking dans Odoo.',
      checks:['Picking optimise par route dans l\'entrepot','Multi-entrepots, cross-docking, dropshipping','Integration transporteurs, etiquettes auto','Tracabilite par lot, serie, date peremption'],
      mods:[{n:'Inventory',t:'Core',d:'Gestion de stock, mouvements, valorisation'},{n:'Barcode',t:'Scan',d:'Picking par scan, reception, inventaires'},{n:'Delivery',t:'Transport',d:'FedEx, UPS, DHL, La Poste nativement'},{n:'Purchase',t:'Achats',d:'Commandes fournisseurs, receptions'}]},
    sa: { emo:'🩺', icon:'Heart', title:'Sante', sub:'Normes, tracabilite, conformite sans effort', gold:false,
      body:'Dans le secteur de la sante, l\'erreur n\'est pas une option. <strong style={{color:\'#fff\'}}>La conformite reglementaire devient automatique</strong> plutot qu\'un audit de 3 jours.',
      checks:['Tracabilite complete par lot et numero de serie','Alertes automatiques sur dates de peremption','Gestion des recalls produit en quelques clics','Conformite reglementaire documentee'],
      mods:[{n:'Inventory + Lots',t:'Traca',d:'FEFO, numeros de serie, rappels auto'},{n:'Qualite',t:'Conformite',d:'Points de controle, non-conformites'},{n:'Facturation',t:'Admin',d:'Tiers payant, devis medicaux'},{n:'Portail client',t:'Digital',d:'Documents partages, historique'}]},
    ed: { emo:'📚', icon:'GraduationCap', title:'Education', sub:'Inscriptions, plannings, suivi apprenants', gold:false,
      body:'Odoo unifie inscriptions, plannings, suivi et facturation dans un portail unique. <strong style={{color:\'#fff\'}}>Les relances de paiement deviennent automatiques.</strong>',
      checks:['Inscriptions en ligne et suivi des paiements','Plannings de cours, salles, formateurs','Portail apprenant, supports de cours, quiz','Tableaux de bord progression et assiduite'],
      mods:[{n:'eLearning',t:'Core',d:'Cours, quiz, certifications, progression'},{n:'Events',t:'Planif.',d:'Sessions, inscriptions, rappels'},{n:'Facturation',t:'Admin',d:'Inscriptions payantes, relances, OPCO'},{n:'Employes',t:'RH',d:'Gestion formateurs, contrats, planning RH'}]},
  };

  const cur = INDS[ind];
  const chkColor = cur.gold ? '#F59E0B' : '#00D4C8';
  const chkBg = cur.gold ? 'rgba(245,158,11,.1)' : 'rgba(0,212,200,.1)';

  return (
    <div className="op">

      {/* HERO DARK */}
      <section className="dk" id="top" style={{minHeight:'100vh',display:'flex',alignItems:'center',padding:'120px 48px 80px',overflow:'hidden'}}>
        <div className="blob" style={{width:700,height:700,background:'#00D4C8',top:-100,right:-200,opacity:.06}}/>
        <div className="blob" style={{width:400,height:400,background:'#F59E0B',bottom:0,left:-100,opacity:.04}}/>
        <div style={{width:'100%',position:'relative',zIndex:2}}>
          <div className="aos hero-badge" style={{position:"absolute",top:0,right:0,zIndex:3}}><img src="/odoo-gold-partner.svg" alt="Odoo Gold Partner" style={{height:90,maxWidth:380,objectFit:"contain",display:"block",filter:"drop-shadow(0 4px 16px rgba(245,158,11,0.25))"}}/></div>
          <h1 className="hero-h1 aos d1" style={{fontSize:'clamp(72px,14vw,210px)',fontWeight:800,lineHeight:.9,marginBottom:36,color:'#fff',letterSpacing:-5,whiteSpace:'nowrap'}}>
            On ne vend pas<br/>Odoo. <span className="tg">On y croit<br/>vraiment.</span>
          </h1>
          <p className="aos d2" style={{fontSize:20,color:'#E2E8F0',lineHeight:1.75,maxWidth:640,marginBottom:40}}>
            Chez D4E, on a choisi Odoo <strong style={{color:'#fff'}}>avant que ce soit tendance.</strong> On l'a deploye sur des chantiers, dans des ateliers, des cabinets. Et on le redeploierait demain sans hesiter.
          </p>
          <div className="aos d2" style={{display:'flex',alignItems:'center',gap:20,marginBottom:36}}>
            <img src="/antonio-ski.jpg" alt="Antonio Spedicato" style={{width:120,height:120,borderRadius:'50%',objectFit:'cover',objectPosition:'top',border:'3px solid #00D4C8',flexShrink:0,boxShadow:'0 0 40px rgba(0,212,200,.35)'}}/>
            <div>
              <div style={{fontSize:22,fontWeight:800,color:'#fff',fontFamily:'Space Grotesk,sans-serif',marginBottom:4}}>Antonio Spedicato</div>
              <div style={{fontSize:14,color:'#00D4C8',fontWeight:600,marginBottom:12}}>Fondateur -- D4E Digital4Efficiency</div>
              <div style={{borderLeft:'3px solid #00D4C8',background:'rgba(0,212,200,.08)',padding:'14px 18px',borderRadius:'0 12px 12px 0'}}>
                <div style={{fontSize:17,color:'rgba(255,255,255,.9)',fontStyle:'italic',lineHeight:1.6}}>"Odoo, c'est le premier logiciel que j'ai vu grandir aussi vite que les problemes de mes clients."</div>
              </div>
            </div>
          </div>
          <div className="aos d3" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:48}}>
            <button onClick={() => scrollTo('industries')} className="btn-p">Voir votre secteur</button>
            <button onClick={() => scrollTo('vision')} className="btn-s">Notre vision</button>
          </div>
          <div className="aos d4 hero-stats" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:40}}>
            {[
              {n:'1 300+',l:'utilisateurs actifs',s:'Suisse - France - Espagne - Italie',gold:false},
              {n:'8 ans',l:"d'expertise Odoo & BTP",s:'Certifie Gold v13 -> v19',gold:false},
              {n:'Support humain',l:'garanti -- pas de bot',s:'Une vraie personne qui connait votre dossier',gold:true},
            ].map((st,i) => (
              <div key={i} className="card" style={{background:st.gold?'rgba(245,158,11,.08)':'rgba(17,24,39,.9)',borderColor:st.gold?'rgba(245,158,11,.3)':'rgba(255,255,255,.12)',padding:'22px 28px',flex:1,minWidth:180}}>
                {st.gold && <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}><div className="pulse" style={{width:9,height:9,borderRadius:'50%',background:'#F59E0B',flexShrink:0}}/><div className="tgg" style={{fontSize:28,fontWeight:900,lineHeight:1,fontFamily:'Space Grotesk,sans-serif'}}>{st.n}</div></div>}
                {!st.gold && <div className="tg" style={{fontSize:48,fontWeight:900,lineHeight:1,fontFamily:'Space Grotesk,sans-serif'}}>{st.n}</div>}
                <div style={{fontSize:15,color:st.gold?'#FBBF24':'#E2E8F0',marginTop:6,fontWeight:st.gold?600:500}}>{st.l}</div>
                <div style={{fontSize:12,color:'#9CA3AF',marginTop:3}}>{st.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION LIGHT */}
      <section className="lk2" id="vision">
        <div style={{width:"100%"}}>
          <div style={{maxWidth:'100%'}}>
            <div style={{fontSize:17,textTransform:'uppercase',letterSpacing:2,color:'#00B4A6',fontWeight:700,borderBottom:'2px solid rgba(0,212,200,.4)',paddingBottom:10,display:'inline-block',marginBottom:44}} className="aos">Notre conviction</div>
            <h2 className="aos d1" style={{fontSize:'clamp(32px,4vw,56px)',fontWeight:800,lineHeight:1.12,marginBottom:28,color:'#1e293b'}}>
              Fini le ballet des logiciels<br/>qui <span className="tg">ne se parlent pas.</span>
            </h2>
            {['On a tous vecu ce cauchemar : un CRM d\'un cote, une compta de l\'autre, un Excel de stock quelque part sur le reseau, et une reunion hebdomadaire pour reconcilier tout ca a la main. C\'est du temps humain gaspille.',
              'Odoo, c\'est 40+ applications qui naissent deja connectees. Votre commercial cree un devis : la comptabilite le voit. Le stock se met a jour : l\'atelier est prevenu. Une facture est payee : le rapport de tresorerie bouge en temps reel.',
              "Ce qu'on aime chez Odoo, c'est que le logiciel respecte l'intelligence de vos equipes. Il automatise ce qui est repetitif et libere du temps pour ce qui demande du jugement, de la relation, de l'expertise."
            ].map((p,i) => <p key={i} className={`aos d${i+2}`} style={{fontSize:19,color:'#334155',lineHeight:1.8,marginBottom:20,maxWidth:'100%'}}>{p}</p>)}
            <div className="aos d4" style={{display:'flex',alignItems:'center',gap:24,marginTop:40,paddingTop:32,borderTop:'1px solid #e2e8f0'}}>
              <img src="/team-laetitia.jpg" alt="Laetitia Andre" style={{width:120,height:120,borderRadius:'50%',objectFit:'cover',objectPosition:'top',border:'3px solid #00D4C8',flexShrink:0,boxShadow:'0 0 40px rgba(0,212,200,.25)'}}/>
              <div>
                <div style={{fontWeight:800,fontSize:22,color:'#1e293b',fontFamily:'Space Grotesk,sans-serif',marginBottom:4}}>Laetitia Andre</div>
                <div style={{fontSize:14,color:'#00B4A6',fontWeight:600,marginBottom:12}}>Ambassadrice Odoo -- D4E</div>
                <div style={{borderLeft:'3px solid #00D4C8',background:'rgba(0,212,200,.06)',padding:'14px 18px',borderRadius:'0 12px 12px 0'}}>
                  <div style={{fontSize:17,color:'#334155',fontStyle:'italic',lineHeight:1.6}}>"Elle ne vend pas Odoo. Elle le vit, le deploie, et le defend chaque jour sur le terrain."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPS DARK */}
      <section className="dk2" id="apps">
        <div className="blob" style={{width:400,height:400,background:'#7C3AED',left:-60,top:'50%',transform:'translateY(-50%)',opacity:.08}}/>
        <div style={{width:'100%',position:'relative',zIndex:2}}>
          <div className="stag-dk aos"><span className="sdot"/>&nbsp;Ce qu'Odoo fait vraiment</div>
          <h2 className="sh2 aos d1" style={{color:'#fff'}}>Les modules qu'on deploie<br/>le plus. Et pourquoi.</h2>
          <p className="aos d2" style={{fontSize:17,color:'#E2E8F0',maxWidth:580,lineHeight:1.7,marginBottom:52}}>Pas une liste exhaustive. Juste les six apps qui ont change concretement la vie des entreprises qu'on accompagne.</p>
          <div className="ag sg aos">
            {[
              {ico:'crm',bg:'rgba(0,212,200,.1)',title:'CRM et Ventes',body:'Pipeline Kanban temps reel, lead scoring IA, devis en un clic. Devis -> Commande -> Facture sans copier-coller. Multi-canal dans la meme vue.',result:'+30% de ventes',rc:'rt'},
              {ico:'inventaire',bg:'rgba(245,158,11,.1)',title:'Inventaire',body:'Stock temps reel, FIFO/FEFO, multi-entrepots. Une commande declenche le reapprovisionnement automatiquement.',result:'-40% de ruptures',rc:'rg'},
              {ico:'compta',bg:'rgba(0,212,200,.1)',title:'Comptabilite',body:'Reconciliation bancaire IA, facturation auto, multi-devises. La cloture mensuelle de 3 jours passe a quelques heures.',result:'15h/semaine recuperees',rc:'rt'},
              {ico:'manufacturing',bg:'rgba(124,58,237,.1)',title:'Fabrication (MRP)',body:'Nomenclatures, ordres de fab, controle qualite, maintenance predictive. La production arrete de subir.',result:null,rc:''},
              {ico:'employees',bg:'rgba(245,158,11,.1)',title:'Ressources Humaines',body:'Recrutement, paie, conges, evaluations. Portail self-service collaborateur. Une RH qui pilote.',result:null,rc:''},
              {ico:'ecommerce',bg:'rgba(0,212,200,.1)',title:'E-commerce',body:'Boutique native, catalogue synchronise avec le stock physique. Un produit epuise disparait automatiquement du site.',result:'x2 ventes online en 6 mois',rc:'rt'},
            ].map((a,i) => (
              <div key={i} className={`ac card card-dk cgh${i===0?' w':''}`} style={{cursor:'default'}}>
                <div className="aico" style={{background:a.bg}} dangerouslySetInnerHTML={{__html:SVGS[a.ico as keyof typeof SVGS]}}/>
                <div style={{fontSize:19,fontWeight:700,marginBottom:10,color:'#fff'}}>{a.title}</div>
                <p style={{fontSize:15,color:'#9CA3AF',lineHeight:1.7,marginBottom:16,flex:1}}>{a.body}</p>
                {a.result && <div style={{display:'inline-flex',alignItems:'center',gap:6,borderRadius:6,padding:'5px 12px',fontSize:12,fontWeight:600,width:'fit-content',background:a.rc==='rt'?'rgba(0,212,200,.1)':'rgba(245,158,11,.1)',border:a.rc==='rt'?'1px solid rgba(0,212,200,.2)':'1px solid rgba(245,158,11,.2)',color:a.rc==='rt'?'#00D4C8':'#F59E0B'}}><span style={{width:5,height:5,borderRadius:'50%',background:'currentColor'}}/>{a.result}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION LIGHT */}
      <section className="lk" id="integration">
        <div style={{width:"100%"}}>
          <div className="int-cols" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start',marginBottom:40}}>
            <div>
              <div className="stag-lk aos"><span className="sdot"/>&nbsp;Integrations &amp; API</div>
              <h2 className="sh2 aos d1" style={{color:'#1e293b'}}>Vous avez deja<br/>quelque chose en place ?<br/><span className="tg">Pas de probleme.</span></h2>
              <p className="aos d2" style={{fontSize:19,color:'#334155',lineHeight:1.8,marginBottom:22}}>C'est la question qu'on entend souvent : <em style={{color:'#1e293b'}}>"On a deja notre site e-commerce, notre EDI, notre ERP de prod -- est-ce qu'Odoo va tout casser ?"</em> La reponse courte : non.</p>
              <p className="aos d3" style={{fontSize:19,color:'#334155',lineHeight:1.8,marginBottom:0}}>L'API REST d'Odoo est <strong style={{color:'#1e293b'}}>ouverte, documentee et battle-tested.</strong> On a connecte des boutiques Shopify, des systemes EDI industriels, des logiciels de paie locaux. A chaque fois, Odoo joue le role de <strong style={{color:'#1e293b'}}>cerveau central</strong> sans forcer la main.</p>
            </div>
            <div>
              <div className="sg aos d2" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginBottom:14}}>
                {[
                  {Icon:Store,      n:'E-commerce', d:'Shopify, WooCommerce, Amazon', color:'#F59E0B', bg:'rgba(245,158,11,0.12)'},
                  {Icon:RefreshCw,  n:'EDI',         d:'EDIFACT, X12, commandes auto', color:'#00D4C8', bg:'rgba(0,212,200,0.12)'},
                  {Icon:Cpu,        n:'MRP / ERP',   d:'SAP, Sage, logiciels metier',  color:'#F59E0B', bg:'rgba(245,158,11,0.12)'},
                  {Icon:CreditCard, n:'Paiement',    d:'Stripe, PayPal, Twint',         color:'#00D4C8', bg:'rgba(0,212,200,0.12)'},
                  {Icon:Package,    n:'Logistique',  d:'DHL, UPS, FedEx, La Poste',    color:'#F59E0B', bg:'rgba(245,158,11,0.12)'},
                  {Icon:Webhook,    n:'API custom',  d:'REST, webhooks, tout',          color:'#00D4C8', bg:'rgba(0,212,200,0.12)'},
                ].map((item,i) => (
                  <div key={i} className="int-conn" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'20px 12px'}}>
                    <div style={{width:52,height:52,borderRadius:14,background:item.bg,border:'1px solid '+item.color+'60',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <item.Icon style={{width:24,height:24,color:item.color}}/>
                    </div>
                    <div style={{fontSize:13,fontWeight:700,color:'#1e293b',textAlign:'center'}}>{item.n}</div>
                    <div style={{fontSize:11,color:'#64748b',textAlign:'center',lineHeight:1.4}}>{item.d}</div>
                  </div>
                ))}
              </div>
              <div className="aos d3" style={{background:'#fff',border:'1px solid #e2e8f0',borderLeft:'3px solid #00D4C8',borderRadius:'0 12px 12px 0',padding:'14px 18px'}}>
                <div style={{fontSize:12,textTransform:'uppercase',letterSpacing:1.5,fontWeight:700,color:'#00B4A6',marginBottom:10}}>Ce qu'on connecte couramment</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                  {['Shopify','WooCommerce','Magento','EDI EDIFACT','Amazon','Stripe','PayPal','Twint','DHL / UPS','Salesforce','SAP','Sage','API bancaires','Webhooks'].map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
          <div className="aos d4" style={{background:'rgba(0,212,200,.06)',border:'1px solid rgba(0,212,200,.25)',borderLeft:'4px solid #00D4C8',borderRadius:'0 16px 16px 0',padding:'28px 36px',display:'flex',gap:24,alignItems:'center'}}>
            <div style={{flexShrink:0,width:48,height:48,borderRadius:12,background:'rgba(0,212,200,0.12)',border:'1px solid rgba(0,212,200,0.3)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4C8" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div style={{fontSize:14,color:'#00B4A6',fontWeight:800,marginBottom:6,textTransform:'uppercase',letterSpacing:1.5}}>Notre principe sur le terrain</div>
              <div style={{fontSize:17,color:'#334155',lineHeight:1.75}}>On ne remplace pas ce qui fonctionne bien. On connecte Odoo a votre existant, on construit des ponts, et on migre progressivement quand ca a du sens.</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES DARK */}
      <section className="dk" id="industries">
        <div style={{width:"100%"}}>
          <div className="stag-dk aos"><span className="sdot"/>&nbsp;Par secteur</div>
          <h2 className="sh2 aos d1" style={{color:'#fff'}}>Odoo parle votre langue.<br/><span className="tg">On vous le prouve.</span></h2>
          <p className="aos d2" style={{fontSize:17,color:'#E2E8F0',maxWidth:580,lineHeight:1.7,marginBottom:52}}>Chaque metier a ses angles morts. Voila ce qu'on a appris en deployant Odoo dans les votres.</p>
          <div className="aos d3" style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:44}}>
            {([['fi','Finance','BarChart3'],['sv','Services','Wrench'],['bt','Construction','HardHat',true],['in','Industrie','Factory'],['co','Commerce','ShoppingCart'],['lo','Logistique','Truck'],['sa','Sante','Heart'],['ed','Education','GraduationCap']] as [IndId,string,string,boolean?][]).map(([id,label,_icon,elvy]) => (
              <button key={id} className={`itab${elvy?' elvy':''}${ind===id?' on':''}`} style={{fontSize:15,padding:'10px 22px'}} onClick={() => setInd(id)}>
                {label}{elvy && <span className="eb">Elvy</span>}
              </button>
            ))}
          </div>
          <div className="ind-cols" style={{display:'grid',gridTemplateColumns:'1.2fr 0.8fr',gap:48,alignItems:'start'}}>
            <div>
              <div style={{width:80,height:80,borderRadius:20,background:cur.gold?'rgba(245,158,11,0.15)':'rgba(0,212,200,0.15)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:24,border:cur.gold?'1px solid rgba(245,158,11,0.3)':'1px solid rgba(0,212,200,0.3)'}}>
                {cur.icon && (() => { const IconComp = {BarChart3,Wrench,HardHat,Factory,ShoppingCart,Truck,Heart,GraduationCap}[cur.icon]; return IconComp ? <IconComp style={{width:40,height:40,color:cur.gold?'#F59E0B':'#00D4C8'}}/> : null; })()}
              </div>
              <h3 style={{fontSize:48,fontWeight:800,lineHeight:1.1,marginBottom:10,color:'#fff'}}>{cur.title}</h3>
              <div style={{fontSize:14,textTransform:'uppercase',letterSpacing:1.5,fontWeight:700,color:cur.gold?'#F59E0B':'#00D4C8',marginBottom:22}}>{cur.sub}</div>
              <p style={{fontSize:20,color:'#E2E8F0',lineHeight:1.8,marginBottom:32}} dangerouslySetInnerHTML={{__html:cur.body}}/>
              <div style={{display:'flex',flexDirection:'column',gap:10,maxWidth:'460px',width:'100%'}}>
                {cur.checks.map((c,i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12,fontSize:17,color:'#E2E8F0'}}>
                    <div style={{width:26,height:26,minWidth:26,borderRadius:'50%',background:chkBg,display:'flex',alignItems:'center',justifyContent:'center',marginTop:2}}>
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4.5,7.5 8,3" stroke={chkColor} strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {cur.mods.map((m,i) => (
                <div key={i} className={cur.gold?'imod-g':'imod'} style={{padding:'14px 18px'}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:4}}>
                    <span style={{fontSize:15,fontWeight:700,color:'#fff'}}>{m.n}</span>
                    <span className={cur.gold?'mtg':'mtt'} style={{fontSize:13,padding:'4px 12px'}}>{m.t}</span>
                  </div>
                  <div style={{fontSize:13,color:'#94A3B8',marginTop:4}}>{m.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REASONS LIGHT */}
      <section className="lk" id="raisons">
        <div style={{width:"100%"}}>
          <div className="stag-lk aos"><span className="sdot"/>&nbsp;Ce qu'on a vraiment appris</div>
          <h2 className="sh2 aos d1" style={{color:'#1e293b'}}>6 raisons. Pas dans les slides.</h2>
          <p className="aos d2" style={{fontSize:17,color:'#334155',maxWidth:580,lineHeight:1.7,marginBottom:52}}>Apres 4 ans a deployer Odoo sur des dizaines de projets tres differents, voila ce qui nous convainc encore chaque matin.</p>
          <div className="rg-grid sg aos">
            {[['01','Modulaire par nature','Commencez avec une app. Ajoutez-en 40+ quand vous voulez. <strong>Aucun contrat bloquant.</strong>'],
              ['02','Open source','Personnalisation illimitee. <strong>Zero vendor lock-in.</strong> Le code vous appartient.'],
              ['03','Tout parle a tout','CRM, Compta, Stock, Production. <strong>Zero connecteur. Zero synchro manuelle.</strong>'],
              ['04','Cout maitrise','Jusqu\'a <strong>-35% de couts operationnels</strong> vs des solutions fragmentees.'],
              ['05','Mobile first','Application <strong>refaite de zero en v18.</strong> Votre equipe travaille depuis le terrain.'],
              ['06','Il grandit avec vous','Du TPE au multinational. <strong>Odoo ne plafonne pas.</strong>'],
            ].map(([n,h,p]) => (
              <div key={n} className="rsn rsn-animated">
                <div className="rn rn-anim">{n}</div>
                <div className="rh">{h}</div>
                <p className="rp" dangerouslySetInnerHTML={{__html:p as string}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE DARK */}
      <section className="dk2" id="promesse">
        <div style={{width:"100%"}}>
          <div className="hero-promise" style={{display:'grid',gridTemplateColumns:'1fr 400px',gap:64,alignItems:'start'}}>
            <div>
              <div className="stag-dk aos" style={{display:'inline-flex'}}><span className="sdot"/>&nbsp;La promesse D4E</div>
              <h2 className="sh2 aos d1" style={{color:'#fff'}}>On ne livre pas un logiciel.<br/>On livre <span className="tg">votre systeme.</span></h2>
              <p className="aos d2" style={{fontSize:21,color:'#94A3B8',lineHeight:1.85,marginBottom:44,maxWidth:'100%'}}>Configurer Odoo, n'importe qui peut l'apprendre. Comprendre votre metier, vos contraintes, vos angles morts et traduire tout ca en un systeme qui tient dans le temps -- c'est ce qu'on fait chaque jour depuis 8 ans.</p>
              <div className="sg aos d3 p3g" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:44}}>
                {[
                  {Icon:Zap,      color:'#F59E0B', bg:'rgba(245,158,11,0.12)', t:'Operationnel en semaines', d:'Nos packs cle en main sont calibres pour que votre equipe soit autonome rapidement.'},
                  {Icon:Target,   color:'#00D4C8', bg:'rgba(0,212,200,0.12)',  t:'Prix fixe, sans surprise', d:'Un engagement clair. Un perimetre defini. Pas de ticket surprise a chaque modification.'},
                  {Icon:Users,    color:'#F59E0B', bg:'rgba(245,158,11,0.12)', t:'Un chef de projet dedie',  d:'Une vraie personne, pas un ticket support. Quelqu un qui connait votre activite.'},
                ].map((p,i) => (
                  <div key={i} className="p3" style={{display:'flex',flexDirection:'column',gap:16}}>
                    <div style={{width:52,height:52,borderRadius:14,background:p.bg,border:'1px solid '+p.color+'40',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <p.Icon style={{width:24,height:24,color:p.color}}/>
                    </div>
                    <div style={{fontWeight:800,fontSize:17,color:'#fff',lineHeight:1.2}}>{p.t}</div>
                    <div style={{fontSize:15,color:'#94A3B8',lineHeight:1.65}}>{p.d}</div>
                  </div>
                ))}
              </div>
              <div className="aos d4" style={{display:'flex',gap:14,flexWrap:'wrap'}}>
                <a href="/" onClick={(e)=>{e.preventDefault();window.location.href='/';setTimeout(()=>{document.getElementById('contact-form')?.scrollIntoView({behavior:'smooth'});},400);}} className="btn-p">Discuter de mon projet</a>
                <a href="/#/elvybat" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'18px 40px',backgroundColor:'#F59E0B',color:'#FFFFFF',fontWeight:800,fontSize:17,textDecoration:'none',borderRadius:14,boxShadow:'0 6px 24px rgba(245,158,11,0.35)',transition:'all .2s'}}>Voir ElvyBat pour le BTP</a>
              </div>
            </div>
            <div className="aos d2 ant-card" style={{background:'#F0FDF9',border:'1px solid rgba(0,212,200,0.25)',borderTop:'4px solid #00D4C8',borderRadius:20,padding:'36px 28px',display:'flex',flexDirection:'column',alignItems:'center',gap:18,textAlign:'center',position:'sticky',top:100}}>
              <div className="ant-photo" style={{width:124,height:124,borderRadius:'50%',border:'3px solid #00D4C8',overflow:'hidden',flexShrink:0}}>
                <img src="/antonio-profile.jpg" alt="Antonio Spedicato" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
              </div>
              <div>
                <div style={{fontSize:'1.2rem',fontWeight:800,color:'#0F1D3A',marginBottom:4}}>Antonio Spedicato</div>
                <div style={{fontSize:'0.9rem',fontWeight:600,color:'#00D4C8',marginBottom:4}}>Consultant Odoo & Fondateur</div>
                <div style={{fontSize:'0.8rem',color:'#94A3B8'}}>Repond sous 2h en semaine</div>
              </div>
              <div style={{width:'100%',display:'flex',flexDirection:'column',gap:10}}>
                <a href="https://wa.me/41764344595" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10,padding:'13px 20px',backgroundColor:'#25D366',color:'#FFFFFF',fontWeight:700,borderRadius:12,textDecoration:'none',fontSize:'0.95rem'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.126 1.526 5.858L.057 23.571l5.885-1.544A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.5-5.065-1.373l-.364-.216-3.767.988 1.006-3.672-.237-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  WhatsApp
                </a>
                <a href="tel:+41764344595" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10,padding:'13px 20px',backgroundColor:'#00D4C8',color:'#FFFFFF',fontWeight:700,borderRadius:12,textDecoration:'none',fontSize:'0.95rem'}}>+41 (0)76 434 45 95</a>
                <a href="mailto:antonio@d4e.cool" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10,padding:'13px 20px',border:'1.5px solid #CBD5E1',color:'#334155',fontWeight:600,borderRadius:12,textDecoration:'none',fontSize:'0.88rem'}}>antonio@d4e.cool</a>
              </div>
              <div style={{fontSize:'0.75rem',color:'#64748B',borderTop:'1px solid rgba(0,212,200,0.15)',paddingTop:14,width:'100%'}}>Geneve - Sion - Barcelone</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const SVGS: Record<string, string> = {
  crm: `<svg style="width:30px;height:30px;" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M45.873 9c3.52.041 5.504 4.474 3.013 6.964l-8.424 8.419L36.5 27 25 9h20.873ZM10.946 25.79a3.972 3.972 0 0 0 0 5.618l8.433 8.43a3.977 3.977 0 0 0 5.623 0L23.5 36 15 27l-4.055-1.212Z" fill="#985184"/><path d="M1.114 15.964C-1.377 13.474.608 9.041 4.128 9H25l15.461 15.383a3.972 3.972 0 0 1 0 5.62l-9.84 9.833a3.977 3.977 0 0 1-5.621 0L1.114 15.964Z" fill="#1AD3BB"/><path d="M25 39.837a3.972 3.972 0 0 0 0-5.62l-8.434-8.428a3.977 3.977 0 0 0-5.623 0L25 39.837Zm-7.38-23.531L25 9l9.136 9.062a5.966 5.966 0 0 0-8.433 0l-3.163 3.16a3.48 3.48 0 0 1-4.92 0 3.475 3.475 0 0 1 0-4.916Z" fill="#005E7A"/></svg>`,
  inventaire: `<svg style="width:30px;height:30px;" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="m25 4 6.857 4L15.5 19v16l.5 5.75-9-5.25v-21L25 4Z" fill="#FBB945"/><path d="m18.087 41.967-6.138-3.58V17.5L30.046 6.943l6.283 3.665L22.001 23.5l-3.915 18.467Z" fill="#F86126"/><path d="M36.328 10.61 43 14.5v21L25 46l-6.914-4.032V21.25l18.242-10.642Z" fill="#985184"/></svg>`,
  compta: `<svg style="width:30px;height:30px;" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M40.682 41.263c-3.514 4.188-9.758 4.734-13.946 1.22-4.189-3.514-4.735-9.758-1.22-13.947 3.514-4.188 9.758-4.734 13.946-1.22 4.188 3.515 4.734 9.759 1.22 13.947Z" fill="#1AD3BB"/><path d="M25.383 21.464c-3.514 4.188-9.758 4.734-13.946 1.22-4.188-3.514-4.735-9.758-1.22-13.946 3.514-4.189 9.758-4.735 13.946-1.22 4.188 3.514 4.734 9.758 1.22 13.946Z" fill="#FBB945"/><path d="M37.09 6.545c1.407-1.406 3.36-1.732 4.364-.728L46 10.363l-33.09 33.09c-1.407 1.406-3.36 1.732-4.365.728L4 39.636 37.09 6.544Z" fill="#985184"/><path d="m31.174 25.188-7.79 7.789a9.853 9.853 0 0 1 2.13-4.442 9.858 9.858 0 0 1 5.66-3.348Z" fill="#005E7A"/><path d="M18.676 24.962a9.868 9.868 0 0 0 6.707-3.498 9.854 9.854 0 0 0 2.278-5.487l-8.985 8.985Z" fill="#953B24"/></svg>`,
  manufacturing: `<svg style="width:30px;height:30px;" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M50 19.023c0-.735-.737-1.23-1.398-.938l-28 12.403a1.026 1.026 0 0 0-.602.939v9.55c0 .565.448 1.023 1 1.023h25c2.21 0 4-1.83 4-4.089V19.023Z" fill="#FBB945"/><path d="M42 14.018c0-.722-.719-1.214-1.376-.942l-30 12.394a1.017 1.017 0 0 0-.624.943v14.57c0 .562.448 1.017 1 1.017h27c2.21 0 4-1.821 4-4.068V14.018Z" fill="#FC868B"/><path d="m42 21.01-21.398 9.478c-.365.162-.602.53-.602.938v9.552c0 .564.448 1.022 1 1.022h17c2.21 0 4-1.822 4-4.068V21.01Z" fill="#F86126"/><path d="M32 9.015c0-.72-.719-1.21-1.376-.94l-30 12.364a1.015 1.015 0 0 0-.624.94v19.607C0 41.546.448 42 1 42h27c2.21 0 4-1.817 4-4.058V9.015Z" fill="#1AD3BB"/><path d="M32 16.639 10.624 25.47a1.017 1.017 0 0 0-.624.943v14.57c0 .562.448 1.017 1 1.017h17c2.21 0 4-1.817 4-4.058V16.64Z" fill="#1A6F66"/></svg>`,
  employees: `<svg style="width:30px;height:30px;" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M34 17a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="#985184"/><path d="M12 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#FBB945"/><path d="M46 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#1AD3BB"/><path d="M25 30H4a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h21V30Z" fill="#FBB945"/><path d="M46 30H25v12h21a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4Z" fill="#1AD3BB"/><path d="M12 30h14c6.627 0 12 5.373 12 12H24c-6.627 0-12-5.373-12-12Z" fill="#985184"/></svg>`,
  ecommerce: `<svg style="width:30px;height:30px;" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.724 6.397C16.377 4.94 17.852 4 19.481 4h11.037c1.63 0 3.104.94 3.757 2.397L37.236 13H41.9c2.46 0 4.367 2.099 4.07 4.481l-3.106 25C42.613 44.49 40.866 46 38.793 46H11.207c-2.074 0-3.82-1.51-4.07-3.519l-3.107-25C3.734 15.1 5.64 13 8.1 13h4.663l2.961-6.603ZM32.917 13H17.082c0-.56.123-1.134.39-1.691l.956-2C19.102 7.9 20.551 7 22.144 7h5.711c1.593 0 3.042.9 3.716 2.308l.957 2c.266.558.39 1.132.39 1.692Z" fill="#712258"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.514 45.016a3.963 3.963 0 0 1-1.377-2.535l-3.107-25C3.734 15.1 5.64 13 8.1 13h4.663l2.961-6.603C16.377 4.94 17.852 4 19.481 4h11.037c1.63 0 3.104.94 3.757 2.397l2.59 5.777C35.5 28.256 23.848 41.405 8.515 45.016ZM17.082 13h15.835c0-.56-.123-1.134-.39-1.691l-.956-2C30.897 7.9 29.448 7 27.855 7h-5.711c-1.593 0-3.042.9-3.716 2.308l-.956 2a3.904 3.904 0 0 0-.39 1.692Z" fill="#985184"/></svg>`,
};
