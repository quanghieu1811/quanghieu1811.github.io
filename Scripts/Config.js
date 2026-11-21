/*
 * Olympia Controller - online settings. The anon key is meant to be public (it only grants what
 * the database's row-level security allows). NEVER put the service_role key here.
 */
window.OlympiaConfig = {
	/* Cloudflare Turnstile site key for "Yêu cầu một tài khoản" (public, like the anon key). Empty:
	 * Cloudflare's always-pass test key on localhost, and the form refuses to send elsewhere. */
	turnstileSiteKey: '',
	supabaseUrl: 'https://tbnvuchdhkvvibtrhldg.supabase.co',
	supabaseAnonKey: 'sb_publishable_LxW4DNAAGnkJUBPRgzPyRQ_7-6KkWfC'
};
