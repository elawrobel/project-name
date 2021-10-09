import React, { Fragment } from 'react';
import '../assets/menu.css';

import PeopleList from '../components/PeopleList';
import MovieList from '../components/MovieList';
import Table from '../components/Table';

function ApiPage() {
  return(
    <Fragment>
      <div className="section">
        <MovieList />
      </div>
      <div className="section">
        <PeopleList />
      </div>
      <div className="section">
        <Table />
      </div>
    </Fragment>
  );
}
export default ApiPage