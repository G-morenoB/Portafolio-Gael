// ✏️ Edita aquí todo el contenido del portafolio.

export const profile = {
  name: 'Ubaldo Gael Moreno Bataz',
  shortName: 'Gael Bataz',
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
  photo: 'https://res.cloudinary.com/duytqng6m/image/upload/v1792453687/image0.jpg',                   // ej. '/foto.jpg' (archivo dentro de /public)
  bio: [
    'Soy Gael',
    'Licenciado en Ciencias de la Computación (BUAP) y desarrollador web con experiencia en proyectos freelance y personales.',
    'Trabajo con React, Next.js, JavaScript, PHP, WordPress y WooCommerce, desarrollando sitios web, tiendas online y aplicaciones responsive.',
    'Me enfoco en crear soluciones funcionales, eficientes y adaptadas a las necesidades de cada proyecto.',
  ],
}

export const projects = [
  { name: 'MAGIC IDEAS', description: 'Tienda online de desayunos sopresa en CDMX', role: 'Desarrollador web', period: '[2026]', stack: 'Wordpress · WooCommerce · PHP · CSS', url: 'https://magicideascdmx.com/', images: ['https://res.cloudinary.com/duytqng6m/image/upload/v1792453794/IMG1.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792453779/IMG2.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792453779/IMG3.png'] },
  { name: 'Nutrición', description: 'Página web responsive para nutriólogo desarrollada con React.', role: 'Desarrollador web', period: '2025', stack: 'React · CSS · HTML', url: 'https://nestorguinto-nutricion.vercel.app/', images: ['https://res.cloudinary.com/duytqng6m/image/upload/v1792455898/IMG4.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792455911/IMG6.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792455911/IMG5.png'] },
  { name: 'Proyecto 3', description: '[Descripción breve del proyecto]', role: 'Desarrollador web', period: '[Año]', stack: 'PHP · JavaScript', url: '#', images: [] },
  { name: 'Proyecto 4', description: '[Descripción breve del proyecto]', role: 'Desarrollador web', period: '[Año]', stack: '[Tecnologías]', url: '#', images: [] },
]

const dev = (n) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`

export const techGroups = [
  { title: 'Frontend', items: [
    { name: 'Tailwind CSS', icon: dev('tailwindcss') },
    { name: 'Next.js', icon: dev('nextjs') },
    { name: 'JavaScript', icon: dev('javascript') },  
    { name: 'CSS 3', icon: dev('css3') },
    { name: 'HTML 5', icon: dev('html5') },
    { name: 'React', icon: dev('react') },
    ]},
  { title: 'Backend', items: [
    { name: 'PHP', icon: dev('php') },
    { name: 'Node.js', icon: dev('nodejs') },
    { name: 'MySQL', icon: dev('mysql') },
    { name: 'Supabase', icon: dev('supabase') },
  ]},
  { title: 'Herramientas', items: [
    { name: 'WordPress', icon: dev('wordpress') },
    { name: 'WooCommerce', icon: dev('woocommerce') },
    { name: 'Git', icon: dev('git') },
    { name: 'GitHub', icon: dev('github') },
    { name: 'Figma', icon: dev('figma') },
    { name: 'VS Code', icon: dev('vscode') },
  ]},
]

// Carpetas de la pila: proyectos + la carpeta de tecnologías (al final)
export const folders = [
  ...projects.map((p) => ({ ...p, type: 'project' })),
  { name: 'Tecnologías', type: 'tech' },
]
