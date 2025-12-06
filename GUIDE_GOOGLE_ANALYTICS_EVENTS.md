# 📊 Guide de Configuration des Événements Google Analytics 4

**Date :** 2025-01-27  
**GA4 ID :** G-6HJ43DJWRQ  
**Site :** julien-brionne.fr

---

## 📋 ÉTAT ACTUEL

### ✅ Déjà configuré :
- Google Analytics 4 installé et fonctionnel
- Tracking automatique des pages
- Tracking automatique des clics sur liens Lemcal (`click_cta`)
- Tracking automatique des vues de sections (`view_section`)
- Fonctions utilitaires dans `src/utils/analytics.ts`

### 🔄 À configurer :
- Événements de conversion dans Google Analytics
- Objectifs (Goals) dans GA4
- Rapports personnalisés
- Alertes sur conversions

---

## 🎯 ÉTAPE 1 : Identifier les événements de conversion

### Événements actuellement trackés :

| Événement | Nom GA4 | Où | Statut |
|-----------|---------|-----|--------|
| Clic CTA Lemcal | `click_cta` | Toutes les pages | ✅ Automatique |
| Vue de section | `view_section` | Toutes les sections | ✅ Automatique |
| Clic lien externe | `click_external_link` | - | ⚠️ Non utilisé |
| Changement thème | `theme_change` | - | ⚠️ Non utilisé |

### Événements à configurer comme conversions :

1. **`click_cta`** → Conversion principale (clics sur "Discuter de votre situation")
2. **`view_section`** → Engagement (optionnel)
3. **`download_resource`** → Conversion secondaire (si ressources téléchargeables)
4. **`form_submit`** → Conversion (si formulaires ajoutés)

---

## 🔧 ÉTAPE 2 : Configurer les événements dans Google Analytics

### 1. Accéder à Google Analytics

