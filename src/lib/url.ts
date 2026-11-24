/** Normaliza una ruta quitando la barra final (excepto la raíz). */
export const normalizePath = (path: string): string =>
  path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

/** Indica si un enlace de navegación corresponde a la ruta actual. */
export const isActive = (currentPath: string, href: string): boolean => {
  const current = normalizePath(currentPath);
  if (href === '/') return current === '/';
  return current === href || current.startsWith(`${href}/`);
};

/** Construye una URL absoluta a partir de la URL base del sitio. */
export const absoluteUrl = (path: string, site: URL | undefined): string =>
  new URL(path, site ?? 'https://adrox.example.com').toString();
