export default {
  async fetch(request, env, ctx) {
    return new Response("Testing 65-char branch name itself!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
