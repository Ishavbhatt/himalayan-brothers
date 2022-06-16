/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isactive, setIsactive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  const handleIsActive = () => {
    setIsactive(!isactive);
  };

  return (
    <>
      <section className={navbar ? "header header_fixed" : "header"}>
        <div className="header_bottom w-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 logo">
                <a href="/">
                  <img src="/logo-header.png" alt="Logo" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 header_right">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                  </button>
                  <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link href="/contact-us" className="nav-link">
                          About us
                        </Link>
                      </li>
                     
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link  dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Hotels
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" href="/hotels/hotel-quartz">
                              QUARTZ hOTEL
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/hotels/buddha-house">
                              BUDDHA HOUSE
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/hotels/hotel-samdupling">
                              HOTEL SAMDUPLING
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/hotels/spiti-heritage">
                              SPITI HERITAGE
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/attractions">
                          EXPLORE
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/blogs">
                          BLOGS
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link className="nav-link" href="/contact-us">
                          CONTACT US
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className=" col-lg-2 col-md-2 col-sm-12 header_right_btn">
                <a className="common_btn">
                  BOOK NOW <i className="bi bi-calendar4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isactive ? (
        <header className="header-trans">
          <h1>Mobile Header</h1>
        </header>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
