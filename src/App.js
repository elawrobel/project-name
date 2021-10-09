import React from 'react';
import { Fragment } from 'react';

import Menu from './components/Menu';
import Hero from './components/Hero';
// import ApiPage from './pages/ApiPage';
import News from './pages/News';
import Timer from './components/Timer';


function App(){
  return (
    <Fragment >
      <Menu />
      <Timer />
      <Hero />
      <News />
    </Fragment>
  );
}
export default App;