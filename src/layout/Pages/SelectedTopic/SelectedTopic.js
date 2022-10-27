import React from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

import Sidebar from '../Shared/Sidebar';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SelectedTopic = ({detail}) => {
    const componentRef = useRef();
    const handleDownload = useReactToPrint({
        content: () =>componentRef.current,
        documentTitle: 'course-details',
        onAfterPrint: () => alert('Document Downloaded')
    })

    
    const {image, name, _details} = detail;

 
    return (
        <>       
            <Container>
                <Row>
                    <Col lg='9'>
                        <Row>
                            <Col>
                            <Button className='my-5' onClick={handleDownload} variant='warning'> Download PDF </Button>
                            <div ref={componentRef} 
                            >
                            </div>
                            </Col>
                            <Col>
                            <div className='text-center my-4'>
                                <h2 className='text-danger'> {name} </h2>
                            </div>
                            </Col>
                
                        </Row>
            
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
                <div className='mb-5'>
                <Button variant='warning'><Link to='/checkout'>
                        Get Premium Acces</Link> </Button>
                </div>
            </Container>
            
        </>
    );
};

export default SelectedTopic;