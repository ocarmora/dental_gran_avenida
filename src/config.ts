import { siteDefaults } from "./data/site-data";

const env = import.meta.env;

/**
 * Resolves an internal path against Astro's configured base URL.
 * Use this for every internal href instead of hardcoding the path.
 * The base is set in astro.config.mjs and exposed via import.meta.env.BASE_URL.
 */
const _base = (env.BASE_URL || "/").replace(/\/$/, "") || "/";
export const toHref = (path: string): string =>
  path === "/" ? _base : `${_base}${path}`;

const whatsappPhone = env.PUBLIC_WHATSAPP_PHONE ?? siteDefaults.whatsapp.phone;

export const config = {
  whatsapp: {
    phone: whatsappPhone,
    url: `https://wa.me/${whatsappPhone}`,
    phoneFormatted: (() => {
      const p = whatsappPhone.slice(2);
      return `+56 ${p.replace(/(\d)(\d{4})(\d{4})/, "$1 $2 $3")}`;
    })(),
  },
  contact: {
    email: env.PUBLIC_CONTACT_EMAIL ?? siteDefaults.contact.email,
    phoneLandline:
      env.PUBLIC_PHONE_LANDLINE ?? siteDefaults.contact.phoneLandline,
    phoneLandlineFormatted: siteDefaults.contact.phoneLandlineFormatted,
  },
  social: {
    facebook: env.PUBLIC_FACEBOOK_URL ?? siteDefaults.social.facebook,
    instagram: env.PUBLIC_INSTAGRAM_URL ?? siteDefaults.social.instagram,
  },
  location: {
    mapsUrl: env.PUBLIC_MAPS_URL ?? siteDefaults.location.mapsUrl,
  },
} as const;
