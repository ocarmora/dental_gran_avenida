/**
 * Site configuration from environment variables.
 * Uses PUBLIC_ prefix so values are available at build time.
 * Falls back to defaults when .env is not present.
 */
const env = import.meta.env;

export const config = {
	whatsapp: {
		phone: env.PUBLIC_WHATSAPP_PHONE ?? '56948446632',
		url: `https://wa.me/${env.PUBLIC_WHATSAPP_PHONE ?? '56948446632'}`,
		/** Formatted for display: +56 9 4844 6632 */
		phoneFormatted: (() => {
			const p = (env.PUBLIC_WHATSAPP_PHONE ?? '56948446632').slice(2);
			return `+56 ${p.replace(/(\d)(\d{4})(\d{4})/, '$1 $2 $3')}`;
		})(),
	},
	contact: {
		email: env.PUBLIC_CONTACT_EMAIL ?? 'contacto@dentalgranavenida.cl',
	},
	social: {
		facebook: env.PUBLIC_FACEBOOK_URL ?? 'https://facebook.com/dentalgranavenida',
		instagram: env.PUBLIC_INSTAGRAM_URL ?? 'https://instagram.com/dentalgranavenida',
	},
	location: {
		mapsUrl: env.PUBLIC_MAPS_URL ?? 'https://maps.app.goo.gl/ZuKAfvAUwmX4s5j78',
	},
} as const;
