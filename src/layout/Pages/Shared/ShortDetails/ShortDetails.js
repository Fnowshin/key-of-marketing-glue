import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ShortDetails = ({topic}) => {
    const {id, name, image, details} = topic;
    return (
       <div>
            <Card className='my-4 border-warning'>
                <Card.Img variant="top Image-rounded"  src={image} />
                <Card.Body>
                <Card.Title>
                    <Link to = {`/details/${id}`}>{name}</Link>
                </Card.Title>
                <p>{details}</p>
                </Card.Body>
            </Card>
       </div>
    );
};

export default ShortDetails;