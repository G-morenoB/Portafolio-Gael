// ✏️ Edita aquí todo el contenido del portafolio.

export const profile = {
  name: 'Ubaldo Gael Moreno Bataz',
  shortName: 'Ubaldo Moreno',
  role: 'Desarrollador web',
  topLabel: '“Sitio web”',
  heroText: 'Desarrollador Web',
  intro: 'Desarrollo sitios web, tiendas online y aplicaciones responsive.',
  hiLabel: 'Hi',               // texto de la tarjeta morada
  city: '[Ciudad]',            // ciudad que se muestra junto a la hora
  timeZone: 'America/Mexico_City',
  email: 'ubaldogaelcein@gmail.com',
  linkedin: '#',
  github: '#',
  photo: '',                   // ej. '/foto.jpg' (archivo dentro de /public)
  bio: [
    'Soy Ubaldo',
    'Licenciado en Ciencias de la Computación (BUAP) y desarrollador web con experiencia en proyectos freelance y personales.',
    'Trabajo con React, Next.js, JavaScript, PHP, WordPress y WooCommerce, desarrollando sitios web, tiendas online y aplicaciones responsive.',
    'Me enfoco en crear soluciones funcionales, eficientes y adaptadas a las necesidades de cada proyecto.',
  ],
}

export const projects = [
  { name: 'Proyecto 1', description: '[Descripción breve del proyecto]', role: 'Desarrollador web', period: '[Año]', stack: 'React · Next.js', url: '#', images: [] },
  { name: 'Proyecto 2', description: '[Descripción breve del proyecto]', role: 'Desarrollador web', period: '[Año]', stack: 'WordPress · WooCommerce', url: '#', images: [] },
  { name: 'Proyecto 3', description: '[Descripción breve del proyecto]', role: 'Desarrollador web', period: '[Año]', stack: 'PHP · JavaScript', url: '#', images: [] },
  { name: 'Proyecto 4', description: '[Descripción breve del proyecto]', role: 'Desarrollador web', period: '[Año]', stack: '[Tecnologías]', url: '#', images: [] },
]

export const techGroups = [
  { title: 'Interfaces web', items: ['React', 'Next.js', 'JavaScript'] },
  { title: 'Servidor', items: ['PHP'] },
  { title: 'Sitios y tiendas', items: ['WordPress', 'WooCommerce'] },
]

// Carpetas de la pila: proyectos + la carpeta de tecnologías (al final)
export const folders = [
  ...projects.map((p) => ({ ...p, type: 'project' })),
  { name: 'Tecnologías', type: 'tech' },
]
