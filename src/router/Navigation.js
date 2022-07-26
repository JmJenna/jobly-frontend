import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {Nav, Navbar, Container} from 'react-bootstrap';
import { MdOutlineMapsHomeWork } from "react-icons/md";
import UserContext from "../auth/UserContext";
import "./Navigation.css";


/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return (
      <Nav className="text-center">               
      <Nav.Item>
          <Nav.Link style={{color:"white"}} href="/companies">Companies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link style={{color:"white"}} href="/jobs">Jobs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link style={{color:"white"}} href="/profile">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{color:"white"}} className="nav-link" to="/" onClick={logout}>
          Log out {currentUser.first_name || currentUser.username}
        </Link>
      </Nav.Item>
    </Nav>     
    );
  }
 

  function loggedOutNav() {
    return (
      <Nav className="text-center">               
      <Nav.Item>
          <Nav.Link style={{color:"white"}}  href="/login">Log in</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link style={{color:"white"}} href="/signup">Sing up</Nav.Link>
      </Nav.Item>
      </Nav>    
    );
  }

  return (
    <Navbar style={{backgroundColor:"#0072b1"}} collapseOnSelect expand="lg" className="fs-5">
      <Container>
        <Link style={{color:"white"}} className="navbar-brand fs-2" to="/">
          <MdOutlineMapsHomeWork /> Jobly
        </Link>
        <Navbar.Toggle style={{color:"white"}} aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse style={{color:"white"}} id="responsive-navbar-nav" className="justify-content-end">  
                {currentUser ? loggedInNav() : loggedOutNav()}              
         </Navbar.Collapse>
        </Container>
     </Navbar> 
  );
}

export default Navigation;
