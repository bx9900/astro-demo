export const translations = {
  en: {
    lang: {
      name: "English",
      select: "Select Language",
      selectPrompt: "Please select your language:",
      current: "Language: English",
    },
    nav: {
      home: "Home",
      about: "About",
      admin: "Admin",
      ssr: "SSR",
      stream: "Stream",
    },
    home: {
      title: "Welcome to Astro",
      description: "This is a demo site with i18n support.",
      ssrPage: "SSR Page",
      checkMiddleware: "Check Middleware",
    },
    about: {
      title: "About Us",
      content: "Learn more about our project.",
    },
    ssr: {
      title: "Server-Side Rendered",
      renderedAt: "This page is rendered on the server at:",
    },
    stream: {
      title: "HTML Streaming",
      description: "This page streams HTML as each section becomes ready. Watch the content appear progressively.",
      instant: "Instant Content",
      instantDesc: "This section was available immediately — no waiting.",
      userData: "User Data",
      userDataDesc: "Loaded after ~1 second. Simulates fetching user info from a database.",
      analytics: "Analytics",
      analyticsDesc: "Loaded after ~2 more seconds. Simulates a slow analytics query.",
      externalApi: "External API",
      externalApiDesc: "Loaded after ~1.5 more seconds. Simulates calling a third-party service.",
    },
    admin: {
      title: "Admin Panel",
      authorized: "You are authorized to view this page.",
    },
    notFound: {
      title: "404 - Not Found",
      description: "The page you're looking for doesn't exist.",
      goHome: "Go home",
    },
  },
  es: {
    lang: {
      name: "Español",
      select: "Seleccionar idioma",
      selectPrompt: "Por favor selecciona tu idioma:",
      current: "Idioma: Español",
    },
    nav: {
      home: "Inicio",
      about: "Acerca de",
      admin: "Admin",
      ssr: "SSR",
      stream: "Streaming",
    },
    home: {
      title: "Bienvenido a Astro",
      description: "Este es un sitio de demostración con soporte i18n.",
      ssrPage: "Página SSR",
      checkMiddleware: "Verificar Middleware",
    },
    about: {
      title: "Acerca de Nosotros",
      content: "Aprende más sobre nuestro proyecto.",
    },
    ssr: {
      title: "Renderizado en el Servidor",
      renderedAt: "Esta página fue renderizada en el servidor a las:",
    },
    stream: {
      title: "Streaming HTML",
      description: "Esta página transmite HTML a medida que cada sección está lista. Observa cómo el contenido aparece progresivamente.",
      instant: "Contenido Instantáneo",
      instantDesc: "Esta sección estuvo disponible de inmediato — sin espera.",
      userData: "Datos de Usuario",
      userDataDesc: "Cargado después de ~1 segundo. Simula obtener información del usuario de una base de datos.",
      analytics: "Analíticas",
      analyticsDesc: "Cargado después de ~2 segundos más. Simula una consulta lenta de analíticas.",
      externalApi: "API Externa",
      externalApiDesc: "Cargado después de ~1.5 segundos más. Simula llamar a un servicio externo.",
    },
    admin: {
      title: "Panel de Administración",
      authorized: "Estás autorizado para ver esta página.",
    },
    notFound: {
      title: "404 - No Encontrado",
      description: "La página que buscas no existe.",
      goHome: "Ir al inicio",
    },
  },
};

export type Locale = "en" | "es";
export type Translations = typeof translations.en;
