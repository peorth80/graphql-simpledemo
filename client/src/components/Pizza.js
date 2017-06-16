//src/components/PageList.js
import React from 'react';

import {
    gql,
    graphql,
} from 'react-apollo';

const PizzaList = ({ data: {loading, error, Pizzas }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul>
      { Pizzas.map( ch => <li key={ch.id}>{ch.name}</li> ) }
    </ul>
  );
};

const pizzaListQuery = gql`
  query PizzaListQuery {
    Pizzas {
      id
      name
    }
  }
`;

export default graphql(pizzaListQuery)(PizzaList);
