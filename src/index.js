
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from 63-char total!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
