import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';

const SelectedTopic = ({detail}) => {
    const {image, name, _details} = detail 
    return (
        <div>
           
            <Container>
                <Row>
                    <Col lg='9'>
                        <div className='text-center my-4'><h2 className='text-danger'> {name} </h2>
                        </div>
                    </Col>
                    <Col lg='3' className='text-center my-4'>
                        <div className='m-3'>
                        <Button variant='outline-danger'><Link className='main-text' to='/'>
                        Home</Link> </Button>
                        <Button variant='outline-danger'><Link className='main-text' to='/courses'>
                        Courses</Link> </Button>
                        </div>
                    </Col>
                </Row>
            
          
                <Row>
                    <Col lg='3'>
                    <Sidebar></Sidebar>
                    </Col>
                    <Col lg='9'>
                        <Card className='my-4 border-warning'>
                    <Card.Img src={image} />
                    <Card.Body>
                
                    <p>{_details}</p>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default SelectedTopic;