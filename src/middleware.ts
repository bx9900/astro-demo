import { defineMiddleware, sequence } from "astro:middleware";

const i18nMiddleware = defineMiddleware(async (context, next) => {
  // Redirect root "/" to the default locale
  if (context.url.pathname === "/") {
    return context.redirect("/en/");
  }

  // Validate that the locale in the URL is supported
  const supportedLocales = ["en", "es"];
  const pathSegments = context.url.pathname.split("/").filter(Boolean);
  const urlLocale = pathSegments[0];

  if (urlLocale && supportedLocales.includes(urlLocale)) {
    context.locals.locale = urlLocale;
  }

  return next();
});

const customMiddleware = defineMiddleware(async (context, next) => {
  // Add a custom header to every response
  const response = await next();
  response.headers.set("X-Custom-Header", "middleware-active");

  // Add a request timestamp header
  response.headers.set("X-Request-Time", new Date().toISOString());

  // Example: block access to /admin if no auth token is present
  if (context.url.pathname.includes("/admin")) {
    const authToken = context.request.headers.get("Authorization");
    if (!authToken) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  return response;
});

export const onRequest = sequence(i18nMiddleware, customMiddleware);
