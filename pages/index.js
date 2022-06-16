/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Blogposts from "../components/Blogposts";

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

export default function Home() {

  const testimonials = [
    {
      commaImg: "/comma.png",
      title: "Dharamshala Beauty",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Illo nobis deleniti, aliquid numquam recusandae itaqueiste obcaecati nesciunt cupiditate delectus natus illum porro exercitationem, amet quisquam odit? Similique, quain",
      guestName: "Sanjeev, India",
    },
    {
      commaImg: "/comma.png",
      title: "Dharamshala Beauty",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Illo nobis deleniti, aliquid numquam recusandae itaqueiste obcaecati nesciunt cupiditate delectus natus illum porro exercitationem, amet quisquam odit? Similique, quain",
      guestName: "Sanjeev, India",
    },
    {
      commaImg: "/comma.png",
      title: "Dharamshala Beauty",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Illo nobis deleniti, aliquid numquam recusandae itaqueiste obcaecati nesciunt cupiditate delectus natus illum porro exercitationem, amet quisquam odit? Similique, quain",
      guestName: "Sanjeev, India",
    },
  ];

  const testiCarousel = {
    items: 1,
    dots: false,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.png" />
        <title>Himalayan Brothers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="banner home_banner">
        <div className="banner_content text-center ">
          <h1 className="text-uppercase">
            exploring<span>the himachal</span>
          </h1>
          <p className="text-capitalize">with himalyan brothers</p>
        </div>
        <img src="/banner-top.png" alt="Image" />
      </section>

      <section className="about_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 about_section_left">
              <div className="common_title">
                <h3>A Few Words About Us</h3>
                <h2>Himalayan Brothers</h2>
              </div>
              <p>
                Hotel Himalayan Brothers invites you to a serene and calm stay
                in the lap of nature. Cuddled in the picturesque hills and
                snow-capped mountains of the unsullied Dharamshala valley, our
                hotels are just the place to rest if you are looking for a
                peaceful and pleasant stay. Owing to their strategic location,
                our Dharamshala Hotels offer you the comfort to access the major
                tourist attractions in and around Dharamshala.
              </p>
              <a className="common_btn common_btn2">
                KNOW MORE<i className="bi bi-arrow-right-short"></i>
              </a>
            </div>

            <div className="col-md-6 col-sm-12 about_section_right text-center">
              <div className="about_image">
                <img src="about-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotels_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_title text-center">
              <h3>Hotels</h3>
              <h2>Our Hotels In Dharamshala</h2>
              <p> Pick a hotel that best suits your taste and budget</p>
              <a className="common_btn ">
                EXPLORE ALL HOTELS<i className="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="hotel_section_wrapper row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hotel_column_wrapper hotel_quartz_bg">
                <Link href="/hotels/hotel-quartz">
                  <a>
                    <div className="hotel_content">
                      <div className="common_btn ">
                        HOTEL QUARTZ<i className="bi bi-arrow-right-short"></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hotel_column_wrapper hotel_buddha_bg">
                <Link href="/hotels/buddha-house">
                  <a>
                    <div className="hotel_content">
                      <div className="common_btn ">
                        BUDDHA HOUSE<i className="bi bi-arrow-right-short"></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hotel_column_wrapper hotel_spiti_bg">
                <Link href="/hotels/spiti-heritage">
                  <a>
                    <div className="hotel_content">
                      <div className="common_btn ">
                        SPITI HERITAGE
                        <i className="bi bi-arrow-right-short"></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hotel_column_wrapper hotel_quartz_bg">
                <Link href="/hotels/hotel-samdupling">
                  <a>
                    <div className="hotel_content">
                      <div className="common_btn ">
                        HOTEL SAMDUPLING
                        <i className="bi bi-arrow-right-short"></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotels_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_title text-center">
              <h3>Near By Attractions</h3>
              <h2>Here Is The Best Places To Visit Around Our Hotels</h2>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="row attraction_section_columns">
            <div className="col-md-4 col-sm-12 hotels_item">
              <div className="hotels_item_wrapper bhagshu_attr">
                <div className="content">
                  <a className="common_btn">BHAGSUNAG WATERFALL</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 hotels_item">
              <div className="hotels_item_main">
                <div className="hotels_item_wrapper triund_attr">
                  <div className="content">
                    <a className="common_btn">TRIUND HILL TREK</a>
                  </div>
                </div>
              </div>

              <div className="hotels_item_main">
                <div className="hotels_item_wrapper meclo_attr">
                  <div className="content">
                    <a className="common_btn">MCLEOD GANJ</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 hotels_item">
              <div className="hotels_item_wrapper stadium_attr">
                <div className="content">
                  <a className="common_btn">CRICKET STADIUM</a>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 common_title text-center">
              <Link href="/attractions">
                <a className="common_btn ">
                  EXPLORE ALL ATTRACTIONS
                  <i className="bi bi-arrow-right-short"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_title text-center">
              <h3>Guest Reviews</h3>
              <h2>What People Say's About Us</h2>
            </div>
          </div>
        </div>
        <div className="testimonial-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12 ">
                <OwlCarousel
                  className="testimonisl-theme owl-theme"
                  nav
                  {...testiCarousel}
                >
                  {testimonials.map((testimonial, index) => (
                    <div className="testimonial_slider_wrapper" key={index}>
                      <div className="testimonial-slider">
                        <img src={testimonial.commaImg} alt="comma-icon" />
                        <h3>{testimonial.title}</h3>
                        <p>{testimonial.para}</p>
                        <span>{testimonial.guestName}</span>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_title text-center">
              <h3>Blog</h3>
              <h2>The Blog Posts</h2>
            </div>
            <div className="col-md-12">
              <Blogposts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
