# Digital4Efficiency - Site Web

Site web de Digital4Efficiency, intégrateur Odoo Gold en Suisse.

## Développement local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement sur Netlify

### Configuration automatique (recommandé)

1. Créer un repo sur GitHub
2. Pousser ce projet sur GitHub
3. Sur Netlify : "Add new site" → "Import from Git"
4. Sélectionner le repo GitHub
5. Configuration :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
6. Cliquer sur "Deploy"

Netlify déploiera automatiquement à chaque push sur la branche main.

### Variables d'environnement (si besoin)

Dans Netlify → Site settings → Environment variables :
- `NODE_VERSION` : `20`
