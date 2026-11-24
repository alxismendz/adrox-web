import type { IconName } from '@/components/ui/icons';

export interface MethodStep {
  index: string;
  title: string;
  summary: string;
  detail: string;
  icon: IconName;
}

export const methodology: MethodStep[] = [
  {
    index: '01',
    title: 'Análisis',
    summary: 'Comprender el problema y los objetivos.',
    detail: 'Levantamos el contexto, los usuarios, las restricciones y los criterios que definirán el éxito.',
    icon: 'search',
  },
  {
    index: '02',
    title: 'Diseño',
    summary: 'Definir arquitectura y solución tecnológica.',
    detail: 'Seleccionamos componentes, tecnologías e interfaces, y documentamos la arquitectura antes de construir.',
    icon: 'compass',
  },
  {
    index: '03',
    title: 'Desarrollo',
    summary: 'Construir e integrar los componentes.',
    detail: 'Implementamos por iteraciones cortas, integrando software, datos y hardware cuando el proyecto lo requiere.',
    icon: 'layers',
  },
  {
    index: '04',
    title: 'Validación',
    summary: 'Realizar pruebas y comprobar el funcionamiento.',
    detail: 'Probamos cada componente y el sistema completo frente a los objetivos definidos en el análisis.',
    icon: 'check',
  },
  {
    index: '05',
    title: 'Evolución',
    summary: 'Mejorar y preparar la solución para crecer.',
    detail: 'Documentamos, medimos y planificamos mejoras para que la solución pueda ampliarse con el tiempo.',
    icon: 'trending',
  },
];
