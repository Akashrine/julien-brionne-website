// Import des utilitaires GA4 (sera disponible après build)
// Les fonctions trackEvent sont définies dans src/utils/analytics.ts

// Gestion des animations fade-in-up au scroll et autres fonctionnalités
document.addEventListener('DOMContentLoaded', () => {
	// ===== GOOGLE ANALYTICS 4 - TRACKING AUTOMATIQUE DES PAGES =====
	// Astro étant une SPA-like, on track les changements de page
	if (typeof window !== 'undefined' && window.gtag) {
		// Track la page initiale
		window.gtag('event', 'page_view', {
			page_path: window.location.pathname,
			page_title: document.title
		});
		
		// Track les changements d'URL (si navigation client-side)
		let lastPath = window.location.pathname;
		const observer = new MutationObserver(() => {
			if (window.location.pathname !== lastPath) {
				lastPath = window.location.pathname;
				window.gtag('event', 'page_view', {
					page_path: lastPath,
					page_title: document.title
				});
			}
		});
		
		// Observer les changements dans le DOM (pour détecter les navigations)
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}
	// ===== ANIMATIONS FADE-IN-UP =====
	const observerOptions = { 
		root: null, 
		rootMargin: '0px', 
		threshold: 0.1 
	};
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);
	
	document.querySelectorAll('.fade-in-up').forEach((el) => { 
		observer.observe(el); 
	});
	
	// Track les sections visibles dans GA4 (optionnel, pour analytics avancés)
	if (typeof window !== 'undefined' && window.gtag) {
		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id || entry.target.getAttribute('aria-labelledby') || 'unknown';
					const sectionName = entry.target.querySelector('h1, h2')?.textContent?.trim() || sectionId;
					
					// Track seulement une fois par section
					if (!entry.target.dataset.gaTracked) {
						entry.target.dataset.gaTracked = 'true';
						window.gtag('event', 'view_section', {
							section_name: sectionName,
							section_id: sectionId,
							event_category: 'engagement'
						});
					}
				}
			});
		}, { threshold: 0.5 });
		
		// Observer les sections principales
		document.querySelectorAll('section[id], section[aria-labelledby]').forEach(section => {
			sectionObserver.observe(section);
		});
	}

	// ===== GESTIONNAIRE LEMCAL POPUP + TRACKING GA4 =====
	const lemcalLinks = document.querySelectorAll('[data-lemcal-popup]');
	
	lemcalLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const url = link.getAttribute('href');
			const linkText = link.textContent.trim();
			const linkLocation = link.closest('section')?.id || 'unknown';
			
			// Track l'événement CTA dans GA4
			if (typeof window !== 'undefined' && window.gtag) {
				window.gtag('event', 'click_cta', {
					cta_location: linkLocation,
					cta_text: linkText,
					cta_url: url,
					event_category: 'engagement',
					event_label: 'lemcal_popup'
				});
			}
			
			const popup = window.open(
				url,
				'lemcal',
				'width=600,height=700,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no'
			);
			
			// Si la popup est bloquée, ouvrir dans un nouvel onglet
			if (!popup || popup.closed || typeof popup.closed === 'undefined') {
				window.open(url, '_blank');
			}
		});
	});

	// ===== NAVBAR - TOGGLE THÈME =====
	const toggleBtn = document.getElementById('theme-toggle');
	const darkIcon = document.getElementById('theme-toggle-dark-icon');
	const lightIcon = document.getElementById('theme-toggle-light-icon');
	const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
	const darkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
	const lightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

	// Fonction pour mettre à jour toutes les icônes
	function updateThemeIcons(isDark) {
		if (isDark) {
			lightIcon?.classList.remove('hidden');
			darkIcon?.classList.add('hidden');
			lightIconMobile?.classList.remove('hidden');
			darkIconMobile?.classList.add('hidden');
		} else {
			darkIcon?.classList.remove('hidden');
			lightIcon?.classList.add('hidden');
			darkIconMobile?.classList.remove('hidden');
			lightIconMobile?.classList.add('hidden');
		}
	}

	if (toggleBtn && darkIcon && lightIcon) {
		// Initialiser l'icône selon le thème actuel
		const isDark = localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		updateThemeIcons(isDark);

		// Fonction pour mettre à jour le favicon
		function updateFavicon(isDark) {
			const favicon = document.querySelector('link[rel="icon"]');
			if (favicon) {
				favicon.href = isDark ? '/favicons/favicon-dark.webp' : '/favicons/favicon-light.webp';
			}
		}

		// Fonction pour mettre à jour les images selon le thème
		function updateThemeImages(isDark) {
			document.querySelectorAll('.theme-image').forEach(img => {
				const lightSrc = img.getAttribute('data-light-src');
				const darkSrc = img.getAttribute('data-dark-src');
				if (lightSrc && darkSrc) {
					// Mettre à jour la source de l'image
					img.src = isDark ? darkSrc : lightSrc;
					
					// Mettre à jour la source dans le <source> parent si présent
					const picture = img.closest('picture');
					if (picture) {
						const source = picture.querySelector('source[type="image/webp"]');
						if (source) {
							source.srcset = isDark ? darkSrc : lightSrc;
						}
					}
				}
			});
		}

		// Gestion du toggle desktop
		toggleBtn.addEventListener('click', function() {
			const isCurrentlyDark = document.documentElement.classList.contains('dark');
			const newIsDark = !isCurrentlyDark;
			
			updateThemeIcons(newIsDark);
			
			if (newIsDark) {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
			} else {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('color-theme', 'light');
			}
			
			updateFavicon(newIsDark);
			updateThemeImages(newIsDark);
			
			// Track le changement de thème dans GA4
			if (typeof window !== 'undefined' && window.gtag) {
				window.gtag('event', 'theme_change', {
					theme: newIsDark ? 'dark' : 'light',
					event_category: 'preferences'
				});
			}
		});
		
		// Gestion du toggle mobile (synchronisé avec desktop)
		if (toggleBtnMobile) {
			toggleBtnMobile.addEventListener('click', function() {
				// Déclencher le toggle desktop pour synchroniser
				toggleBtn.click();
			});
		}
		
		// Observer les changements de thème pour synchroniser les icônes
		const themeObserver = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			updateThemeIcons(isDark);
		});
		themeObserver.observe(document.documentElement, { 
			attributes: true, 
			attributeFilter: ['class'] 
		});
		
		// Initialiser les images au chargement selon le thème actuel
		const isDarkOnLoad = document.documentElement.classList.contains('dark');
		updateThemeImages(isDarkOnLoad);
	}

	// ===== NAVBAR - SCROLL ET LOGO =====
	const navbar = document.getElementById('navbar');
	const navbarInner = document.getElementById('navbar-inner');
	const logoText = document.getElementById('logo-text');
	const logoLight = document.getElementById('logo-light');
	const logoDark = document.getElementById('logo-dark');

	if (navbar && navbarInner && logoText && logoLight && logoDark) {
		// Fonction pour mettre à jour le logo selon le thème
		function updateLogoTheme(isDark) {
			if (isDark) {
				logoLight.classList.add('hidden');
				logoDark.classList.remove('hidden');
			} else {
				logoLight.classList.remove('hidden');
				logoDark.classList.add('hidden');
			}
		}
		
		// Initialiser le logo selon le thème
		const isDarkMode = document.documentElement.classList.contains('dark');
		updateLogoTheme(isDarkMode);
		
		function toggleLogo(showLogo) {
			if (showLogo) {
				// Afficher le logo et masquer le texte
				logoText.classList.add('opacity-0', 'scale-0', 'absolute');
				const isDark = document.documentElement.classList.contains('dark');
				if (isDark) {
					logoDark.classList.remove('opacity-0', 'scale-0');
					logoDark.classList.add('opacity-100', 'scale-100', 'relative');
					logoLight.classList.add('opacity-0', 'scale-0');
					logoLight.classList.remove('opacity-100', 'scale-100', 'relative');
				} else {
					logoLight.classList.remove('opacity-0', 'scale-0');
					logoLight.classList.add('opacity-100', 'scale-100', 'relative');
					logoDark.classList.add('opacity-0', 'scale-0');
					logoDark.classList.remove('opacity-100', 'scale-100', 'relative');
				}
			} else {
				// Masquer le logo et afficher le texte
				logoText.classList.remove('opacity-0', 'scale-0', 'absolute');
				logoLight.classList.add('opacity-0', 'scale-0');
				logoLight.classList.remove('opacity-100', 'scale-100', 'relative');
				logoDark.classList.add('opacity-0', 'scale-0');
				logoDark.classList.remove('opacity-100', 'scale-100', 'relative');
			}
		}
		
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				navbar.classList.add('bg-ivory/80', 'dark:bg-graphite/80', 'backdrop-blur-sm', 'shadow-sm', 'border-sand/10');
				navbar.classList.remove('bg-transparent', 'border-transparent');
				navbarInner.classList.remove('py-6');
				navbarInner.classList.add('py-3');
				toggleLogo(true);
			} else {
				navbar.classList.remove('bg-ivory/80', 'dark:bg-graphite/80', 'backdrop-blur-sm', 'shadow-sm', 'border-sand/10');
				navbar.classList.add('bg-transparent', 'border-transparent');
				navbarInner.classList.remove('py-3');
				navbarInner.classList.add('py-6');
				toggleLogo(false);
			}
		});
		
		// Mettre à jour le logo quand le thème change
		const themeObserver = new MutationObserver(() => {
			if (window.scrollY > 50) {
				toggleLogo(true);
			}
		});
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
});

