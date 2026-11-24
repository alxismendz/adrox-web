export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export const primaryCta: NavItem = {
  label: 'Hablemos de tu proyecto',
  href: '/contacto',
};
