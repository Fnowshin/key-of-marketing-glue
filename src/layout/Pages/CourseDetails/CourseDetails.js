import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ClickedCourse from '../ClickedCourse/ClickedCourse';


const CourseDetails = (props) => {
    const [details, setDetails ] = useState([]);

    useEffect( () => {
        fetch(`https://marketing-topic-server.vercel.app/details/${details._id}`)
        .then ( res => res.json())
        .then (data => setDetails(data));

    }, [])

    return (
        <div>
             <h2>{details.title}</h2>
             {
                details.map( detail => <p
                    key = {detail._id}>
                        <ClickedCourse>
                            
                        </ClickedCourse>

                </p>)
             }
        </div>
    );
};

export default CourseDetails;