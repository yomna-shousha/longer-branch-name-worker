export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 67 chars with LOCAL wrangler 4.29.0", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
