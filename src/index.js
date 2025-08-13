
export default {
  async fetch(request, env, ctx) {
    return new Response("Test 63 chars total - should use branch name", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
