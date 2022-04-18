import React from 'react';
import myimg from '../../Images/AboutMe/Mahin.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 className='mt-4 text-style fs-3'>About me</h1>
            <div className='about-style container'>
                <img className='about-img' src={myimg} alt="" />
                <div>
                    <h2 className='about-h2'>Name: <span>Mohammad Minhajul Islam Mahin</span> </h2>
                    <h2 className='about-h2'>My Goal: <span>My goal is to become a skilled web developer. After completing programming hero web development course successfully, I shall apply for the designation 'web developer' in software companies. After getting job I'll try my best to serve the company by the skills i have gained from this course. I have higher desire to get job in renowned software firm. Insha Allah one day I'll reach my desired goal of life.</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;