
import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Logo from '../Home/images/logo-image.jpeg'
import { FaUser } from 'react-icons/fa';


const Header = (props) => {
  const { user} = useContext(AuthContext)



    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img width={50}
              alt=""
              src={Logo}
              className="d-inline-block align-top"
            />
           <Link className='main-text' to="/"> Keys Of Marketing Glue </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className=' justify-content-end'>
            <Nav className="me-5">
              <Link to="/" className='me-4 main-text'> Home </Link>
              <Link to="/courses" className='me-4 main-text'> Courses </Link>
              <Link to="/login" className='me-4 main-text'> LogIn </Link>
              <Link to="/signup" className='me-4 main-text'> Registration  </Link>
              <p className='me-4 main-text'>{user?.displayName} </p>
              {user ?
              <Image
              style={{height: '30px'}} roundedCircle src={user.photoURL}
              ></Image>
            : <FaUser></FaUser>}
              
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;