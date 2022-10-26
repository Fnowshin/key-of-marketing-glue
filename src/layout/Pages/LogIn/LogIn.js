import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './LogIn.css'

const LogIn = (props) => {

    const {signIn} = useContext(AuthContext)

    const navigate = useNavigate();

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
        navigate('/courses')
     })
     .catch(error => console.error(error))
    }
    return (
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
                    We'll never share your email with anyone else.
                    </Form.Text>
            </Form>
            </Container>
        </div>
    );
};

export default LogIn;