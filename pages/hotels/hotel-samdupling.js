/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

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

function HotelSamdupling() {
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

  const otherRoomsData = [
    {
      title: "STANDARD ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Two in number, our standard rooms are made to accommodate two people. We do not compromise on quality and so you can find all the necessary items for a hassle-free and smooth vacation. Whether it is about asking for room service or watching a movie online, our rooms are designed with you in mind.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "DELUXE ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "A couple of these rooms in our property are proof that we think about everyone. Our attention is not limited to just singles and couples, we are equally thoughtful about guests with families. You can tuck in your little one along with you on your bed. If your child is a little older and wants to sleep alone on a bed.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "SUPER DELUXE ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Housing 4 super deluxe rooms in its arena, Hotel Samdupling is a place where your wishful thinking gets wings. Besides a commodious bedroom and a washroom, we also present to you a balcony, which gifts you an engaging site – an unruffled plain land, Triund, at a distance and the mountains all around,",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "SUITE ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Are you an aficionado of a royal lifestyle and do not want to waste any chance to take advantage of your opportunity? If yes, we can help you with our suite room. An example of abundance, this room includes a bedroom, t washrooms and three balconies. ",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "SINGLR ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Ideal for one person, our 3 single rooms are as restful as your bedroom. All the niceties that can make your stay enjoyable have made their way to this room. Immaculate and clean, it makes sure that you relax with all worries forgotten. Just unpack your bags once you set foot inside and lose yoursel",
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

  const otherHotels = [
    {
      hyperLink: "/hotels/buddha-house",
      bgImage: "/hotel-buddha.jpg",
      title: "BUDDHA HOUSE",
    },
    {
      hyperLink: "/hotels/hotel-quartz",
      bgImage: "/hotel-quartz.png",
      title: "QUARTZ HOTEL",
    },
    {
      hyperLink: "/hotels/spiti-heritage",
      bgImage: "/hotel-spiti.jpg",
      title: "SPITI HERITAGE",
    },
  ];

  return (
    <>
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
                <h3>Hotel Samdupling </h3>
                <h2>Best Hotel in Mcleodganj & Dharamshala</h2>
              </div>
              <p>
                Hotel Samdupling in Dharamshala offers a highly-personalized
                stay experience in its 12 well-furnished rooms, albeit of
                mid-range. For tourists wanting a comfortable abode at
                pocket-friendly terms, our hotel Samdubling, one of the most
                popular 3 star hotels in McLeodganj, Dharamshala, can be quite a
                destination. Thanks to our professionally trained staff from the
                valley, we render a homely touch to all our mannerisms in
                treating you.
              </p>
              <p>
                Just a 5-minute drive from the main road will lead you to a
                narrow lane, from where a world of exuberant comfort begins.
                Hotel Samdubling facing a monastery, it boasts the perfect
                location for a tranquil holiday, far from the crowd. Giving you
                a glimpse of the crown jewel of Dharamshala, Triund, the hotel
                makes you loosen up. Most of the rooms proffer a view of the
                stately slopes of the Dhauladhar, thus giving rise in you, the
                confidence to scale new heights in life. Besides our live
                gallery of greenery and snow, we replete your stay with ease and
                relaxation. At Hotel Samdupling, you get all the conveniences
                that comprise your everyday life. Right from a snuggly bed, a
                television set to the Intercom, Wi-fi and more, we bring you the
                much-needed contentment you have been yearning for. Just place a
                call and get your needs looked after.
              </p>
              <p>
                If it is winter and the cold is torturing you, a small message
                to one of our employees will see you sitting in front of a
                bonfire, soaking up the warmth whilst drinking in the charm of a
                lovely stay. Hotel Samdupling is one of the best hotels in
                Mcleodganj simply due for our attention to detail
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
                <div className="form-group ">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Check In"
                  />
                </div>
                <div className="form-group ">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Check Out"
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
                <div className="other_hotels_item">
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

export default HotelSamdupling;
