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

