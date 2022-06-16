/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import SingleHotel from "../single-hotel";

export default function Blogs() {
  const blogs = [
    {
      hyperLink: "/blogs/single-blog",
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
    {
      hyperLink: "/blogs/single-blog",
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
    {
      hyperLink: "/blogs/single-blog",
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
    {
      hyperLink: "/blogs/single-blog",
      badge: "FEATURED",
      title: "Delivering What Consumers Really Value",
      userImage: "/user.png",
      userName: "User Name",
      calenderImage: "/calender.png",
      date: "16 Feb 2022",
    },
  ];

  return (
    <>
      <section className="banner_inner contact_banner">
        <div className="banner_content_inner text-center">
          <h2>Get In Touch</h2>
        </div>
      </section>
      <section className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog_main_wrapper row">
                <div className="col-md-6 no_padding blog_main_left">
                  <div
                    className="blog_main_left_inner"
                    style={{ backgroundImage: "url(/blog-single.jpg)" }}
                  ></div>
                </div>
                <div className="col-md-6 blog_main_right">
                  <div className="blog_main_right_inner">
                    <div>
                      <span className="featured-badge">FEATURED</span>
                    </div>
                    <div>
                      <h3>Delivering What Consumers Really Value</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam laboriosam, aliquid neque obcaecati maiores
                        labore. Minus quia cupiditate veritatis atque pariatur.
                        Odio, modi quia consectetur nam dicta officiis aliquam
                        explicabo!
                      </p>
                      <a href="/">Read More<i className="bi bi-arrow-right-short"></i></a>
                      <div className="row blog_main_bottom">
                        <div className="col-md-6 flex-center">
                          <img
                            className="user-icon"
                            src="/user.png"
                            alt="user"
                          />
                          <p>User Name</p>
                          <div className="col-md-6 flex-center justify-end">
                            <img
                              className="calender-icon"
                              src="orange-calender.svg"
                              alt="calender"
                            />
                            <p>12 Feb 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 common_title text-left">
              <h2>Popular Articles</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without.
              </p>
            </div>
            <div className="clearfix"></div>
            {blogs.map((blog, index) => (
              <div className="col-md-4 col-sm-12" key={index}>
                <div className="blog-item blog-item-1">
                  <Link href={blog.hyperLink}>
                    <a>
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
