/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTAFOLIO DE PROYECTOS DE ADROX
 * ─────────────────────────────────────────────────────────────────────────────
 *  Para añadir un proyecto nuevo:
 *    1. Copia uno de los objetos del arreglo `projects` y cambia el `slug`.
 *    2. Completa los campos. Los campos opcionales vacíos se muestran en el caso
 *       de estudio como "Pendiente de documentar" en lugar de inventar contenido.
 *    3. (Opcional) Guarda capturas en /public/images/projects/<slug>/ y
 *       regístralas en `evidence`.
 *  Las tarjetas, el filtro y la página /proyectos/<slug> se generan solos.
 *
 *  Regla editorial: no publicar métricas, precisiones, clientes ni resultados
 *  que no estén documentados y verificados.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type ProjectStatus = 'in-development' | 'academic' | 'prototype' | 'experimental';

export type ProjectCategory = 'software' | 'ai' | 'iot' | 'telecom';

/** Variante de ilustración abstracta usada en tarjetas y portadas. */
export type ProjectVisual = 'modules' | 'pose' | 'nodes' | 'grid' | 'wave';

export interface ArchitectureLayer {
  title: string;
  items: string[];
}

export interface EvidenceItem {
  /** Ruta dentro de /public, por ejemplo '/images/projects/costify/panel.webp'. */
  src: string;
  /** Texto alternativo descriptivo (obligatorio por accesibilidad). */
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  name: string;
  /** Categoría tal como se muestra. */
  categoryLabel: string;
  /** Categoría normalizada para el filtro. */
  category: ProjectCategory;
  status: ProjectStatus;
  /** Texto de estado tal como lo define ADROX. */
  statusLabel: string;
  /** Resumen de una o dos frases para tarjetas y SEO. */
  summary: string;
  /** Descripción oficial del proyecto. */
  description: string;
  technologies: string[];
  visual: ProjectVisual;
  featured: boolean;

  // ── Caso de estudio (campos opcionales: vacío = "pendiente de documentar") ──
  problem?: string;
  objective?: string;
  solution?: string;
  /** Alcance o componentes documentados del proyecto. */
  scope?: { title: string; items: string[] };
  architecture?: {
    layers: ArchitectureLayer[];
    /** Aclaración sobre el nivel de detalle de la arquitectura. */
    note?: string;
  };
  /** Aclaraciones importantes (limitaciones, alcance de la validación, etc.). */
  notes?: { title: string; body: string }[];
  evidence: EvidenceItem[];
  /** PENDIENTE: URL del repositorio público, si existe. */
  repositoryUrl: string;
  /** PENDIENTE: URL de una demostración, si existe. */
  demoUrl: string;
}

export const statusTone: Record<ProjectStatus, 'teal' | 'bronze' | 'navy'> = {
  'in-development': 'teal',
  prototype: 'navy',
  academic: 'bronze',
  experimental: 'bronze',
};

export const categoryLabels: Record<ProjectCategory, string> = {
  software: 'Software Engineering',
  ai: 'AI / Computer Vision',
  iot: 'IoT / Smart Systems',
  telecom: 'Telecomunicaciones',
};

const ARCH_NOTE =
  'Arquitectura descrita a partir de los componentes y tecnologías del proyecto. Se completará con diagramas y detalles de implementación.';

