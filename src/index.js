
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from 65-char total!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
