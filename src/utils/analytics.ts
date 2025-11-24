/**
 * Utilitaires Google Analytics 4
 * Fonctions pour tracker les événements de manière type-safe
 */

declare global {
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

/**
 * Initialise le dataLayer si nécessaire
 */
export function initDataLayer() {
	if (typeof window !== 'undefined' && !window.dataLayer) {
		window.dataLayer = [];
	}
}

/**
 * Fonction pour tracker un événement GA4
 * 
 * @param eventName - Nom de l'événement (ex: 'click_cta', 'view_section')
 * @param params - Paramètres additionnels de l'événement
 * 
 * @example
 * trackEvent('click_cta', {
 *   cta_location: 'hero',
 *   cta_text: 'Discuter de votre situation'
 * });
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
	if (typeof window === 'undefined' || !window.gtag) {
		console.warn('GA4 not loaded, event not tracked:', eventName);
		return;
	}

	try {
		window.gtag('event', eventName, params || {});
	} catch (error) {
		console.error('Error tracking event:', error);
	}
}

/**
 * Track un clic sur un CTA
 */
export function trackCTA(location: string, text: string, url?: string) {
	trackEvent('click_cta', {
		cta_location: location,
		cta_text: text,
		cta_url: url || window.location.href,
	});
}

/**
 * Track une vue de section
 */
export function trackSectionView(sectionName: string) {
	trackEvent('view_section', {
		section_name: sectionName,
	});
}

/**
 * Track un clic sur un lien externe
 */
export function trackExternalLink(url: string, linkText?: string) {
	trackEvent('click_external_link', {
		link_url: url,
		link_text: linkText,
	});
}

/**
 * Track un changement de thème (dark/light)
 */
export function trackThemeChange(theme: 'light' | 'dark') {
	trackEvent('theme_change', {
		theme: theme,
	});
}

