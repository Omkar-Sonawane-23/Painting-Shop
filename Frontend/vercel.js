/**
 * Vercel deployment configuration module for a single-page application (SPA).
 * 
 * Configures URL rewrite rules that redirect all incoming requests to `index.html`,
 * enabling client-side routing. This allows frontend routers (e.g., React Router)
 * to handle URL navigation instead of the server returning 404 errors.
 * 
 * @module vercel
 * @type {Object}
 * @property {Array<Object>} rewrites - Array of URL rewrite rules
 * @property {string} rewrites[].source - Regex pattern matching all routes: '/(.*)'
 * @property {string} rewrites[].destination - Target file for all matched routes: '/index.html'
 * 
 * @example
 * // User navigates to: /about
 * // Server rewrites to: /index.html
 * // Frontend router handles the actual /about route rendering
 */
export default {
    rewrites: [
        { source: '/(.*)', destination: '/index.html' }
    ]
};
