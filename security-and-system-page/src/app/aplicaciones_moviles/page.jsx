'use client'
import styles from './page.module.css'
import { poppins } from '@/Fonts/fonts'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import ArrowBack from '@/svg/ArrowBack'
import ArrowNext from '@/svg/ArrowNext'
import Optimizacion from '@/svg/Optimizacion'
import Versatilidad from '@/svg/Versatilidad'
import Continuidad from '@/svg/Continuidad'
import Conectividad from '@/svg/Conectividad'

const AplicacionesMoviles = () => {
  const titleRef = useRef(null)
  const cardOne = useRef(null)
  const cardTwo = useRef(null)
  const cardThree = useRef(null)
  const cardFour = useRef(null)
  const buttonControl = useRef(null)
  const gradientRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      [
        titleRef.current,
        cardOne.current,
        cardTwo.current,
        cardThree.current,
        cardFour.current,
        buttonControl.current,
      ],
      { opacity: 0, y: 100, visibility: 'hidden' },
      {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 0.8,
        stagger: 0.1,
        animation: 'power3',
        delay: 0.5,
      }
    ).fromTo(
      gradientRef.current,
      { scale: 0, opacity: 0, visibility: 'hidden' },
      {
        scale: 1,
        opacity: 0.9,
        visibility: 'visible',
        duration: 1,
        ease: 'power3',
      }
    )
  }, [])

  return (
    <div className={styles.service}>
      <div className={styles.gradient} ref={gradientRef}></div>
      <div className={styles.containerServices}>
        <section className={styles.sectionOne}>
          <div className={styles.title} ref={titleRef}>
            <h2 className={poppins.className}>Aplicaciones Móviles</h2>
            <p className={poppins.className}>
              Todos nuestros servicios de Aplicaciones Móviles incluyen
            </p>
          </div>
          <div className={styles.personalizado} ref={cardOne}>
            <span
              style={{
                background: 'rgba(0, 189, 87, 0.1)',
                color: 'rgb(0, 189, 87)',
              }}
            >
              <Optimizacion />
              Optimización
            </span>
            <h2 className={poppins.className}>Infraestructura en la Nube</h2>
            <p className={poppins.className}>
              Creación de aplicaciones móviles personalizadas, enfocadas en
              maximizar el rendimiento y la experiencia del usuario, con
              integración de características avanzadas como notificaciones push,
              geolocalización y servicios en la nube.
            </p>
            <div className={styles.containerButton}>
              <button className={poppins.className}>Ver Más</button>
            </div>
          </div>

          <div className={styles.personalizado} ref={cardTwo}>
            <span
              style={{
                background: '#9162c025',
                color: '#c084fd',
              }}
            >
              <Versatilidad />
              Versatilidad
            </span>
            <h2 className={poppins.className}>
              Aplicaciones Híbridas y Multiplataforma
            </h2>
            <p className={poppins.className}>
              Desarrollo de aplicaciones móviles que funcionen de manera
              eficiente en diversas plataformas, permitiendo a los clientes
              ahorrar costos y tiempo de desarrollo con una sola base de código.
            </p>
            <div className={styles.containerButton}>
              <button className={poppins.className}>Ver Más</button>
            </div>
          </div>

          <div className={styles.personalizado} ref={cardThree}>
            <span
              style={{
                background: '#3b88e925',
                color: '#4e9eff',
              }}
            >
              <Continuidad />
              Continuidad
            </span>
            <h2 className={poppins.className}>Mantenimiento y Actualización</h2>
            <p className={poppins.className}>
              Provisión de servicios continuos de mantenimiento y actualización
              para asegurar que las aplicaciones móviles estén siempre al día,
              con mejoras de seguridad, corrección de errores y adición de
              nuevas funcionalidades según las necesidades del cliente.
            </p>
            <div className={styles.containerButton}>
              <button className={poppins.className}>Ver Más</button>
            </div>
          </div>

          <div className={styles.personalizado} ref={cardFour}>
            <span
              style={{
                background: '#d1772425',
                color: '#ff9a3c',
              }}
            >
              <Conectividad />
              Conectividad
            </span>
            <h2 className={poppins.className}>
              Integración de APIs y Servicios de Terceros
            </h2>
            <p className={poppins.className}>
              Implementación de servicios externos dentro de aplicaciones
              móviles, como pasarelas de pago, sistemas de autenticación y
              plataformas de redes sociales, para enriquecer la funcionalidad y
              mejorar la experiencia del usuario.
            </p>
            <div className={styles.containerButton}>
              <button className={poppins.className}>Ver Más</button>
            </div>
          </div>
          <div className={styles.controlButtons} ref={buttonControl}>
            <Link href={'/desarrollo_web'}>
              <button className={poppins.className}>
                <ArrowBack /> Atras
              </button>
            </Link>
            <Link href={'/servidores_soluciones_cloud'}>
              <button className={poppins.className}>
                Siguiente <ArrowNext />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AplicacionesMoviles
