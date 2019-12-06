import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reader from './Reader/Reader';
import NoMatch from './Reader/NoMatch/NoMatch';
import publications from '../Data/publications.json';
import './style.css';

const App = () => (
  <Switch>
    <Route
      exact
      path="/reader"
      render={props => <Reader {...props} items={publications} />}
    />
    <Route path="*" component={NoMatch} />
  </Switch>
);

export default App;
