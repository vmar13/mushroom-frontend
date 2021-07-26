import React from 'react';
import { NavLink } from 'react-router-dom';

// let show = document.querySelector('.nav-element show');
// if (show) 

const NavBar = ({ toggleNavElements }) => {
  return(
      <div className='nav-container'>
        <button id='hamburger' onClick={toggleNavElements}>
            <i className='fas fa-bars'></i>
          </button>
        <div className='nav-elements'>
          <NavLink to='/mushrooms' className='nav-element'><strong>Mushroom Teas</strong></NavLink>
          <NavLink to='/byot' className='nav-element'><strong>BYOT</strong></NavLink> 
          <NavLink to='/favorites' className='nav-element'><strong>Favorites</strong></NavLink>
          <NavLink to='/logout' className='nav-element'><strong>Logout</strong></NavLink>
        </div> 
      </div>
  );
};

export default NavBar;

