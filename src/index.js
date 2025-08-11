
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from bugfix branch - memory leak fix!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
