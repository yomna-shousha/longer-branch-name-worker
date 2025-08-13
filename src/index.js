export default {
  async fetch(request, env, ctx) {
    return new Response("Testing very long branch with Wrangler 4.29.0!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
