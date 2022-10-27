import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import {AiOutlineGoogle } from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

import './LogIn.css'
import app from '../../../firebase/firebase.config';


const LogIn = (props) => {

    const {signIn} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     signIn(email, password)
     .then (result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace: true})
     })
     .catch(error => console.error(error))
    }

    const { providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    
    const auth = getAuth(app);
    const githubProvider = new GithubAuthProvider()


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then (result => {
          const user = result.user;
          console.log(user);
          navigate('/courses')
        })
        .catch(error => console.error(error));
    
      }
    
      const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then (result => {
            const user =result.user;
            console.log(user);
            navigate('/courses')
        })
        .catch(error => console.error(error));
      }

    return (
        <>
        <div>
            <Container className='login-page'>
           <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="warning" type="submit" className='me-4'>
                    Log In
                </Button>
                <Form.Text className="text-danger text-center">
                   Are You New Here? <Link to='/signup'> Register Now </Link>
                    </Form.Text>
            </Form>
            <div className='mt-5'>
            <p> You Can also Use one of the options</p>
            <Button onClick={handleGoogleSignIn} variant='outline-danger' className='me-4'><AiOutlineGoogle></AiOutlineGoogle> <span>Gmail </span></Button>
            <Button onClick={handleGitHubSignIn} variant='outline-warning' className='me-4'><AiOutlineGithub></AiOutlineGithub> <span>GitHub</span></Button>
            </div>
            

            </Container>

           
        </div>
        
        </>
    );
};

export default LogIn;