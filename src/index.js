export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 65 chars with the ACTUAL fix!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
