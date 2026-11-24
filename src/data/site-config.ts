/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN CENTRAL DEL SITIO ADROX
 * ─────────────────────────────────────────────────────────────────────────────
 *  Todos los datos de contacto, enlaces y perfiles se editan SOLO en este archivo.
 *
 *  Convención de placeholders:
 *    - Un string vacío ('') significa "PENDIENTE DE CONFIGURAR".
 *    - Los elementos con valor vacío NO se muestran en el sitio (ni en los
 *      metadatos ni en los datos estructurados), para no publicar datos falsos.
 *    - Busca "PENDIENTE" en el proyecto para ver todo lo que falta completar.
 *
 *  Seguridad: este archivo se incluye en el frontend. No coloques aquí claves
 *  API, tokens ni contraseñas.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface SocialLink {
  label: string;
  /** URL completa. PENDIENTE: vacío = no se muestra. */
  url: string;
  icon: 'linkedin' | 'github' | 'instagram' | 'youtube';
}

export interface FounderProfile {
  /** PENDIENTE: nombre completo del fundador. */
  name: string;
  /** Cargo dentro de ADROX. */
  role: string;
  /**
   * PENDIENTE: ruta de la fotografía dentro de /public (por ejemplo,
   * '/images/team/fundador.jpg'). Usa una imagen cuadrada de al menos 800×800 px,
   * optimizada en WebP o JPG (< 200 KB).
   */
  photo: string;
  /** PENDIENTE: perfil profesional redactado por el fundador (1–3 párrafos). */
  bio: string[];
  /** PENDIENTE: especialidades reales del fundador. */
  specialties: string[];
  /** PENDIENTE: URL del perfil de LinkedIn. */
  linkedin: string;
  /** PENDIENTE: URL del perfil de GitHub. */
  github: string;
}

export const siteConfig = {
  name: 'ADROX',
  legalName: 'ADROX',
  tagline: 'Convertimos ideas en soluciones tecnológicas.',
  description:
    'ADROX es una iniciativa de ingeniería digital que diseña y desarrolla software, inteligencia artificial y sistemas tecnológicos para resolver problemas empresariales, operativos e industriales en Ecuador y Latinoamérica.',
  valueProposition:
    'Desarrollamos soluciones tecnológicas que transforman desafíos empresariales en sistemas funcionales, inteligentes y escalables.',
  locale: 'es_EC',
  lang: 'es',
  /** Mercado objetivo (no es una dirección física). */
  region: 'Ecuador y Latinoamérica',

  /** Imagen por defecto para Open Graph (1200×630). */
  ogImage: '/images/og/adrox-og.png',

  contact: {
    /**
     * PENDIENTE: correo de contacto real (por ejemplo, contacto@tudominio.com).
     * Mientras esté vacío, el formulario mostrará que el canal está pendiente de
     * configuración y NO permitirá enviar.
     */
    email: 'adroxsolution@gmail.com',
    /** PENDIENTE (opcional): teléfono o WhatsApp en formato internacional. Vacío = oculto. */
    phone: '',
    /**
     * PENDIENTE (opcional): endpoint HTTPS de un servicio de formularios
     * (Formspree, Azure Functions, Power Automate, etc.) que acepte POST con
     * datos de formulario y responda 2xx al recibirlos.
     *  - Si está definido, el formulario se envía a ese endpoint y solo muestra
     *    éxito si el servidor responde correctamente.
     *  - Si está vacío, el formulario usa "mailto:" con el correo anterior.
     */
    formEndpoint: '',
    /** Tiempo de respuesta orientativo que se muestra en Contacto. Vacío = oculto. */
    responseTime: '',
  },

  /** PENDIENTE: completa las URL. Las vacías no se muestran. */
  social: [
    { label: 'LinkedIn', url: '', icon: 'linkedin' },
    { label: 'GitHub', url: '', icon: 'github' },
    { label: 'Instagram', url: '', icon: 'instagram' },
    { label: 'YouTube', url: '', icon: 'youtube' },
  ] satisfies SocialLink[] as SocialLink[],

  founder: {
    name: '',
    role: 'Fundador',
    photo: '',
    bio: [],
    specialties: [],
    linkedin: '',
    github: '',
  } satisfies FounderProfile as FounderProfile,
};

/** Devuelve true si un valor de configuración ya fue completado. */
export const isConfigured = (value: string | undefined | null): value is string =>
  typeof value === 'string' && value.trim().length > 0;

/** Redes sociales con URL configurada. */
export const activeSocialLinks = (): SocialLink[] =>
  siteConfig.social.filter((s) => isConfigured(s.url));
