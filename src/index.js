export default {
  async fetch(request, env, ctx) {
    return new Response("64-char branch name test", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
