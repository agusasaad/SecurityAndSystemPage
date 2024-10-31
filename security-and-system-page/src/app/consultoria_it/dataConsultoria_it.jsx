import Analisis from '@/svg/Analisis'
import ChaketModalServices from '@/svg/ChaketModalServices'
import Estrategia from '@/svg/Estrategia'
import Innovacion from '@/svg/Innovacion'
import SeguridadConsultoriaIt from '@/svg/SeguridadConsultoriaIt'

export const dataConsultoria_it = [
  {
    subtitle: 'Analisis',
    icon: <Analisis />,
    background: 'rgba(0, 189, 87, 0.1)',
    color: 'rgb(0, 189, 87)',
    title: 'Evaluación de Infraestructura Tecnológica',
    description:
      'Análisis y evaluación de la infraestructura tecnológica existente para identificar áreas de mejora y optimización.',
    infoModal: {
      subtitle_one: 'Recomendaciones de Mejora',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Proporcionamos un informe detallado que incluye recomendaciones específicas para optimizar la infraestructura, ya sea mediante actualizaciones, configuraciones adecuadas o la incorporación de nuevas tecnologías.',
      subtitle_two: 'Planificación de Capacidad Futura',
      description_two:
        'Asesoramos sobre la planificación de la capacidad futura, considerando el crecimiento y las necesidades cambiantes del negocio para evitar obsolescencia tecnológica.',
    },
  },
  {
    subtitle: 'Estrategia',
    icon: <Estrategia />,
    background: '#9162c025',
    color: '#c084fd',
    title: 'Planificación Estratégica de TI',
    description:
      'Desarrollo de estrategias a largo plazo para alinear la tecnología con los objetivos de negocio y mejorar la eficiencia operativa.',
    infoModal: {
      subtitle_one: 'Gestión del Cambio',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Diseñamos estrategias para gestionar el cambio organizacional que acompañan la implementación de nuevas tecnologías, asegurando que los equipos estén preparados y capacitados para adaptarse.',
      subtitle_two: 'Asesoría Continua',
      description_two:
        'Ofrecemos asesoría continua a lo largo de la implementación de la estrategia, asegurando que se realicen ajustes según las necesidades cambiantes del mercado y de la empresa',
    },
  },
  {
    subtitle: 'Seguridad',
    icon: <SeguridadConsultoriaIt />,
    background: '#3b88e925',
    color: '#4e9eff',
    title: 'Auditoría de Seguridad Informática',
    description:
      'Revisión exhaustiva de las prácticas de seguridad y sistemas de la empresa para identificar vulnerabilidades y recomendaciones para proteger los datos.',
    infoModal: {
      subtitle_one: 'Evaluación de Políticas de Seguridad',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Analizamos las políticas de seguridad existentes para asegurarnos de que sean adecuadas y estén alineadas con las mejores prácticas y normativas del sector.',
      subtitle_two: 'Identificación de Amenazas y Vulnerabilidades',
      description_two:
        'tilizamos herramientas avanzadas para identificar amenazas y vulnerabilidades, generando un informe detallado que destaca las áreas de riesgo y las recomendaciones para mitigar estos problemas.',
    },
  },
  {
    subtitle: 'Innovacion',
    icon: <Innovacion />,
    background: '#d1772425',
    color: '#ff9a3c',
    title: 'Asesoramiento en Transformación Digital',
    description:
      'Consultoría para la integración de nuevas tecnologías y procesos digitales que mejoren la productividad y competitividad de la empresa.',
    infoModal: {
      subtitle_one: 'Evaluación del Estado Actual',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Realizamos un análisis detallado de los procesos y tecnologías existentes, identificando áreas donde la transformación digital puede generar un impacto significativo.',
      subtitle_two: 'Optimización de Procesos',
      description_two:
        ' Identificamos procesos ineficientes y proponemos mejoras mediante la digitalización y automatización, aumentando la eficiencia operativa y reduciendo costos.',
    },
  },
]
