# Page Head of Product Montpellier — Explication de la structure

## Livrables créés

1. ✅ **Page complète** : `src/pages/head-of-product-montpellier.astro`
2. ✅ **Patch Footer** : `FOOTER_PATCH.md`
3. ✅ **Patch JSON-LD** : `JSON_LD_PATCH.md` (optionnel)

## Choix de structure

### 1. Respect du design system existant

- **Typographies** : `font-serif` (Playfair Display) pour les titres, `font-sans` (Inter) pour le texte
- **Couleurs** : Palette existante (`graphite`, `ivory`, `sand`, `warmgray`) avec support dark mode
- **Spacing** : Cohérence avec les autres sections (`py-24 md:py-32`, `px-6 md:px-12`)
- **Animations** : `fade-in-up` avec délais progressifs pour le rythme vertical

### 2. Architecture des sections

**Section 1 — Hero**
- Structure identique au Hero de la home
- H1 unique pour le SEO
- Deux boutons CTA (discussion + approche)
- SVG décoratif cohérent

**Section 2 — Pourquoi Montpellier**
- Ton premium, pas local cheap
- Liste à puces avec tirets élégants
- Ancrage local subtil en italique

**Section 3 — Ce qu'apporte un Head of Product**
- Réutilisation du pattern "Piloter / Stabiliser / Résoudre"
- Ligne verticale discrète pour la structure
- Cohérence avec la section Approach de la home

**Section 4 — Pourquoi me choisir**
- Points clés en gras pour la hiérarchie
- Message anti-feature factory
- Conclusion en italique pour l'impact

**Section 5 — Intervention locale**
- Card blanche discrète
- Message clair : présence locale + remote
- Pas de sur-promesse géographique

**Section 6 — Mes accompagnements**
- Réutilisation exacte du composant Services
- Même layout masonry
- Mêmes illustrations avec support dark mode

**Section 7 — Exemples de résultats**
- Timeline visuelle avec bordure gauche
- 3 cas clients (Heetch, WizVille, Waalaxy)
- Format concis et impactant

**Section 8 — FAQ locale**
- Accordéon HTML natif (pas de JS externe)
- Une question supplémentaire sur Montpellier
- Style identique à la FAQ de la home

**Section 9 — CTA final**
- Message direct et urgent
- Deux boutons (discussion + diagnostic)
- Style cohérent avec le CTA de la home

### 3. SEO et accessibilité

- **H1 unique** : "Head of Product à Montpellier — Leadership Produit Hands-on pour Startups SaaS"
- **H2 structurés** : Un par section pour la hiérarchie
- **Meta tags** : Title et description optimisés dans le Layout
- **ARIA labels** : Tous les éléments interactifs labellisés
- **Sémantique HTML** : `<section>`, `<nav>`, `<main>` appropriés

### 4. Performance

- **Images** : Lazy loading sur toutes les illustrations
- **Pas de JS externe** : Accordéon natif HTML5
- **CSS inline minimal** : Seulement pour masquer les markers de details/summary

### 5. Ton éditorial respecté

- **Clair et tranché** : Pas de bullshit marketing
- **Premium** : Vocabulaire métier, pas de phrases creuses
- **Hands-on** : Focus sur l'opérationnel, pas le théorique
- **Direct** : Messages courts et impactants

## Points d'attention

1. **Liens satellites** : Le patch footer ajoute les liens SEO sans casser le design
2. **JSON-LD optionnel** : Proposé mais pas imposé, à activer selon votre stratégie
3. **Pages futures** : La structure peut être réutilisée pour `/fractional-head-of-product`, `/fractional-cpo`, etc.

## Prochaines étapes recommandées

1. Appliquer le patch footer pour le maillage SEO
2. Tester la page en local
3. Décider d'activer ou non le JSON-LD local
4. Créer les autres pages satellites si nécessaire (fractional-head-of-product, etc.)


