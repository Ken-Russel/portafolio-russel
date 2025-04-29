# Descripción del proyecto

Este proyecto es mi portfolio web personal, desarrollado desde cero con un enfoque técnico profesional.
Construido usando React en el frontend y Node.js + Express en el backend, aplicando buenas prácticas de accesibilidad, rendimiento (WPO), SEO técnico, y estructura modular escalable.

El objetivo es mostrar mis habilidades como desarrollador Full Stack, mejorar mi marca personal y facilitar el contacto con reclutadores y colegas del sector.

La Home principal funciona como una SPA moderna (Single Page Application) con scroll hacia secciones internas (Sobre mí, Proyectos destacados, Contacto).
Además, cuenta con rutas separadas para todos los proyectos y para el blog técnico.

# Tecnologías utilizadas

Frontend
React
Vite
CSS tradicional (modularizado)
React Router DOM

Backend
Node.js
Express.js
Validación de datos
Mailtrap (para simular envíos de formularios)

Extras
Vercel (deploy frontend)
Render (deploy backend)
SEO técnico: sitemap.xml, robots.txt, Open Graph tags
Google Analytics 4 integrado
Accesibilidad básica (contraste, aria-labels, navegación teclado)

# Estructura del proyecto

kenrusselclaveria.com/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── styles/
│ │ ├── assets/
│ │ └── App.jsx
│ └── package.json
├── server/
│ ├── controllers/
│ ├── routes/
│ ├── utils/
│ ├── config/
│ └── index.js
├── package.json
├── README.md
└── vercel.json (opcional)

# Instalación local

Clona el repositorio:
git clone https://github.com/tuusuario/kenrusselclaveria.com.git

Instala dependencias de frontend:
cd client
npm install

Instala dependencias de backend:
cd ../server
npm install

Ejecuta ambos proyectos en desarrollo:

# En client/

npm run dev

# En server/

npm run start

# Deploy

Frontend desplegado en Vercel
Backend desplegado en Render
Dominio personalizado: kenrusselclaveria.com

# Funcionalidades principales

-   Landing Page en una sola vista (SPA scroll)
-   Navegación limpia entre secciones internas (Sobre mí, Proyectos, Contacto)
-   Páginas separadas para Blog y listado completo de Proyectos
-   Formulario de contacto conectado a backend Express
-   Validación de formulario en frontend y backend
-   SEO técnico completo (metadatos, sitemap.xml, robots.txt)
-   Optimización para Core Web Vitals (rendimiento alto)
-   Accesibilidad mejorada (teclado, contrastes, roles)
-   Preparado para escalar (Blog dinámico, Dark/Light Theme)

# Mejoras futuras

-   Añadir sistema de temas dark/light automáticos
-   Incorporar un blog técnico basado en Markdown o CMS
-   Mejorar sección de Proyectos con filtros y categorías
-   Agregar animaciones suaves con Framer Motion
-   Mejorar optimización Core Web Vitals aún más

> .[!NOTE]. Sobre mí
> Me llamo Ken Russel Clavería, soy desarrollador Full Stack con enfoque en backend y optimización técnica.
> Este portfolio representa tanto mis habilidades técnicas como mi forma de construir soluciones accesibles, rápidas y escalables.

Puedes contactarme a través de mi formulario de contacto o en LinkedIn: www.linkedin.com/in/russselclaveria-seo

¿Un coffe ☕️ y hablamos?

🚀 Gracias por visitar mi portfolio.
