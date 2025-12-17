# 🔍 Guide de Vérification des Images Open Graph

**Comment vérifier que les images OG fonctionnent correctement**

---

## 1. 🖥️ Test Local (Développement)

### Démarrer le serveur de développement

```bash
npm run dev
```

### Accéder directement aux images OG

Une fois le serveur démarré, ouvrez ces URLs dans votre navigateur :

**Articles de blog :**
- http://localhost:4321/og/blog-art-subtil-dire-non.png
- http://localhost:4321/og/blog-fractional-head-of-product.png

**Case studies :**
- http://localhost:4321/og/case-study-conversation.png
- http://localhost:4321/og/case-study-onboarding-activation.png
- http://localhost:4321/og/case-study-team-stability.png

**✅ Vérification :** Vous devriez voir les images avec le titre et la description.

---

## 2. 📄 Vérifier les Métadonnées dans le HTML

### Inspecter le code source des pages

**Articles de blog :**
1. Ouvrez http://localhost:4321/blog/art-subtil-dire-non/
2. Clic droit → "Afficher le code source de la page"
3. Recherchez `og:image` (Ctrl+F / Cmd+F)

**Vous devriez voir :**
```html
<meta property="og:image" content="https://julien-brionne.fr/og/blog-art-subtil-dire-non.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="https://julien-brionne.fr/og/blog-art-subtil-dire-non.png">
```

**Case studies :**
1. Ouvrez http://localhost:4321/case-study/conversation/
2. Même procédure

**✅ Vérification :** Les URLs doivent pointer vers `/og/` et non vers l'image par défaut.

---

## 3. 🌐 Outils de Validation des Réseaux Sociaux

### A. Facebook Sharing Debugger

**URL :** https://developers.facebook.com/tools/debug/

**Comment utiliser :**
1. Collez l'URL de votre page (ex: `https://julien-brionne.fr/blog/art-subtil-dire-non/`)
2. Cliquez sur "Déboguer"
3. Cliquez sur "Rafraîchir" pour forcer le cache

**Ce que vous devriez voir :**
- ✅ Image OG : L'image générée dynamiquement
- ✅ Titre : Le titre de l'article
- ✅ Description : La description de l'article
- ✅ Dimensions : 1200x630px

**⚠️ Note :** Facebook met en cache les métadonnées. Utilisez "Rafraîchir" pour voir les dernières modifications.

---

### B. Twitter Card Validator

**URL :** https://cards-dev.twitter.com/validator

**Comment utiliser :**
1. Collez l'URL de votre page
2. Cliquez sur "Preview card"

**Ce que vous devriez voir :**
- ✅ Card type : `summary_large_image`
- ✅ Image : L'image OG générée
- ✅ Title : Le titre de l'article
- ✅ Description : La description

**⚠️ Note :** Twitter met aussi en cache. Utilisez "Refresh" si nécessaire.

---

### C. LinkedIn Post Inspector

**URL :** https://www.linkedin.com/post-inspector/

**Comment utiliser :**
1. Collez l'URL de votre page
2. Cliquez sur "Inspect"

**Ce que vous devriez voir :**
- ✅ Image OG : L'image générée
- ✅ Titre et description corrects

---

## 4. 🖼️ Vérification Visuelle Directe

### Ouvrir les images dans le navigateur

**En développement local :**
```
http://localhost:4321/og/blog-art-subtil-dire-non.png
```

**En production (après déploiement) :**
```
https://julien-brionne.fr/og/blog-art-subtil-dire-non.png
```

**✅ Vérification visuelle :**
- [ ] Le titre est bien affiché (police serif, couleur graphite)
- [ ] La description est bien affichée (police sans-serif, couleur softgray)
- [ ] Le fond est ivory avec un gradient subtil
- [ ] La bordure sand est présente
- [ ] Les dimensions sont 1200x630px

---

## 5. 🔧 Vérification Technique (Ligne de commande)

### Vérifier que les fichiers existent

```bash
# Après le build
ls -lh dist/og/*.png
```

**Résultat attendu :**
```
-rw-r--r--  1 user  staff    36K Dec  6 22:45 blog-art-subtil-dire-non.png
-rw-r--r--  1 user  staff    48K Dec  6 22:45 blog-fractional-head-of-product.png
-rw-r--r--  1 user  staff    48K Dec  6 22:45 case-study-conversation.png
-rw-r--r--  1 user  staff    56K Dec  6 22:45 case-study-onboarding-activation.png
-rw-r--r--  1 user  staff    56K Dec  6 22:45 case-study-team-stability.png
```

### Vérifier les dimensions des images

```bash
# Sur macOS (avec ImageMagick)
identify dist/og/*.png

# Ou avec file
file dist/og/*.png
```

