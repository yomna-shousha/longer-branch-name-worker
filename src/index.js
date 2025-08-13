export default { async fetch(request, env, ctx) { return new Response("65 chars total - should use hash new lol", { headers: { "Content-Type": "text/plain" } }); }, };
