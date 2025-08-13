export default {
  async fetch(request, env, ctx) {
    return new Response("65-char branch name test", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
