import ChaketModalServices from '@/svg/ChaketModalServices'
import Escalabilidad from '@/svg/Escalabilidad'
import Rendimiento from '@/svg/Rendimiento'
import Seguridad from '@/svg/Seguridad'
import Transicion from '@/svg/Transicion'

export const dataServidores_soluciones_cloud = [
  {
    subtitle: 'Escalabilidad',
    icon: <Escalabilidad />,
    background: 'rgba(0, 189, 87, 0.1)',
    color: 'rgb(0, 189, 87)',
    title: 'Infraestructura en la Nube',
    description:
      'Configuración y despliegue de entornos de servidores en la nube, asegurando escalabilidad, seguridad y alta disponibilidad para aplicaciones y datos críticos.',
    infoModal: {
      subtitle_one: 'Configuración de Servidores en la Nube',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Creamos y configuramos entornos de servidores virtuales en plataformas líderes como AWS, Google Cloud y Azure, adaptando cada implementación a las necesidades específicas del cliente.',
      subtitle_two: 'Seguridad Integral',
      description_two:
        'Establecemos medidas de seguridad avanzadas, incluyendo firewalls, encriptación de datos y políticas de acceso, para proteger la información crítica y cumplir con normativas de seguridad.',
    },
  },
  {
    subtitle: 'Transición',
    icon: <Transicion />,
    background: '#9162c025',
    color: '#c084fd',
    title: 'Migración a la Nube',
    description:
      'Asistencia para la transición de sistemas locales a entornos de nube, minimizando el tiempo de inactividad y asegurando una migración fluida y segura de datos y aplicaciones.',
    infoModal: {
      subtitle_one: 'Evaluación Inicial',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Realizamos un análisis exhaustivo de la infraestructura actual para identificar las necesidades y requisitos específicos de la migración, asegurando que se diseñe una estrategia adecuada',
      subtitle_two: 'Capacitación y Soporte',
      description_two:
        'Proporcionamos capacitación a los equipos de TI para garantizar que comprendan la nueva infraestructura en la nube y ofrezcan soporte post-migración para resolver cualquier problema que surja.',
    },
  },
  {
    subtitle: 'Rendimiento',
    icon: <Rendimiento />,
    background: '#3b88e925',
    color: '#4e9eff',
    title: 'Optimización y Mantenimiento de Servidores',
    description:
      'Monitoreo continuo, optimización de recursos y mantenimiento proactivo de servidores para asegurar un rendimiento óptimo y minimizar tiempos de inactividad.',
    infoModal: {
      subtitle_one: 'Monitoreo Continuo',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Implementamos herramientas de monitoreo en tiempo real que permiten rastrear el rendimiento de los servidores, detectando problemas antes de que afecten la operación y garantizando una rápida respuesta a cualquier eventualidad.',
      subtitle_two: 'Mantenimiento Proactivo',
      description_two:
        'Realizamos mantenimiento regular y proactivo que incluye actualizaciones de software, parches de seguridad y limpieza de archivos innecesarios, asegurando que los servidores funcionen de manera eficiente y segura.',
    },
  },
  {
    subtitle: 'Seguridad',
    icon: <Seguridad />,
    background: '#d1772425',
    color: '#ff9a3c',
    title: 'Soluciones de Backup y Recuperación',
    description:
      'Implementación de sistemas de backup automatizados y soluciones de recuperación ante desastres, garantizando la seguridad y disponibilidad de datos en caso de fallos o pérdida de información.',
    infoModal: {
      subtitle_one: 'Opciones de Almacenamiento Seguras',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Utilizamos diversas opciones de almacenamiento, incluyendo la nube, servidores locales y soluciones híbridas, para asegurar que las copias de seguridad estén protegidas y sean accesibles en cualquier momento.',
      subtitle_two: 'Asesoría Personalizada',
      description_two:
        'Proporcionamos consultoría para ayudar a las empresas a seleccionar la mejor estrategia de backup y recuperación según sus necesidades y requisitos específicos.',
    },
  },
]
