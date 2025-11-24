# Julien Brionne - Product Copilot

Site One-Page migré vers Astro avec Tailwind CSS.

## 🚀 Structure du projet

```
/
├── public/              # Assets statiques (images, favicon, etc.)
│   └── _WOL6954-min.jpg # Photo de profil (à déplacer depuis la racine)
├── src/
│   ├── components/      # Composants Astro modulaires
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Situation.astro
│   │   ├── Services.astro
│   │   ├── Approach.astro
│   │   ├── Bio.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/         # Layouts Astro
│   │   └── Layout.astro
│   └── pages/           # Pages Astro
│       └── index.astro
├── astro.config.mjs     # Configuration Astro
├── tailwind.config.mjs  # Configuration Tailwind
└── package.json         # Dépendances
```

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 📝 Assets

**Important :** Déplacez l'image `_WOL6954-min.jpg` depuis la racine vers le dossier `public/` :

```bash
mv _WOL6954-min.jpg public/
```

Les images dans `public/` sont accessibles directement via `/nom-du-fichier.jpg` dans les composants.

## 🎨 Configuration Tailwind

Toutes les couleurs personnalisées (`ivory`, `graphite`, `sand`, etc.) et les fonts (`Playfair Display`, `Inter`) sont configurées dans `tailwind.config.mjs`.

Le dark mode est activé via `darkMode: 'class'` et géré par le composant `Navbar.astro`.

## 🔧 Fonctionnalités

- ✅ Dark Mode avec persistance localStorage
- ✅ Navbar avec effet de scroll
- ✅ Animations fade-in au scroll (Intersection Observer)
- ✅ Design system complet avec Tailwind
- ✅ Architecture modulaire et maintenable

