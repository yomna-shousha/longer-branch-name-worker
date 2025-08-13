export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 80 char limit with correct Wrangler!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
