import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'
import WTPDemo from './App';

ReactDOM.render((
     <BrowserRouter  history={browserHistory}>
          <Route path="*" component={WTPDemo}/>
     </BrowserRouter>
     ),
     document.getElementById('root')
);
