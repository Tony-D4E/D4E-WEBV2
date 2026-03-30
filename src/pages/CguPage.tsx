import React from 'react';

const CguPage: React.FC = () => {
  return (
    <>
      <style>{`
        #d4e-cgu, #d4e-cgu * { box-sizing: border-box !important; }
        #d4e-cgu {
          font-family: 'Inter', sans-serif !important;
          background-color: #F0FDF9 !important;
          min-height: 100vh !important;
          padding: 110px 32px 100px !important;
        }
        #d4e-cgu .cgu-container {
          max-width: 860px !important;
          margin: 0 auto !important;
          background-color: #FFFFFF !important;
          border: 1px solid #E2E8F0 !important;
          border-radius: 24px !important;
          padding: 64px 56px !important;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
        }
        #d4e-cgu h1 {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 32px !important; font-weight: 700 !important;
          color: #0B0F19 !important; margin: 0 0 8px !important;
        }
        #d4e-cgu .cgu-subtitle {
          font-size: 15px !important; color: #64748B !important;
          margin: 0 0 48px !important;
        }
        #d4e-cgu h2 {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 20px !important; font-weight: 700 !important;
          color: #0B0F19 !important; margin: 40px 0 16px !important;
          padding-top: 24px !important; border-top: 1px solid #F1F5F9 !important;
        }
        #d4e-cgu h2:first-of-type { border-top: none !important; padding-top: 0 !important; }
        #d4e-cgu h3 {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 16px !important; font-weight: 600 !important;
          color: #0F172A !important; margin: 24px 0 10px !important;
        }
        #d4e-cgu p, #d4e-cgu li {
          font-size: 14px !important; line-height: 1.8 !important;
          color: #475569 !important; margin: 0 0 12px !important;
        }
        #d4e-cgu ul { padding-left: 20px !important; margin: 0 0 12px !important; }
        #d4e-cgu li { list-style-type: disc !important; }
        #d4e-cgu .cgu-intro {
          font-size: 14px !important; line-height: 1.8 !important;
          color: #475569 !important; margin-bottom: 32px !important;
        }
        #d4e-cgu strong { color: #0F172A !important; font-weight: 600 !important; }
        @media (max-width: 768px) {
          #d4e-cgu .cgu-container { padding: 40px 28px !important; }
        }
      `}</style>

      <div id="d4e-cgu">
        <div className="cgu-container">
          <h1>Conditions Générales</h1>
          <p className="cgu-subtitle">D4E - Digital4Efficiency Sàrl - Dernière mise à jour : janvier 2022</p>

          <p className="cgu-intro">
            Les présentes Conditions Générales régissent les prestations de Services de D4E - Digital4Efficiency Sàrl
            et/ou D4E - Digital4Efficiency Sàrl Valais en faveur du Client. Le Prestataire et le Client sont ci-après
            désignés individuellement par le terme "Partie" et collectivement par le terme les "Parties".
          </p>

          <h2>1. Définitions</h2>
          <p><strong>"Client"</strong> désigne l'entité ou la personne désignée sur la Commande.</p>
          <p><strong>"Commande"</strong> désigne la commande soumise par le Client au Prestataire par courrier, téléphone ou e-mail définissant les Services à fournir par le Prestataire au Client et régie par les présentes Conditions Générales.</p>
          <p><strong>"Contrat"</strong> désigne toute Offre acceptée par le Client ainsi que les présentes Conditions Générales.</p>
          <p><strong>"Logiciel(s)"</strong> désigne toute application d'un logiciel, créée entièrement par le Prestataire, logiciel tiers personnalisé par le Prestataire ou logiciel tiers, fournie par le Prestataire que le Client est habilité à utiliser conformément à un Contrat.</p>
          <p><strong>"Offre"</strong> désigne l'offre de Services personnalisée proposée par le Prestataire au Client suite à une Commande de ce dernier et régie par les présentes Conditions Générales.</p>
          <p><strong>"Prestataire"</strong> désigne D4E - Digital4Efficiency Sàrl, Chemin du Pavillon 2, 1218 Le Grand-Saconnex et/ou D4E - Digital4Efficiency Sàrl Valais, Place du Midi 48, 1950 Sion.</p>
          <p><strong>"Service(s)"</strong> désigne les Services de mise à disposition de Logiciels fournis par le Prestataire au Client, à savoir installation, intégration, personnalisation, mise à disposition pour utilisation, documentation tels que décrits de manière détaillée dans l'Offre.</p>
          <p><strong>"Utilisateur(s)"</strong> désigne toute personne ou entité bénéficiant de l'utilisation des Services via le Client.</p>

          <h2>2. Les Services</h2>
          <p>Le Client peut transmettre la/les Commande(s) par courrier, téléphone, ou e-mail. La transmission d'une Commande constitue une proposition d'acheter ou louer les Services. Le Prestataire peut accepter cette proposition à son entière discrétion ; si le Prestataire accepte la proposition, il transmettra une confirmation de commande au Client, par courrier ou e-mail.</p>
          <p>Sans notification écrite contraire par le Client, toute confirmation de commande du Prestataire est réputée acceptée dans les 10 (dix) jours ouvrables à compter de la date figurant sur l'offre.</p>

          <h2>3. Frais et modalités de paiement</h2>
          <h3>3.1 Frais de Services</h3>
          <p>Le Prestataire facture les Frais des Services définis dans le Contrat. Le Prestataire est autorisé à augmenter les Frais de Services moyennant la notification d'un préavis de quarante-cinq (45) jours au Client. Les frais annexes ne sont pas inclus dans le prix et sont à la charge du client.</p>

          <h3>3.2 Facturation et Paiement</h3>
          <p>Sauf convention écrite contraire des Parties, la facturation des Services commence au jour du Début des Services. Le Prestataire facture tous les Frais de Services conformément à la fréquence, la méthode, les conditions de paiement et la devise convenus dans la Commande.</p>

          <h3>3.3 Intérêts de retard</h3>
          <p>Tout montant dû et exigible mais non payé au Prestataire portera intérêts à partir du jour suivant la date d'échéance de la facture, au taux de 5% par an. Dans l'hypothèse où les montants dus ne sont pas payés dans les soixante (60) jours, le Prestataire est en droit de suspendre la fourniture des Services.</p>

          <h3>3.5 Taxes</h3>
          <p>Tous les Frais de Services sont stipulés hors taxes. Le Client est responsable du paiement de la TVA et de toute autre taxe applicable.</p>

          <h2>4. Accord de niveau de Services</h2>
          <h3>4.1 Délai de mise à disposition</h3>
          <p>Le Prestataire s'engage, sauf Cas de Force Majeure, à fournir les Services dans le délai prévu dans le Contrat.</p>
          <h3>4.2 Acceptation des Services</h3>
          <p>Les Services sont réputés acceptés à moins que le Client refuse les Services en raison d'un défaut dans les dix (10) jours suivant le Début des Services. Du moment que le client utilise les Services autrement qu'à des fins d'essai, il est réputé avoir accepté les Services sans réserve.</p>

          <h2>5. Utilisation des Services</h2>
          <h3>5.1 Protection des Données</h3>
          <p>Le Prestataire s'engage à maintenir des mesures de sauvegarde appropriées afin de protéger la sécurité, la confidentialité et l'intégrité des Données du Client.</p>

          <h3>5.3 Responsabilités du Client</h3>
          <p>Le Client est responsable du respect par les Utilisateurs des Conditions Générales, de l'exactitude et de la légalité des Données, et s'engage à utiliser les Services en respectant les lois applicables. Le Client est responsable de la protection de son réseau interne.</p>

          <h3>5.8 Droits de Propriété Intellectuelle</h3>
          <p>Le Client accepte expressément que les développements réalisés au titre du contrat pourront être soumis à une licence. Le Client accepte de céder le copyright et les droits de licence complets au Prestataire. Les modules non spécifiques au Client ne peuvent pas être transférés en cas de changement de Prestataire.</p>

          <h2>6. Licence d'utilisation</h2>
          <p>Le Prestataire accorde au Client une licence d'utilisation non-exclusive du/des Logiciel(s), uniquement en conformité avec le nombre d'Utilisateurs convenu dans l'Offre. Le Client ne peut copier, dupliquer, publier, distribuer ou disséminer le/les Logiciel(s).</p>

          <h2>7. Droits propriétaires</h2>
          <p>Le Client est et reste le titulaire exclusif de tous les droits relatifs à la Technologie du Client et ses Données. Le Prestataire est et reste le titulaire exclusif de tous les droits relatifs à la Technologie du Prestataire. Aucune Partie ne peut faire de rétro-ingénierie ou tenter d'accéder au code source de l'autre Partie.</p>

          <h2>8. Confidentialité</h2>
          <p>Chaque Partie doit accorder la même diligence à la protection des Informations Confidentielles de l'autre Partie que celle qu'elle accorde à la protection de ses propres Informations Confidentielles. Cet engagement est valable pour la durée du Contrat et pour un temps indéterminé après la fin de celui-ci.</p>

          <h2>9. Garanties</h2>
          <p>Sous réserve des déclarations et garanties expressément mentionnées, le Prestataire n'émet aucune garantie expresse ou tacite, y compris les garanties de qualité marchande ou d'adéquation à un but particulier.</p>

          <h2>10. Indemnisation</h2>
          <h3>10.2 Exclusion des Dommages Indirects</h3>
          <p>Aucune Partie n'est responsable pour les dommages indirects, consécutifs ou accessoires (pertes de profit, de revenu, de goodwill, de Données du Client).</p>
          <h3>10.3 Limitation de Responsabilité</h3>
          <p>La responsabilité du Prestataire est limitée au montant payé par le Client dans les trois (3) mois précédant l'acte dommageable.</p>

          <h2>11. Publicité</h2>
          <p>Le Prestataire se réserve le droit de faire référence au Client, à son nom et/ou à son logo dans tout matériel marketing, sans divulguer les conditions financières.</p>

          <h2>12. Force Majeure</h2>
          <p>Aucune Partie n'est responsable si l'exécution est retardée ou empêchée à cause d'un Cas de Force Majeure. Si le Prestataire ne peut fournir les Services pour plus de trente (30) jours consécutifs, chaque Partie peut annuler la Commande.</p>

          <h2>13. Durée et résiliation</h2>
          <h3>13.1 Durée</h3>
          <p>Les contrats sont reconduits tacitement pour des périodes successives d'une année. La résiliation nécessite un préavis écrit de 90 jours avant l'expiration du contrat en cours, par lettre recommandée.</p>

          <h3>13.2 Résiliation par chaque Partie</h3>
          <p>Chaque Partie peut résilier si l'autre viole une clause du Contrat et omet de réparer cette violation dans les trente (30) jours, ou en cas de procédure de faillite.</p>

          <h2>14. Clauses diverses</h2>
          <h3>14.2 Cession</h3>
          <p>Le Client ne peut céder ses droits et obligations sans le consentement écrit préalable du Prestataire.</p>

          <h3>14.5 Droit applicable</h3>
          <p>Les présentes Conditions Générales sont régies par le droit suisse. Tout litige sera soumis exclusivement à la compétence des tribunaux du canton de Genève.</p>

          <h3>14.6 Clause de non-débauche</h3>
          <p>Le Client s'engage à ne pas débaucher ou engager les collaborateurs mis à disposition par le Prestataire. L'interdiction subsiste pendant 12 mois au-delà de la cessation de la relation contractuelle.</p>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #F1F5F9' }}>
            <p style={{ fontSize: 13, color: '#94A3B8' }}>
              D4E - Digital4Efficiency Sàrl - Chemin du Pavillon 2, 1218 Le Grand-Saconnex<br />
              D4E - Digital4Efficiency Sàrl Valais - Place du Midi 48, 1950 Sion<br />
              info@d4e.cool - +41 (0) 58 255 11 15
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CguPage;
