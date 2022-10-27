import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import Header from './Shared/Header';

const Conditions = (props) => {
    return (
        <div>
            <Header></Header>
            <Container className='text-center my-5 text-danger'>
        <h4> Frequently Asked Questions </h4>

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className=''>Does online learning really work?</Accordion.Header>
        <Accordion.Body>
        On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. <br /> Online courses provide opportunities for students. Students in a school that doesn’t offer statistics classes may be able to learn statistics with virtual lessons. If students fail algebra, they may be able to catch up during evenings or summer using online classes, and not disrupt their math trajectory at school. So, almost certainly, online classes sometimes benefit students.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='danger'>What are the requirements to take the courses or sign up with your website?</Accordion.Header>
        <Accordion.Body>
          If you are interested in those course which are offered here, you can easily sign in with your email or gmail id. Then you will receive a confirmation email after registering for a course that will include a link to access the course through our online instructional platform. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='danger'>What is the timeline of the course? </Accordion.Header>
        <Accordion.Body>
        The time commitment is variable, but you can expect to spend an average of 6 to 8 hours a week on a course. The time commitment will vary based on your prior knowledge of the course topic, your experience and comfort level in the online course environment, etc. Mostly courses vary in length from three to eight weeks, depending on the topic. Course assignments have scheduled weekly due dates with all assessments due no later than the course end date.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Will I lose access to the course site the day after the course ends?</Accordion.Header>
        <Accordion.Body>
        No. You will be able to revisit the course site during the 40 day qualification testing period so that you can review readings, discussions forums, and other course content/material; however, no assessments may be submitted after the course end date.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </Container>
       
        </div>
    );
};

export default Conditions;