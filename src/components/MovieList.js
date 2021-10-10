import React, { useState, useEffect, Fragment } from 'react';

// component klasowy 

class Movies extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("https://srapi.herokuapp.com/v1/movies?results=5")
      .then(response => {
        // response.status
        return response.json();
      })
      .then(data => this.setState({ movies: data }))
      .catch(error => console.error(error));
  }

  componentDidUpdate(){
    console.log('movies', this.state.movies)
  }

  render() {

    return (
      <Fragment>
        <table className="employee">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
            <tr key={movie.id} >
              <td>{movie.title}</td>
              <td>{movie.description}</td>
              <td>{movie.video_url}</td>
            </tr>
            ))}
          </tbody>
        </table>

      </Fragment>
    );
  }
}

function MoviesHooks() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://srapi.herokuapp.com/v1/movies")
      .then(response => {
        // response.status
        return response.json();
      })
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);


  console.log('movie', movies)
  

  return (
    <table className="employee">
    <thead>
      <tr>
        <th>TITLE</th>
        <th>DESCRIPTION</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      {movies.map(movie => (
        <tr key={movie.id} >
          <td>{movie.title}</td>
          <td>{movie.description}</td>
          <td>{movie.video_url}</td>
      </tr>
      ))}
    </tbody>
  </table>
  );
}

export default function App() {
  return (
    <Fragment>
      <Movies />
      <hr />
      <MoviesHooks />
      <hr />
    </Fragment>
  );
}