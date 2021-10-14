const express = require('express');
// Import the ApolloServer class
const { ApolloServer, gql } = require('apollo-server-express');
// Import the two parts of a GraphQL schema
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolver');
const db = require('../backend/database/db');
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: corsOptions,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.listen(PORT, () =>
    console.log(`server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );

  db();
}
// Update Express.js to use Apollo server features

require('dotenv').config();

// Utilization
startApolloServer(typeDefs, resolvers);
