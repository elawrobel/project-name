import React from 'react';
import '../assets/menu.css';

import {
  Link
} from 'react-router-dom';


function Menu(){

  return(
    <div className="menu">
      <div class="menu--container">
        <a href="/" class="active">Home</a>
        <Link to="/apipage">Api</Link>
        <Link to="/news">News</Link>
      </div>
    </div>
  );
}
export default Menu