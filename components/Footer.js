/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import validator from "validator";

import Link from "next/link";

function Footer() {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <>
      <section className="footer_section">
        <div className="footer-upper">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h3 className="footer-links-head">Our Hotels</h3>
                <ul>
                  <li>
                    <a href="#">Quartz Himalayan</a>
                  </li>
                  <li>
                    <a href="#">Hotel Samdupling</a>
                  </li>
                  <li>
                    <a href="#">Buddha House</a>
                  </li>
                  <li>
                    <a href="#">Hotel Spiti Heritage</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3 className="footer-links-head">Other Links</h3>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Cancelation Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 text-center footer-logo">
                <img src="/logo-footer.svg" alt="logo" />
              </div>
              <div className="col-md-4 f_newsletter">
                <h3 className="footer-links-head">Subscribe our Newsletter</h3>
                <p>
                  Sign Up Now To Receive Offers And Information about Our Hotels
                </p>
                <form>
                  <input
                    type="email"
                    onChange={(e) => validateEmail(e)}
                    placeholder="Enter Your Email"
                  />
                  <button type="submit">
                    <i className="bi bi-arrow-right-short"></i>
                  </button>
                </form>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {emailError}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center text-center">
          <a className="footer-icons" href="#" target="_blank">
            <img src="/single-hotel/fb.svg" alt="Icon" />
          </a>
          <a className="footer-icons" href="#" target="_blank">
            <img src="/single-hotel/insta.svg" alt="Icon" />
          </a>
          <a className="footer-icons" href="#" target="_blank">
            <img src="/single-hotel/twitter.svg" alt="Icon" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <hr />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-3 col-sm-12 text-left footer-bottom-column">
                <p>
                  Copyright © - 2022 Himalayan Brothers All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-12 footer-bottom-column text-right footer_column_last">
                <p className="text-right">
                  Powered By:
                  <a
                    target="blank"
                    href="https://unmeteredtechnologies.com"
                    to="https://unmeteredtechnologies.com/"
                  >
                    <img src="/unmetered-logo.gif" alt="icon" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
