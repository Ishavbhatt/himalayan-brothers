/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import AccordionExample from "../components/AccordionExample";
import Head from "next/head";

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

function SingleRoom() {
  const gallery = {
    items: 2,
    margin: 40,
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

  const otherRoomsData = [
    {
      title: "STANDARD ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Two in number, our standard rooms are made to accommodate two people. We do not compromise on quality and so you can find all the necessary items for a hassle-free and smooth vacation.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "STANDARD ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Two in number, our standard rooms are made to accommodate two people. We do not compromise on quality and so you can find all the necessary items for a hassle-free and smooth vacation.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
    {
      title: "STANDARD ROOM",
      bgImage: "/Single-room/other-room1.jpg",
      description:
        "Two in number, our standard rooms are made to accommodate two people. We do not compromise on quality and so you can find all the necessary items for a hassle-free and smooth vacation.",
      wifiImage: "/Single-room/wifi.svg",
      showerImage: "/Single-room/shower.svg",
      tvImage: "/Single-room/tv.svg",
    },
  ];

  const roomAmenities = [
    {
      icon: "/rooms-icon/floor-size.svg",
      text: "120 Square Feet’s Bed Room",
    },
    {
      icon: "/rooms-icon/double-bed.svg",
      text: "King Size Bed",
    },
    {
      icon: "/rooms-icon/wifi.svg",
      text: "Wifi",
    },
    {
      icon: "/rooms-icon/water.svg",
      text: "Hot Water (24 Hours)",
    },
    {
      icon: "/rooms-icon/tea.svg",
      text: "A Coffee/Tea, Milk & Sugar Bag",
    },
    {
      icon: "/rooms-icon/tv.svg",
      text: "21 Inches Led Tv With Cable Channels.",
    },
  ];
  return (
    <>
      <Head>
        <title>Single Room | Himalayan Brothers</title>
        <meta
          property="og:title"
          content="Popular Places in Dharamshala | Himalayan Brothers"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within dharamshala to visit | Himalayan Brothers"
        />
      </Head>

      <section className="banner_inner singleroom_banner"></section>

      <section className="room_page_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 about_section_left room_section_top text-center">
              <div className="common_title">
                <h2>Standard Room</h2>
              </div>
              <p>
                Two in number, our standard rooms are made to accommodate two
                people. We do not compromise on quality and so you can find all
                the necessary items for a hassle-free and smooth vacation.
                Whether it is about asking for room service or watching a movie
                online, our rooms are designed with you in mind. If you have
                taken a look at any of our single rooms and have understood that
                you need more space and a bigger bed, the standard room is what
                you need. Adequately illuminated, they make sure that you get to
                read the daily newspaper or your favourite book easily. In case
                you wish to take a look at the imposing Dhauladhar, open the
                window, move the curtains and imbibe the plenty of nature.
              </p>
              <a className="common_btn">
                BOOK YOUR STAY<i className="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="singleroom_gallery common_padding pt-0">
        <div className="container">
          <div className="row col-md-10 offset-md-1 col-sm-12">
            <div className="owl-carousel owl-theme owl-loaded restaurant-slider">
              <OwlCarousel
                className="activity-owl"
                responsiveClass={true}
                nav
                {...gallery}
              >
                <div className="singleroom-item">
                  <div className="singleroom_item_column singleroom-gallery-item-1"></div>
                </div>
                <div className="singleroom-item">
                  <div className="singleroom_item_column singleroom-gallery-item-1"></div>
                </div>
                <div className="singleroom-item">
                  <div className="singleroom_item_column singleroom-gallery-item-1"></div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="single_room_steps common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_tittle text-center">
              <h2 className="text-capitalise andea_font">Room Amenities</h2>
            </div>
          </div>

          <div className="steps_section w-100">
            <div className="row col-md-10 offset-md-1 col-sm-12">
              {roomAmenities.map((roomAmenitie, index) => (
                <div
                  className="col-lg-2 col-md-4 col-sm-12 steps_section_column text-center"
                  key={index}
                >
                  <span>
                    <img alt="Icon" src={roomAmenitie.icon} />
                  </span>
                  <p>{roomAmenitie.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <video
          autoPlay
          muted
          loop
          id=""
          playsInline
          style={{ width: "100%", height: "500px" }}
        >
          <source src="/video/roomvideo.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="faq_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_tittle text-center">
              <h2 className="text-capitalise andea_font">Faq’s</h2>
            </div>

            <div className="col-md-6 offset-md-3 col-sm-12 faq_section_upper ">
              <AccordionExample />
            </div>
          </div>
        </div>
      </section>

      <section className="other_room_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 common_tittle text-center">
              <h2 className="text-capitalise andea_font">Other Rooms</h2>
            </div>
            {otherRoomsData.map((room, index) => (
              <div className="col-md-4 col-sm-12" key={index}>
                <div className="other_room_wrapper w-100">
                  <a className="w-100" key={index}>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleRoom;
