export default {
  async fetch(request, env, ctx) {
    return new Response("NEW 65 chars test - hash mode expected", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
