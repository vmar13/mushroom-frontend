import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
      <div className='nav'>
      <button id='hamburger'>
          <i className='fas fa-bars'></i>
        </button>
      <div className='nav-container'>
        <NavLink to='/mushrooms' className='nav-element'><strong>Mushroom Teas</strong></NavLink>
        <NavLink to='/byot' className='nav-element'><strong>BYOT</strong></NavLink> 
        <NavLink to='/favorites' className='nav-element'><strong>Favorites</strong></NavLink>
        <NavLink to='/logout' className='nav-element'><strong>Logout</strong></NavLink>
      </div>
      </div>
  );
};

export default NavBar;