export const projects: Project[] = [
  {
    slug: 'costify',
    name: 'Costify',
    categoryLabel: 'Software Engineering',
    category: 'software',
    status: 'in-development',
    statusLabel: 'En desarrollo',
    summary:
      'Plataforma modular para la gestión y el análisis de costos empresariales, inventarios, productos y operaciones.',
    description:
      'Plataforma modular orientada a facilitar la gestión y análisis de costos empresariales, con funcionalidades relacionadas con inventarios, productos, operaciones y datos de negocio.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Arquitectura REST'],
    visual: 'modules',
    featured: true,
    problem:
      'La información de costos, inventarios y operaciones suele gestionarse en herramientas separadas, lo que dificulta conocer con claridad cuánto cuesta producir y operar, y tomar decisiones con datos consolidados.',
    objective:
      'Centralizar la gestión de costos, inventarios, productos y operaciones en una plataforma modular que facilite el análisis de los datos del negocio.',
    solution:
      'Una aplicación cliente desarrollada con Flutter que consume una API REST construida con Python y FastAPI, respaldada por una base de datos PostgreSQL y empaquetada en contenedores Docker para simplificar su despliegue.',
    scope: {
      title: 'Ámbitos funcionales',
      items: ['Costos empresariales', 'Inventarios', 'Productos', 'Operaciones', 'Datos de negocio'],
    },
    architecture: {
      layers: [
        { title: 'Cliente', items: ['Aplicación Flutter'] },
        { title: 'Servicios', items: ['API REST', 'Python · FastAPI'] },
        { title: 'Datos', items: ['PostgreSQL'] },
        { title: 'Infraestructura', items: ['Contenedores Docker'] },
      ],
      note: ARCH_NOTE,
    },
    evidence: [],
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    slug: 'powerlifting-ai',
    name: 'Powerlifting AI',
    categoryLabel: 'Artificial Intelligence / Computer Vision',
    category: 'ai',
    status: 'academic',
    statusLabel: 'Proyecto académico y desarrollo experimental',
    summary:
      'Evaluación técnica de sentadilla, press de banca y peso muerto mediante visión artificial y estimación de puntos articulares.',
    description:
      'Sistema de evaluación técnica de movimientos de powerlifting mediante visión artificial y estimación de puntos articulares.',
    technologies: ['Python', 'Computer Vision', 'Pose Estimation', 'Procesamiento de video', 'Variables cinemáticas'],
    visual: 'pose',
    featured: true,
    problem:
      'La evaluación técnica de los movimientos de powerlifting depende en gran medida de la observación directa, lo que dificulta registrar, describir y comparar la ejecución de forma sistemática.',
    objective:
      'Explorar el uso de la visión artificial y la estimación de puntos articulares para describir la ejecución técnica de los tres movimientos de competencia a partir de video.',
    solution:
      'Procesamiento de video para estimar los puntos articulares del atleta y calcular variables cinemáticas que describen la ejecución de cada movimiento.',
    scope: {
      title: 'Movimientos analizados',
      items: ['Sentadilla', 'Press de banca', 'Peso muerto'],
    },
    architecture: {
      layers: [
        { title: 'Entrada', items: ['Video del movimiento'] },
        { title: 'Visión artificial', items: ['Estimación de puntos articulares'] },
        { title: 'Análisis', items: ['Variables cinemáticas'] },
        { title: 'Salida', items: ['Evaluación técnica del movimiento'] },
      ],
      note: ARCH_NOTE,
    },
    notes: [
      {
        title: 'Alcance',
        body: 'Proyecto académico en fase experimental. No se presenta como una herramienta validada de juzgamiento ni de evaluación profesional.',
      },
    ],
    evidence: [],
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    slug: 'smart-agriculture',
    name: 'Smart Agriculture',
    categoryLabel: 'IoT / Smart Systems',
    category: 'iot',
    status: 'prototype',
    statusLabel: 'Prototipo tecnológico desarrollado',
    summary:
      'Monitoreo de cultivos con nodos electrónicos y sensores que recopilan variables ambientales y condiciones del suelo.',
    description:
      'Sistema de monitoreo de cultivos mediante nodos electrónicos y sensores para recopilar variables ambientales y condiciones del suelo.',
    technologies: ['ESP32', 'DHT22', 'FC-28', 'LDR', 'MQTT', 'Mosquitto', 'Node-RED', 'InfluxDB', 'Grafana', 'Orange Pi'],
    visual: 'nodes',
    featured: true,
    problem:
      'Las condiciones ambientales y del suelo de un cultivo cambian a lo largo del día y, cuando se registran manualmente, se pierde continuidad y contexto para tomar decisiones.',
    objective:
      'Recopilar de forma continua variables ambientales y de suelo mediante nodos electrónicos, y centralizarlas para su almacenamiento y visualización.',
    solution:
      'Nodos basados en ESP32 con sensores de temperatura y humedad del aire (DHT22), humedad del suelo (FC-28) y luminosidad (LDR) que publican sus lecturas por MQTT. Los datos se procesan con Node-RED, se almacenan en InfluxDB y se visualizan en paneles de Grafana.',
    scope: {
      title: 'Variables monitoreadas',
      items: ['Temperatura del aire', 'Humedad relativa', 'Humedad del suelo', 'Luminosidad'],
    },
    architecture: {
      layers: [
        { title: 'Nodos de campo', items: ['ESP32', 'DHT22', 'FC-28', 'LDR'] },
        { title: 'Mensajería', items: ['MQTT', 'Broker Mosquitto'] },
        { title: 'Procesamiento', items: ['Node-RED'] },
        { title: 'Almacenamiento', items: ['InfluxDB'] },
        { title: 'Visualización', items: ['Grafana'] },
        { title: 'Plataforma local', items: ['Orange Pi'] },
      ],
      note: ARCH_NOTE,
    },
    evidence: [],
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    slug: 'sign-language-translator',
    name: 'Sign Language Translator',
    categoryLabel: 'Artificial Intelligence / Computer Vision',
    category: 'ai',
    status: 'experimental',
    statusLabel: 'Experimental / en desarrollo',
    summary:
      'Reconocimiento de señas mediante procesamiento de imágenes y modelos de aprendizaje automático.',
    description:
      'Proyecto experimental enfocado en el reconocimiento de señas mediante procesamiento de imágenes y modelos de aprendizaje automático.',
    technologies: ['Procesamiento de imágenes', 'Aprendizaje automático', 'Conjunto de datos LSA64'],
    visual: 'grid',
    featured: false,
    problem:
      'Las barreras de comunicación entre personas sordas y oyentes motivan la exploración de herramientas tecnológicas de apoyo para el reconocimiento de lengua de señas.',
    objective:
      'Experimentar con técnicas de procesamiento de imágenes y aprendizaje automático para el reconocimiento de señas, como base para una futura adaptación a la Lengua de Señas Ecuatoriana (LSEC).',
    solution:
      'Pipeline experimental que procesa imágenes o secuencias de señas y las clasifica mediante modelos de aprendizaje automático.',
    architecture: {
      layers: [
        { title: 'Entrada', items: ['Imágenes o secuencias de señas'] },
        { title: 'Procesamiento', items: ['Procesamiento de imágenes'] },
        { title: 'Modelo', items: ['Aprendizaje automático'] },
        { title: 'Salida', items: ['Seña reconocida'] },
      ],
      note: ARCH_NOTE,
    },
    notes: [
      {
        title: 'Experimentos con LSA64',
        body: 'Los experimentos actuales utilizan LSA64, un conjunto de datos de la Lengua de Señas Argentina. Estos experimentos sirven para evaluar técnicas y modelos en un entorno controlado.',
      },
      {
        title: 'Validación con LSEC: pendiente',
        body: 'El proyecto no ha sido validado con la Lengua de Señas Ecuatoriana (LSEC). Los resultados obtenidos con LSA64 no deben interpretarse como desempeño en LSEC. La validación requerirá datos propios y la participación de la comunidad sorda.',
      },
    ],
    evidence: [],
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    slug: 'sdr-modulation-classification',
    name: 'SDR Modulation Classification',
    categoryLabel: 'Telecommunications / Signal Processing',
    category: 'telecom',
    status: 'experimental',
    statusLabel: 'Proyecto técnico experimental',
    summary:
      'Análisis y clasificación de modulaciones con procesamiento digital de señales y radio definida por software.',
    description:
      'Proyecto de análisis y clasificación de modulaciones utilizando conceptos de procesamiento digital de señales y radio definida por software.',
    technologies: ['SDR', 'Procesamiento digital de señales', 'Análisis de espectro', 'Clasificación de modulaciones'],
    visual: 'wave',
    featured: false,
    problem:
      'Identificar el tipo de modulación de una señal es una tarea básica en el monitoreo del espectro radioeléctrico y en sistemas de comunicaciones adaptativos.',
    objective:
      'Analizar señales capturadas con radio definida por software y clasificar su tipo de modulación aplicando técnicas de procesamiento digital de señales.',
    solution:
      'Captura de señales mediante SDR, análisis espectral y extracción de características para clasificar el esquema de modulación.',
    architecture: {
      layers: [
        { title: 'Captura', items: ['Radio definida por software'] },
        { title: 'Procesamiento', items: ['Procesamiento digital de señales'] },
        { title: 'Análisis', items: ['Análisis de espectro'] },
        { title: 'Clasificación', items: ['Clasificación de modulaciones'] },
      ],
      note: ARCH_NOTE,
    },
    evidence: [],
    repositoryUrl: '',
    demoUrl: '',
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured);
