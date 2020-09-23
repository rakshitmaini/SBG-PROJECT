import React from "react";
import ContactWrapper from "./styledComponent/style.contact";
import HeaderBanner from "../baseComponent/headerComponent/HeaderBanner";
import { useState } from "react";
const ContactUs = () => {
  const [form, setform] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleFieldChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <HeaderBanner
        img="/contactUsAssets/contact-us.jpg"
        tag="Contact Us"
        intro="Have some Questions ?"
      />
      <ContactWrapper>
        <div className="container-fluid">
          <div className="contact-outer">
            <h1>Contact our Support and Sales Team</h1>
            <h3>Need to get in touch with team? We're all ears.</h3>
            <div className="row contact-inner">
              <div className="col-md-12 col-lg-6">
                <p>
                  We're here for you and we're wearing our thinking caps. But
                  first swing by our fantastic Help Center for all the
                  information and technical needs.
                </p>
                <h2>WE WANT TO HEAR FROM YOU</h2>
                <p>Please fill out our form, we'll get in touch shortly.</p>
              </div>
              {/* full-name phone number email-id subject message  */}
              <div className="col-md-12 col-lg-5 contact-form">
                <form autoComplete="off" noValidate>
                  <div>
                    <label>Name</label>
                    <input
                      onChange={handleFieldChange}
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input
                      onChange={handleFieldChange}
                      type="text"
                      placeholder="Phone"
                      name="phone"
                    />
                  </div>
                  <div>
                    <label>E-mail ID</label>
                    <input
                      onChange={handleFieldChange}
                      type="email"
                      placeholder="E-mail"
                      name="email"
                    />
                  </div>
                  <div>
                    <label>Subject</label>
                    <input
                      onChange={handleFieldChange}
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div>
                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
};

export default ContactUs;
