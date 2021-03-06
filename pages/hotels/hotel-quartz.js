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

function HotelQuartz() {
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

  const otherRoomsData = [
    {
      title: "SUPERIOR ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "If you are seeking unparalleled elegance within a reasonable budget, our Superior Rooms is just what you are looking for. Each Superior room is conveniently divided into three different sections that include a well-decorated bedroom, which is attached to a tastefully designed washroom and opens up to a balcony.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "MASTER ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "At Quartz, we offer well-furnished and luxurious Master rooms, meant for the contentment and relaxation of big families. We have designed them to comfortably accommodate couples with up to four children. These air-conditioned rooms with separate seating areas ensure you and your loved ones.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "JUNIOR SUITE",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Our Junior Suites are geared towards those travelers who seek long and memorable stays. In addition to a plush bedroom, a roomy balcony with an extraordinary view, and a generously sized washroom, our Junior Suite also has a 70 square feet living room with 2 sofa chairs and a table.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "SUITE",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "The luxury Suites at the Quartz are our largest and grandest accommodations, meant for those who require that extra bit of living space. A Suite provides ample room for two people with two children, with the option of two extra beds in the living room. You can stretch out in the exuberant living space..",
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
      hyperLink: "/hotels/hotel-samdupling",
      bgImage: "/hotel-spiti.jpg",
      title: "SAMDUPLING HOTEL",
    },
    {
      hyperLink: "/hotels/buddha-house",
      bgImage: "/hotel-buddha.jpg",
      title: "BUDDHA HOUSE",
    },
    {
      hyperLink: "/hotels/spiti-heritage",
      bgImage: "/hotel-spiti.jpg",
      title: "SPITI HERITAGE",
    },
  ];

  return (
    <>
      <Head>
        <title>Hotel Quartz | Himalayan Brothers</title>
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
                <h3>Hotel Quartz</h3>
                <h2>Best Hotel In Dharamshala</h2>
              </div>
              <p>
                Hotel Quartz is an exquisite Himalayan Brothers hotel chain
                property with an atmosphere that welcomes you with open arms.
                Our hotel is conveniently situated right in the heart of
                Dharamshala, the picturesque Hill Station in Kangra Valley. Set
                in the lush greens of the Kangra Valley, our rooms provide
                majestic views of the snow-capped Dhauladhar Mountains and
                Triund Hills. Hotel Quartz Dharamshala hotel is the best amongst
                Hotels in Dharamshala, designed for travelers who are seeking an
                experience of exquisite luxury and serenity. Just a 5-minute
                drive from the main road will lead you to a narrow lane, from
                where a world of exuberant comfort begins.
              </p>
              <p>
                Hotel Quartz is situated in a place far from the reaches of city
                traffic and pollution, thus ensuring pure relaxation for your
                senses. You will be mesmerized by the fresh Himalayan air and
                the stunning views in every direction. Watching the sunrise in
                the backdrop of the mighty Himalayan Mountains is a view you
                will cherish. Upon your entrance through our gate, you will come
                into an expansive 50 feet by 20 feet courtyard, which has a pond
                with floating swans, and an imposing Lord Buddha statue. Walking
                into the lobby you will experience a beautiful ambiance that we
                have crafted with light background music and exquisite decor.
              </p>
              <p>
                You can dine in our 40-seater restaurant, take a stroll down our
                beautiful compound, and visit our unique souvenir shop to carry
                home some memories. Experience the elegant grandeur of our
                beautiful hotel, and rejoice with amazing Himalayan hospitality.
                Hotel Quartz Dharamshala Hotels is one of the most sought-after
                3 star hotels in Dharamshala simply due for our attention to
                detail.
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

export default HotelQuartz;
