import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-primary p-3">
            <h2 className="text-white text-center">Md. Amanullah Parvez</h2>
            <p className="text-white text-center">email: emailtoamanullah@gmail.com; Phone: +8801930606658</p>
            <h4 className="text-center">
                <a target="_blank" className="text-white m-2" href="https://www.facebook.com/parvez.aman.18/"><BsFacebook/></a>
                <a target="_blank" className="text-white m-2" href="https://www.linkedin.com/in/md-amanullah-parvez-10a543207/"><BsLinkedin/></a>
                <a target="_blank" className="text-white m-2" href="https://github.com/parvezaman"><BsGithub/></a>
                <a target="_blank" className="text-white m-2" href="https://portfolio-parvez-aman.netlify.app/"><AiTwotoneHome/></a>
            </h4>
        </div>
    );
};

export default Footer;