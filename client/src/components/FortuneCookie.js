//src/components/PageList.js
import React from 'react';

import {
    gql,
    graphql,
} from 'react-apollo';

const FortuneCookie = ({ data: {loading, error, RestAPI }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul>
      { RestAPI.map( ch => <li key="1">{ch.name}</li> ) }
    </ul>
  );
};

const RestAPIQuery = gql`
  query RestAPIQuery {
    RestAPI {
      name
    }
  }
`;

export default graphql(RestAPIQuery)(FortuneCookie);
