import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Sidebar = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('https://marketing-topic-server.vercel.app/course-topics')
        .then( res => res.json())
        .then(data => setCourses(data));

    }, [])

    const { providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then (result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.error(error));
    
      }

    return (
        <>
        <Container>
        <div className='my-5'>
          
            <div>
                {
                    courses.map(course => <p key={course.id}>
                       <div >
                       <ListGroup.Item action variant="danger" className='py-2 px-4'>
                        <Link className='main-text' to={`/course/${course.id}`}>{course.name}</Link>
                        </ListGroup.Item>
                       </div>
                        
                    </p>)
                }
                 <ListGroup.Item action variant="danger"className='py-2 px-4' >
                     <Link className='main-text' onClick={handleGoogleSignIn} variant='outline-danger'> Log In </Link>
                     </ListGroup.Item>
            </div>
        </div>
        </Container>
        </>
    );
};

export default Sidebar;