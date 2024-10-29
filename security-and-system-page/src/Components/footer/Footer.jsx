'use client'
import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import InstagramFooter from '@/svg/InstagramFooter'
import LinkedinFooter from '@/svg/LinkedinFooter'
import FacebookFooter from '@/svg/FacebookFooter'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src='/logo_mobile.png'
            alt='Logo de la empresa Security And System'
            width={150}
            height={200}
          />
          <p>
            Creación digital a medida, combinando diseño innovador y
            funcionalidad, para llevar tu presencia en línea al siguiente nivel.
          </p>
          <div className={styles.social}>
            <Link
              href='https://www.instagram.com/security_and_system/'
              target='_blank'
            >
              <span>
                <InstagramFooter />
              </span>
            </Link>
            <Link
              href='https://www.facebook.com/profile.php?id=61552143027658&sk=about'
              target='_blank'
            >
              <span>
                <FacebookFooter />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.routes}>
          <ul>
            <li>
              <Link href='/'>INICIO</Link>
            </li>
            <li>
              <Link href='/desarrollo_web'>NUESTROS SERVICIOS</Link>
            </li>
            <li>
              <Link href='/'>NUESTROS TRABAJOS</Link>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 Security And System. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
