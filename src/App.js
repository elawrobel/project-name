import React from 'react';
import { Fragment } from 'react';

import Menu from './components/Menu';
import ApiPage from './pages/ApiPage';

class App extends React.Component {

  render() {
      return (

        <Fragment >
          <Menu />
          <ApiPage />
        </Fragment>


    );
  }
}
export default App;