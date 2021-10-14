import './App.css';
import NavbarComponent from './components/NavbarComponent';
import React from 'react';
import LandingPage from './layout/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './layout/HomePage';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';

// Initialize the Apollo Client
const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache(),
});

// Define query types
const DATA_QUERY = gql`
  query {
    getVersion {
      version
    }
  }
`;

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <div>
              <NavbarComponent />
              <Container>
                <Route exact path='/Homepage' component={HomePage} />
              </Container>
            </div>
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
