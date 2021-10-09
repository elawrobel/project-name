import React from 'react';
import '../assets/menu.css';


class Menu extends React.Component{
  render(){

    return(
      <div className="menu">
        <div class="menu--container">
          <a href="" class="active">Home</a>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
        </div>
      </div>
    );
  }
}
export default Menu