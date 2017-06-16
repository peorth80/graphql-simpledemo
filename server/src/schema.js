import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Page {
  id: ID!                # "!" denotes a required field
  name: String
}

type Pizza {
  id: ID!
  name: String
  size: String
}

type Drycleaning {
  id: ID!
  name: String!
}

type AssistantTasks {
  pizza: [Pizza]!
  drycleaning: [Drycleaning]!
}

type FortuneCookie {
  name: String!
}

# This type specifies the entry points into our API.
type Query {
  Pages: [Page]    # "[]" means this is a list
  RestAPI: [FortuneCookie]
  Pizzas: [Pizza]
  Drycleaning: [Drycleaning]
  Assistant: [AssistantTasks]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema });

export { schema };
