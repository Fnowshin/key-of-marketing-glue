import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import QuestionAccordian from './Pages/Home/Components/QuestionAccordian';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import Sidebar from './Pages/Shared/Sidebar';

const Main = (props) => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                   <Col lg="3">
                   <Sidebar></Sidebar>
                   </Col>
                    <Col lg="9">
                    <Outlet></Outlet>
                    </Col>
                </Row>
                
                <QuestionAccordian></QuestionAccordian>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;