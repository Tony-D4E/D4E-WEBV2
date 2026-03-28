import { useState, useEffect } from 'react';

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
  .op .stag-dk{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,200,.1);border:1px solid rgba(0,212,200,.2);border-radius:40px;padding:4px 14px;font-size:11px;color:#00D4C8;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px}
  .op .stag-lk{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,200,.08);border:1px solid rgba(0,212,200,.2);border-radius:40px;padding:4px 14px;font-size:11px;color:#00B4A6;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px}
  .op .sdot{width:6px;height:6px;border-radius:50%;background:currentColor;animation:opPulse 2s infinite}
  .op .dk{background:#0B0F19!important;color:#fff!important} 
  .op .dk2{background:#0F172A!important;color:#fff!important}
  .op .dk h1,.op .dk h2,.op .dk h3,.op .dk h4,.op .dk2 h1,.op .dk2 h2,.op .dk2 h3,.op .dk2 h4{color:#fff!important}
  .op .dk p,.op .dk2 p{color:#D1D5DB!important}
  .op .lk{background:#f8fafc!important} .op .lk2{background:#fff!important}
  .op .lk h1,.op .lk h2,.op .lk h3,.op .lk h4{color:#1e293b!important}
  .op .lk p,.op .lk2 p{color:#334155!important}
  .op section{padding:96px 64px;position:relative;overflow:hidden;width:100%}
  .op *{box-sizing:border-box}
  .op .tg{background:linear-gradient(to right,#00E5CC,#00D4C8,#06B6D4)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important}
  .op .tgg{background:linear-gradient(to right,#F59E0B,#FBBF24,#FCD34D)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important}
  .op .con{width:100%}
  .op .sh2{font-size:clamp(36px,4.5vw,60px);font-weight:800;line-height:1.06;margin-bottom:18px}
  .op .card{border:1px solid;border-radius:1rem;transition:all .3s}
  .op .card-dk{background:rgba(17,24,39,.9);border-color:rgba(255,255,255,.12)}
  .op .card-lk{background:#fff;border-color:#e2e8f0;box-shadow:0 1px 8px rgba(0,0,0,.06)}
  .op .card-lk:hover{border-color:rgba(0,212,200,.4)!important;box-shadow:0 4px 20px rgba(0,212,200,.1)}
  .op .imod{background:rgba(11,15,25,.6);border:1px solid rgba(255,255,255,.1);border-radius:1rem;padding:16px 18px;transition:border-color .2s}
  .op .imod:hover{border-color:rgba(0,212,200,.3)}
  .op .imod-g{background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.2);border-radius:1rem;padding:16px 18px}
  .op .mtt{background:rgba(0,212,200,.1);color:#00D4C8;font-size:11px;padding:2px 8px;border-radius:4px;font-weight:600}
  .op .mtg{background:rgba(245,158,11,.1);color:#F59E0B;font-size:11px;padding:2px 8px;border-radius:4px;font-weight:600}
  .op .itab{background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:8px 18px;font-size:13px;font-weight:500;color:#9CA3AF;cursor:pointer;transition:all .2s;font-family:inherit;display:inline-flex;align-items:center;gap:8px}
  .op .itab:hover{color:#fff;border-color:rgba(255,255,255,.2)}
  .op .itab.on{background:rgba(0,212,200,.1);border-color:#00D4C8;color:#00D4C8;font-weight:600}
  .op .itab.elvy.on{background:rgba(245,158,11,.1);border-color:#F59E0B;color:#F59E0B}
  .op .eb{background:#00D4C8;color:#0B0F19;font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;text-transform:uppercase;letter-spacing:.5px}
  .op .rg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#e2e8f0;border:1px solid #e2e8f0;border-radius:1rem;overflow:hidden}
  .op .rsn{background:#fff;padding:36px 28px;transition:background .2s} .op .rsn:hover{background:#f8fafc}
  .op .rn{font-family:'Space Grotesk',sans-serif;font-size:52px;font-weight:800;color:rgba(0,180,166,.15);line-height:1;margin-bottom:14px}
  .op .rh{font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px;color:#1e293b}
  .op .rp{font-size:15px;color:#64748b;line-height:1.65} .op .rp strong{color:#00B4A6;font-weight:600}
  .op .ag{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .op .ac{padding:26px;display:flex;flex-direction:column} .op .ac.w{grid-column:span 2}
  .op .aico{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;padding:10px}
  .op .int-conn{background:#fff;border:1px solid #e2e8f0;border-radius:1rem;padding:20px;text-align:center;transition:all .3s}
  .op .int-conn:hover{border-color:rgba(0,212,200,.4);transform:translateY(-3px);box-shadow:0 4px 20px rgba(0,212,200,.08)}
  .op .tag{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:5px 12px;font-size:13px;color:#334155;display:inline-block}
  .op .p3{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:1rem;padding:26px;transition:border-color .2s}
  .op .p3:hover{border-color:rgba(0,212,200,.3)}
  .op .btn-p{background:linear-gradient(to right,#00B4A6,#00D4C8);color:#fff;padding:15px 32px;border-radius:10px;font-weight:700;font-size:16px;text-decoration:none;font-family:'Space Grotesk',sans-serif;display:inline-block;transition:all .2s}
  .op .btn-p:hover{transform:translateY(-2px);box-shadow:0 10px 40px -10px rgba(0,212,200,.5)}
  .op .btn-s{border:1px solid rgba(255,255,255,.2);color:#D1D5DB;padding:15px 32px;border-radius:10px;font-weight:500;font-size:16px;text-decoration:none;display:inline-block;transition:all .2s}
  .op .btn-s:hover{border-color:rgba(0,212,200,.3);color:#00D4C8}
  .op .btn-sl{border:1px solid #e2e8f0;color:#334155;padding:13px 28px;border-radius:10px;font-weight:500;font-size:15px;text-decoration:none;display:inline-block;transition:all .2s}
  .op .btn-sl:hover{border-color:#00D4C8;color:#00B4A6}
  @media(max-width:900px){
    .op section{padding:64px 20px}
    .op .ag{grid-template-columns:1fr} .op .ac.w{grid-column:span 1}
    .op .rg-grid{grid-template-columns:1fr}
    .op .p3g{grid-template-columns:1fr!important}
    .op .ind-cols{grid-template-columns:1fr!important}
    .op .int-cols{grid-template-columns:1fr!important}
    .op .hero-h1{font-size:clamp(52px,13vw,80px)!important;white-space:normal!important}
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
    fi: { emo:'🏛', title:'Finance', sub:'Reporting, conformité, clôtures rapides', gold:false,
      body:'Les directions financières passent encore trop de temps sur des tâches que la machine peut faire. <strong style={{color:\'#fff\'}}>Odoo coupe dans tout ça.</strong> Réconciliation bancaire automatique, clôtures en quelques heures, chaque chiffre remonte en temps réel.',
      checks:['Réconciliation bancaire automatique par IA','Multi-devises, multi-sociétés, multi-taxes','KPIs financiers en temps réel, sans export','Packages de localisation fiscale par pays'],
      mods:[{n:'Comptabilité',t:'Core',d:'Facturation, taxes, clôtures, audit trail'},{n:'Analytique BI',t:'Reporting',d:'Centres de profit, reporting multidimensionnel'},{n:'Trésorerie',t:'Finance',d:'Prévisions cash-flow, paiements'},{n:'Notes de frais',t:'RH',d:'Validation mobile, remboursements auto'}]},
    sv: { emo:'🧩', title:'Services', sub:'Projets, temps, facturation sans fuite', gold:false,
      body:'Les ESN, cabinets et agences ont un ennemi commun : <strong style={{color:\'#fff\'}}>les heures qui s\'évaporent sans être facturées.</strong> Odoo Project relie tout dans une seule boucle.',
      checks:['Timesheets liés directement à la facturation','Vue Gantt, Kanban, liste sur chaque mission','Portail client pour validation des livrables','Rentabilité par projet, consultant, client'],
      mods:[{n:'Project',t:'Core',d:'Tâches, jalons, dépendances, vues multiples'},{n:'Timesheets',t:'Temps',d:'Saisie, validation, lien facturation'},{n:'Helpdesk',t:'Support',d:'Tickets, SLA, satisfaction client'},{n:'Field Service',t:'Terrain',d:'Interventions, planning mobile'}]},
    bt: { emo:'🏗', title:'Construction BTP', sub:'ElvyBat, notre solution maison sur Odoo', gold:true,
      body:'Le BTP c\'est notre terrain de jeu depuis le début. On a construit ElvyBat parce qu\'on n\'a pas trouvé une solution qui comprenait vraiment les enjeux d\'un chef de chantier. <strong style={{color:\'#fff\'}}>1 400+ chantiers gérés. Ce n\'est pas de la théorie.</strong>',
      checks:['Rentabilité chantier visible en temps réel','Pointage terrain mobile, même hors ligne','IA vocale multilingue pour bons de régie','Chiffrage intégré, devis en quelques clics'],
      mods:[{n:'ElvyBat',t:'Coeur',d:'Gestion de chantiers, marges, plannings'},{n:'ElvyCalc',t:'Chiffrage',d:'Métrés, estimations, devis automatisés'},{n:'ElvyTime',t:'Pointage',d:'Suivi des équipes, heures chantier'},{n:'ElvyService IA',t:'IA',d:'Rapports vocaux, bons de régie, facturation'}]},
    in: { emo:'⚙️', title:'Industrie', sub:'Production, supply chain, traçabilité', gold:false,
      body:'Odoo Manufacturing connecte nomenclature, ordres de fab et contrôle qualité dans un flux unique. <strong style={{color:\'#fff\'}}>La traçabilité devient un avantage, pas une contrainte.</strong>',
      checks:['MRP et ordonnancement intelligent des ateliers','Nomenclatures multicouches, suivi composants','Contrôle qualité et traçabilité lot/série','Maintenance préventive et prédictive'],
      mods:[{n:'Manufacturing',t:'Core',d:'Ordres de fabrication, BOM, suivi atelier'},{n:'Maintenance',t:'GMAO',d:'Interventions préventives, équipements'},{n:'Qualité',t:'Conformité',d:'Points de contrôle, non-conformités'},{n:'PLM',t:'Produit',d:'Cycle de vie produit, versions, ECO'}]},
    co: { emo:'🛒', title:'Commerce', sub:'Multi-canal, stocks, relation client', gold:true,
      body:'Caisse, e-commerce, marketplace : un seul back-office. <strong style={{color:\'#fff\'}}>Quand un produit est épuisé en boutique, il disparait automatiquement du site.</strong>',
      checks:['Caisse, site web, marketplace unifiés','Programme de fidélité multicanal intégré','Gestion des retours et SAV automatisée','Rapports de ventes temps réel par canal'],
      mods:[{n:'Point of Sale',t:'Retail',d:'Caisse tactile, paiements, remises'},{n:'eCommerce',t:'Digital',d:'Boutique native, SEO, passerelles paiement'},{n:'CRM',t:'Fidélité',d:'Segmentation, campagnes, historique'},{n:'Inventory',t:'Stock',d:'Stock temps réel, réapprovisionnement auto'}]},
    lo: { emo:'🚛', title:'Logistique', sub:'Flux, entrepôts, expéditions sans friction', gold:false,
      body:'La logistique, c\'est la guerre contre le temps perdu. <strong style={{color:\'#fff\'}}>On a vu des équipes gagner 2 heures par jour</strong> rien qu\'avec l\'optimisation du picking dans Odoo.',
      checks:['Picking optimisé par route dans l\'entrepôt','Multi-entrepôts, cross-docking, dropshipping','Intégration transporteurs, étiquettes auto','Traçabilité par lot, série, date péremption'],
      mods:[{n:'Inventory',t:'Core',d:'Gestion de stock, mouvements, valorisation'},{n:'Barcode',t:'Scan',d:'Picking par scan, réception, inventaires'},{n:'Delivery',t:'Transport',d:'FedEx, UPS, DHL, La Poste nativement'},{n:'Purchase',t:'Achats',d:'Commandes fournisseurs, réceptions'}]},
    sa: { emo:'🩺', title:'Santé', sub:'Normes, traçabilité, conformité sans effort', gold:false,
      body:'Dans le secteur de la santé, l\'erreur n\'est pas une option. <strong style={{color:\'#fff\'}}>La conformité réglementaire devient automatique</strong> plutôt qu\'un audit de 3 jours.',
      checks:['Traçabilité complète par lot et numéro de série','Alertes automatiques sur dates de péremption','Gestion des recalls produit en quelques clics','Conformité réglementaire documentée'],
      mods:[{n:'Inventory + Lots',t:'Traça',d:'FEFO, numéros de série, rappels auto'},{n:'Qualité',t:'Conformité',d:'Points de contrôle, non-conformités'},{n:'Facturation',t:'Admin',d:'Tiers payant, devis médicaux'},{n:'Portail client',t:'Digital',d:'Documents partagés, historique'}]},
    ed: { emo:'📚', title:'Education', sub:'Inscriptions, plannings, suivi apprenants', gold:false,
      body:'Odoo unifie inscriptions, plannings, suivi et facturation dans un portail unique. <strong style={{color:\'#fff\'}}>Les relances de paiement deviennent automatiques.</strong>',
      checks:['Inscriptions en ligne et suivi des paiements','Plannings de cours, salles, formateurs','Portail apprenant, supports de cours, quiz','Tableaux de bord progression et assiduité'],
      mods:[{n:'eLearning',t:'Core',d:'Cours, quiz, certifications, progression'},{n:'Events',t:'Planif.',d:'Sessions, inscriptions, rappels'},{n:'Facturation',t:'Admin',d:'Inscriptions payantes, relances, OPCO'},{n:'Employés',t:'RH',d:'Gestion formateurs, contrats, planning RH'}]},
  };

  const cur = INDS[ind];
  const chkColor = cur.gold ? '#F59E0B' : '#00D4C8';
  const chkBg = cur.gold ? 'rgba(245,158,11,.1)' : 'rgba(0,212,200,.1)';

  return (
    <div className="op">

      {/* ① HERO DARK */}
      <section className="dk" id="top" style={{minHeight:'100vh',display:'flex',alignItems:'center',padding:'120px 48px 80px',overflow:'hidden'}}>
        <div className="blob" style={{width:700,height:700,background:'#00D4C8',top:-100,right:-200,opacity:.06}}/>
        <div className="blob" style={{width:400,height:400,background:'#F59E0B',bottom:0,left:-100,opacity:.04}}/>
        <div style={{width:'100%',position:'relative',zIndex:2}}>
          <div className="stag-dk aos"><span className="sdot"/>&nbsp;Partenaire Odoo Gold — Suisse, France, Espagne</div>
          <h1 className="hero-h1 aos d1" style={{fontSize:'clamp(72px,13.5vw,220px)',fontWeight:800,lineHeight:.88,marginBottom:40,color:'#fff',letterSpacing:-5,whiteSpace:'nowrap'}}>
            On ne vend<br/>pas Odoo.<br/><span className="tg">On y croit<br/>vraiment.</span>
          </h1>
          <p className="aos d2" style={{fontSize:20,color:'#D1D5DB',lineHeight:1.75,maxWidth:640,marginBottom:40}}>
            Chez D4E, on a choisi Odoo <strong style={{color:'#fff'}}>avant que ce soit tendance.</strong> On l'a déployé sur des chantiers, dans des ateliers, des cabinets. Et on le redéploierait demain sans hésiter.
          </p>
          <div className="aos d2" style={{display:'flex',alignItems:'center',gap:20,marginBottom:36}}>
            <img src="/antonio-ski.jpg" alt="Antonio Spedicato" style={{width:120,height:120,borderRadius:'50%',objectFit:'cover',objectPosition:'top',border:'3px solid #00D4C8',flexShrink:0,boxShadow:'0 0 40px rgba(0,212,200,.35)'}}/>
            <div>
              <div style={{fontSize:22,fontWeight:800,color:'#fff',fontFamily:'Space Grotesk,sans-serif',marginBottom:4}}>Antonio Spedicato</div>
              <div style={{fontSize:14,color:'#00D4C8',fontWeight:600,marginBottom:12}}>Fondateur — D4E Digital4Efficiency</div>
              <div style={{borderLeft:'3px solid #00D4C8',background:'rgba(0,212,200,.08)',padding:'14px 18px',borderRadius:'0 12px 12px 0'}}>
                <div style={{fontSize:17,color:'rgba(255,255,255,.9)',fontStyle:'italic',lineHeight:1.6}}>"Odoo, c'est le premier logiciel que j'ai vu grandir aussi vite que les problèmes de mes clients."</div>
              </div>
            </div>
          </div>
          <div className="aos d3" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:48}}>
            <button onClick={() => scrollTo('industries')} className="btn-p">Voir votre secteur</button>
            <button onClick={() => scrollTo('vision')} className="btn-s">Notre vision</button>
          </div>
          <div className="aos d4" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:40}}>
            {[
              {n:'1 300+',l:'utilisateurs actifs',s:'Suisse, France, Espagne, Italie',gold:false},
              {n:'8 ans',l:"d'expertise terrain BTP",s:'Genève · Sion · Barcelona',gold:false},
              {n:'Support humain',l:'garanti — pas de bot',s:'Une vraie personne qui connaît votre dossier',gold:true},
            ].map((st,i) => (
              <div key={i} className="card" style={{background:st.gold?'rgba(245,158,11,.08)':'rgba(17,24,39,.9)',borderColor:st.gold?'rgba(245,158,11,.3)':'rgba(255,255,255,.12)',padding:'22px 28px',flex:1,minWidth:180}}>
                {st.gold && <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}><div className="pulse" style={{width:9,height:9,borderRadius:'50%',background:'#F59E0B',flexShrink:0}}/><div className="tgg" style={{fontSize:28,fontWeight:900,lineHeight:1,fontFamily:'Space Grotesk,sans-serif'}}>{st.n}</div></div>}
                {!st.gold && <div className="tg" style={{fontSize:48,fontWeight:900,lineHeight:1,fontFamily:'Space Grotesk,sans-serif'}}>{st.n}</div>}
                <div style={{fontSize:15,color:st.gold?'#FBBF24':'#D1D5DB',marginTop:6,fontWeight:st.gold?600:500}}>{st.l}</div>
                <div style={{fontSize:12,color:'#9CA3AF',marginTop:3}}>{st.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ② VISION LIGHT */}
      <section className="lk2" id="vision">
        <div style={{width:"100%"}}>
          <div style={{maxWidth:'100%'}}>
            <div style={{fontSize:11,textTransform:'uppercase',letterSpacing:2,color:'#00B4A6',fontWeight:700,borderBottom:'2px solid rgba(0,212,200,.2)',paddingBottom:8,display:'inline-block',marginBottom:40}} className="aos">Notre conviction</div>
            <h2 className="aos d1" style={{fontSize:'clamp(32px,4vw,56px)',fontWeight:800,lineHeight:1.12,marginBottom:28,color:'#1e293b'}}>
              Fini le ballet des logiciels<br/>qui <span className="tg">ne se parlent pas.</span>
            </h2>
            {['On a tous vécu ce cauchemar : un CRM d\'un côté, une compta de l\'autre, un Excel de stock quelque part sur le réseau, et une réunion hebdomadaire pour réconcilier tout ça à la main. C\'est du temps humain gaspillé.',
              'Odoo, c\'est 40+ applications qui naissent déjà connectées. Votre commercial crée un devis : la comptabilité le voit. Le stock se met à jour : l\'atelier est prévenu. Une facture est payée : le rapport de trésorerie bouge en temps réel.',
              "Ce qu'on aime chez Odoo, c'est que le logiciel respecte l'intelligence de vos équipes. Il automatise ce qui est répétitif et libère du temps pour ce qui demande du jugement, de la relation, de l'expertise."
            ].map((p,i) => <p key={i} className={`aos d${i+2}`} style={{fontSize:19,color:'#334155',lineHeight:1.8,marginBottom:20,maxWidth:'100%'}}>{p}</p>)}
            <div className="aos d4" style={{display:'flex',alignItems:'center',gap:20,marginTop:40,paddingTop:28,borderTop:'1px solid #e2e8f0'}}>
              <img src="/team-laetitia.jpg" alt="Laëtitia André" style={{width:80,height:80,borderRadius:'50%',objectFit:'cover',objectPosition:'top',border:'3px solid #00D4C8',flexShrink:0,boxShadow:'0 0 20px rgba(0,212,200,.2)'}}/>
              <div>
                <div style={{fontWeight:800,fontSize:18,color:'#1e293b',fontFamily:'Space Grotesk,sans-serif'}}>Laëtitia André</div>
                <div style={{display:'inline-flex',alignItems:'center',gap:7,marginTop:6,background:'rgba(0,212,200,.08)',border:'1px solid rgba(0,212,200,.25)',borderRadius:30,padding:'4px 14px'}}>
                  <span className="pulse" style={{width:7,height:7,borderRadius:'50%',background:'#00D4C8',flexShrink:0}}/>
                  <span style={{fontSize:13,color:'#00B4A6',fontWeight:700,letterSpacing:.3}}>Ambassadrice Odoo — D4E</span>
                </div>
                <div style={{fontSize:14,color:'#64748b',marginTop:8,lineHeight:1.5}}>Elle ne vend pas Odoo. Elle le vit, le déploie, et le défend chaque jour sur le terrain.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ APPS DARK */}
      <section className="dk2" id="apps">
        <div className="blob" style={{width:400,height:400,background:'#7C3AED',left:-60,top:'50%',transform:'translateY(-50%)',opacity:.08}}/>
        <div style={{width:'100%',position:'relative',zIndex:2}}>
          <div className="stag-dk aos"><span className="sdot"/>&nbsp;Ce qu'Odoo fait vraiment</div>
          <h2 className="sh2 aos d1" style={{color:'#fff'}}>Les modules qu'on déploie<br/>le plus. Et pourquoi.</h2>
          <p className="aos d2" style={{fontSize:17,color:'#D1D5DB',maxWidth:580,lineHeight:1.7,marginBottom:52}}>Pas une liste exhaustive. Juste les six apps qui ont changé concrètement la vie des entreprises qu'on accompagne.</p>
          <div className="ag sg aos">
            {[
              {ico:'crm',bg:'rgba(0,212,200,.1)',title:'CRM et Ventes',body:'Pipeline Kanban temps réel, lead scoring IA, devis en un clic. Devis → Commande → Facture sans copier-coller. Multi-canal dans la même vue.',result:'+30% de ventes',rc:'rt'},
              {ico:'inventaire',bg:'rgba(245,158,11,.1)',title:'Inventaire',body:'Stock temps réel, FIFO/FEFO, multi-entrepôts. Une commande déclenche le réapprovisionnement automatiquement.',result:'-40% de ruptures',rc:'rg'},
              {ico:'compta',bg:'rgba(0,212,200,.1)',title:'Comptabilité',body:'Réconciliation bancaire IA, facturation auto, multi-devises. La clôture mensuelle de 3 jours passe à quelques heures.',result:'15h/semaine récupérées',rc:'rt'},
              {ico:'manufacturing',bg:'rgba(124,58,237,.1)',title:'Fabrication (MRP)',body:'Nomenclatures, ordres de fab, contrôle qualité, maintenance prédictive. La production arrête de subir.',result:null,rc:''},
              {ico:'employees',bg:'rgba(245,158,11,.1)',title:'Ressources Humaines',body:'Recrutement, paie, congés, évaluations. Portail self-service collaborateur. Une RH qui pilote.',result:null,rc:''},
              {ico:'ecommerce',bg:'rgba(0,212,200,.1)',title:'E-commerce',body:'Boutique native, catalogue synchronisé avec le stock physique. Un produit épuisé disparait automatiquement du site.',result:'x2 ventes online en 6 mois',rc:'rt'},
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

      {/* ④ INTEGRATION LIGHT */}
      <section className="lk" id="integration">
        <div style={{width:"100%"}}>
          <div className="int-cols" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
            <div>
              <div className="stag-lk aos"><span className="sdot"/>&nbsp;Intégrations &amp; API</div>
              <h2 className="sh2 aos d1" style={{color:'#1e293b'}}>Vous avez déjà<br/>quelque chose en place ?<br/><span className="tg">Pas de problème.</span></h2>
              <p className="aos d2" style={{fontSize:19,color:'#334155',lineHeight:1.8,marginBottom:22}}>C'est la question qu'on entend souvent : <em style={{color:'#1e293b'}}>"On a déjà notre site e-commerce, notre EDI, notre ERP de prod — est-ce qu'Odoo va tout casser ?"</em> La réponse courte : non.</p>
              <p className="aos d3" style={{fontSize:19,color:'#334155',lineHeight:1.8,marginBottom:28}}>L'API REST d'Odoo est <strong style={{color:'#1e293b'}}>ouverte, documentée et battle-tested.</strong> On a connecté des boutiques Shopify, des systèmes EDI industriels, des logiciels de paie locaux. À chaque fois, Odoo joue le rôle de <strong style={{color:'#1e293b'}}>cerveau central</strong> sans forcer la main.</p>
              <div className="aos d4" style={{background:'#fff',border:'1px solid #e2e8f0',borderLeft:'3px solid #00D4C8',borderRadius:'0 1rem 1rem 0',padding:'20px 22px',marginBottom:16}}>
                <div style={{fontSize:12,textTransform:'uppercase',letterSpacing:1,fontWeight:700,color:'#00B4A6',marginBottom:10}}>Ce qu'on connecte couramment</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                  {['Shopify','WooCommerce','Magento','EDI EDIFACT','Amazon','Stripe','PayPal','Twint','DHL / UPS','Salesforce','SAP','Sage','API bancaires','Webhooks'].map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="aos d4" style={{background:'rgba(0,212,200,.06)',border:'1px solid rgba(0,212,200,.2)',borderRadius:'1rem',padding:'18px 22px'}}>
                <div style={{fontSize:13,color:'#00B4A6',fontWeight:700,marginBottom:6}}>Notre principe sur le terrain</div>
                <div style={{fontSize:14,color:'#334155',lineHeight:1.65}}>On ne remplace pas ce qui fonctionne bien. On connecte Odoo à votre existant, on construit des ponts, et on migre progressivement quand ça a du sens.</div>
              </div>
            </div>
            <div>
              <div className="sg aos d2" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginBottom:14}}>
                {[{ico:'🛍️',n:'E-commerce',d:'Shopify, WooCommerce, Amazon'},{ico:'🔄',n:'EDI',d:'EDIFACT, X12, commandes auto'},{ico:'🏭',n:'MRP / ERP',d:'SAP, Sage, logiciels métier'},{ico:'💳',n:'Paiement',d:'Stripe, PayPal, Twint'},{ico:'🚚',n:'Logistique',d:'DHL, UPS, FedEx, La Poste'},{ico:'🔗',n:'API custom',d:'REST, webhooks, tout'}].map((c,i) => (
                  <div key={i} className="int-conn">
                    <div style={{fontSize:24,marginBottom:8}}>{c.ico}</div>
                    <div style={{fontSize:13,fontWeight:700,marginBottom:3,color:'#1e293b'}}>{c.n}</div>
                    <div style={{fontSize:11,color:'#64748b'}}>{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ INDUSTRIES DARK */}
      <section className="dk" id="industries">
        <div style={{width:"100%"}}>
          <div className="stag-dk aos"><span className="sdot"/>&nbsp;Par secteur</div>
          <h2 className="sh2 aos d1" style={{color:'#fff'}}>Odoo parle votre langue.<br/>On vous le prouve.</h2>
          <p className="aos d2" style={{fontSize:17,color:'#D1D5DB',maxWidth:580,lineHeight:1.7,marginBottom:52}}>Chaque métier a ses angles morts. Voilà ce qu'on a appris en déployant Odoo dans les vôtres.</p>
          <div className="aos d3" style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:44}}>
            {([['fi','🏛 Finance'],['sv','🧩 Services'],['bt','🏗 Construction',true],['in','⚙️ Industrie'],['co','🛒 Commerce'],['lo','🚛 Logistique'],['sa','🩺 Santé'],['ed','📚 Education']] as [IndId,string,boolean?][]).map(([id,label,elvy]) => (
              <button key={id} className={`itab${elvy?' elvy':''}${ind===id?' on':''}`} style={{fontSize:15,padding:'10px 22px'}} onClick={() => setInd(id)}>
                {label}{elvy && <span className="eb">Elvy</span>}
              </button>
            ))}
          </div>
          <div className="ind-cols" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'start'}}>
            <div>
              <div style={{fontSize:64,lineHeight:1,marginBottom:24}}>{cur.emo}</div>
              <h3 style={{fontSize:48,fontWeight:800,lineHeight:1.1,marginBottom:10,color:'#fff'}}>{cur.title}</h3>
              <div style={{fontSize:14,textTransform:'uppercase',letterSpacing:1.5,fontWeight:700,color:cur.gold?'#F59E0B':'#00D4C8',marginBottom:22}}>{cur.sub}</div>
              <p style={{fontSize:20,color:'#D1D5DB',lineHeight:1.8,marginBottom:32}} dangerouslySetInnerHTML={{__html:cur.body}}/>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {cur.checks.map((c,i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12,fontSize:17,color:'#D1D5DB'}}>
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
                <div key={i} className={cur.gold?'imod-g':'imod'} style={{padding:'22px 24px'}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:4}}>
                    <span style={{fontSize:17,fontWeight:700,color:'#fff'}}>{m.n}</span>
                    <span className={cur.gold?'mtg':'mtt'} style={{fontSize:13,padding:'4px 12px'}}>{m.t}</span>
                  </div>
                  <div style={{fontSize:15,color:'#9CA3AF',marginTop:6}}>{m.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ REASONS LIGHT */}
      <section className="lk" id="raisons">
        <div style={{width:"100%"}}>
          <div className="stag-lk aos"><span className="sdot"/>&nbsp;Ce qu'on a vraiment appris</div>
          <h2 className="sh2 aos d1" style={{color:'#1e293b'}}>6 raisons. Pas dans les slides.</h2>
          <p className="aos d2" style={{fontSize:17,color:'#334155',maxWidth:580,lineHeight:1.7,marginBottom:52}}>Après 4 ans à déployer Odoo sur des dizaines de projets très différents, voilà ce qui nous convainc encore chaque matin.</p>
          <div className="rg-grid sg aos">
            {[['01','Modulaire par nature','Commencez avec une app. Ajoutez-en 40+ quand vous voulez. <strong>Aucun contrat bloquant.</strong>'],
              ['02','Open source','Personnalisation illimitée. <strong>Zéro vendor lock-in.</strong> Le code vous appartient.'],
              ['03','Tout parle à tout','CRM, Compta, Stock, Production. <strong>Zéro connecteur. Zéro synchro manuelle.</strong>'],
              ['04','Coût maîtrisé','Jusqu\'à <strong>-35% de coûts opérationnels</strong> vs des solutions fragmentées.'],
              ['05','Mobile first','Application <strong>refaite de zéro en v18.</strong> Votre équipe travaille depuis le terrain.'],
              ['06','Il grandit avec vous','Du TPE au multinational. <strong>Odoo ne plafonne pas.</strong>'],
            ].map(([n,h,p]) => (
              <div key={n} className="rsn">
                <div className="rn">{n}</div>
                <div className="rh">{h}</div>
                <p className="rp" dangerouslySetInnerHTML={{__html:p as string}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ PROMISE DARK */}
      <section className="dk2" id="promise" style={{textAlign:'center'}}>
        <div className="blob" style={{width:700,height:350,background:'#00D4C8',bottom:0,left:'50%',transform:'translateX(-50%)',opacity:.07}}/>
        <div style={{width:'100%',position:'relative',zIndex:2}}>
          <div style={{width:'100%'}}>
            <div className="stag-dk aos" style={{display:'inline-flex'}}><span className="sdot"/>&nbsp;La promesse D4E</div>
            <h2 className="aos d1" style={{fontSize:'clamp(44px,6vw,76px)',fontWeight:800,lineHeight:1.05,marginBottom:20,color:'#fff'}}>
              On ne livre pas un logiciel.<br/>On livre <span className="tg">votre système.</span>
            </h2>
            <p className="aos d2" style={{fontSize:20,color:'#D1D5DB',lineHeight:1.75,marginBottom:48,maxWidth:'100%'}}>
              Configurer Odoo, n'importe qui peut l'apprendre. Comprendre votre métier, vos contraintes, vos angles morts et traduire tout ça en un système qui tient dans le temps — c'est ce qu'on fait chaque jour depuis 4 ans.
            </p>
            <div className="p3g sg aos" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginBottom:48,textAlign:'left'}}>
              {[{ico:'⚡',h:'Opérationnel en semaines',p:"Pas en mois. Nos packs clé en main sont calibrés pour que votre équipe soit autonome rapidement."},
                {ico:'🎯',h:'Prix fixe, sans surprise',p:"Un engagement clair. Un périmètre défini. Pas de ticket surprise à chaque modification."},
                {ico:'🤝',h:'Un chef de projet dédié',p:"Une vraie personne, pas un ticket support. Quelqu'un qui connaît votre activité."}
              ].map((p,i) => (
                <div key={i} className="p3">
                  <div style={{fontSize:24,marginBottom:12}}>{p.ico}</div>
                  <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:15,fontWeight:700,marginBottom:8,color:'#fff'}}>{p.h}</div>
                  <p style={{fontSize:13,color:'#9CA3AF',lineHeight:1.6}}>{p.p}</p>
                </div>
              ))}
            </div>
            <div className="aos d4" style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
              <a href="/#/contact" className="btn-p">Parler à Antonio ou Laëtitia</a>
              <a href="/#/elvybat" className="btn-s">Voir ElvyBat pour le BTP</a>
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
