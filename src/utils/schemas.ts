/**
 * JSON-LD Schema.org generators
 * Ces fonctions génèrent les schemas qui seront injectés dans le HTML
 * pour le référencement SEO (Google Rich Snippets)
 */

export interface SchemaConfig {
	siteUrl: string;
	description?: string;
}

export function getPersonSchema(siteUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Julien Brionne",
		"jobTitle": "Product Leader",
		"description": "Hands-on Product Leader depuis 10 ans, spécialisé en leadership produit opérationnel pour startups SaaS",
		"url": siteUrl,
		"sameAs": [
			"https://www.linkedin.com/in/julienbrionne",
			"https://substack.com/@productcopilot"
		],
		"knowsAbout": [
			"Product Management",
			"Leadership Produit",
			"Startups SaaS",
			"Coaching Produit",
			"Diagnostic Produit"
		],
		"worksFor": {
			"@type": "Organization",
			"name": "Product Copilot"
		}
	};
}

export function getProfessionalServiceSchema(siteUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Product Copilot - Julien Brionne",
		"description": "Accompagnement product management pour startups SaaS en croissance. Leadership produit opérationnel, coaching et diagnostic.",
		"url": siteUrl,
		"provider": {
			"@type": "Person",
			"name": "Julien Brionne"
		},
		"serviceType": [
			"Accompagnement Product Management",
			"Coaching Product Leader",
			"Diagnostic Produit",
			"Leadership Produit Opérationnel"
		],
		"areaServed": {
			"@type": "Country",
			"name": "France"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Services d'accompagnement produit",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Impact Sprint",
						"description": "4 semaines pour comprendre pourquoi l'usage stagne et remettre un plan d'impact clair"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Diagnostic Produit",
						"description": "2 à 3 semaines pour cartographier tensions, vision, arbitrages et signaux d'usage"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Leadership & Pilotage Produit",
						"description": "Intervention hands-on pendant 2 à 6 mois : vision, arbitrages, roadmap, rituels décisionnels"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Coaching Leaders Produit",
						"description": "6 à 8 semaines dédiées à la posture, aux décisions, à la priorisation"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "IA Raisonnée",
						"description": "3 à 5 semaines pour intégrer l'IA là où elle enlève du bruit"
					}
				}
			]
		}
	};
}

export function getWebsiteSchema(siteUrl: string, description: string) {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Julien Brionne | Product Copilot",
		"url": siteUrl,
		"description": description,
		"author": {
			"@type": "Person",
			"name": "Julien Brionne"
		},
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": `${siteUrl}/?q={search_term_string}`
			},
			"query-input": "required name=search_term_string"
		}
	};
}

export function getBreadcrumbSchema(siteUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Accueil",
				"item": siteUrl
			}
		]
	};
}

export function getPageBreadcrumbSchema(siteUrl: string, pageUrl: string, pageName: string) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Accueil",
				"item": siteUrl
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": pageName,
				"item": pageUrl
			}
		]
	};
}

/**
 * Schémas spécifiques pour chaque service
 */

export interface ServiceSchemaConfig {
	siteUrl: string;
	pageUrl: string;
	name: string;
	description: string;
	serviceType: string[];
	areaServed?: {
		"@type": "City" | "Country" | "State";
		name: string;
		addressRegion?: string;
		addressCountry?: string;
	};
}

export function getFractionalHeadOfProductSchema(config: ServiceSchemaConfig) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": config.name,
		"description": config.description,
		"url": config.pageUrl,
		"provider": {
			"@type": "Person",
			"name": "Julien Brionne",
			"jobTitle": "Product Leader",
			"url": config.siteUrl
		},
		"serviceType": config.serviceType,
		"areaServed": config.areaServed || {
			"@type": "Country",
			"name": "France"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Fractional Head of Product",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Pilotage Produit",
						"description": "Redonner une direction nette, clarifier la vision, ralentir le bruit, accélérer l'impact"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Stabilisation Produit",
						"description": "Rôles clairs, décisions claires, rythme clair. Système produit qui tient la vitesse"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Résolution Produit",
						"description": "Adoption, activation, rétention, usage. Les vrais leviers qui changent la trajectoire d'un SaaS"
					}
				}
			]
		}
	};
}

