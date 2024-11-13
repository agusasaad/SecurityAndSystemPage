'use client'
import styles from './ContactUs.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { poppins } from '@/Fonts/fonts'
import { useEffect, useRef } from 'react'
import map from './../../../public/map.png'
import location from './../../../public/location.gif'
import Link from 'next/link'
import Location from '@/svg/Location'
import Phone from '@/svg/Phone'
import Email from '@/svg/Email'
import Image from 'next/image'

const ContactUs = () => {
  const containerRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const spanRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      [
        subtitleRef.current,
        titleRef.current,
        descriptionRef.current,
        spanRef.current,
      ],
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=200 80%',
          end: 'top 20%',
        },
      }
    )

    gsap.fromTo(
      locationRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: 'power1.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=200 50%',
          end: 'top 20%',
          // markers: true,
        },
      }
    )
  }, [])

  return (
    <section className={styles.container} id='contact'>
      <div className={styles.ContactUs} ref={containerRef}>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={poppins.className} ref={subtitleRef}>
              Contacto
            </span>
            <h2 className={poppins.className} ref={titleRef}>
              Conversemos
            </h2>
            <p className={poppins.className} ref={descriptionRef}>
              ¿Listo para llevar tu presencia en línea al siguiente nivel?
              ¡Hablemos de tu proyecto! Contáctanos para una consulta gratuita.
            </p>
          </div>
          <div className={styles.infoContainer} ref={spanRef}>
            <Link
              href='https://maps.app.goo.gl/GMFqPPhv4dxQHZzv7'
              target='_blank'
            >
              <span className={poppins.className}>
                <Location />
                Juan José paso 1353, Morón
              </span>
            </Link>
            <Link
              href='https://wa.me/5491156260023?text=Hola,%20estoy%20interesado%20en%20sus%20servicios!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className={poppins.className}>
                <Phone />
                11 5626-0023
              </span>
            </Link>
            <Link
              href='mailto:contact@securityandsystem.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className={poppins.className}>
                <Email className={styles.icon} />
                contact@securityandsystem.com
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <Link
            className={styles.gradient}
            href='https://maps.app.goo.gl/GMFqPPhv4dxQHZzv7'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span ref={locationRef}>
              <Image
                src={location.src}
                alt='map'
                width={50}
                height={50}
                unoptimized={true}
              />
            </span>
          </Link>
          <Image src={map.src} alt='map' width={500} height={500} />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
