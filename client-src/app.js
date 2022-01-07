import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './home';

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/">Home</Link>
        {' '}
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
