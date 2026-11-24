/**
 * Registro central de iconos. Los datos (services.ts, technologies.ts…) solo
 * referencian nombres; así se cambia la iconografía sin tocar el contenido.
 * Iconos: Lucide (https://lucide.dev), licencia ISC. Los iconos de marca
 * (LinkedIn, GitHub…) se dibujan aquí porque Lucide ya no los incluye.
 */
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  CircleDashed,
  Clock,
  Cloud,
  CodeXml,
  Compass,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Image,
  Info,
  Layers,
  Mail,
  Menu,
  Phone,
  RadioTower,
  ScanEye,
  Search,
  Send,
  TrendingUp,
  Workflow,
  X,
} from '@lucide/astro';

export const lucideIcons = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'chevron-down': ChevronDown,
  check: CircleCheck,
  pending: CircleDashed,
  clock: Clock,
  cloud: Cloud,
  code: CodeXml,
  compass: Compass,
  cpu: Cpu,
  database: Database,
  external: ExternalLink,
  branch: GitBranch,
  image: Image,
  info: Info,
  layers: Layers,
  mail: Mail,
  menu: Menu,
  phone: Phone,
  radio: RadioTower,
  scan: ScanEye,
  search: Search,
  send: Send,
  trending: TrendingUp,
  workflow: Workflow,
  close: X,
} as const;

/** Iconos de marca en estilo de trazo, coherentes con Lucide (viewBox 24). */
export const brandIcons = {
  linkedin: [
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z',
    'M2 9h4v12H2z',
    'M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  ],
  github: [
    'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
    'M9 18c-4.51 2-5-2-7-2',
  ],
  instagram: [
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z',
    'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
    'M17.5 6.5h.01',
  ],
  youtube: [
    'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17',
    'm10 15 5-3-5-3z',
  ],
} as const;

export type LucideIconName = keyof typeof lucideIcons;
export type BrandIconName = keyof typeof brandIcons;
export type IconName = LucideIconName | BrandIconName;
