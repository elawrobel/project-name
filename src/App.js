import React from 'react';

import './App.css';
import PeopleList from './components/PeopleList';
import MovieList from './components/MovieList';

import { Fragment } from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();

        this.state = {
          close: true,
        };
      }

      changeColor = () => {
        this.setState({
            close: !this.state.close,
        });
    };

    getInitialState = () => ({
        /* state props */
      })

      resetState = () => {
        this.setState(this.getInitialState());
     }

    render() {
        const {close} = this.state;

        return (

          <Fragment >
            <div className="App">
                <h1>Interview task</h1>
                <button 
                    id="button_state" 
                    aria-pressed="false" 
                    aria-describedby="button-colored"
                    className="button button-colored"
                    onClick={() => this.changeColor()}
                >Colored rows</button>

                <button 
                    id="button_state" 
                    aria-pressed="false" 
                    aria-describedby="button-sorted"
                    className="button"
                >Sort by country</button>

                <button 
                    id="button_state" 
                    aria-pressed="false" 
                    aria-describedby="button-restore"
                    className="button"
                    onClick={() => this.resetState()}
                >Restore the init state</button>

                <table width={'100%'}>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>name</th>
                            <th>surname</th>
                            <th>country</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody 
                        className={close ? "table-white" : "table-blue"}
                    >
                        <PeopleList />
                        <MovieList />
                    </tbody>
                </table>
            </div>


          </Fragment>
      );
    }
  }
  export default App;