**Résultat attendu :**
```
dist/og/blog-art-subtil-dire-non.png: PNG image data, 1200 x 630, 8-bit/color RGBA, non-interlaced
```

### Vérifier les métadonnées dans le HTML généré

```bash
# Chercher les balises og:image
grep -o 'property="og:image" content="[^"]*"' dist/blog/art-subtil-dire-non/index.html
```

**Résultat attendu :**
```
property="og:image" content="https://julien-brionne.fr/og/blog-art-subtil-dire-non.png"
```

---

## 6. 🧪 Test de Partage Réel

### Méthode 1 : Tester avec un outil de prévisualisation

**Opengraph.xyz :** https://www.opengraph.xyz/

1. Collez votre URL
2. Voir la prévisualisation du partage

### Méthode 2 : Tester sur un réseau social

**Facebook :**
1. Créez un post de test (vous pouvez le supprimer après)
2. Collez l'URL de votre article
3. Vérifiez que l'image OG s'affiche correctement

**Twitter/X :**
1. Créez un tweet de test
2. Collez l'URL
3. Vérifiez la carte de prévisualisation

**LinkedIn :**
1. Créez un post de test
2. Collez l'URL
3. Vérifiez la prévisualisation

---

## 7. ✅ Checklist de Vérification Complète

### Build et Génération
- [ ] Le build se termine sans erreur
- [ ] Les images sont générées dans `dist/og/`
- [ ] Toutes les images ont les bonnes dimensions (1200x630px)
- [ ] Les fichiers PNG sont valides

### Métadonnées HTML
- [ ] Les balises `<meta property="og:image">` sont présentes
- [ ] Les URLs pointent vers `/og/` et non vers l'image par défaut
- [ ] Les dimensions sont spécifiées (`og:image:width` et `og:image:height`)
- [ ] Les Twitter Cards sont configurées (`twitter:image`)

### Schema JSON-LD
- [ ] Les schemas JSON-LD contiennent l'image OG
- [ ] Les URLs sont correctes dans les schemas

### Visuel
- [ ] Les images s'affichent correctement dans le navigateur
- [ ] Le design est cohérent (couleurs, polices, layout)
- [ ] Le texte est lisible (titre et description)

### Réseaux Sociaux
- [ ] Facebook Debugger affiche l'image correcte
- [ ] Twitter Card Validator affiche l'image correcte
- [ ] LinkedIn Post Inspector affiche l'image correcte

---

## 8. 🐛 Résolution de Problèmes

### Problème : Les images ne s'affichent pas

**Solutions :**
1. Vérifiez que le build a bien généré les images : `ls dist/og/`
2. Vérifiez que les URLs dans le HTML sont correctes
3. Vérifiez que les images sont accessibles publiquement (en production)

### Problème : Facebook/Twitter affiche l'ancienne image

**Cause :** Cache des réseaux sociaux

**Solutions :**
1. Utilisez les outils de débogage pour rafraîchir le cache
2. Facebook : Cliquez sur "Rafraîchir" dans le Sharing Debugger
3. Twitter : Utilisez le bouton "Refresh" dans le Card Validator

### Problème : Les images sont floues ou mal dimensionnées

**Solutions :**
1. Vérifiez que les dimensions sont bien 1200x630px
2. Vérifiez la qualité de l'image générée
3. Ajustez les paramètres dans `src/pages/og/[slug].ts` si nécessaire

### Problème : Double slash dans les URLs (`//og/`)

**Solution :** Déjà corrigé dans `Layout.astro`, mais si le problème persiste :
```typescript
const cleanSiteUrl = siteUrl.replace(/\/$/, '');
const normalizedOgImage = ogImage.startsWith('/') ? ogImage : `/${ogImage}`;
const fullOgImage = `${cleanSiteUrl}${normalizedOgImage}`;
```

---

## 9. 📊 Commandes Utiles

### Vérifier rapidement toutes les images OG

```bash
# Lister toutes les images générées
find dist/og -name "*.png" -exec ls -lh {} \;

# Vérifier les dimensions
file dist/og/*.png

# Compter les images
ls dist/og/*.png | wc -l
```

### Vérifier les métadonnées dans toutes les pages

```bash
# Articles de blog
grep -r 'og:image' dist/blog/*/index.html

# Case studies
grep -r 'og:image' dist/case-study/*/index.html
```

---

## 10. 🚀 Après Déploiement

Une fois déployé sur Vercel (ou votre plateforme) :

1. **Attendre quelques minutes** pour que le build se termine
2. **Vérifier les images** : `https://julien-brionne.fr/og/blog-art-subtil-dire-non.png`
3. **Tester avec les outils de validation** en utilisant les URLs de production
4. **Tester un partage réel** sur un réseau social

---

**Bon test ! 🎉**




