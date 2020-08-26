import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
        return(
            <div className='nav-container'>
            {/* <NavLink to='/'>Home </NavLink> */}
              <NavLink to='/mushrooms' className='nav-element'><strong>Mushroom Teas</strong></NavLink>
              <NavLink to='/byot' className='nav-element'><strong>BYOT</strong></NavLink> 
              <NavLink to='/favorites' className='nav-element'><strong>Favorites</strong></NavLink>
          
          </div>
        )
    }

export default NavBar

