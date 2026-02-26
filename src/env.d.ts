/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_WHATSAPP_PHONE?: string;
	readonly PUBLIC_CONTACT_EMAIL?: string;
	readonly PUBLIC_FACEBOOK_URL?: string;
	readonly PUBLIC_INSTAGRAM_URL?: string;
	readonly PUBLIC_MAPS_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
