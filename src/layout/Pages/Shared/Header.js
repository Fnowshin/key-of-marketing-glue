import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../Home/images/logo-image.jpeg'


const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img width={50}
              alt=""
              src={Logo}
              className="d-inline-block align-top"
            />
           <Link to="/home"> Keys Of Marketing Glue </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className=' justify-content-end'>
            <Nav className="me-5">
              <Link to="/home" className='me-4'> Home </Link>
              <Link to="/courses"> Courses </Link>
              
              
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;