import React from 'react';
import { Carousel } from 'react-bootstrap';
import wedding from '../../Images/wedding.jpg'
import sports from '../../Images/sports.jpg'
import wild from '../../Images/wild.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={wedding}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Wedding Photography</h3>
                    <p>I care about your life events</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sports}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Sports Photography</h3>
                    <p>Capture your sports moment</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wild}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Wild Life Photography</h3>
                    <p>Representing wild life lives</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;