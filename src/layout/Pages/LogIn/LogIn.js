import React from 'react';
import { Container } from 'react-bootstrap';
import QuestionAccordian from '../Home/Components/QuestionAccordian';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const LogIn = (props) => {
    return (
        <div>
            <Container>
            <Header></Header>
            <h4> Log iN hERE </h4>
            <QuestionAccordian></QuestionAccordian>
            <Footer></Footer>
            </Container>
        </div>
    );
};

export default LogIn;