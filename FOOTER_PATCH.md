# Patch pour le Footer — Ajout des liens SEO satellites

## Fichier à modifier
`src/components/Footer.astro`

## Patch à appliquer

Remplacez la section du footer par :

```astro
<footer class="py-12 border-t border-sand/20 dark:border-sand/10 relative z-10 bg-ivory dark:bg-graphite transition-colors" role="contentinfo">
	<div class="max-w-[1400px] mx-auto px-6 md:px-12">
		<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
			<span class="font-sans text-lg flex items-baseline gap-0.5 text-graphite dark:text-ivory">
				<span class="font-medium">Julien</span>
				<span class="font-bold">Brionne</span>
				<span class="text-sand text-2xl leading-none">.</span>
			</span>
			
			<!-- Liens SEO satellites -->
			<nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Liens ressources">
				<a href="/head-of-product-montpellier" class="text-softgray hover:text-sand dark:hover:text-sand-light transition-colors duration-300">Head of Product Montpellier</a>
				<a href="/fractional-head-of-product" class="text-softgray hover:text-sand dark:hover:text-sand-light transition-colors duration-300">Fractional Head of Product</a>
				<a href="/fractional-cpo" class="text-softgray hover:text-sand dark:hover:text-sand-light transition-colors duration-300">Fractional CPO</a>
				<a href="/leadership-produit" class="text-softgray hover:text-sand dark:hover:text-sand-light transition-colors duration-300">Leadership Produit</a>
				<a href="/accompagnement-produit" class="text-softgray hover:text-sand dark:hover:text-sand-light transition-colors duration-300">Accompagnement Produit</a>
				<a href="/diagnostic-produit" class="text-softgray hover:text-sand dark:hover:text-sand-light transition-colors duration-300">Diagnostic Produit</a>
			</nav>
			
			<!-- Réseaux Sociaux -->
			<div class="flex items-center gap-6">
				<a href="https://www.linkedin.com/in/julienbrionne" target="_blank" rel="noopener noreferrer" class="text-softgray hover:text-linkedin transition-colors duration-300 flex items-center justify-center w-6 h-6" aria-label="Profil LinkedIn de Julien Brionne">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
						<path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
					</svg>
				</a>
				<a href="https://substack.com/@productcopilot" target="_blank" rel="noopener noreferrer" class="text-softgray hover:text-substack transition-colors duration-300 flex items-center justify-center w-6 h-6" aria-label="Newsletter Substack de Julien Brionne">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 448 511.471" preserveAspectRatio="xMidYMid meet">
						<path d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>
```

## Notes
- Les liens sont ajoutés dans une navigation discrète entre le logo et les réseaux sociaux
- Style cohérent avec le reste du footer (text-softgray, hover sur sand)
- Responsive : flex-wrap pour mobile, flex-row pour desktop
- Accessibilité : aria-label sur la nav


