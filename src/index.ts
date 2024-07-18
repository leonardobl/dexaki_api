import fastify from "fastify";
import mercurius from "mercurius";
import resolvers from "./resolvers";
import schema from "./schemas";

const server = fastify({ logger: true });

server.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

server.get("/", async (request, reply) => {
  const users = await server.graphql(`{ users }`);
  return users;
});

server.listen({ port: process.env.SERVER_PORT });
