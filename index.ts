const server = Bun.serve({
    port: Bun.env.PORT || 5000, 
    fetch(req) {
        return new Response('Hello Bun!');
    }
})

console.log(`Listening on port ${server.port}`);