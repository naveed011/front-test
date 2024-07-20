import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Collection } from './pages/Collection';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/collection" component={Collection} />
      {/*Removed this Page, Instead I'm using Dialog to create new Player */}
      {/*<Route exact path="/create-card" component={CreateCard} />*/}
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
