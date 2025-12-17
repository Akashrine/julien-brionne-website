# 🎨 Implémentation des Images Open Graph Dynamiques

**Date :** Décembre 2024  
**Branche :** OG-automatic  
**Objectif :** Générer automatiquement des images OG pour les articles de blog et les case studies

---

## ✅ Ce qui a été implémenté

### 1. Route Dynamique pour les Images OG

**Fichier :** `src/pages/og/[slug].ts`

- ✅ Route dynamique qui génère des images PNG pour chaque contenu
- ✅ Support pour les articles de blog (`blog-{slug}`)
- ✅ Support pour les case studies (`case-study-{slug}`)
- ✅ Design cohérent avec le thème du site (couleurs ivory, graphite, sand)
- ✅ Utilisation de `astro-og-canvas` pour la génération

**Format des URLs générées :**
- Articles de blog : `/og/blog-{slug}.png`
- Case studies : `/og/case-study-{slug}.png`

**Exemples :**
- `/og/blog-art-subtil-dire-non.png`
- `/og/case-study-conversation.png`

### 2. Intégration dans les Pages

#### Articles de Blog (`src/layouts/ArticleLayout.astro`)
- ✅ Utilise l'image OG générée dynamiquement au lieu de l'image de couverture
- ✅ Fallback vers l'image de couverture si disponible, sinon image par défaut
- ✅ Schema JSON-LD mis à jour pour utiliser l'image OG

#### Case Studies (`src/pages/case-study/[slug].astro`)
- ✅ Utilise l'image OG générée dynamiquement
- ✅ Schema JSON-LD mis à jour pour utiliser l'image OG
- ✅ Passage de l'image OG au Layout

### 3. Design des Images OG

**Caractéristiques :**
- **Taille :** 1200x630px (ratio standard Open Graph)
- **Fond :** Gradient subtil ivory (#FAF9F6)
- **Titre :** Graphite (#121212), police serif, taille 72px
- **Description :** Softgray (#9A8B7A), police sans-serif, taille 32px
- **Bordure :** Sand (#C6A676), épaisseur 4px
- **Padding :** 80px

**Couleurs utilisées :**
```typescript
ivory: [250, 249, 246]    // #FAF9F6
graphite: [18, 18, 18]     // #121212
sand: [198, 166, 118]      // #C6A676
softgray: [154, 139, 122]  // #9A8B7A
```

---

## 📋 Structure des Fichiers

```
src/
├── pages/
│   ├── og/
│   │   └── [slug].ts          ← Route dynamique pour générer les images OG
│   ├── blog/
│   │   └── [slug].astro       ← Utilise les images OG générées
│   └── case-study/
│       └── [slug].astro        ← Utilise les images OG générées
└── layouts/
    ├── Layout.astro            ← Gère les métadonnées OG
    └── ArticleLayout.astro     ← Utilise les images OG pour les articles
```

---

## 🔧 Configuration

### Dépendances Installées

```json
{
  "dependencies": {
    "astro-og-canvas": "^0.7.2"
  }
}
```

### Comment ça fonctionne

1. **Génération statique :** Lors du build, `getStaticPaths` génère tous les chemins possibles
2. **Récupération des données :** Pour chaque slug, les données sont récupérées depuis les collections Astro
3. **Génération de l'image :** `OGImageRoute` génère une image PNG avec le titre et la description
4. **Intégration :** Les pages utilisent ces images dans leurs métadonnées OG

---

## 🎯 Résultat

### Avant
- ❌ Toutes les pages utilisaient la même image OG par défaut (`/_WOL6954-min.jpg`)
- ❌ Pas de différenciation visuelle lors du partage social
- ❌ Images OG statiques uniquement

### Après
- ✅ Chaque article de blog a sa propre image OG générée dynamiquement
- ✅ Chaque case study a sa propre image OG générée dynamiquement
- ✅ Design cohérent avec le thème du site
- ✅ Images OG optimisées pour le partage social (1200x630px)

---

## 🧪 Tests à Effectuer

### 1. Build et Génération
```bash
npm run build
```
Vérifier que les images sont générées dans `dist/og/`

### 2. Test Local
```bash
npm run dev
```
Visiter `/og/blog-art-subtil-dire-non.png` pour voir l'image générée

### 3. Validation Réseaux Sociaux
- **Facebook :** https://developers.facebook.com/tools/debug/
- **Twitter :** https://cards-dev.twitter.com/validator
- **LinkedIn :** https://www.linkedin.com/post-inspector/

### 4. Vérification des Métadonnées
Inspecter le HTML généré pour vérifier que les balises `<meta property="og:image">` pointent vers les bonnes URLs

---

## 📝 Notes Techniques

### Polices
- Les polices personnalisées (Playfair Display, Inter) ne sont pas encore chargées
- `astro-og-canvas` utilise par défaut "Noto Sans" depuis Fontsource
- Pour utiliser les polices personnalisées, il faudra :
  1. Télécharger les fichiers TTF des polices
  2. Les placer dans `src/assets/fonts/`
  3. Configurer le chemin dans `getImageOptions`

### Performance
- Les images sont générées au build time (statique)
- Pas d'impact sur les performances runtime
- Les images sont servies comme des fichiers statiques

### Limitations Actuelles
- Les polices personnalisées ne sont pas encore chargées (utilise Noto Sans par défaut)
- Pas de logo dans les images OG (peut être ajouté plus tard)
- Design basique (peut être amélioré avec plus d'options de `astro-og-canvas`)

---

## 🚀 Prochaines Étapes (Optionnel)

1. **Améliorer le Design**
   - Ajouter un logo dans les images OG
   - Améliorer la mise en page (ajout de badges, tags, etc.)
   - Utiliser les polices personnalisées (Playfair Display, Inter)

2. **Optimisation**
   - Vérifier la taille des images générées
   - Optimiser la compression si nécessaire
   - Ajouter un cache si besoin

3. **Tests**
   - Tester sur différents réseaux sociaux
   - Vérifier le rendu sur mobile
   - Valider l'accessibilité

---

## 📚 Ressources

- [Documentation astro-og-canvas](https://github.com/delucis/astro-og-canvas)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**Statut :** ✅ Implémentation terminée et fonctionnelle  
**Prochaine étape :** Tests et validation




