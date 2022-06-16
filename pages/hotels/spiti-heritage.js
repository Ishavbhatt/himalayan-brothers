/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
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

function SpitiHeritage() {

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
      hyperLink: "/hotels/buddha-house",
      bgImage: "/hotel-buddha.jpg",
      title: "SAMDUPLING hOTEL",
    },
  ];
  
  const otherRoomsData = [
    {
      title: "DELUXE ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "The 4 well appointed rooms with amazing view of Spiti river and mountains. Each has a double bed with all modern facilities like an attached bath room with hot and cold water, western water closet, wall mounted TV with cable, intercom or a sitting area with each rooms.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "SUPERIOR ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Superior Room Are you an aficionado of a royal lifestyle and do not want to waste any chance to take advantage of your opportunity? If you are seeking unparalleled elegance within a reasonable budget, our Superior Rooms is just what you are looking for All the furniture is handpicked so every guest get memorable.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "STANDARD ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "A couple of these rooms in our property are proof that we think about everyone. Our attention is not limited to just not for luxury, we are equally thoughtful about if you are on tight budget and wanting a comfortable abode at pocket-friendly terms with all modern amenities than our standard rooms are the best Option.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "LUXURY QUEEN ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "A couple of these rooms in our property are proof that we think about everyone. Our attention is not limited to just not for luxury, we are equally thoughtful about if you are on tight budget and wanting a comfortable abode at pocket-friendly terms with all modern amenities than our standard rooms are the best Option.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "FAMILY TRIPLE ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Our attention is not limited to just singles and couples, we are equally thoughtful about guests with families. If you are 3 persons or 4 than Family triple rooms are perfect for you, Family triple room come with 1 king size bed and single bed and lot of space for 1 more extra mattress.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "MAHARAJ TRIPLE ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "As it names Maharaja is not just spacious, but offers amenities fit for the royalty. The Maharaja room is come with super comfy beds and luxury spring mattresses. You will sleep like a baby. This room is perfect for couples and families.",
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
        <title>Spiti Heritage | Himalayan Brothers</title>
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
                <h3>Hotel Spiti Heritage</h3>
                <h2>Best Hotel In Kaza</h2>
              </div>
              <p>
                Spiti Valley is in the list of our dream destinations and now we
                come with our new hotel in Kaza with the name of Spiti Heritage
                Himalayan Brothers. Spiti Heritage Himalayan brother is swanky
                staying option in Kaza which is known as heart of Spiti Valley.
              </p>
              <p>
                Situated in a place where pollution in any form is not visible,
                everything that can make for a well-off and anxiety-free stay
                will be present here and Adding a charming touch to your stay,
                our hotel, situated in the cosy lap of nature just on the bank
                of Spiti river and facing Snow peaked mountains. We will get
                amazing view of virgin snow peaked mountains from each of our
                room its not matter what ever room you choose.
              </p>
              <p>
                Hotel Spiti Heritage has been rated amongst the top 3 star
                hotels of Spiti since its inception. With focus on exceptional
                service and hospitality, the hotel has been a home to memories
                of thousands of guests from all over the world.
              </p>
              <p>
                At Hotel Spiti Heritage, we understand the value of your
                holiday. We understand that a holiday trip is not just about
                roaming around places, but also about enjoying a pleasant stay.
                So we are always ready to serve you with the best fare, no
                matter what. Our crew of trained staffs works tirelessly to make
                your stay at the Hotel Spiti Heritage pleasurable and
                unforgettable.
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

export default SpitiHeritage;
