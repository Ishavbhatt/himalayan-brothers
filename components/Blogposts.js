/* eslint-disable @next/next/no-img-element */
import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Blogposts() {
  const blogs = [
    {
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
    {
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
    {
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
    {
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
  ];
  const blogsCarousel = {
    items: 3,
    margin: 40,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  };
  return (
    <>
    <div className="blog-post-section">
              <OwlCarousel
                className="gallery-owl-theme owl-theme"
                nav
                {...blogsCarousel}
              >
                {blogs.map((blog, index) => (
                  <div className="blog-item blog-item-1" key={index}>
                    <a href="">
                    <div className="blog-item-title">
                      <div>
                        <span className="featured-badge">{blog.badge}</span>
                      </div>
                      <div>
                        <h3>{blog.title}</h3>
                        <div className="row">
                          <div className="col-md-6 flex-center">
                            <img
                              className="user-icon"
                              src={blog.userImage}
                              alt="user"
                            />
                            <span>{blog.userName}</span>
                          </div>
                          <div className="col-md-6 flex-center justify-end">
                            <img
                              className="calender-icon"
                              src={blog.calenderImage}
                              alt="calender"
                            />
                            <span>{blog.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
              </OwlCarousel>
            </div>
    </>
  );
}
