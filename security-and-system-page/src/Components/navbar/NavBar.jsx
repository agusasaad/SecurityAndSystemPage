'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'
import logoSAS from '../../../public/logoSAS.png'
import logoSAS_Mobile from '../../../public/logo_mobile.png'
import { poppins } from '@/Fonts/fonts'
import gsap from 'gsap'
import Link from 'next/link'
import Home from '@/svg/Home'
import Servicios from '@/svg/Servicios'
import SobreNosotros from '@/svg/SobreNosotros'
import NuestrosProyectos from '@/svg/NuestrosProyectos'
import OnCloseButton from '@/svg/OnCloseButton'
import HamburgerMenu from '@/svg/HamburgerMenu'

const NavBar = () => {
  const navBarAnimate = useRef(null)

  const [showMenu, setShowMenu] = useState(false)
  const [showMenuServices, setShowMenuServices] = useState(false)

  //Animaciones GSAP
  useEffect(() => {
    gsap.set(navBarAnimate.current, {
      y: 100,
      opacity: 0,
      visibility: 'hidden',
    })
    gsap.to(navBarAnimate.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power1',
      stagger: 0.5,
      visibility: 'visible',
    })
  }, [])

  return (
    <div className={styles.containerNav} ref={navBarAnimate}>
      <div className={styles.nav}>
        <div className={styles.start}>
          <Link href='/'>
            <Image
              src={logoSAS}
              alt='Logo de la empresa Security And System'
              className={styles.LogoNav}
              width={40}
              height={40}
            />

            <Image
              src={logoSAS_Mobile}
              alt='Logo de la empresa Security And System'
              className={styles.LogoNavMobile}
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className={`${styles.center} ${showMenu ? styles.show : ''}`}>
          <div className={styles.onClose}>
            <button onClick={() => setShowMenu(false)}>
              <OnCloseButton />
            </button>
          </div>
          <ul className={poppins.className}>
            <Link
              href='/'
              onClick={() => {
                setShowMenu(false), setShowMenuServices(false)
              }}
            >
              <li>
                <Home />
                Inicio
              </li>
            </Link>
            <li onClick={() => setShowMenuServices(!showMenuServices)}>
              <Servicios />
              Servicios
              <svg
                className={showMenuServices ? styles.rotate : ''}
                viewBox='0 0 1024 1024'
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                width={13}
                height={13}
              >
                <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <g id='SVGRepo_iconCarrier'>
                  <path
                    fill='white'
                    d='M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z'
                  />
                </g>
              </svg>
            </li>
            {showMenuServices && (
              <ul className={styles.menuServices}>
                <Link
                  href='/desarrollo_web'
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false)
                  }}
                >
                  <li>Desarrollo Web</li>
                </Link>
                <Link
                  href='/aplicaciones_moviles'
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false)
                  }}
                >
                  <li>Aplicaciones Móviles</li>
                </Link>
                <Link
                  href='/servidores_soluciones_cloud'
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false)
                  }}
                >
                  <li>Servidores y Soluciones Cloud</li>
                </Link>
                <Link
                  href='/consultoria_it'
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false)
                  }}
                >
                  <li>Consultoria IT</li>
                </Link>
              </ul>
            )}
            <Link
              href={'/web_proyectos'}
              onClick={() => {
                setShowMenu(false), setShowMenuServices(false)
              }}
            >
              <li>
                <NuestrosProyectos />
                Nuestros Trabajos
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.end}>
          <Link href='#contact'>
            <button className={`${poppins.className} ${styles.button}`}>
              Contactanos
            </button>
          </Link>
        </div>
        <div className={styles.hamburguerButton}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <HamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
