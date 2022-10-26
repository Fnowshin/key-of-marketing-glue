import React from 'react';
import { useContext } from 'react';

import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Registration = (props) => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // setError('');
            // form.reset();
            // handleUpdateUserProfile(name, photoURL);
            // handleEmailVerification();
            // toast.success('Please verify your email address.')
        })
        .catch(e => {
            console.error(e);
            // setError(e.message);
        });

    }

    // const handleUpdateUserProfile = (name, photoURL) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL
    //     }

    //     updateUserProfile(profile)
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }

    // const handleEmailVerification  = () => {
    //     verifyEmail()
    //     .then(() =>{})
    //     .catch(error => console.error(error));
    // }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

    return (
        <div>
             <Container className='login-page'>
           <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Name </Form.Label>
                    <Form.Control name='name' type="text" placeholder="First Name" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Photo URL </Form.Label>
                    <Form.Control name='photoURL' type="email" placeholder="Photo URL" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="warning" type="submit" className='me-4'>
                    Register 
                </Button>
                <Form.Text className="text-danger text-center">
                    Your Information is Safe!
                    </Form.Text>
            </Form>
            </Container>
        </div>
    );
};

export default Registration;