import React from 'react';
import { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Menu from './components/Menu';
import Hero from './components/Hero';
import Timer from './components/Timer';

import ApiPage from './pages/ApiPage';
import News from './pages/News';

function App(){
  return (
  <Router>

    <Fragment>
      <a class="skip-to-content-link" href="#main" >Skip to content</a>
      <Menu />
      <Timer />
      <Hero />

      <div >
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/apipage">
            <ApiPage />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>

      {/* <Footer /> */}

    </Fragment>

  </Router>

  );
}
export default App;
