import React from 'react';

import './assets/table.css';

import PeopleList from './components/PeopleList';
import MovieList from './components/MovieList';
import Table from './components/Table';

import { Fragment } from 'react';


class App extends React.Component {

  render() {
      return (

        <Fragment >
          <MovieList />
          <PeopleList />
          <Table />
        </Fragment>
    );
  }
}
export default App;