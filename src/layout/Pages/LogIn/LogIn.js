import React from 'react';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LogIn.css'

const LogIn = (props) => {
    return (
        <div>
            <Container className='login-page'>
           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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