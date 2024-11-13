import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/Components/navbar/NavBar'
import Footer from '@/Components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://security-and-system-page-7rm4.vercel.app/'),
  title:
    'Security and System - Innovación en Desarrollo Web y Soluciones Cloud',
  description:
    'Security and System brinda servicios tecnológicos integrales, desde desarrollo web y aplicaciones móviles hasta infraestructura en la nube y consultoría IT. Nuestro equipo impulsa la eficiencia digital y el crecimiento de tu negocio.',
  keywords:
    'Security and System, tecnología, desarrollo web, aplicaciones móviles, infraestructura cloud, consultoría IT, servidores, innovación digital, servicios en la nube, soporte IT, soluciones personalizadas, transformación digital, servicios de tecnología empresarial, optimización de sistemas, soporte técnico, consultoría en tecnología, eficiencia tecnológica',
  author: 'Security and System',
  openGraph: {
    title:
      'Security and System - Desarrollo y Consultoría IT para Empresas Modernas',
    description:
      'Desde aplicaciones personalizadas hasta soluciones en la nube, en Security and System ayudamos a empresas a transformarse digitalmente con tecnología de última generación.',
    images: '/image.jpg',
    url: 'https://security-and-system-page-7rm4.vercel.app/',
    type: 'website',
    site_name: 'Security and System',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Security and System - Soluciones de Tecnología para Empresas del Futuro',
    description:
      'Expertos en desarrollo web, soluciones cloud y consultoría IT. Descubre cómo optimizamos el potencial digital de tu empresa.',
    images: '/image.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
