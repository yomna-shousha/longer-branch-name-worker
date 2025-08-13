export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 80-85 char range", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
