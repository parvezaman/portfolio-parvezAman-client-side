import React from 'react';
import myself from './About.JPG';
import './About.css';
const About = () => {
    return (
        <div className="about">
            <img className="img-fluid d-block ms-auto me-auto" src={myself} alt="" />
        </div>
    );
};

export default About;