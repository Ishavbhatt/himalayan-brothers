/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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

function BuddhaHouse() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

    // define handler change function on check-in date
    const handleCheckInDate = (date) => {
      setCheckInDate(date);
      setCheckOutDate(null);
    };
  
    // define handler change function on check-out date
    const handleCheckOutDate = (date) => {
      setCheckOutDate(date);
    };

  const bannerGallery = {
    center: true,
    loop: true,
    dots: false,
    margin: 20,
    nav: true,
    responsiveclassName: true,
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
        items: 2.6,
        loop: true,
      },
    },
  };

  const restaurantGallery = {
    center: true,
    loop: true,
    dots: false,
    nav: true,
    responsiveclassName: true,
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
        items: 2.6,
        loop: true,
      },
    },
  };

  const similar_Hotels = {
    loop: false,
    margin: 20,
    dots: false,
    nav: true,
    responsiveclassName: true,
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
        loop: true,
      },
    },
  };

  const other_rooms = {
    loop: false,
    margin: 20,
    dots: false,
    nav: false,
    responsiveclassName: true,
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
        loop: false,
      },
    },
  };

  const otherHotels = [
    {
      hyperLink: "/hotels/spiti-heritage",
      bgImage: "/hotel-spiti.jpg",
      title: "SPITI HERITAGE",
    },
    {
      hyperLink: "/hotels/hotel-quartz",
      bgImage: "/hotel-quartz.png",
      title: "QUARTZ HOTEL",
    },
    {
      hyperLink: "/hotels/hotel-samdupling",
      bgImage: "/hotel-buddha.jpg",
      title: "SAMDUPLING HOTEL",
    },
  ];

  const otherRoomsData = [
    {
      title: "COZY QUEEN ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "If you are seeking unparalleled elegance within a reasonable budget, our Superior Rooms is just what you are looking for. Each Superior room is conveniently divided into three different sections that include a well-decorated bedroom, which is attached to a tastefully designed washroom and opens up to a balcony.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "PREMIUM ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "At Quartz, we offer well-furnished and luxurious Master rooms, meant for the contentment and relaxation of big families. We have designed them to comfortably accommodate couples with up to four children. These air-conditioned rooms with separate seating areas ensure you and your loved ones.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "SUPERIOR ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Our Junior Suites are geared towards those travelers who seek long and memorable stays. In addition to a plush bedroom, a roomy balcony with an extraordinary view, and a generously sized washroom, our Junior Suite also has a 70 square feet living room with 2 sofa chairs and a table.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
  ];

  const resGalleryItem = [
    {
      resImage: "/blog-single.jpg",
    },
    {
      resImage: "/blog-single.jpg",
    },
    {
      resImage: "/blog-single.jpg",
    },
    {
      resImage: "/blog-single.jpg",
    },
    {
      resImage: "/blog-single.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Buddha House | Himalayan Brothers</title>
        <meta
          property="og:title"
          content="Popular Places in Dharamshala | Himalayan Brothers"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within dharamshala to visit | Himalayan Brothers"
        />
      </Head>

      <section className="single_hotel_banner">
        <div className="single_hotel_banner_main">
          <OwlCarousel
            className="owl-theme"
            responsiveClass={true}
            nav
            {...bannerGallery}
          >
            <div className="singleroom-item">
              <div className="singlehotel_item_column singleroom-gallery-item-1"></div>
            </div>
            <div className="singleroom-item">
              <div className="singlehotel_item_column singleroom-gallery-item-1"></div>
            </div>
            <div className="singleroom-item">
              <div className="singlehotel_item_column singleroom-gallery-item-1"></div>
            </div>
            <div className="singleroom-item">
              <div className="singlehotel_item_column singleroom-gallery-item-1"></div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="room_page_section hotel_page_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8  col-sm-12  room_section_top text-left">
              <div className="common_title">
                <h3>Buddha House</h3>
                <h2>Best Hotel In Dharamshala</h2>
              </div>
              <p>
                Buddha House Himalayan Brothers, one of our dream Dharmashala
                hotels, presents a swanky staying option in the heart of
                Dharmashala. Adding a charming touch to your stay, our hotel,
                situated in the cozy lap of nature. Hotel Buddha House can be
                quite a good lodging and fooding option among Dharamshala
                Hotels. Make an entry through our main gate, and get ready to be
                awed by the looks of the property.
              </p>
              <p>
                Situated in a place where pollution in any form is not visible,
                everything that can make for a well-off and anxiety-free stay
                will be present here. We are aware that you might bring your
                vehicle(s) for your vacation and therefore we have ample space
                parking area . Equipped with CCTV cameras at strategic
                positions, we will ensure your safety and security for as long
                as you are within our campus. You may relax and revel to your
                ultimate capacity, without stressing over your baggage’s safety.
              </p>
              <p>
                If you visit us in a group (schools, colleges, institutions,
                corporate houses), we are not just suitable for a comfy stay,
                but also for conferences and presentations of around 50 people.
                Our well-furnished conference room will allow you a bespoke
                discussion or meeting experience.
              </p>
              <p>
                Too tired to climb up the stairs after a tedious walk down the
                slopes or after an all-day trip? Avail our elevator. At Buddha
                House, one of the most awaited Dharamshala hotels, we are always
                ready to serve you with the best fare, no matter what. Our
                in-house restaurant and coffee shop can house fifty people
                together, hence making it easy for you and your group to sit and
                have fun together.
              </p>
            </div>

            <div className="col-md-4 col-sm-12 contact_section_left">
              <form className="w-100">
                <h3 className="andea_font">Get Quotes</h3>
                <div className="form-group ">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                <DatePicker
                  wrapperClassName="form-control"
                  placeholderText="Check In"
                  className="datepicker_input"
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
                </div>
                <div className="form-group ">
                <DatePicker
                  wrapperClassName="form-control"
                  placeholderText="Check Out"
                  className="datepicker_input"
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
                </div>
                <div className="form-group ">
                  <select className="form-control">
                    <option>Adults</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div className="form-group ">
                  <select className="form-control">
                    <option>Child</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div className="form-group ">
                  <select className="form-control">
                    <option>Room Type</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
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

      <section className="other_room_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_tittle text-left">
              <h2 className="text-capitalise andea_font">Rooms</h2>
            </div>
            <OwlCarousel
              className="other_rooms"
              responsiveClass={true}
              nav
              {...other_rooms}
            >
              {otherRoomsData.map((room, index) => (
                <div className="" key={index}>
                  <div className="other_room_wrapper w-100">
                    <a className="w-100">
                      <div
                        className="other_room_image w-100"
                        style={{ backgroundImage: `url(${room.bgImage})` }}
                      >
                        <div className="common_btn">{room.title}</div>
                      </div>
                      <div className="other_room_content text-center w-100">
                        <p>{room.description}</p>
                        <ul>
                          <li>
                            <img src={room.wifiImage} alt="Icon" />
                          </li>
                          <li>
                            <img src={room.showerImage} alt="Icon" />
                          </li>
                          <li>
                            <img src={room.tvImage} alt="Icon" />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </OwlCarousel>
            <div className="col-md-12 col-sm-12 common_title text-center">
              <a className="common_btn ">
                EXPLORE ALL ROOMS<i className="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="restro_rating_section common_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="w-100 common_tittle text-left">
                <h2 className="text-capitalise andea_font">Restaurant</h2>
                <OwlCarousel
                  className="activity-owl"
                  responsiveClass={true}
                  nav
                  {...restaurantGallery}
                >
                  {resGalleryItem.map((item, index) => (
                    <div className="singleroom-item" key={index}>
                      <div
                        className="restaurant_item_column"
                        style={{ backgroundImage: `url(${item.resImage})` }}
                      ></div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 restro_rating_section_right">
              <div className="w-100 common_tittle text-left">
                <h2 className="text-capitalise andea_font">Ratings</h2>
              </div>

              <div className="w-100 rating_div_wrapper text-left">
                <h4>
                  5 OUT OF 5
                  <span>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </span>
                </h4>
                <p>Based on 33 reviews</p>
              </div>

              <div className="rating_progress w-100">
                <div className="progress_div w-100">
                  <p>Location</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="50"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress_div w-100">
                  <p>Cleanliness</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress_div w-100">
                  <p>Service</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress_div w-100">
                  <p>Value</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress_div w-100">
                  <p>Food</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotel_map_section">
        <div className="hotel_map_content">
          <h3 className="andea_font">Hotel Contact Info</h3>

          <div className="hotel_map_column">
            <h4>Call Us</h4>
            <p>
              <a href="tel:9882340444">(+91) 9882340444</a>,
              <a href="tel:8988312345">8988312345</a>
            </p>
          </div>

          <div className="hotel_map_column">
            <h4>Email</h4>
            <p>
              <a href="mailto:quartz@hotelhimalayanbrothers.com">
                quartz@hotelhimalayanbrothers.com
              </a>
            </p>
          </div>

          <div className="hotel_map_column">
            <h4>Address</h4>
            <p>
              <a href="">
                Near Norbulingka, Dharamshala 176057, Himachal Pradesh, India.
              </a>
            </p>
          </div>

          <div className="social_links hotel_map_column">
            <h4>Follow Us</h4>
            <p>
              <a href="">
                <img src="/single-hotel/fb.svg" alt="icon" />
              </a>
              <a href="">
                <img src="/single-hotel/insta.svg" alt="icon" />
              </a>
              <a href="">
                <img src="/single-hotel/twitter.svg" alt="icon" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="otherhotel_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_title text-center">
              <h3>Hotels</h3>
              <h2>Our Other Hotels In Dharamshala</h2>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="row attraction_section_columns">
            <OwlCarousel
              className="similar_Hotels"
              responsiveClass={true}
              nav
              {...similar_Hotels}
            >
              {otherHotels.map((otherHotel, index) => (
                <div className="other_hotels_item" key={index}>
                  <div
                    className="other_hotels_wrapper"
                    style={{ backgroundImage: `url(${otherHotel.bgImage})` }}
                  >
                    <div className="content">
                      <Link href={otherHotel.hyperLink}>
                        <a className="common_btn">
                          {otherHotel.title}
                          <i className="bi bi-arrow-right-short"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuddhaHouse;
