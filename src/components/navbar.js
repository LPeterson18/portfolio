import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

 class NavBar extends Component{
 render(){
    return(
      <>
      <Navbar bg="light" expand="lg" sticky='top'>
        <Navbar.Brand href="#home">Lex Peterson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#technical">Technical Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contactme">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
}
export default NavBar
