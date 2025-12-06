# 🔧 Guide de Configuration Google Search Console

**Date :** 2025-01-27  
**Site :** julien-brionne.fr

---

## 📋 PRÉREQUIS

- Accès au domaine julien-brionne.fr (DNS ou fichier HTML)
- Compte Google (Gmail)
- Site déployé et accessible en ligne

---

## 🚀 ÉTAPE 1 : Ajouter la propriété dans Google Search Console

### Option A : Vérification par domaine (Recommandé)

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Cliquer sur **"Ajouter une propriété"**
3. Sélectionner **"Domaine"** (pas "Préfixe d'URL")
4. Entrer : `julien-brionne.fr`
5. Cliquer sur **"Continuer"**

### Option B : Vérification par préfixe d'URL

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Cliquer sur **"Ajouter une propriété"**
3. Sélectionner **"Préfixe d'URL"**
4. Entrer : `https://julien-brionne.fr`
5. Cliquer sur **"Continuer"**

---

## ✅ ÉTAPE 2 : Vérifier la propriété

### Méthode recommandée : Fichier HTML

1. **Télécharger le fichier HTML** fourni par Google Search Console
2. **Placer le fichier** dans le dossier `public/` du projet
3. **Vérifier** que le fichier est accessible à `https://julien-brionne.fr/google[xxxxx].html`
4. **Cliquer sur "Vérifier"** dans Google Search Console

**Note :** Le fichier doit être dans `public/` pour être servi par Astro.

### Méthode alternative : Balise HTML

1. **Copier la balise meta** fournie par Google Search Console
2. **Ajouter dans** `src/layouts/Layout.astro` dans la section `<head>`
3. **Déployer** le site
4. **Cliquer sur "Vérifier"** dans Google Search Console

**Exemple de balise :**
```html
<meta name="google-site-verification" content="VOTRE_CODE_VERIFICATION" />
```

### Méthode alternative : DNS TXT Record

