import { Button } from '@mui/material';
// import React from 'react';
import React, { Component } from 'react';
import Resume from '../../Resume/Resume';
import './Home.css';
import myResume from '../../Resume/MdAmanullahParvez_Web_Developer_27_11_2021.pdf';
import MyProjects from '../MyProjects/MyProjects';
import ContactMe from '../ContactMe/ContactMe';
import Typical from 'react-typical';
import img2 from "./2.jpg";
const Home = () => {
    return (
        <div>
            {/* <img className="img-fluid w-100" src="https://i.ibb.co/HFx26fT/bg.jpg" alt="" /> */}
            <div className="landing-page d-md-flex justify-content-center align-items-center">
                <div className="w-75 container">
                    {/* <h3 className="text-white">Assalamu Alaikum...</h3> */}
                    <h1 className='salam-text'>
                        <Typical
                            // steps={['Anamika', 1000, 'I Love You!!!', 500]}
                            steps={['', 1000, 'Assalamu Alaikum...!!!', 500]}
                            loop={Infinity}
                            wrapper="h1"
                        />
                    </h1>
                    <h1 className="text-white">Hello there !</h1>

                    <h5 className="text-white">It's very nice to meet you! Please check out my Resume</h5>

                    <Button variant="outlined"><a className="download-link" target="_blank" href={myResume} download>Download Resume</a></Button>

                </div>
                <div>
                    {/* <img className="img-fluid" src="https://i.ibb.co/YW3f68b/no-bg.png" alt="" /> */}
                    <img className="img-fluid" src={img2} alt="" />
                </div>
            </div>
            <h2 className="text-center mt-5">My Projects</h2>
            <div>
                <MyProjects />
            </div>
            <div className="d-flex flex-column mb-5">
                <h3 className="mt-5 text-center text-primary mb-3">Contact me</h3>
                <ContactMe />
            </div>
        </div>
    );
};

export default Home;