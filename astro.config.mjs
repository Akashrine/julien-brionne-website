import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://julien-brionne.fr',
	integrations: [
		tailwind(),
		mdx(),
		sitemap({
			changefreq: 'monthly',
			priority: 0.7,
			lastmod: new Date(),
			i18n: {
				defaultLocale: 'fr',
				locales: {
					fr: 'fr-FR',
				},
			},
			// Inclure les collections de contenu (articles de blog)
			serialize(item) {
				// Priorité plus élevée pour les articles de blog
				if (item.url.includes('/blog/')) {
					return {
						...item,
						priority: 0.8,
						changefreq: 'weekly',
					};
				}
				// Priorité maximale pour la page d'accueil
				if (item.url === 'https://julien-brionne.fr/' || item.url === 'https://julien-brionne.fr') {
					return {
						...item,
						priority: 1.0,
						changefreq: 'daily',
					};
				}
				return item;
			},
		}),
	],
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
		assets: '_assets',
	},
	vite: {
		build: {
			cssMinify: true,
			minify: 'terser',
		},
	},
});

