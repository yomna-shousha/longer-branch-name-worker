export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 75 char limit", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
