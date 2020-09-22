import React from 'react'
import ContactWrapper from './styledComponent/style.contact';
import HeaderBanner from '../baseComponent/headerComponent/HeaderBanner';

const ContactUs = () => {
    return (
        <ContactWrapper>
            <div className="container-fluid">
                <HeaderBanner img="/contactUsAssets/contact-us.jpg" tag="Contact Us" />
            </div>
        </ContactWrapper>
    )
}

export default ContactUs;
