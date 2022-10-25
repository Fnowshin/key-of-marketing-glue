import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = (props) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;