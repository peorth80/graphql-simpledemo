//src/schema.js

export const typeDefs = `
type Page {
  id: ID!                # "!" denotes a required field
  namesaewaewa: String
}

type Query {
  Pages: [Page]    # "[]" means this is a list of channels
}
`;
