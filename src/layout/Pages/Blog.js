import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = (props) => {
    return (
        <div>
           <Container className='mt-5'>
            <Card className='mb-3' variant='warning'>
                <Card.Header>What Is CORS</Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                   <p>
                    CORS is a short version of, Cross-Origin Resource Sharing, which is mainly a protocol that enables scripts running on a browser client to interact with resources from a different origin. <br /> We know that, JavaScript can only make calls to URLs that live on the same origin as the location where the script is running. So, if a JavaScript app or React wishes to make a call to an API running on a different domain, it would be blocked. And this process is called CORS. 
                   </p>
                    </Card.Text>
                
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Header>Why am I using farebase and what are other options do I have to implement Authetication</Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                   <p> I am using Firebase because
                   of Authetication service which provides by firebase and that helps me to build the user authentication system for mobile/web application. It comes with the basic authentication methods like Login, Logout, Signup, reset password etc.
                    Also firebase provides an ability to easily integrate our social auth logins with a matter of few clicks thats why I prefere to use it. Though not only it gives me the authentication service, it also helps me to host the web and deploy it. <br /> I have another few options besides Firebase application. It can be "Parse"; the application can be deployed to any infrastructure running Node.js as a database, compared to Firebase, which only offers the NoSQL databases. I can also develop and test my app locally using Node.Parse also offers cloud functions, email notifications, social login, APIs, REST, and real-time notifications. <br /> Also I can use, "Kuzzle" which is another open source and an alternative to Firebase that can help and solve several digital needs such as single signIn, collaboration, messaging, secondary screens, and more.
                   </p>
                    </Card.Text>
                
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Header>How Does The Private Route Work </Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                   <p>
                    There are three different types of routes including private, public, and restricted routes. All of their work is different but the Private Routes work is interesting. Like we know that public route means users or non users can easily access to certain routes which are under public route or those who are not defined. But in Private Route user needs to be authorized to enter in that Route to see the content of the Route. <br /> So for this private rote we need to create a different route under Routes layout and we have to set that confidential component in the private route as the children. So that user cannot enter in the component without Authorization.
                   </p>
                    </Card.Text>
                
                </Card.Body>
            </Card>
            <Card className='mb-3 '>
                <Card.Header>What is Node? How does Node work? </Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                   <p>
                   Node.js is built on the V8 engine of Google. It is the fastest javascript engine. The V8 engine converts the javascript code into the machine code, which the computer understands. The result is then generated and returned to node.js. Node.js cannot understand the javascript code we write without V8. <br />  When we use Node.js on a computer, there is a node process running on that computer. The process is just a program in execution. Now in that process, Node.js runs in a single thread. A thread is just a sequence of instructions. We can say that, We have one new thread created for every task in languages like javascript. So,When we run our Node application, it will run in just a single thread. And The event loop is called the heart of the node.js. It executes all the callback functions in a single thread, and it also offloads heavy or expensive tasks like compressing a file to a thread pool. Eventloop makes asynchronous programming possible in node.js. So, It takes care of all the incoming events and performs the balancing part by offloading heavier tasks into the thread pool and doing the simpler tasks by itself.
                   </p>
                    </Card.Text>
                
                </Card.Body>
            </Card>
           </Container>
        </div>
    );
};

export default Blog;