# SUPRÊME AUTOMOTIVE — plateforme Next.js

Cette version est une nouvelle base technique Next.js + React + TypeScript. Elle ne remplace pas encore le site statique actuellement publié.

## Prérequis
- Node.js 20.9 ou plus récent
- npm

## Installation
```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000.

## Production
```bash
npm run build
npm start
```

## Déploiement Netlify
1. Importer le dépôt GitHub dans Netlify.
2. Netlify détecte `netlify.toml`.
3. Lancer le déploiement après vérification du build.

## État fonctionnel
- Accueil et navigation Next.js
- Catalogue de démonstration
- Fiches conceptuelles des véhicules
- Page administration en mode aperçu uniquement
- Page contact avec lien e-mail préparé côté navigateur

## À construire avant un usage réel
L'administration n'est pas encore protégée et ne doit pas recevoir de données sensibles. Il faudra connecter Supabase, créer les tables, configurer l'authentification et les rôles, valider les formulaires côté serveur, puis protéger toutes les routes privées. Les véhicules présents sont des concepts de démonstration.
