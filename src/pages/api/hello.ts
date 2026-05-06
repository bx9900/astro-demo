import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ message: "hello" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
