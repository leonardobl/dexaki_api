import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import path from "path";

const schema = loadSchemaSync(
  [
    path.join(__dirname, "query", "index.graphql"),
    path.join(__dirname, "mutation", "index.graphql"),
    path.join(__dirname, "user", "index.graphql"),
    path.join(__dirname, "role", "index.graphql"),
  ],
  {
    loaders: [new GraphQLFileLoader()],
  }
);

export default schema;
