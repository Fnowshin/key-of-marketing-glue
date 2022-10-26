import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Sidebar = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:7000/course-topics')
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
        <div className='my-5'>
            <h4> Course Names: {courses.length} </h4>
          
            <div>
                {
                    courses.map(course => <p key={course.id}>
                       <div >
                       <ListGroup.Item action variant="danger" className='py-2'>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                        </ListGroup.Item>
                       </div>
                        
                    </p>)
                }
            
                 <div className='my-4 mx-5 px-4'>
                     <Button onClick={handleGoogleSignIn} variant='outline-danger'> Log In </Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;