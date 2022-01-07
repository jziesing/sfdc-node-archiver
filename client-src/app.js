import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './home';
import Demovid from './demovid';

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/demo">Demo Video</Link>
        {' '}
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
		  <Route exact path="/demo" component={Demovid} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
