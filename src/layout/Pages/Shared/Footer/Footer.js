import React from 'react';
import { FaFacebook, FaGithubSquare, FaAddressBook } from 'react-icons/fa';
import './Footer.css'

const Footer = (props) => {
    return (
        <div>
           <div className='footer'>
           <div>
                <h2> Keys Of Marketing Glue </h2>
                <p> Contact Us </p>
            </div>
            <div>
                <FaFacebook className=' book'></FaFacebook>
                <FaGithubSquare className='book'></FaGithubSquare>
                <FaAddressBook className='book'></FaAddressBook>

            </div>
           </div>
        </div>
    );
};

export default Footer;