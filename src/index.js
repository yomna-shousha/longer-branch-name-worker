export default {
  async fetch(request, env, ctx) {
    return new Response("Testing bot comment functionality!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
