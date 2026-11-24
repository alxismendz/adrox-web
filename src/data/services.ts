import type { IconName } from '@/components/ui/icons';

/**
 * Áreas de especialización de ADROX.
 * Para añadir un servicio, agrega un objeto a este arreglo; la interfaz se
 * actualiza automáticamente en Inicio y en /servicios.
 *
 * Nota editorial: son áreas de trabajo y capacidades técnicas de la iniciativa.
 * No deben redactarse como experiencia comercial comprobada mientras no existan
 * proyectos con clientes que lo respalden.
 */
export interface Service {
  id: string;
  /** Número visible en la interfaz (01, 02…). */
  index: string;
  title: string;
  /** Subtítulo corto en español. */
  subtitle: string;
  icon: IconName;
  summary: string;
  description: string;
  applications: string[];
  problems: string[];
  /** Slugs de proyectos de ADROX relacionados con esta área (ver projects.ts). */
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    id: 'software-engineering',
    index: '01',
    title: 'Software Engineering',
    subtitle: 'Ingeniería de software',
    icon: 'code',
    summary:
      'Desarrollo de plataformas web, sistemas empresariales, aplicaciones y soluciones personalizadas.',
    description:
      'Diseñamos y construimos software a medida con arquitecturas modulares, APIs bien definidas y bases de datos estructuradas, pensado para mantenerse y crecer junto a la operación.',
    applications: [
      'Plataformas web y portales internos',
      'Sistemas de gestión empresarial',
      'Aplicaciones móviles y multiplataforma',
      'APIs REST e integraciones entre sistemas',
    ],
    problems: [
      'Procesos que dependen de hojas de cálculo dispersas',
      'Información duplicada entre áreas o herramientas',
      'Herramientas genéricas que no se ajustan a la operación',
      'Sistemas difíciles de mantener o de ampliar',
    ],
    relatedProjects: ['costify'],
  },
  {
    id: 'ai-data',
    index: '02',
    title: 'AI & Data',
    subtitle: 'Inteligencia artificial y datos',
    icon: 'scan',
    summary:
      'Inteligencia artificial, visión artificial, procesamiento de datos, modelos de reconocimiento y automatización inteligente.',
    description:
      'Aplicamos visión artificial, aprendizaje automático y procesamiento de datos para extraer información útil de imágenes, video y registros operativos.',
    applications: [
      'Análisis de imágenes y video',
      'Estimación de postura y análisis de movimiento',
      'Modelos de reconocimiento y clasificación',
      'Procesamiento y preparación de datos',
    ],
    problems: [
      'Inspecciones visuales manuales y repetitivas',
      'Datos acumulados que no se analizan',
      'Evaluaciones que dependen solo de la observación subjetiva',
      'Tareas de clasificación que consumen tiempo del equipo',
    ],
    relatedProjects: ['powerlifting-ai', 'sign-language-translator'],
  },
  {
    id: 'smart-systems',
    index: '03',
    title: 'Smart Systems',
    subtitle: 'Sistemas inteligentes e IoT',
    icon: 'cpu',
    summary:
      'Internet de las cosas, electrónica, sensores, monitoreo remoto e integración de sistemas.',
    description:
      'Integramos electrónica, sensores, comunicaciones y software para capturar variables físicas, transmitirlas y convertirlas en paneles de monitoreo y alertas.',
    applications: [
      'Nodos de sensores y adquisición de datos',
      'Monitoreo remoto de variables ambientales',
      'Comunicación entre dispositivos (MQTT)',
      'Paneles de visualización en tiempo real',
    ],
    problems: [
      'Variables críticas que se miden manualmente',
      'Falta de visibilidad sobre instalaciones remotas',
      'Equipos y sensores que no comparten información',
      'Decisiones operativas sin datos históricos',
    ],
    relatedProjects: ['smart-agriculture', 'sdr-modulation-classification'],
  },
  {
    id: 'digital-transformation',
    index: '04',
    title: 'Digital Transformation',
    subtitle: 'Transformación digital',
    icon: 'workflow',
    summary:
      'Optimización de procesos, automatización empresarial, integración de herramientas y digitalización de operaciones.',
    description:
      'Analizamos procesos existentes para identificar dónde la tecnología aporta valor real: automatizar tareas, conectar herramientas y digitalizar operaciones de forma gradual.',
    applications: [
      'Levantamiento y rediseño de procesos',
      'Automatización de flujos de trabajo',
      'Integración de herramientas existentes',
      'Digitalización de registros y formularios',
    ],
    problems: [
      'Tareas administrativas repetitivas',
      'Procesos en papel o sin trazabilidad',
      'Herramientas que no se comunican entre sí',
      'Dificultad para escalar la operación',
    ],
    relatedProjects: [],
  },
];
