import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import ShortDetails from './Shared/ShortDetails/ShortDetails';

const Courses = (props) => {
    const topics = useLoaderData();
    return (
       <div className='my-5'>
            <h2> You Can Enroll: {topics.length} courses </h2>
            {
                topics.map(topic => <ShortDetails
                    key = {topic.id }
                    topic ={topic}

                ></ShortDetails>)
            }
       </div>
    );
};

export default Courses;