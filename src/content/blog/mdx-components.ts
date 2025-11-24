import type { MDXComponents } from 'mdx/types';
import FullImage from '../../components/blog/FullImage.astro';
import SideNote from '../../components/blog/SideNote.astro';
import Quote from '../../components/blog/Quote.astro';
import Highlight from '../../components/blog/Highlight.astro';
import BreakSection from '../../components/blog/BreakSection.astro';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		FullImage,
		SideNote,
		Quote,
		Highlight,
		BreakSection,
		...components,
	};
}

