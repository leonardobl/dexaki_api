import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import { importSchema } from "graphql-import";

const server = new ApolloServer({
  typeDefs: importSchema(require.resolve("./schema/index.graphql")),
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Server started on ${url}`))
  .catch((error) => console.log(error));
