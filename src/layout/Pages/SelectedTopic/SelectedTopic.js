import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';

const SelectedTopic = ({detail}) => {
    const {image, name, _details} = detail 
    return (
        <div>
            <Header></Header>
            <Container>
            <Card className='my-4 border-warning'>
                <Card.Img src={image} />
                <Card.Body>
               
                <p>{_details}</p>
                </Card.Body>
            </Card>
           <Container>
           <Sidebar></Sidebar>
           </Container>
            </Container>
        </div>
    );
};

export default SelectedTopic;