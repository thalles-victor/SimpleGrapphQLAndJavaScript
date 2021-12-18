const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  }, 
  
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });


const port = 4000
server.listen( port ).then( ({url}) => {
  console.log(`Server is running at ${url}`)
})