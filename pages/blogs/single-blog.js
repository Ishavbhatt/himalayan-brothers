/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Blogposts from "../../components/Blogposts";

export default function SingleBlog() {
  return (
    <>
      <Head>
        <title>Single BLog | Himalayan Brother</title>
        {/* <link rel="icon" href="/favicon.png" /> */}
        <meta property="og:title" content="Single Blog | Himalayan Brother" />
        <meta property="og:description" content="blog | Himalayan Brother" />
      </Head>
      <section className="banner_inner attraction_banner">
        <div className="banner_content_inner text-center">
          <h2>Delivering What Consumers Really Value</h2>
        </div>
      </section>
      <section className="single-blog common_padding">
        <div className="single-blog-subheader">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 flex-center">
                <div>
                  <img src="/user.png" alt="user" />
                  <span className="single-blog-username">User Name</span>
                </div>
                <div className="single-blog-sub-right">
                  <img src="/orange-calender.svg" alt="user" />
                  <span className="single-blog-username">16 Feb 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-blog-about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="single-blog-left"></div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="single-blog-right">
                  <p>
                    Mcleodganj or Little Lhasa is another well-preserved
                    treasure of Himachal Pradesh and a suburb of Dharamshala.
                    Being the headquarters of the Tibetan government in exile,
                    it is a town with great religious, political and
                    humanitarian significance. But more importantly, it is one
                    of the most captivating and picturesque hill stations in
                    India. Mcleodganj is astoundingly beautiful, with an dense
                    greenery enveloped by the awe-inspiring high peaks of the
                    Himalayas.
                  </p>
                  <br />
                  <q>
                    The mountain town is just 5 km from Dharamshala town, but it
                    is at a considerably higher altitude than the latter. It is
                    a place of considerable religious significance, but also
                    known as a dynamic center of Tibetan culture.
                  </q>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 single-blog-text">
                <p>
                  Right in the lap of the Dhauladhar mountain range, Mcleodganj
                  is yet another must visit place for luxury travels. Complete
                  with ample indigenous goods shopping opportunities and a
                  multitude of delicious authentic Tibetan cuisine choices.
                </p>
                <p>
                  If you are coming down to Mcleodganj, staying at one of the
                  nearby Himalayan Brothers luxury hotels can make your
                  experience infinitely more memorable. This remote Himalayan
                  town is also home to some of the friendliest and hospitable
                  people in the world. Numerous amazing sightseeing locations
                  await your arrival in this magnificent mountain paradise.
                </p>
              </div>
              <div className="col-md-12 col-sm-12">
                <img className="blog-mid-img" src="/blog-mid-img.jpg" alt="" />
              </div>
              <div className="col-md-12 col-sm-12 single-blog-text">
                <p>
                  Right in the lap of the Dhauladhar mountain range, Mcleodganj
                  is yet another must visit place for luxury travels. Complete
                  with ample indigenous goods shopping opportunities and a
                  multitude of delicious authentic Tibetan cuisine choices.
                </p>
                <p>
                  If you are coming down to Mcleodganj, staying at one of the
                  nearby Himalayan Brothers luxury hotels can make your
                  experience infinitely more memorable. This remote Himalayan
                  town is also home to some of the friendliest and hospitable
                  people in the world. Numerous amazing sightseeing locations
                  await your arrival in this magnificent mountain paradise.Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry’s standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="col-md-12 col-sm-12 common_title text-center">
          <h2>You May Also Like</h2>
        </div>
        <Blogposts />
      </section>
    </>
  );
}
