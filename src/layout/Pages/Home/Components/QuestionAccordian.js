import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const QuestionAccordian = (props) => {
    return (
       <Container className='my-5'>

        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header className=''>Does online learning really work?</Accordion.Header>
        <Accordion.Body>
        On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. <br /> Online courses provide opportunities for students. Students in a school that doesn’t offer statistics classes may be able to learn statistics with virtual lessons. If students fail algebra, they may be able to catch up during evenings or summer using online classes, and not disrupt their math trajectory at school. So, almost certainly, online classes sometimes benefit students.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='danger'>What is the timeline of the course? </Accordion.Header>
        <Accordion.Body>
        The time commitment is variable, but you can expect to spend an average of 6 to 8 hours a week on a course. The time commitment will vary based on your prior knowledge of the course topic, your experience and comfort level in the online course environment, etc. Mostly courses vary in length from three to eight weeks, depending on the topic. Course assignments have scheduled weekly due dates with all assessments due no later than the course end date.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </Container>
    );
};

export default QuestionAccordian;