import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yys2st5', 'template_sn1p64a', form.current, 'user_86jcHTGbuIUOIXrRNOV5o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Your Name" type="text" name="from_name" />
                <input placeholder="Your email" type="email" name="email" />
                <input placeholder="Subject" type="text" name="subject" />
                <textarea placeholder="Your Message" name="message" />

                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactMe;