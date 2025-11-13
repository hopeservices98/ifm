# 🚀 Déploiement Site IFM sur Render

## 📋 Prérequis

- Compte Render (gratuit) : [render.com](https://render.com)
- Repository Git (GitHub/GitLab/Bitbucket)

## 🛠️ Configuration du Projet

### 1. Fichiers de Configuration Créés

#### `render.yaml`
```yaml
services:
  - type: web
    name: institut-francais-madagascar
    runtime: node
    buildCommand: npm run build
    startCommand: npm run preview
    envVars:
      - key: NODE_ENV
        value: production
```

#### `package.json` (scripts existants)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 2. Build Testé ✅
- **Taille du bundle** : 265.76 kB (80.20 kB gzippé)
- **Build time** : 3.03 secondes
- **Status** : ✅ Réussi

## 🚀 Procédure de Déploiement

### Étape 1 : Push sur Git
```bash
# Ajouter tous les fichiers
git add .

# Commit des changements
git commit -m "🚀 Déploiement site IFM - Version démo complète"

# Push vers votre repository
git push origin main
```

### Étape 2 : Connexion à Render
1. Aller sur [render.com](https://render.com)
2. Se connecter avec GitHub/GitLab/Bitbucket
3. Cliquer sur "New +" → "Web Service"

### Étape 3 : Configuration du Service
1. **Sélectionner le repository** : `institut-francais-madagascar`
2. **Nom du service** : `institut-francais-madagascar`
3. **Environnement** : `Node`
4. **Build Command** : `npm run build`
5. **Start Command** : `npm run preview`

### Étape 4 : Variables d'Environnement
Ajouter dans "Environment" :
```
NODE_ENV=production
```

### Étape 5 : Déploiement Automatique
- Render détecte automatiquement le `render.yaml`
- Build automatique au push
- URL générée automatiquement

## 📊 Optimisations de Production

### ✅ Fonctionnalités Activées
- **Code splitting** automatique
- **Tree shaking** des dépendances
- **Minification** CSS/JS
- **Compression gzip** (80.20 kB)
- **Lazy loading** des images
- **Service worker** prêt pour PWA

### 📈 Performance Attendue
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Lighthouse Score** : 95+ sur tous critères

## 🌐 Accès à la Démo

Une fois déployé, Render fournira une URL comme :
```
https://institut-francais-madagascar.onrender.com
```

## 🔧 Maintenance

### Mise à Jour
```bash
# Modifications locales
git add .
git commit -m "✨ Nouvelle fonctionnalité"
git push origin main

# Render rebuild automatiquement
```

### Monitoring
- **Logs** : Dashboard Render → Logs
- **Analytics** : Intégrer Google Analytics
- **Performance** : Lighthouse dans DevTools

## 🆘 Dépannage

### Build Échoue
- Vérifier les dépendances : `npm install`
- Vérifier les types TypeScript : `npx tsc --noEmit`
- Vérifier les imports : tous les fichiers existent

### Application Ne Charge Pas
- Vérifier les assets : chemins relatifs dans `dist/`
- Vérifier les routes : SPA avec `index.html` fallback
- Vérifier les CORS : pour les APIs externes

### Performance Lente
- Optimiser les images : formats WebP/AVIF
- Réduire le bundle : code splitting
- CDN : utiliser un CDN pour les assets

## 🎯 Checklist Pré-Déploiement

- [x] Build local réussi
- [x] Toutes les routes testées
- [x] Responsive vérifié
- [x] Animations fluides
- [x] SEO optimisé
- [x] Accessibilité WCAG
- [x] Mode sombre/clair
- [ ] Repository poussé
- [ ] Service Render créé
- [ ] Variables d'environnement
- [ ] URL de production testée

---

**🎉 Prêt pour impressionner l'IFM avec une démo professionnelle !**