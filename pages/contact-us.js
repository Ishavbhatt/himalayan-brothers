/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { error } from "jquery";

function ContactUs() {
  const initialValues = { fullname: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Thanks For Contacting Us");
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  return (
    <>
      <Head>
        <title>Contact Us | Himalayan Brothers</title>
        <meta
          property="og:title"
          content="Popular Places in Dharamshala | Himalayan Brothers"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within dharamshala to visit | Himalayan Brothers"
        />
      </Head>
      <section className="banner_inner contact_banner">
        <div className="banner_content_inner text-center">
          <h2>Get In Touch</h2>
        </div>
      </section>
      <section className="about_section contact_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 contact_section_left">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="contact_column_wrapper w-100 text-center">
                    <span>
                      <img src="/call.svg" alt="icon" />
                    </span>
                    <h3>Call Us</h3>
                    <p>
                      <a href="tel:9882340444">(+91) 9882340444</a>,&nbsp;
                      <a href="tel:8988312345">8988312345</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="contact_column_wrapper w-100 text-center">
                    <span>
                      <img src="/mail.svg" alt="icon" />
                    </span>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:quartz@hotelhimalayanbrothers.com">
                        quartz@hotelhimalayanbrothers.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="contact_column_wrapper w-100 text-center">
                    <span>
                      <img src="/location.svg" alt="icon" />
                    </span>
                    <h3>Location</h3>
                    <p>
                      <a href="tel:9882340444">
                        Near Norbulingka, Dharamshala 176057, Himachal Pradesh,
                        India.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="contact_column_wrapper w-100 text-center">
                    <span>
                      <img src="/time.svg" alt="icon" />
                    </span>
                    <h3>Opening Hours</h3>
                    <p>
                      <a>6 Am to 11 Pm</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact_social w-100">
                <label className="mb-0">Socials:</label>
                <Link className="contact_social_ancor" href="">
                  <a>
                    <img src="/fb-white.svg" alt="icon" />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <img src="/insta-white.svg" alt="icon" />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <img src="/twitter-white.svg" alt="icon" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 contact_section_left contact_section_right">
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="alert alert-success" role="alert">
                  Thank You For Contacting us
                </div>
              ) : (
                console.log("")
                //   <div className="alert alert-danger" role="alert">
                //   Invalid Response
                // </div>
              )}
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.fullname}
                  />
                  <p className="error-field">{formErrors.fullname}</p>
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p className="error-field">{formErrors.email}</p>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formValues.subject}
                    onChange={handleChange}
                  />
                  <p className="error-field">{formErrors.subject}</p>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={formValues.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="error-field">{formErrors.message}</p>
                </div>
                <div className="form-group mb-0 text-center">
                  <button type="submit" className="common_btn">
                    SUBMIT<i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_map w-100">
        <img src="/single-hotel/map-icon.jpg" alt="Image" />
      </section>
    </>
  );
}

export default ContactUs;
