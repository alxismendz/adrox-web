import type { IconName } from '@/components/ui/icons';

/**
 * Tecnologías y herramientas empleadas en los proyectos de ADROX.
 * Se presentan como herramientas de trabajo, NO como certificaciones oficiales.
 */
export interface TechGroup {
  id: string;
  title: string;
  icon: IconName;
  items: string[];
}

export const technologyGroups: TechGroup[] = [
  {
    id: 'software',
    title: 'Desarrollo de software',
    icon: 'code',
    items: ['Python', 'FastAPI', 'Flutter', 'TypeScript', 'Astro', 'APIs REST'],
  },
  {
    id: 'ai',
    title: 'Inteligencia artificial',
    icon: 'scan',
    items: ['Computer Vision', 'Pose Estimation', 'Machine Learning', 'Procesamiento de video'],
  },
  {
    id: 'databases',
    title: 'Bases de datos',
    icon: 'database',
    items: ['PostgreSQL', 'InfluxDB'],
  },
  {
    id: 'cloud',
    title: 'Cloud y DevOps',
    icon: 'cloud',
    items: ['Docker', 'Microsoft Azure', 'GitHub Actions', 'Git'],
  },
  {
    id: 'iot',
    title: 'IoT y electrónica',
    icon: 'cpu',
    items: ['ESP32', 'Orange Pi', 'MQTT', 'Mosquitto', 'Node-RED', 'Grafana', 'Sensores DHT22, FC-28 y LDR'],
  },
  {
    id: 'telecom',
    title: 'Telecomunicaciones',
    icon: 'radio',
    items: ['Radio definida por software (SDR)', 'Procesamiento digital de señales', 'Análisis de espectro'],
  },
];
