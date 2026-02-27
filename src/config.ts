const env = import.meta.env;

/**
 * Resolves an internal path against Astro's configured base URL.
 * Use this for every internal href instead of hardcoding the path.
 * The base is set in astro.config.mjs and exposed via import.meta.env.BASE_URL.
 */
const _base = (env.BASE_URL || '/').replace(/\/$/, '') || '/';
export const toHref = (path: string): string =>
	path === '/' ? _base : `${_base}${path}`;

export const config = {
	whatsapp: {
		phone: env.PUBLIC_WHATSAPP_PHONE ?? '56948446632',
		url: `https://wa.me/${env.PUBLIC_WHATSAPP_PHONE ?? '56948446632'}`,
		phoneFormatted: (() => {
			const p = (env.PUBLIC_WHATSAPP_PHONE ?? '56948446632').slice(2);
			return `+56 ${p.replace(/(\d)(\d{4})(\d{4})/, '$1 $2 $3')}`;
		})(),
	},
	contact: {
		email: env.PUBLIC_CONTACT_EMAIL ?? 'contacto@dentalgranavenida.cl',
		phoneLandline: env.PUBLIC_PHONE_LANDLINE ?? '56225272911',
		phoneLandlineFormatted: '+56 2 2527 2911',
	},
	social: {
		facebook: env.PUBLIC_FACEBOOK_URL ?? 'https://facebook.com/dentalgranavenida',
		instagram: env.PUBLIC_INSTAGRAM_URL ?? 'https://instagram.com/dentalgranavenida',
	},
	location: {
		mapsUrl: env.PUBLIC_MAPS_URL ?? 'https://maps.app.goo.gl/ZuKAfvAUwmX4s5j78',
	},
} as const;
