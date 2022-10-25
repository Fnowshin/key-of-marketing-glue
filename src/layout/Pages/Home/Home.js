import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Reviews from '../Shared/Reviews';
import Sidebar from '../Shared/Sidebar';
import QuestionAccordian from './Components/QuestionAccordian';
import Slider from './Components/Slider';

const Home = (props) => {
    return (
        <div>
          <Header></Header>
          <Container>
            <Row>
                <Col lg="4">
                <Sidebar></Sidebar>
                </Col>
                <Col lg="8">
                <Slider></Slider>
                </Col>
            </Row>
            <Reviews></Reviews>
            <QuestionAccordian></QuestionAccordian>
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Home;