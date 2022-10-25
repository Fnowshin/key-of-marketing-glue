import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SidebarTopicDetails = (props) => {
    const details = useLoaderData();

    return (
        <div>
            <h4> Here will be the topic details: {details.length} </h4>
        </div>
    );
};

export default SidebarTopicDetails;