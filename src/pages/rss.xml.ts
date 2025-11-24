import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const siteUrl = 'https://julien-brionne.fr';

export async function GET(context: APIContext) {
	const posts = (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

	return rss({
		title: 'Julien Brionne | Product Copilot — Blog',
		description: 'Articles sur le leadership produit, la stratégie, l\'accompagnement d\'équipes et les enjeux des startups SaaS.',
		site: context.site || siteUrl,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: new Date(post.data.date),
			link: `/blog/${post.slug}/`,
			customData: post.data.tags && post.data.tags.length > 0 
				? `<category>${post.data.tags.join('</category><category>')}</category>`
				: '',
		})),
		customData: `<language>fr-FR</language><managingEditor>julien@julien-brionne.fr (Julien Brionne)</managingEditor><webMaster>julien@julien-brionne.fr (Julien Brionne)</webMaster>`,
	});
}

