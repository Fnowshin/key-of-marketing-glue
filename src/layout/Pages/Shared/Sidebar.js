import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';


const Sidebar = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:7000/course-topics')
        .then( res => res.json())
        .then(data => setCourses(data));

    }, [])
    return (
        <div>
            <h4> Course Names: {courses.length} </h4>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                       <div >
                       <ListGroup.Item action variant="danger" className='py-2'>
                       {course.name}
                        </ListGroup.Item>
                       </div>
                        
                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;