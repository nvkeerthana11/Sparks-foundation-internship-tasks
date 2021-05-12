import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import {FormControl,NavDropdown} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { FaHandHoldingHeart } from "react-icons/fa";
import './header.css'
const Header = () => {

    return (
      <>
      <Navbar bg="warning" expand="lg">
     
  <Navbar.Brand href="#" className="brand"><FaHandHoldingHeart className="bi"  size={28} color={"black"}/>HOPE</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
        <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/dogs">Campaign</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    
        <Nav.Link href="/dogs">
      <Button variant="dark" className="top-btn">DONATE</Button>
      </Nav.Link>
    
  </Navbar.Collapse>
</Navbar>
       
   
     
   
  
    
   
</>
       )
}

export default Header

