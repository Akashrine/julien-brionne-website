import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		cover: z.string().optional(),
		tags: z.array(z.string()).optional().default([]),
		draft: z.boolean().optional().default(false),
	}),
});

const caseStudies = defineCollection({
	type: 'data',
	schema: z.object({
		slug: z.string(),
		label: z.string(),
		title: z.string(),
		description: z.string(),
		heroIntro: z.string(),
	}),
});

export const collections = {
	blog,
	'case-studies': caseStudies,
};

