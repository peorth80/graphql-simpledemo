import React, {Component} from 'react';
import FortuneCookie from './components/FortuneCookie.js';
import Assistant from './components/Assistant.js';
import Pizza from './components/Pizza.js';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});


class App extends Component {
  render() {
    return (      
      <ApolloProvider client={client}>
        <div className="dynamic">
          <h1>Pizza</h1>
          <div>
            <Pizza />
          </div>
          <h1>Fortune Cookie (read from REST API)</h1>
          <div>
            <FortuneCookie />
          </div>
          <h1>Assistant! (one query for both requests)</h1>
          <div>
            <Assistant />
          </div>
        </div>
      </ApolloProvider>
    );
  } 
}

export default App;

 