import React, { useState } from 'react'
import images from './images';

import Link from 'next/link';

import { client } from '../lib/client';

import AppWrap from './AppWrap';
import MotionWrap from './MotionWrap';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='app__wrapper '>

            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={ images.email } alt="email" />
                    <Link href="mailto:hello@micael.com" className="p-text">hello@pacomekp.com</Link>
                </div>
                <div className="app__footer-card">
                    <img src={ images.mobile } alt="phone" />
                    <Link href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</Link>
                </div>
            </div>
            { !isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="username" value={ username } onChange={ handleChangeInput } />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={ email } onChange={ handleChangeInput } />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={ message }
                            name="message"
                            onChange={ handleChangeInput }
                        />
                    </div>
                    <button type="button" className="p-text" onClick={ handleSubmit }>{ !loading ? 'Send Message' : 'Sending...' }</button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch !!
                    </h3>
                </div>
            ) }

            <div className='copyright '>
                <p className="p-text">© 2022 - Pacome KPODAR</p>
                <p className="p-text"> <Link href='https://vercel.com/severuskey308-gmailcom'>Severus KEY</Link>, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);