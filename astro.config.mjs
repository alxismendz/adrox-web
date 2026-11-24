// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * URL pública del sitio. Se usa para el sitemap, las URL canónicas y Open Graph.
 * Configúrala con la variable de entorno SITE_URL (por ejemplo, en el workflow de
 * GitHub Actions) o cambia el valor por defecto cuando tengas el dominio definitivo.
 * PENDIENTE: reemplazar por el dominio real de ADROX.
 */
const SITE_URL = process.env.SITE_URL || 'https://adrox.example.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Cada página se genera como carpeta con index.html (/servicios/index.html),
    // el formato más compatible. Azure Static Web Apps la sirve como /servicios
    // gracias a "trailingSlash": "never" en staticwebapp.config.json.
    format: 'directory',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
