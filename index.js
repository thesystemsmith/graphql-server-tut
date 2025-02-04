const { ApolloServer, gql } = require("apollo-server");

// typeDefs tell the GraphQL server what data to expect
// Notice the gql tag, this converts your string into GraphQL strings that can be read by Apollo
const typeDefs = gql`
  type Query {
    hello: String!
    randomNubmer: Int!
  }
`
// the Query type outlines all the queries that can be called by the client
// hello and randomNumber are the names of the queries
// The exclamation mark (!) tells Apollo Server that a result is required

// Here, we define two queries, one returns a String and another returns a Int