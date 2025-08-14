export default {
  async fetch(request, env, ctx) {
    return new Response("Testing realistic 65+ char branch with OAuth feature!", {
      headers: { "Content-Type": "text/plain" }
    });
  },
};
