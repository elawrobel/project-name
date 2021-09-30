import React, { useState, useEffect, Fragment } from 'react';


function People() {
  const [peoples, setPeoples] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=5')
    .then((response) => response.json())
    .then((data) => {
      setPeoples(data.results);
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
      setLoading(false);
    });
  }, []);

  console.log(peoples)


  return (
    <Fragment>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>An error has occurred</p>}

      {peoples.map((person, i ) => (
        <tr key={i} >
          <td><img src={person.picture.thumbnail} alt="" /></td>
          <td>{person.name.first}</td>
          <td>{person.name.last}</td>
          <td>{person.location.country}</td>
        </tr>
      ))}
    </Fragment>
  );
}

export default function App() {
  return (
    <Fragment>
      <People />
    </Fragment>
  );
}