export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 96+ chars with correct Wrangler 4.29.0 for PR!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