1. Aller sur [Google Analytics](https://analytics.google.com)
2. Sélectionner votre propriété **julien-brionne.fr**
3. Aller dans **"Admin"** (icône engrenage en bas à gauche)

### 2. Créer des événements personnalisés

#### A. Marquer `click_cta` comme conversion

1. Dans **"Admin"**, aller dans **"Événements"** (sous "Propriété")
2. Chercher l'événement `click_cta` dans la liste
3. Cliquer sur le toggle **"Marquer comme conversion"**
4. ✅ L'événement devient une conversion

**Paramètres à vérifier :**
- **Nom de l'événement** : `click_cta`
- **Paramètres** : `cta_location`, `cta_text`, `cta_url`
- **Catégorie** : `engagement`

#### B. Créer un événement dérivé pour les CTA principaux

Pour mieux segmenter, créer un événement dérivé qui ne track que les CTA principaux :

1. Dans **"Admin"** → **"Événements"** → **"Créer un événement"**
2. **Nom de l'événement** : `conversion_cta_principal`
3. **Conditions** :
   - `event_name` = `click_cta`
   - `cta_text` contient "Discuter de votre situation" OU "Planifier un appel"
4. **Marquer comme conversion** : ✅ Oui
5. Cliquer sur **"Créer"**

---

## 🎯 ÉTAPE 3 : Créer des objectifs (Conversions)

### Dans GA4, les "conversions" remplacent les "objectifs" de Universal Analytics

Les conversions sont déjà configurées si vous avez marqué les événements comme conversions.

### Vérifier les conversions actives :

1. Dans **"Admin"** → **"Conversions"** (sous "Propriété")
2. Vérifier que `click_cta` est listé comme conversion
3. Vérifier que `conversion_cta_principal` est listé (si créé)

### Activer les conversions par défaut (optionnel) :

GA4 track automatiquement certains événements. Vérifier dans **"Admin"** → **"Conversions"** :

- ✅ `first_visit` (première visite)
- ✅ `page_view` (vue de page)
- ✅ `session_start` (démarrage de session)

---

## 📊 ÉTAPE 4 : Créer des rapports personnalisés

### 1. Rapport "Conversions par CTA"

1. Aller dans **"Rapports"** → **"Exploration"**
2. Cliquer sur **"Créer une exploration"**
3. **Type** : Tableau à structure libre
4. **Dimensions** :
   - `Event name`
   - `Event parameter: cta_location`
   - `Event parameter: cta_text`
5. **Métriques** :
   - `Event count`
   - `Total users`
   - `Conversions`
6. **Filtres** :
   - `Event name` = `click_cta`
7. **Sauvegarder** : "Conversions par CTA"

### 2. Rapport "Funnel de conversion"

1. Créer une nouvelle exploration
2. **Type** : Funnel
3. **Étapes** :
   - Étape 1 : `page_view` (toutes les pages)
   - Étape 2 : `view_section` (section "contact" ou "hero")
   - Étape 3 : `click_cta` (conversion)
4. **Sauvegarder** : "Funnel Conversion CTA"

### 3. Rapport "Trafic organique → Conversion"

1. Créer une nouvelle exploration
2. **Type** : Tableau à structure libre
3. **Dimensions** :
   - `Session source / medium`
   - `Page title`
4. **Métriques** :
   - `Sessions`
   - `Conversions`
   - `Conversion rate`
5. **Filtres** :
   - `Session source / medium` contient "google / organic"
6. **Sauvegarder** : "SEO → Conversions"

---

## 🔔 ÉTAPE 5 : Configurer les alertes

### 1. Alertes automatiques Google Analytics

1. Dans **"Admin"** → **"Alertes personnalisées"**
2. Cliquer sur **"Créer une alerte"**

#### Alerte 1 : Baisse soudaine des conversions

- **Nom** : "Baisse conversions CTA"
- **Condition** : `conversions` < 80% de la moyenne sur 7 jours
- **Période** : 7 jours
- **Notification** : Email

#### Alerte 2 : Augmentation anormale du trafic

- **Nom** : "Pic de trafic anormal"
- **Condition** : `sessions` > 150% de la moyenne sur 7 jours
- **Période** : 1 jour
- **Notification** : Email

#### Alerte 3 : Aucune conversion sur 3 jours

- **Nom** : "Aucune conversion depuis 3 jours"
- **Condition** : `conversions` = 0 sur 3 jours
- **Période** : 3 jours
- **Notification** : Email

---

## 🧪 ÉTAPE 6 : Tester les événements

### 1. Utiliser Google Analytics DebugView

1. Installer l'extension [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) (Chrome)
2. Activer l'extension
3. Visiter votre site
4. Dans GA4, aller dans **"Admin"** → **"DebugView"**
5. Vérifier que les événements apparaissent en temps réel

### 2. Utiliser le mode Debug de GA4

1. Dans votre site, ajouter `?debug_mode=true` à l'URL
2. Ou utiliser [Google Tag Assistant](https://tagassistant.google.com/)
3. Vérifier que les événements sont envoyés correctement

### 3. Vérifier dans les rapports en temps réel

1. Dans GA4, aller dans **"Rapports"** → **"Temps réel"**
2. Effectuer une action (clic CTA, etc.)
3. Vérifier que l'événement apparaît dans les 30 secondes

---

## 📈 ÉTAPE 7 : Configurer les audiences

### Créer des audiences pour le remarketing

#### Audience 1 : Visiteurs ayant cliqué sur CTA

1. Dans **"Admin"** → **"Audiences"**
2. Cliquer sur **"Nouvelle audience"**
3. **Nom** : "Visiteurs engagés - CTA cliqué"
4. **Condition** : `Event name` = `click_cta`
5. **Durée** : 30 jours
6. **Sauvegarder**

#### Audience 2 : Visiteurs ayant vu plusieurs pages

1. Créer une nouvelle audience
2. **Nom** : "Visiteurs multi-pages"
3. **Condition** : `Page views` > 3
4. **Durée** : 7 jours
5. **Sauvegarder**

#### Audience 3 : Visiteurs organiques non convertis

1. Créer une nouvelle audience
2. **Nom** : "Trafic organique non converti"
3. **Condition** :
   - `Session source / medium` contient "google / organic"
   - `Conversions` = 0
4. **Durée** : 30 jours
5. **Sauvegarder**

---

## 🎨 ÉTAPE 8 : Améliorer le tracking existant

### Événements à ajouter dans le code

#### 1. Tracking des téléchargements (si ressources ajoutées)

Ajouter dans `public/scripts/main.js` :

```javascript
// Track les téléchargements
document.querySelectorAll('a[download], a[href$=".pdf"], a[href$=".doc"]').forEach(link => {
	link.addEventListener('click', () => {
		if (window.gtag) {
			window.gtag('event', 'download_resource', {
				resource_name: link.textContent.trim(),
				resource_url: link.href,
				resource_type: link.href.split('.').pop(),
				event_category: 'engagement'
			});
		}
	});
});
```

#### 2. Tracking des scrolls profonds

Ajouter dans `public/scripts/main.js` :

```javascript
// Track les scrolls profonds (75% de la page)
let scrollTracked = false;
window.addEventListener('scroll', () => {
	if (!scrollTracked && window.scrollY > document.body.scrollHeight * 0.75) {
		scrollTracked = true;
		if (window.gtag) {
			window.gtag('event', 'scroll_deep', {
				event_category: 'engagement',
				percent_scrolled: 75
			});
		}
	}
});
```

#### 3. Tracking du temps sur page

Ajouter dans `public/scripts/main.js` :

```javascript
// Track le temps sur page (après 60 secondes)
setTimeout(() => {
	if (window.gtag) {
		window.gtag('event', 'time_on_page', {
			event_category: 'engagement',
			time_seconds: 60
		});
	}
}, 60000);
```

---

## 📋 CHECKLIST DE CONFIGURATION

### Configuration Google Analytics

- [ ] Événement `click_cta` marqué comme conversion
- [ ] Événement `conversion_cta_principal` créé (optionnel)
- [ ] Conversions par défaut activées
- [ ] Rapports personnalisés créés
- [ ] Alertes configurées
- [ ] Audiences créées pour remarketing

### Tests

- [ ] DebugView testé et fonctionnel
- [ ] Événements visibles en temps réel
- [ ] Conversions apparaissent dans les rapports
- [ ] Alertes fonctionnent

### Améliorations (optionnel)

- [ ] Tracking téléchargements ajouté
- [ ] Tracking scroll profond ajouté
- [ ] Tracking temps sur page ajouté

---

## 📊 MÉTRIQUES À SURVEILLER

### Conversions

- **Taux de conversion global** : Conversions / Sessions
- **Taux de conversion par source** : Conversions / Sessions (par source)
- **Taux de conversion par page** : Conversions / Sessions (par page)

### Engagement

- **Temps moyen sur page** : `Average session duration`
- **Pages par session** : `Pages per session`
- **Taux de rebond** : `Bounce rate`

### CTA Performance

- **Clics CTA par emplacement** : `click_cta` avec `cta_location`
- **Clics CTA par texte** : `click_cta` avec `cta_text`
- **Taux de conversion par CTA** : Conversions / Impressions CTA

---

## 🔗 LIENS UTILES

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Guide des événements GA4](https://support.google.com/analytics/answer/9267735)
- [DebugView GA4](https://support.google.com/analytics/answer/7201382)
- [Google Tag Assistant](https://tagassistant.google.com/)

---

## 📝 NOTES IMPORTANTES

### RGPD et Confidentialité

- ✅ IP anonymisée déjà configurée (`anonymize_ip: true`)
- ✅ Cookies avec `SameSite=None;Secure`
- ⚠️ Vérifier la politique de confidentialité mentionne Google Analytics
- ⚠️ Ajouter un banner de consentement si nécessaire (RGPD)

### Performance

- ✅ GA4 chargé en async (ne bloque pas le rendu)
- ✅ DNS prefetch configuré
- ✅ Tracking optimisé pour la performance

### Données

- **Délai de traitement** : 24-48h pour les rapports standards
- **Temps réel** : Disponible immédiatement
- **Rétention des données** : 14 mois par défaut (configurable jusqu'à 50 mois)

---

**Prochaine révision :** Dans 1 mois (après collecte des premières données de conversion)

