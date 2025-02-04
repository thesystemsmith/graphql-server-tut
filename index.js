const { ApolloServer, gql } = require("apollo-server");

// typeDefs tell the GraphQL server what data to expect
// Notice the gql tag, this converts your string into GraphQL strings that can be read by Apollo
const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    hello: String!
    randomNumber: Int!
    queryUsers: [User]!
  }
`;
// the Query type outlines all the queries that can be called by the client
// The exclamation mark (!) tells Apollo Server that a result is required

// When a query is called a resolver with the same name is run, The API returns whatever is returned by the resolver
const resolvers = {
  // The name of the resolver must match the name of the query in the typeDefs
  Query: {
    hello: () => "Hello world!",
    randomNumber: () => Math.round(Math.random() * 10),
    queryUsers: () => users,
  },
};

//datastore
const users = [
  {
    firstName: "GraphQL",
    lastName: "isCool",
    email: "GraphQL@isCool.com",
  },
];

//create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// start the server at 8080
server
  .listen({ port: 8080 })
  .then(({ url }) => console.log(`graphql server running at ${url}`));
