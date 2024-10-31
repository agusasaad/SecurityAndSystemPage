import ChaketModalServices from '@/svg/ChaketModalServices'
import Conectividad from '@/svg/Conectividad'
import Continuidad from '@/svg/Continuidad'
import Optimizacion from '@/svg/Optimizacion'
import Versatilidad from '@/svg/Versatilidad'

export const dataAplicaciones_moviles = [
  {
    subtitle: 'Optimización',
    icon: <Optimizacion />,
    background: 'rgba(0, 189, 87, 0.1)',
    color: 'rgb(0, 189, 87)',
    title: 'Infraestructura en la Nube',
    description:
      'Creación de aplicaciones móviles personalizadas, enfocadas en maximizar el rendimiento y la experiencia del usuario, con integración de características avanzadas como notificaciones push, geolocalización y servicios en la nube.',
    infoModal: {
      subtitle_one: 'Despliegue Rápido de Aplicaciones',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        ' Utilizamos tecnologías como contenedores y microservicios para facilitar el despliegue y gestión de aplicaciones, permitiendo una entrega continua y ágil.',
      subtitle_two: 'Soporte y Mantenimiento',
      description_two:
        'Proporcionamos soporte técnico continuo y mantenimiento proactivo, asegurando que tu infraestructura en la nube funcione de manera óptima.',
    },
  },
  {
    subtitle: 'Versatilidad',
    icon: <Versatilidad />,
    background: '#9162c025',
    color: '#c084fd',
    title: 'Aplicaciones Híbridas y Multiplataforma',
    description:
      'Desarrollo de aplicaciones móviles que funcionen de manera eficiente en diversas plataformas, permitiendo a los clientes ahorrar costos y tiempo de desarrollo con una sola base de código.',
    infoModal: {
      subtitle_one: 'Rendimiento Optimizado',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Nuestras aplicaciones están diseñadas para ofrecer un rendimiento comparable al de las aplicaciones nativas, asegurando una experiencia de usuario ágil y receptiva.',
      subtitle_two: 'Interfaz de Usuario Adaptativa',
      description_two:
        'Creamos interfaces intuitivas y atractivas que se adaptan a diferentes tamaños de pantalla y resoluciones, garantizando una experiencia consistente en todos los dispositivos.',
    },
  },
  {
    subtitle: 'Continuidad',
    icon: <Continuidad />,
    background: '#3b88e925',
    color: '#4e9eff',
    title: 'Mantenimiento y Actualización',
    description:
      'Provisión de servicios continuos de mantenimiento y actualización para asegurar que las aplicaciones móviles estén siempre al día, con mejoras de seguridad, corrección de errores y adición de nuevas funcionalidades según las necesidades del cliente.',
    infoModal: {
      subtitle_one: 'Actualizaciones Regulares',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Implementamos actualizaciones periódicas para incorporar mejoras de rendimiento, nuevas funcionalidades y adaptaciones a cambios en las plataformas móviles',
      subtitle_two: 'Escucha Activa del Cliente',
      description_two:
        'Trabajamos de cerca con nuestros clientes para entender sus necesidades y expectativas, ajustando las aplicaciones en función de la retroalimentación recibida',
    },
  },
  {
    subtitle: 'Conectividad',
    icon: <Conectividad />,
    background: '#d1772425',
    color: '#ff9a3c',
    title: 'Integración de base de datos y gestión.',
    description:
      'Implementación de servicios externos dentro de aplicaciones móviles, como pasarelas de pago, sistemas de autenticación y plataformas de redes sociales, para enriquecer la funcionalidad y mejorar la experiencia del usuario.',
    infoModal: {
      subtitle_one: 'Sistemas de Autenticación',
      icon_modal: <ChaketModalServices />,
      color_one: 'rgb(0, 189, 87)',
      description_one:
        'Implementamos métodos de autenticación avanzados, como inicio de sesión con redes sociales, autenticación biométrica y verificación en dos pasos, mejorando la seguridad y la accesibilidad para los usuarios.',
      subtitle_two: 'Gestión de Datos en Tiempo Real',
      description_two:
        'Implementamos soluciones que permiten la gestión y sincronización de datos en tiempo real, asegurando que la información se mantenga actualizada y accesible para los usuarios en todo momento.',
    },
  },
]
