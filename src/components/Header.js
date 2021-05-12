import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import {FormControl} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { FaHandHoldingHeart } from "react-icons/fa";
import './header.css'
const Header = () => {

    return (
      <>
        <Navbar className="navbar" bg="warning" variant="warning">
        
    <Navbar.Brand  className="brand"><FaHandHoldingHeart className="b-icon" size={26} color={"black"}/></Navbar.Brand>
    <h2 className="bi">HOPE</h2>
    {/* <FaHandHoldingHeart className="b-icon" size={26} color={"black"} /> */}
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/dogs">Campaign</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
     
    </Nav>
    <Nav.Link href="/dogs">
    <Button variant="dark">Donate</Button>
   </Nav.Link>
  </Navbar>
   
</>
       )
}

export default Header

