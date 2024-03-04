import React from 'react';
import { Link } from 'react-router-dom';
import { CgAnchor } from "react-icons/cg";
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';

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
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        
        

   
      </ul>
      </div>
      </div>
      
    </nav>

//  function NavBar() {
//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

//   return (
//     <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
//       <Nav.Item>
//         <Nav.Link eventKey="1" href="#/home">
//           NavLink 1 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="2" title="Item">
//           NavLink 2 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="3" disabled>
//           NavLink 3 content
//         </Nav.Link>
//       </Nav.Item>
//       <NavDropdown title="Dropdown" id="nav-dropdown">
//         <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
//         <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
//       </NavDropdown>

//       <Nav className="justify-content-end" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </Nav>
  );
}



  // );
// }

export default NavBar ;

