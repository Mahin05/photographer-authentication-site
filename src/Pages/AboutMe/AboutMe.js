import React from 'react';
import myimg from '../../Images/AboutMe/Mahin.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 className='mt-4'>About me</h1>
            <div className='about-style container'>
                <img className='about-img' src={myimg} alt="" />
                <div>
                    <h2 className='about-h2'>Name: <span>Mohammad Minhajul Islam Mahin</span> </h2>
                    <h2 className='about-h2'>My Goal: <span>My goal is to become a skilled web developer. In starting I want to join in any software company as a web developer and want to build up my career.</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;