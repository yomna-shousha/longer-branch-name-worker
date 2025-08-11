
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from 64-char total!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
