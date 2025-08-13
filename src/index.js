export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 96+ chars with package.json Wrangler 4.29.0!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
