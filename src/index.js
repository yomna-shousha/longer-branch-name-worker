export default {
  async fetch(request, env, ctx) {
    return new Response("66-char branch name test", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
