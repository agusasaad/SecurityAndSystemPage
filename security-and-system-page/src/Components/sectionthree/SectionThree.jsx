'use client'
import styles from './SectionThree.module.css'
import web1 from './../../../public/project_1.jpg'
import web2 from './../../../public/project_2.jpg'
import web3 from './../../../public/project_3.jpg'
import web4 from './../../../public/project_4.jpg'
import web5 from './../../../public/project_5.jpg'
import { poppins } from '@/Fonts/fonts'
import Link from 'next/link'
import Image from 'next/image'
const SectionThree = () => {
  const imageCarrucel = [web1, web2, web3, web4, web5]

  const copyImageCarrucel = [
    ...imageCarrucel,
    ...imageCarrucel,
    ...imageCarrucel,
  ]

  return (
    <section className={styles.containerSectionThree}>
      <div className={styles.containerCarrucel}>
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={450}
            height={450}
            alt='imagen proyecto'
          ></Image>
        ))}
      </div>
      <div
        className={styles.containerCarrucel}
        style={{ flexDirection: 'column-reverse' }}
      >
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={450}
            height={450}
            alt='imagen proyecto'
          ></Image>
        ))}
      </div>
      <div className={styles.containerCarrucel}>
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={450}
            height={450}
            alt='imagen proyecto'
          ></Image>
        ))}
      </div>
      <div className={styles.containerText}>
        <div className={styles.title}>
          <h2 className={poppins.className}>Nuestros Proyectos</h2>
          <p className={poppins.className}>
            Explora nuestros proyectos realizados y descubre cómo hemos ayudado
            a nuestros clientes a alcanzar sus objetivos en línea.
          </p>
          <Link href={'/web_proyectos'}>
            <button className={poppins.className}>Ver Proyectos</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
