// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// https://www.gatsbyjs.com/plugins/gatsby-plugin-apollo/
// https://www.apollographql.com/docs/react/get-started/
// https://github.com/jlengstorf/gatsby-with-apollo



import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);