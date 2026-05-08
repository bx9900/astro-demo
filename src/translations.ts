export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      admin: "Admin"
    },
    home: {
      title: "Welcome to Astro",
      description: "This is a demo site with i18n support."
    },
    about: {
      title: "About Us",
      content: "Learn more about our project."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      admin: "Admin"
    },
    home: {
      title: "Bienvenido a Astro",
      description: "Este es un sitio de demostración con soporte i18n."
    },
    about: {
      title: "Acerca de Nosotros",
      content: "Aprende más sobre nuestro proyecto."
    }
  }
};

export type Locale = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;