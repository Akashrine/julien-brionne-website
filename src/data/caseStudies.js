export const caseStudies = [
	{
		slug: "conversation",
		label: "Social Discovery App",
		title: "Briser le plateau de rétention : De l'acquisition à l'engagement durable.",
		description: "Comment débloquer une rétention stagnante à 15% alors que l'acquisition explose ? Une intervention centrée sur l'impact et l'activation conversationnelle.",
		
		heroIntro: "Comment redresser une courbe de rétention plate (15%) alors que l'acquisition explose ? Analyse d'un sauvetage produit centré sur l'impact.",
		
		problem: {
			title: "Le Diagnostic",
			text: "L'application (Scale-up B2C) connaît une forte croissance d'utilisateurs, mais la rétention D30 stagne à 15% depuis 3 trimestres. Les nouvelles fonctionnalités \"gadgets\" ne changent rien."
		},
		insight: {
			title: "L'Insight Data Clé",
			text: "Les utilisateurs qui engagent une conversation dense (>5 messages envoyés/reçus) dès le 1er jour ont une rétention 3x supérieure."
		},
		pivot: {
			title: "1. Le Pivot Stratégique",
			text: "Le réflexe de l'équipe était de \"livrer plus de features\" pour retenir les gens. Mon intervention a consisté à stopper cette fuite en avant pour se concentrer sur un seul levier : l'activation conversationnelle.",
			quote: "La valeur ne réside pas dans le swipe, mais dans la connexion."
		},
		okr: {
			title: "2. Définition de l'Objectif (OKR)",
			intro: "Pour aligner les squads, nous avons défini une North Star Metric claire, loin des métriques vaniteuses.",
			krs: [
				{
					title: "KR1",
					text: "Leading Metric (Le levier)\n\nAugmenter de 20% le nombre de nouveaux utilisateurs ayant une \"conversation engageante\" le Jour 0."
				},
				{
					title: "KR2",
					text: "Lagging Metric (Le résultat)\n\nFaire passer la rétention D30 de 15% à 20%."
				}
			]
		},
		experiments: {
			title: "3. L'Exécution (Expérimentations)",
			intro: "Au lieu de lancer un projet de 6 mois, nous avons lancé 3 expérimentations tactiques en 2 semaines :",
			list: [
				{
					title: "A. Conversation-First Matching",
					text: "Prioriser l'affichage des profils ayant un fort taux de réponse pour les nouveaux inscrits."
				},
				{
					title: "B. Chat Nudges",
					text: "Suggestions contextuelles (\"Demande-lui ses hobbies\") après 2 messages pour briser la glace."
				},
				{
					title: "C. Onboarding Direct",
					text: "Test radical : supprimer la création de profil longue pour lancer une conversation immédiatement."
				}
			]
		},
		results: {
			title: "Résultats & Apprentissages",
			text: "En recentrant l'équipe sur un output mesurable (la conversation) plutôt que sur la livraison de code, nous avons validé que l'activation est le moteur de la rétention.",
			metrics: [
				{
					value: "+20%",
					label: "Conversations J0"
				},
				{
					value: "Focus",
					label: "Alignement Squads"
				}
			],
			ctaText: "Discuter de vos enjeux de rétention"
		}
	},
	{
		slug: "team-stability",
		label: "Scale-up SaaS B2B",
		title: "Quand la croissance fragmente l'équipe Produit : recréer de la clarté, du rythme et de la cohérence.",
		description: "Une équipe Produit en surcharge constante, des PMs qui compensent, un leadership flou. Comment remettre tout le monde sur les bons rails sans tout restructurer ?",
		
		heroIntro: "Dans une scale-up SaaS B2B en forte accélération, l'équipe Produit perd progressivement sa cohésion. Les priorités changent trop vite, les PMs compensent, la dette d'ambiguïté explose. Voici comment nous avons rétabli un système de décision stable.",
		
		problem: {
			title: "Le Diagnostic",
			text: "Les squads avancent chacune dans leur direction. Les priorités changent chaque semaine. Les PMs jouent les chefs d'orchestre pour compenser les silences stratégiques. Les tensions apparaissent entre Produit, Tech et Sales."
		},
		insight: {
			title: "L'Insight Clé",
			text: "L'équipe ne manquait pas de frameworks, mais de décisions tenables : quand l'objectif bouge, tout bouge. Le problème n'était pas l'exécution, mais l'absence d'un système de pilotage stable."
		},
		pivot: {
			title: "1. Le Pivot de Leadership",
			text: "Nous avons arrêté la course aux features et recentré toute l'équipe sur un seul axe : réduire la dette d'ambiguïté. Cela a permis d'assainir les arbitrages et de recréer un langage commun.",
			quote: "La croissance ne casse pas les équipes. L'ambiguïté, si."
		},
		okr: {
			title: "2. L'Objectif (OKR)",
			intro: "",
			krs: [
				{
					title: "KR1",
					text: "Réduire de 40% les décisions non documentées ou contradictoires."
				},
				{
					title: "KR2",
					text: "Stabiliser les priorités sur des cycles de 4 semaines."
				},
				{
					title: "KR3",
					text: "Clarifier rôles et responsabilités pour chaque squad."
				}
			]
		},
		experiments: {
			title: "3. L'Exécution (Interventions)",
			intro: "",
			list: [
				{
					title: "Rituels d'arbitrage hebdomadaires (Focus Deck)",
					text: ""
				},
				{
					title: "Réécriture de la vision courte (One-Pager)",
					text: ""
				},
				{
					title: "Ateliers de clarification RACI",
					text: ""
				},
				{
					title: "Séquences anti-bruit (protéger les PMs du hors-scope)",
					text: ""
				},
				{
					title: "Recentrage des squads autour d'un seul problème par cycle",
					text: ""
				}
			]
		},
		results: {
			title: "Résultats & Apprentissages",
			text: "La stabilité ne vient pas du process, mais de décisions explicites. Une fois la dette d'ambiguïté réduite, toute l'équipe a retrouvé de la vitesse — sans ajouter de cérémonies ni de frameworks supplémentaires.",
			metrics: [
				{
					value: "6 semaines",
					label: "Équipe stabilisée"
				}
			],
			ctaText: "Discuter de vos enjeux d'équipe"
		}
	},
	{
		slug: "onboarding-activation",
		label: "SaaS B2B",
		title: "Réparer l'activation : comment un onboarding surchargé bloquait toute la valeur perçue.",
		description: "Dans un SaaS B2B, la majorité des utilisateurs n'atteignaient jamais la valeur du produit. Voici comment un travail d'activation ciblé a débloqué l'usage réel.",
		
		heroIntro: "Malgré une acquisition solide, l'activation restait très faible : seuls 22% des utilisateurs atteignaient la valeur clé. L'onboarding était trop long, trop complet, trop théorique. Nous avons reconstruit une activation centrée sur le comportement, pas sur les fonctionnalités.",
		
		problem: {
			title: "Le Diagnostic",
			text: "L'onboarding demandait 12 actions avant de débloquer la première valeur utile. Résultat : chute massive à chaque étape, usage erratique, sentiment de complexité, frustration côté Sales et CS."
		},
		insight: {
			title: "L'Insight Clé",
			text: "Les utilisateurs ayant accompli UNE action spécifique dans les 48h avaient 5x plus de chances d'adopter durablement le produit. Le problème n'était pas le produit : c'était l'ordre dans lequel on le présentait."
		},
		pivot: {
			title: "1. Le Pivot d'Activation",
			text: "Nous avons redéfini l'onboarding non pas autour des features mais autour de la première transformation visible. Toute la séquence a été reconstruite pour amener l'utilisateur à ce moment le plus vite possible.",
			quote: "On n'active pas un utilisateur avec des écrans. On l'active avec un résultat."
		},
		okr: {
			title: "2. L'Objectif (OKR)",
			intro: "",
			krs: [
				{
					title: "KR1",
					text: "Doubler le taux d'activation à 45%."
				},
				{
					title: "KR2",
					text: "Réduire de 60% le temps nécessaire pour atteindre la première valeur."
				},
				{
					title: "KR3",
					text: "Faire passer la fréquence d'usage hebdomadaire de 1,4 à 2,3 sessions."
				}
			]
		},
		experiments: {
			title: "3. L'Exécution (Optimisations)",
			intro: "",
			list: [
				{
					title: "Simplification radicale de l'onboarding (12 → 4 étapes)",
					text: ""
				},
				{
					title: "Séquence guidée centrée sur 1 action clé",
					text: ""
				},
				{
					title: "Messages de contexte (micro-nudges comportementaux)",
					text: ""
				},
				{
					title: "Retrait des écrans non essentiels",
					text: ""
				},
				{
					title: "Activation proactive pour les comptes inactifs tôt",
					text: ""
				}
			]
		},
		results: {
			title: "Résultats & Apprentissages",
			text: "L'usage n'a pas besoin de plus d'écran. Il a besoin de plus de sens. Réduire l'onboarding a permis d'augmenter drastiquement l'adoption et de reconnecter les utilisateurs à la valeur du produit.",
			metrics: [
				{
					value: "+23 points",
					label: "d'activation"
				}
			],
			ctaText: "Discuter de vos enjeux d'activation"
		}
	}
];

