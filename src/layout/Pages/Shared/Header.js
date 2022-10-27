
import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Logo from '../Home/images/logo-image.jpeg'
import { FaUser } from 'react-icons/fa';
import Sidebar from './Sidebar';


const Header = (props) => {
  const { user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then ( () => {})
    .catch (error => console.error(error))
  }


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
              <Link to="/blog" className='me-4 main-text'> Blog </Link>
              <Link to="/faq" className='me-4 main-text'> FAQ </Link>
              
              <p className='me-4 main-text'>
                {
                  user?.uid ?
                  <>
                    <span> {user?.displayName} </span>
                    <Button onClick={handleLogOut} variant='outline-danger' className='mx-2'> Log Out </Button>
                  </>
                  :
                  <>
                    <Link to="/login" className='me-4 main-text my-2'> LogIn </Link>
                    <Link to="/signup" className='me-4 main-text my-2'> Registration  </Link>
                  </>
                }
                </p>
              {user ?.photoURL?
              <Image
              style={{height: '30px'}} roundedCircle src={user.photoURL}
              ></Image>
            : <FaUser></FaUser>}    
            </Nav>

            <div className='d-lg-none'>
              <Sidebar></Sidebar>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;