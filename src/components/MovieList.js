import React, { useState, useEffect, Fragment } from 'react';


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
  render() {
    return (
      <Fragment>
        {this.state.movies.map(movie => (
          <tr key={movie.id} >
            <td>{movie.description}</td>
            <td>{movie.video_url}</td>
          </tr>
        ))}
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
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
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