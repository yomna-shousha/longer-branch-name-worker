export default {
  async fetch(request, env, ctx) {
    return new Response("Testing actual 65+ chars with wrangler 4.30.0 fix!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
