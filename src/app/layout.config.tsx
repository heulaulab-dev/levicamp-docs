import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * LeviCamp Documentation - Direct access to docs without home page
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: <>⛺️ LeviCamp Docs</>,
		transparentMode: 'none',
		url: '/docs',
	},
	// Tidak ada navigation links tambahan, fokus pada docs
	links: [],
};
