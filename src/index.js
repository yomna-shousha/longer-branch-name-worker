
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    return new Response(`Hello from long branch: ${url.pathname}`, {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
