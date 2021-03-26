import React, { Component, useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
/*
* We will include our MenuItem Component
*/

// class NavBar extends Component{

  const NavBar = ({ itemName, active }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessability!
   */
  // render(){
    return(
      <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Lex Peterson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className={active} ariaLabel={`Scroll to ${itemName}`}>Home</Nav.Link>
            <Nav.Link href="#aboutme" className={active} ariaLabel={`Scroll to ${itemName}`}>About Me</Nav.Link>
            <Nav.Link href="#experience" className={active} ariaLabel={`Scroll to ${itemName}`}>Experience</Nav.Link>
            <Nav.Link href="#technical" className={active} ariaLabel={`Scroll to ${itemName}`}>Technical Skills</Nav.Link>
            <Nav.Link href="#projects" className={active} ariaLabel={`Scroll to ${itemName}`}>Projects</Nav.Link>
            <Nav.Link href="#contactme" className={active} ariaLabel={`Scroll to ${itemName}`}>Contact Me</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  // }
}
export default NavBar
