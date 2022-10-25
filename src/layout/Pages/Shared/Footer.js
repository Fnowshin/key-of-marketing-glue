import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Footer = (props) => {
    return (
        <Card className="text-center">
        
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
        
      </Card>
    );
};

export default Footer;