export function getFractionalCPOSchema(config: ServiceSchemaConfig) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": config.name,
		"description": config.description,
		"url": config.pageUrl,
		"provider": {
			"@type": "Person",
			"name": "Julien Brionne",
			"jobTitle": "Chief Product Officer",
			"url": config.siteUrl
		},
		"serviceType": config.serviceType,
		"areaServed": config.areaServed || {
			"@type": "Country",
			"name": "France"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Fractional CPO",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Vision Stratégique",
						"description": "Une direction claire qui fait gagner. Pas de jargon, pas de PowerPoint, des arbitrages"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Stratégie Produit",
						"description": "Positionnement, différenciation, priorités. Les décisions qui augmentent l'impact"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Pilotage Produit",
						"description": "Rendre l'équipe capable d'exécuter la stratégie. Rituels, rythme, arbitrage, lisibilité"
					}
				}
			]
		}
	};
}

export function getDiagnosticProduitSchema(config: ServiceSchemaConfig) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": config.name,
		"description": config.description,
		"url": config.pageUrl,
		"provider": {
			"@type": "Person",
			"name": "Julien Brionne",
			"jobTitle": "Product Leader",
			"url": config.siteUrl
		},
		"serviceType": config.serviceType,
		"areaServed": config.areaServed || {
			"@type": "Country",
			"name": "France"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Diagnostic Produit",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Analyse Vision et Stratégie",
						"description": "Vision, mission, direction. Arbitrages réels (pas ceux des slides)"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Analyse Usage et Adoption",
						"description": "Usage, activation, adoption. Signaux faibles et tensions invisibles"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Analyse Équipe et Processus",
						"description": "Rituels, rythme, décisions. Structure de l'équipe produit"
					}
				}
			]
		}
	};
}

export function getAccompagnementProduitSchema(config: ServiceSchemaConfig) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": config.name,
		"description": config.description,
		"url": config.pageUrl,
		"provider": {
			"@type": "Person",
			"name": "Julien Brionne",
			"jobTitle": "Product Leader",
			"url": config.siteUrl
		},
		"serviceType": config.serviceType,
		"areaServed": config.areaServed || {
			"@type": "Country",
			"name": "France"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Accompagnements Produit",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Diagnostic Produit",
						"description": "Comprendre ce qui freine l'impact. Faire apparaître les tensions et les décisions manquantes"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Impact Sprint",
						"description": "Redonner rapidement de la traction. Usage, activation, adoption, churn"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Leadership Opérationnel",
						"description": "Piloter l'équipe, clarifier les rôles, stabiliser les décisions"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Coaching Product",
						"description": "Accompagner un PM, un Head ou un Lead. Faire monter en impact, pas juste en compétences"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "IA Raisonnée",
						"description": "Ajouter de l'IA là où elle crée de la valeur, pas du bruit"
					}
				}
			]
		}
	};
}

export function getLeadershipProduitSchema(config: ServiceSchemaConfig) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": config.name,
		"description": config.description,
		"url": config.pageUrl,
		"provider": {
			"@type": "Person",
			"name": "Julien Brionne",
			"jobTitle": "Product Leader",
			"url": config.siteUrl
		},
		"serviceType": config.serviceType,
		"areaServed": config.areaServed || {
			"@type": "Country",
			"name": "France"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Leadership Produit",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Pilotage",
						"description": "Redonner une vision qui guide les décisions. Arbitrages clairs, rythme stable, direction nette"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Stabilisation",
						"description": "Rôles clairs, rituels utiles, meilleure circulation de l'information, décisions sans friction"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Résolution",
						"description": "Activation, adoption, usage, churn. Tout ce qui annonce une perte de traction"
					}
				}
			]
		}
	};
}

/**
 * Génère tous les schemas JSON-LD pour une page
 */
export function getAllSchemas(config: SchemaConfig) {
	return {
		person: getPersonSchema(config.siteUrl),
		professionalService: getProfessionalServiceSchema(config.siteUrl),
		website: getWebsiteSchema(config.siteUrl, config.description || ""),
		breadcrumb: getBreadcrumbSchema(config.siteUrl)
	};
}

