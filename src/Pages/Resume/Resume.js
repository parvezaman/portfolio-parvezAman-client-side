import { Button } from '@mui/material';
import React, { useState } from 'react';
import myResume from './MdAmanullahParvez_Web_Developer_27_11_2021.pdf';


const Resume = () => {


    return (
        <div className="text-center">
            <div>
                <iframe src="https://drive.google.com/file/d/1C-_BBH-2kwnE28b8fcXY3Xxe2Q5Sd81N/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
            <Button variant="outlined"><a className="download-link text-primary" target="_blank" href={myResume} download>Download Resume</a></Button>
        </div>
    );
};

export default Resume;