import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SelectedTopic from './SelectedTopic/SelectedTopic';


const SidebarTopicDetails = (props) => {
    const details = useLoaderData();

    return (
        <div>
            {
                details.map(detail => <SelectedTopic
                    key = {detail.id }
                    detail ={detail}></SelectedTopic>)
            } 
            {
                
            }  
        </div>
        
    );
};

export default SidebarTopicDetails;