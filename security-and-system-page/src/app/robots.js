export default function robots() {
  return {
    rules: [
      {
        userAgent: '',
        allow: ['/'], // Permite indexar la raíz
        disallow: [
          '/buscador/',
          '/exito/',
          '/pago-exitoso/',
          '/pago-fallido/',
          '/redirect/',
          '/ref/',
          '/api/',
          '/app/',
          '/admin/*',
          '/callback',
        ],
      },
    ],
    sitemap: 'https://security-and-system-page-7rm4.vercel.app/sitemap.xml', // Asegúrate de que esta URL sea correcta
  }
}
