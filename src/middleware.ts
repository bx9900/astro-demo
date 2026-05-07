import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // Add a custom header to every response
  const response = await next();
  response.headers.set("X-Custom-Header", "middleware-active");

  // Add a request timestamp header
  response.headers.set("X-Request-Time", new Date().toISOString());

  // Example: block access to /admin if no auth token is present
  if (context.url.pathname.startsWith("/admin")) {
    const authToken = context.request.headers.get("Authorization");
    if (!authToken) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  return response;
});
