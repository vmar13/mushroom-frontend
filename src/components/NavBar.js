import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
        return(
            <div className='main-nav'>
            {/* <NavLink to='/'>Home </NavLink> */}
         
            <NavLink to='/mushrooms'>Mushroom Teas</NavLink> 
            <NavLink to='/popular'>Popular</NavLink> 
            <NavLink to='/byot'>BYOT</NavLink> 

          </div>
        )
    }

export default NavBar