//src/components/PageList.js
import React from 'react';

import {
    gql,
    graphql,
} from 'react-apollo';

const PageList = ({ data: {loading, error, Pages }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul>
      { Pages.map( ch => <li key={ch.id}><a href={ch.id}>{ch.name}</a></li> ) }
    </ul>
  );
};

const pageListQuery = gql`
  query PageListQuery {
    Pages {
      id
      name
    }
  }
`;

export default graphql(pageListQuery)(PageList);
