//src/components/PageList.js
import React from 'react';

import {
    gql,
    graphql,
} from 'react-apollo';

const PizzaList = ({ data: {loading, error, Assistant }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
    <p>First pick the pizzas...</p>
    <ul>
      { Assistant[0].pizza.map( ch => <li key={ch.id}>{ch.name} ({ch.size})</li> )  }
    </ul>
    <p>Then go to the dry cleaning and pick...</p>
    <ul>
      { Assistant[0].drycleaning.map( ch => <li key={ch.id}>{ch.name}</li> )  }
    </ul>    
    </div>
  );
};

const AssistantQuery = gql`
  query AssistantListQuery {
    Assistant {
        pizza {
          id
          name
          size
        },
        drycleaning {
          id
          name
        }
    },
    
  }
`;

export default graphql(AssistantQuery)(PizzaList);
