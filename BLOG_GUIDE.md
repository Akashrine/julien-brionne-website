# Blog - Guide d'utilisation

## Structure

- **Articles MDX** : `src/content/blog/*.mdx`
- **Images de couverture** : `public/blog/[slug]/cover.webp`
- **Page listing** : `/blog`
- **Page article** : `/blog/[slug]`

## Créer un nouvel article

1. Créer un fichier `.mdx` dans `src/content/blog/` (ex: `mon-article.mdx`)
2. Ajouter le frontmatter :

```mdx
---
title: "Titre de l'article"
description: "Description courte pour le SEO et les previews"
date: "2024-01-20"
cover: "cover.webp"
draft: false
---
```

3. Créer le dossier pour les images : `public/blog/mon-article/`
4. Ajouter l'image de couverture : `public/blog/mon-article/cover.webp`

## Utiliser les composants premium

Les composants doivent être importés en haut du fichier MDX :

```mdx
import FullImage from '../../components/blog/FullImage.astro';
import SideNote from '../../components/blog/SideNote.astro';
import Quote from '../../components/blog/Quote.astro';
import Highlight from '../../components/blog/Highlight.astro';
import BreakSection from '../../components/blog/BreakSection.astro';
```

### FullImage

Image pleine largeur avec légende optionnelle :

```mdx
<FullImage src="/path/to/image.jpg" alt="Description" caption="Légende optionnelle" />
```

### SideNote

Note latérale pour attirer l'attention :

```mdx
<SideNote>
Contenu de la note latérale
</SideNote>
```

### Quote

Citation mise en avant :

```mdx
<Quote author="Nom de l'auteur">
Texte de la citation
</Quote>
```

### Highlight

Mise en évidence de texte :

```mdx
<Highlight>Texte mis en évidence</Highlight>
```

### BreakSection

Section de séparation :

```mdx
<BreakSection>
Contenu de la section de séparation
</BreakSection>
```

## Articles en brouillon

Pour garder un article en brouillon, définir `draft: true` dans le frontmatter. L'article ne sera pas listé sur `/blog` et ne sera pas accessible publiquement.

