import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
        return(
            <div className='main-nav'>
            {/* <NavLink to='/'>Home </NavLink> */}
              <NavLink to='/mushrooms'>Mushroom Teas</NavLink>
              <NavLink to='/byot'>BYOT</NavLink> 
              <NavLink to='/favorites'>Favorites</NavLink>
          
          </div>
        )
    }

export default NavBar



{/* <Link to='/mushrooms'>Mushroom Teas</Link>
<Link to='/byot'>BYOT</Link> 
<Link to='/popular'>Popular</Link> */}