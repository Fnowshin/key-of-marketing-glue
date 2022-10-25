import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Picture1 from '../images/slider-pic-1.png'
import Picture2 from '../images/slider-pic-2.png'
import Picture3 from '../images/slider-pic-3.jpg'

const Slider = (props) => {
    return (
        <div>
            <Carousel className='my-5'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Picture1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Picture2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Picture3}
                    alt="Third slide"
                    />
                </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Slider;