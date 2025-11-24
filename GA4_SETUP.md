# 📊 Configuration Google Analytics 4

## ✅ Installation terminée

Google Analytics 4 a été intégré de manière optimisée dans votre site Astro.

---

## 🔧 Configuration

### 1. Obtenir votre ID GA4

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Créez une propriété GA4 si nécessaire
3. Allez dans **Admin** > **Data Streams** > **Web Stream**
4. Copiez votre **Measurement ID** (format : `G-XXXXXXXX`)

### 2. Configurer l'ID GA4

**Option A : Via variable d'environnement (recommandé)**

Créez un fichier `.env` à la racine du projet :

```bash
PUBLIC_GA4_ID=G-VOTRE-ID-ICI
```

**Option B : Modification directe**

Éditez `src/config/analytics.ts` et remplacez `G-XXXXXXXX` par votre ID réel.

---

## 🚀 Fonctionnalités activées

### ✅ Tracking automatique

- **Page views** : Track automatiquement chaque vue de page
- **Sections** : Track quand une section devient visible (scroll)
- **CTA clicks** : Track les clics sur les boutons "Discuter de votre situation"
- **Theme changes** : Track les changements dark/light mode

### ✅ Performance optimisée

- Script chargé en `defer` (ne bloque pas le rendu)
- IP anonymisée (`anonymize_ip: true`) - RGPD-friendly
- Désactivé en développement local (pas de tracking pendant le dev)
- Cookies sécurisés (`SameSite=None;Secure`)

### ✅ Événements trackés

| Événement | Description | Paramètres |
|-----------|-------------|------------|
| `page_view` | Vue de page | `page_path`, `page_title` |
| `view_section` | Section visible | `section_name`, `section_id` |
| `click_cta` | Clic sur CTA | `cta_location`, `cta_text`, `cta_url` |
| `theme_change` | Changement de thème | `theme` (light/dark) |

---

## 📝 Utilisation manuelle

### Fonction utilitaire disponible

Si vous avez besoin de tracker des événements personnalisés, utilisez les fonctions dans `src/utils/analytics.ts` :

```typescript
import { trackEvent, trackCTA, trackSectionView } from '../utils/analytics';

// Événement personnalisé
trackEvent('custom_event', {
  category: 'engagement',
  label: 'custom_action'
});

// CTA spécifique
trackCTA('hero', 'Discuter de votre situation', 'https://...');

// Vue de section
trackSectionView('Services');
```

### Dans un composant Astro

```astro
---
import { trackEvent } from '../utils/analytics';
---

<button onclick={() => trackEvent('button_click', { button_name: 'example' })}>
  Cliquer
</button>
```

---

## 🔒 Respect du RGPD

- ✅ **IP anonymisée** : `anonymize_ip: true`
- ✅ **Pas de cookies tiers** : Utilisation de cookies first-party uniquement
- ✅ **Pas de données personnelles** : Seulement des données d'usage anonymes
- ⚠️ **Note** : Pour une conformité totale RGPD, vous pouvez ajouter un bandeau de consentement si nécessaire

---

## 🧪 Test et vérification

### 1. Vérifier que GA4 fonctionne

1. Ouvrez votre site en production
2. Ouvrez les DevTools (F12)
3. Allez dans l'onglet **Network**
4. Filtrez par `gtag` ou `collect`
5. Vous devriez voir des requêtes vers `google-analytics.com`

### 2. Vérifier dans Google Analytics

1. Allez dans **Realtime** > **Overview**
2. Visitez votre site
3. Vous devriez voir votre visite apparaître en temps réel

### 3. Vérifier les événements

1. Allez dans **Events** > **Realtime**
2. Cliquez sur un CTA ou changez le thème
3. L'événement devrait apparaître dans les 30 secondes

---

## 🐛 Dépannage

### GA4 ne track pas

- ✅ Vérifiez que `PUBLIC_GA4_ID` est bien défini dans `.env`
- ✅ Vérifiez que vous êtes en production (`npm run build` puis `npm run preview`)
- ✅ Vérifiez la console du navigateur pour les erreurs
- ✅ Vérifiez que votre ID commence bien par `G-`

### Les événements n'apparaissent pas

- ✅ Attendez 24-48h pour les données historiques (Realtime fonctionne immédiatement)
- ✅ Vérifiez que les événements sont bien déclenchés (console.log dans le code)
- ✅ Vérifiez les filtres dans Google Analytics (Admin > Data Settings > Data Filters)

---

## 📊 Événements disponibles dans GA4

Une fois configuré, vous pourrez voir dans Google Analytics :

- **Page views** : Nombre de vues de page
- **Sections vues** : Quelles sections sont les plus consultées
- **CTA cliqués** : Taux de conversion des CTA
- **Thème préféré** : Préférence dark/light mode des utilisateurs

---

## 🎯 Prochaines étapes (optionnel)

- [ ] Configurer des **conversions** dans GA4 (Admin > Events > Mark as conversion)
- [ ] Créer des **audiences** personnalisées
- [ ] Configurer des **rapports personnalisés**
- [ ] Ajouter un **bandeau de consentement** si nécessaire (ex: Cookiebot, OneTrust)

---

**Note** : GA4 est désactivé en développement local pour éviter de polluer vos données. Il s'active automatiquement en production.

