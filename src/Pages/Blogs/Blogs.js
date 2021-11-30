import React from 'react';
import './Blogs.css';
import bgImage from './soon.jpg';
const Blogs = () => {
    return (
        <div className="blogs">
            <img className="ms-auto me-auto d-block img-fluid" src={bgImage} alt="" />
        </div>
    );
};

export default Blogs;