1. **Copier le record TXT** fourni par Google Search Console
2. **Ajouter dans votre DNS** (chez votre registrar ou hébergeur)
3. **Attendre la propagation DNS** (peut prendre jusqu'à 48h)
4. **Cliquer sur "Vérifier"** dans Google Search Console

---

## 📤 ÉTAPE 3 : Soumettre le sitemap

### 1. Vérifier que le sitemap existe

Le sitemap devrait être accessible à :
- `https://julien-brionne.fr/sitemap-index.xml`
- `https://julien-brionne.fr/sitemap-0.xml`

**Vérification :**
```bash
curl https://julien-brionne.fr/sitemap-index.xml
```

### 2. Soumettre le sitemap dans Google Search Console

1. Dans Google Search Console, aller dans **"Sitemaps"** (menu gauche)
2. Entrer : `sitemap-index.xml`
3. Cliquer sur **"Envoyer"**

**Sitemaps à soumettre :**
- `sitemap-index.xml` (principal)
- `sitemap-0.xml` (si généré automatiquement)

### 3. Vérifier le statut

- Attendre quelques minutes
- Vérifier que le statut est **"Réussi"**
- Vérifier le nombre d'URLs découvertes

---

## 🔍 ÉTAPE 4 : Configurer les paramètres

### 1. Paramètres de la propriété

1. Aller dans **"Paramètres"** → **"Paramètres de la propriété"**
2. **Pays cible** : France
3. **Préférence de domaine** : 
   - Si vous utilisez `www.julien-brionne.fr` → Préférer avec www
   - Si vous utilisez `julien-brionne.fr` → Préférer sans www

### 2. Paramètres de crawl

1. Aller dans **"Paramètres"** → **"Paramètres de crawl"**
2. **Taux de crawl** : Utiliser les paramètres recommandés (par défaut)
3. **Paramètres d'URL** : Désactiver si vous n'utilisez pas de paramètres d'URL

---

## 📊 ÉTAPE 5 : Configurer Google Analytics (Optionnel mais recommandé)

### 1. Créer une propriété Google Analytics 4

1. Aller sur [Google Analytics](https://analytics.google.com)
2. Créer une propriété pour `julien-brionne.fr`
3. Récupérer le **Measurement ID** (format : `G-XXXXXXXXXX`)

### 2. Lier Google Analytics à Search Console

1. Dans Google Search Console, aller dans **"Paramètres"** → **"Associations"**
2. Cliquer sur **"Ajouter une association"**
3. Sélectionner votre propriété Google Analytics
4. Cliquer sur **"Associer"**

**Bénéfices :**
- Voir les données de recherche dans Google Analytics
- Analyser le trafic organique plus en détail
- Créer des rapports personnalisés

---

## 🎯 ÉTAPE 6 : Configurer les objectifs de conversion

### 1. Identifier les actions de conversion

**Actions principales à tracker :**
- Clic sur "Discuter de votre situation" (CTA principal)
- Clic sur "Planifier un appel"
- Clic sur les liens Lemcal
- Téléchargement de ressources (si applicable)

### 2. Configurer les événements dans Google Analytics

1. Dans Google Analytics, aller dans **"Admin"** → **"Événements"**
2. Créer des événements pour :
   - `cta_click` (clics sur CTA)
   - `lemcal_click` (clics sur liens Lemcal)
   - `resource_download` (téléchargements)

### 3. Créer des objectifs dans Google Analytics

1. Aller dans **"Admin"** → **"Objectifs"**
2. Créer un objectif pour chaque action de conversion
3. Configurer les conditions de déclenchement

---

## 📈 ÉTAPE 7 : Surveiller les performances

### 1. Vérifier l'indexation

1. Aller dans **"Couverture"** dans Google Search Console
2. Vérifier que toutes les pages importantes sont indexées
3. Résoudre les erreurs d'indexation si présentes

### 2. Surveiller les performances de recherche

1. Aller dans **"Performances"**
2. Surveiller :
   - **Impressions** : Nombre de fois que votre site apparaît dans les résultats
   - **Clics** : Nombre de clics depuis les résultats de recherche
   - **CTR** : Taux de clics (Clics / Impressions)
   - **Position moyenne** : Position moyenne dans les résultats

### 3. Analyser les requêtes

1. Dans **"Performances"**, aller dans l'onglet **"Requêtes"**
2. Identifier :
   - Les mots-clés qui génèrent du trafic
   - Les opportunités d'amélioration
   - Les requêtes avec un CTR faible (à optimiser)

---

## 🔧 ÉTAPE 8 : Configurer les alertes

### 1. Créer des alertes par email

1. Dans Google Search Console, aller dans **"Paramètres"** → **"Utilisateurs et autorisations"**
2. Vérifier que votre email est configuré
3. Les alertes automatiques seront envoyées pour :
   - Erreurs d'indexation
   - Problèmes de sécurité
   - Pénalités manuelles

### 2. Configurer des alertes personnalisées (via Google Analytics)

1. Dans Google Analytics, aller dans **"Admin"** → **"Alertes personnalisées"**
2. Créer des alertes pour :
   - Baisse soudaine du trafic organique
   - Augmentation des erreurs 404
   - Changements significatifs dans les conversions

---

## ✅ CHECKLIST POST-CONFIGURATION

- [ ] Propriété vérifiée dans Google Search Console
- [ ] Sitemap soumis et validé
- [ ] Pays cible configuré (France)
- [ ] Google Analytics lié à Search Console
- [ ] Événements de conversion configurés
- [ ] Alertes email activées
- [ ] Première vérification de l'indexation effectuée

---

## 📝 NOTES IMPORTANTES

### Fréquence de mise à jour

- **Google Search Console** : Données mises à jour quotidiennement
- **Sitemap** : Soumis automatiquement à chaque déploiement (si configuré)
- **Indexation** : Google crawl automatiquement, mais vous pouvez forcer l'indexation via "Demander une indexation"

### Temps de traitement

- **Vérification de propriété** : Immédiat à quelques heures
- **Indexation initiale** : 1-7 jours
- **Données de performance** : 1-3 jours de délai

### Bonnes pratiques

1. **Vérifier régulièrement** les erreurs d'indexation
2. **Surveiller les performances** mensuellement
3. **Optimiser** les pages avec un CTR faible
4. **Résoudre rapidement** les problèmes de sécurité
5. **Mettre à jour le sitemap** après chaque ajout de contenu important

---

## 🆘 DÉPANNAGE

### Le sitemap n'est pas trouvé

1. Vérifier que le fichier existe dans `public/`
2. Vérifier l'URL complète : `https://julien-brionne.fr/sitemap-index.xml`
3. Vérifier les permissions du fichier
4. Vérifier le `robots.txt` (doit autoriser le crawl)

### La propriété ne peut pas être vérifiée

1. Vérifier que le fichier HTML est accessible publiquement
2. Vérifier que le DNS est correctement configuré
3. Attendre la propagation DNS (jusqu'à 48h)
4. Essayer une autre méthode de vérification

### Les pages ne sont pas indexées

1. Vérifier que le `robots.txt` n'interdit pas le crawl
2. Vérifier que les pages ont des meta tags appropriés
3. Utiliser "Demander une indexation" pour forcer l'indexation
4. Vérifier qu'il n'y a pas d'erreurs dans "Couverture"

---

## 📚 RESSOURCES

- [Documentation Google Search Console](https://support.google.com/webmasters)
- [Guide Google Analytics](https://support.google.com/analytics)
- [Test de Rich Results](https://search.google.com/test/rich-results)
- [Test de Mobile-Friendly](https://search.google.com/test/mobile-friendly)

---

**Prochaine révision :** Dans 1 mois (après collecte des premières données)

