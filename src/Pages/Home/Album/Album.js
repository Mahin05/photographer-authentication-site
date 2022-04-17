import React from 'react';
import './Album.css'
import moment1 from '../../../Images/Album/moment-2.jpg'
import moment2 from '../../../Images/Album/moment-1.jpg'
import moment3 from '../../../Images/Album/moment-3.jpg'
import moment4 from '../../../Images/Album/moment-4.jpg'

const Album = () => {
    return (
        <div>
            <section class="container mt-5">
                <h1 class="d-flex justify-content-center section-h1-style">Moments</h1>
                <div id="carouselExampleControls" class="carousel slide moment-bg-set" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row info-backround bg-gradient d-flex align-items-center  p-5">
                                <div class="col-lg-7 moment-h1-p-style">
                                    <h1>Wedding</h1>
                                    <p>Newly married couple enjoying there best memories together. It is the most
                                        beautiful
                                        feelings in the world.
                                    </p>
                                </div>
                                <div class="col-lg-5">
                                    <img src={moment1} class="d-block w-100 moment-image-style" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row info-backround bg-gradient d-flex align-items-center  p-5">
                                <div class="col-lg-7 moment-h1-p-style">
                                    <h1>Holding Hands Forever</h1>
                                    <p>A beautiful starting of a new journey in life. Its full of promises, belief,
                                        strength, supportings & Love.
                                    </p>
                                </div>
                                <div class="col-lg-5">
                                    <img src={moment2} class="d-block w-100 moment-image-style" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row info-backround bg-gradient d-flex align-items-center  p-5">
                                <div class="col-lg-7 moment-h1-p-style">
                                    <h1>Party Time</h1>
                                    <p>Your enjoyable memories in a frame. Party hard, stay happy, enjoy at your most with
                                        us.
                                    </p>
                                </div>
                                <div class="col-lg-5">
                                    <img src={moment3} class="d-block w-100 moment-image-style" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row info-backround bg-gradient d-flex align-items-center  p-5">
                                <div class="col-lg-7 moment-h1-p-style">
                                    <h1>Seminar</h1>
                                    <p>A moment of leading, learning, sharing, teaching. A part to become confident and to
                                        go a step
                                        ahead in life.
                                    </p>
                                </div>
                                <div class="col-lg-5">
                                    <img src={moment4} class="d-block w-100 moment-image-style" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Album;