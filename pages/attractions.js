/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";

function Attractions() {
  const attractions = [
    {
      attractionImage: "/attractions/bhagsu.jpg",
      title: "BHAGSUNAG WATERFALL",
    },
    {
      attractionImage: "/attractions/triund.jpg",
      title: "TRIUND HILL TREK",
    },
    {
      attractionImage: "/attractions/maclo.jpg",
      title: "MCLEOD GANJ",
    },
    {
      attractionImage: "/attractions/fort.jpg",
      title: "KANGRA FORT",
    },
    {
      attractionImage: "/attractions/stadium.jpg",
      title: "CRICKET STADIUM",
    },
    {
      attractionImage: "/attractions/dal.jpg",
      title: "DAL LAKE",
    },
    {
      attractionImage: "/attractions/chandratal.jpg",
      title: "CHANDRATAL LAKE",
    },
    {
      attractionImage: "/attractions/key-monastery.jpg",
      title: "KEY MONASTERY",
    },
    {
      attractionImage: "/attractions/bir.jpg",
      title: "BIR BILLING",
    },
  ];
  return (
    <>
    <Head>
        <title>
          Popular Places in Dharamshala | Himalayan Brothers
        </title>
        <meta
          property="og:title"
          content="Popular Places in Dharamshala | Himalayan Brothers"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within dharamshala to visit | Himalayan Brothers"
        />
      </Head>
      <section className="banner_inner attraction_banner">
        <div className="banner_content_inner text-center">
          <h2>Places You Must Visit While Staying With Us</h2>
        </div>
      </section>

      <section className="attraction_page_section common_padding">
        <div className="container">
          <div className="row attraction_page_columns">
            {attractions.map((attraction, index) => (
              <div className="hotels_item" key={index}>
                <div className="hotels_item_wrapper">
                  <img src={attraction.attractionImage} alt="Image" />
                  <div className="content">
                    <a className="common_btn">{attraction.title}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  
    </>
  );
}

export default Attractions;
