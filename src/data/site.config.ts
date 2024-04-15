interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Vlank', // Site author
	title: 'Quaestionar', // Site title.
	description: 'Quaestionar es un blog informativo que busca algo', // Description to display in the meta tags
	lang: 'es-AR',
	ogLocale: 'es-AR',
	shareMessage: 'Comparte este blog', // Message to share a post on social media
	paginationSize: 12 // Number of posts per page
}
