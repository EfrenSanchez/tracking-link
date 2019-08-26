//Dependecies
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
//Styles
import './index.css';
//Components
// import App from './App';
import ExchangeRates from './Test.js';

//Apollo Client
const client = new ApolloClient({
  // uri: '/graphql',
  uri: '/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app </h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
