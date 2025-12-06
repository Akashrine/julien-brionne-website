/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				ivory: {
					DEFAULT: '#FAF9F6',
					dim: '#E0D4C4',
					dark: '#EBE9E4'
				},
				graphite: {
					DEFAULT: '#121212',
					light: '#1E1E1E',
					lighter: '#2A2A2A'
				},
				sand: {
					DEFAULT: '#C6A676',
					light: '#D4BC94',
					dark: '#A88B5E'
				},
				softgray: '#9A8B7A',
				warmgray: {
					200: '#D4C4B0',
					300: '#C9B8A5',
					400: '#B8A896',
					500: '#9A8B7A',
				},
				linkedin: '#0077B5',
				substack: '#FF6719',
			},
			fontFamily: {
				serif: ['"Playfair Display"', 'serif'],
				sans: ['"Inter"', 'sans-serif'],
			},
			transitionDelay: {
				'100': '0.1s',
				'200': '0.2s',
				'300': '0.3s',
				'400': '0.4s',
				'500': '0.5s',
			},
			backgroundImage: {
				'hero-split': 'linear-gradient(to right, #FAF9F6 60%, #F2F1ED 60%)',
				'hero-split-dark': 'linear-gradient(to right, #121212 60%, #1E1E1E 60%)',
				'grid-pattern': 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(198, 166, 118, 0.15) 19px, rgba(198, 166, 118, 0.15) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(198, 166, 118, 0.15) 19px, rgba(198, 166, 118, 0.15) 20px)',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

