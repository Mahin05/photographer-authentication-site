import React from 'react';
import './Album.css'
import moment1 from '../../../Images/Album/moment-2.jpg'
import moment2 from '../../../Images/Album/moment-1.jpg'
import moment3 from '../../../Images/Album/moment-3.jpg'
import moment4 from '../../../Images/Album/moment-4.jpg'
import moment5 from '../../../Images/Album/71O9DM6EQJL._AC_SL1024_.jpg'
import moment6 from '../../../Images/Album/pexels-photo-792777.jpeg'
import { Carousel } from 'react-bootstrap';

const Album = () => {
    return (
        <div id='album' className='album container mt-3'>
            <h2>My PhotoShoot Album</h2>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={moment1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={moment3}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={moment4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={moment2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={moment6}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={moment5}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Album;