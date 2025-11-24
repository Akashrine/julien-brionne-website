# Patch JSON-LD optionnel — Enrichissement SEO local Montpellier

## Fichier à modifier
`src/pages/head-of-product-montpellier.astro`

## Patch à appliquer (optionnel)

Ajoutez ce script JSON-LD dans la section `<head>` du Layout, juste après les autres schemas.

Dans `head-of-product-montpellier.astro`, ajoutez avant la balise `</Layout>` :

```astro
---
// ... imports existants ...

// Ajout du JSON-LD pour ProfessionalService avec zone géographique
const localServiceSchema = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"name": "Head of Product Montpellier — Leadership Produit Hands-on",
	"description": "Head of Product basé à Montpellier. Accompagnement produit opérationnel pour startups SaaS. Vision, arbitrages, pilotage, adoption et usage.",
	"provider": {
		"@type": "Person",
		"name": "Julien Brionne",
		"jobTitle": "Product Leader",
		"url": "https://julien-brionne.fr"
	},
	"areaServed": {
		"@type": "City",
		"name": "Montpellier",
		"addressRegion": "Occitanie",
		"addressCountry": "FR"
	},
	"serviceType": [
		"Head of Product",
		"Fractional Head of Product",
		"Leadership Produit",
		"Accompagnement Produit",
		"Diagnostic Produit"
	],
	"url": "https://julien-brionne.fr/head-of-product-montpellier"
};
---

<Layout title={title} description={description}>
	<!-- ... contenu existant ... -->
</Layout>

<!-- Ajout du JSON-LD local (optionnel) -->
<script type="application/ld+json" set:html={JSON.stringify(localServiceSchema)} />
```

## Alternative : Modification dans Layout.astro

Si vous préférez l'intégrer directement dans le Layout pour toutes les pages locales, modifiez `src/layouts/Layout.astro` :

Dans la section Props, ajoutez :
```typescript
interface Props {
	title?: string;
	description?: string;
	ogImage?: string;
	areaServed?: string; // Nouveau prop optionnel
}
```

Puis dans le Layout, après les autres schemas :
```astro
{areaServed && (
	<script type="application/ld+json" set:html={JSON.stringify({
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"areaServed": {
			"@type": "City",
			"name": areaServed
		}
	})} />
)}
```

Et dans `head-of-product-montpellier.astro` :
```astro
<Layout title={title} description={description} areaServed="Montpellier">
```

## Notes
- Ce JSON-LD enrichit le référencement local pour Montpellier
- Compatible avec Google Business Profile si vous en avez un
- Optionnel : vous pouvez l'activer ou non selon votre stratégie SEO


