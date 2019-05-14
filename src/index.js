const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const LetterAPI = require('./datasources/letter');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
    LetterAPI: new LetterAPI(),
  })
 });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});