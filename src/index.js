export default {
  async fetch(request, env, ctx) {
    return new Response("Testing the exact example branch name!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
