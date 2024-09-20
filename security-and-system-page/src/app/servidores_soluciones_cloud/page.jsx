'use client'
import styles from './page.module.css'
import { poppins } from '@/Fonts/fonts'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import ArrowBack from '@/svg/ArrowBack'
import ArrowNext from '@/svg/ArrowNext'
import Escalabilidad from '@/svg/Escalabilidad'
import Transicion from '@/svg/Transicion'
import Rendimiento from '@/svg/Rendimiento'
import Seguridad from '@/svg/Seguridad'

const ServidoresSolucionesCloud = () => {
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
            <h2 className={poppins.className}>Servidores & Soluciones Cloud</h2>
            <p className={poppins.className}>
              Todos nuestros servicios de Servidores y Soluciones Cloud incluyen
            </p>
          </div>
          <div className={styles.personalizado} ref={cardOne}>
            <span
              style={{
                background: 'rgba(0, 189, 87, 0.1)',
                color: 'rgb(0, 189, 87)',
              }}
            >
              <Escalabilidad />
              Escalabilidad
            </span>
            <h2 className={poppins.className}>
              Implementación de Infraestructura en la Nube
            </h2>
            <p className={poppins.className}>
              Configuración y despliegue de entornos de servidores en la nube,
              asegurando escalabilidad, seguridad y alta disponibilidad para
              aplicaciones y datos críticos.
            </p>
          </div>

          <div className={styles.personalizado} ref={cardTwo}>
            <span
              style={{
                background: '#9162c025',
                color: '#c084fd',
              }}
            >
              <Transicion />
              Transición
            </span>
            <h2 className={poppins.className}>Migración a la Nube</h2>
            <p className={poppins.className}>
              Asistencia para la transición de sistemas locales a entornos de
              nube, minimizando el tiempo de inactividad y asegurando una
              migración fluida y segura de datos y aplicaciones.
            </p>
          </div>

          <div className={styles.personalizado} ref={cardThree}>
            <span
              style={{
                background: '#3b88e925',
                color: '#4e9eff',
              }}
            >
              <Rendimiento />
              Rendimiento
            </span>
            <h2 className={poppins.className}>
              Optimización y Mantenimiento de Servidores
            </h2>
            <p className={poppins.className}>
              Monitoreo continuo, optimización de recursos y mantenimiento
              proactivo de servidores para asegurar un rendimiento óptimo y
              minimizar tiempos de inactividad.
            </p>
          </div>

          <div className={styles.personalizado} ref={cardFour}>
            <span
              style={{
                background: '#d1772425',
                color: '#ff9a3c',
              }}
            >
              <Seguridad />
              Seguridad
            </span>
            <h2 className={poppins.className}>
              Soluciones de Backup y Recuperación
            </h2>
            <p className={poppins.className}>
              Implementación de sistemas de backup automatizados y soluciones de
              recuperación ante desastres, garantizando la seguridad y
              disponibilidad de datos en caso de fallos o pérdida de
              información.
            </p>
          </div>
        </section>
        <div className={styles.controlButtons} ref={buttonControl}>
          <Link href={'/aplicaciones_moviles'}>
            <button className={poppins.className}>
              <ArrowBack /> Atras
            </button>
          </Link>
          <Link href={'/consultoria_it'}>
            <button className={poppins.className}>
              Siguiente <ArrowNext />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServidoresSolucionesCloud
