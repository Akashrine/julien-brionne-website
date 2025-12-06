import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

// Récupérer tous les articles de blog et case studies
const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
const caseStudies = await getCollection('case-studies');

// Créer l'objet pages pour les articles de blog
const blogPages = Object.fromEntries(
	blogPosts.map((post) => [
		`blog-${post.slug}`,
		{
			title: post.data.title,
			description: post.data.description,
			type: 'blog' as const,
		},
	])
);

// Créer l'objet pages pour les case studies
const caseStudyPages = Object.fromEntries(
	caseStudies.map((study) => [
		`case-study-${study.id}`,
		{
			title: study.data.title,
			description: study.data.description,
			label: study.data.label || 'Étude de cas',
			type: 'case-study' as const,
		},
	])
);

// Combiner les deux objets
const pages = {
	...blogPages,
	...caseStudyPages,
};

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'slug',
	pages: pages,
	getImageOptions: (path, page) => {
		// Couleurs du thème (en RGB)
		const colors = {
			ivory: [250, 249, 246] as [number, number, number], // #FAF9F6
			graphite: [18, 18, 18] as [number, number, number], // #121212
			sand: [198, 166, 118] as [number, number, number], // #C6A676
			softgray: [154, 139, 122] as [number, number, number], // #9A8B7A
		};

		return {
			title: page.title,
			description: page.description,
			// Fond avec gradient subtil
			bgGradient: [
				colors.ivory, // Fond clair (ivory)
				[245, 243, 238], // Légèrement plus foncé pour le gradient
			],
			// Logo en bas à droite (utiliser bgImage avec position)
			bgImage: {
				path: './public/favicons/favicon-light.webp',
				fit: 'contain', // Redimensionner pour contenir dans l'espace disponible
				position: ['end', 'end'], // Position en bas à droite (block-end, inline-end)
			},
			// Polices avec couleurs graphite sur fond ivory
			font: {
				title: {
					size: 72,
					lineHeight: 1.2,
					families: ['serif'], // Playfair Display sera utilisé si disponible, sinon serif par défaut
					weight: 'Medium',
					color: colors.graphite, // Graphite pour le titre
				},
				description: {
					size: 32,
					lineHeight: 1.4,
					families: ['sans-serif'], // Inter sera utilisé si disponible, sinon sans-serif par défaut
					weight: 'Regular',
					color: colors.graphite, // Graphite pour la description aussi
				},
			},
			// Bordure avec couleur sand
			border: {
				color: colors.sand,
				width: 4,
			},
			// Padding pour le contenu
			padding: 80,
		};
	},
});

