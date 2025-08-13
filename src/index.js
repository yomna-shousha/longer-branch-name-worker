export default {
  async fetch(request, env, ctx) {
    return new Response("65 chars total test", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
