
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from SHORT branch name!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
