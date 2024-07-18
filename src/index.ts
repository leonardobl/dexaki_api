import fastify from "fastify";

const server = fastify({ logger: true });

server.listen({ port: process.env.SERVER_PORT });
