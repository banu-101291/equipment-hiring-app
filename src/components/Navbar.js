import React from 'react';
import { Link } from 'react-router-dom';
import { CgAnchor } from "react-icons/cg";

import '../styles/Navbar.css';

function NavBar() {
  return (
    <nav>
      <div className='navigation'>
      
      <div className="logo">
      <CgAnchor style={{ fontSize: '3rem' }}/>
</div>

        <div className='ul'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
   
      </ul>
      </div>
      </div>
      
    </nav>
  );
}

export default NavBar;

