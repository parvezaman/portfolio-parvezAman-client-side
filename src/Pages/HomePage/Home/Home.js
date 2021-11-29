import { Button } from '@mui/material';
import React from 'react';
import Resume from '../../Resume/Resume';
import myResume from '../../Resume/MdAmanullahParvez_Web_Developer_27_11_2021.pdf';
const Home = () => {
    return (
        <div>
            <h3>This is Home</h3>
            <Button><a target="_blank" href={myResume} download>Click to download</a></Button>
        </div>
    );
};

export default Home;