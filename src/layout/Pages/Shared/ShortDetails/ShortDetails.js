import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const ShortDetails = ({topic}) => {
    const { name, image} = topic;
    return (
       <div>
            <Card className='my-4 border-warning'>
                <Card.Img variant="top Image-rounded"  src={image} />
                <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                </Card.Body>
            </Card>
       </div>
    );
};

export default ShortDetails;