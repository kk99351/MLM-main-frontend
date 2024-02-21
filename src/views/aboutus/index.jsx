import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "@/images/banner-girl-1.png";
import Brands from "@/images/mission.jpg";
import Visons from "@/images/vision.jpg";
import Goal from "@/images/goal.jpg";
import "./custom.css";

const About = () => {
  useDocumentTitle("EarthBound | ABOUT US");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>ABOUT US</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 40 }}>
          <div className="brands">
            <img
              style={{
                height: 300,
                width: 400,
              }}
              src={Brands}
              alt=""
            />
            <div>
              <h1>OUR MISSION</h1>
              <p
                style={{
                  marginTop: 50,
                }}
              >
                Starting in the year 2022, the sole purpose of Likeaura was to
                offer a convenient shopping store where you can find the
                trendiest and hottest of apparel for men and women. Contrary to
                the brick-and-mortar shop where it becomes a tedious and
                time-consuming task to browse the perfect outfit, we have
                created an easy and time-saving online store to shop a wide
                variety of stuff. The one-stop fashion store offers an exclusive
                collection for both men and women who are unruly and love
                individual and unconventional styling. At Likeaura, you will
                find the season’s most trending outfits and prominent
                accessories in the dominion of fashion. We undertake the task of
                offering the best online experience for those who love to own
                outfits that are sexy, hot, chic and fashionable.
              </p>
            </div>
          </div>

          <div className="brands">
            <div>
              <h1>OUR VISSION</h1>
              <p
                style={{
                  marginTop: 50,
                }}
              >
                Starting in the year 2022, the sole purpose of Likeaura was to
                offer a convenient shopping store where you can find the
                trendiest and hottest of apparel for men and women. Contrary to
                the brick-and-mortar shop where it becomes a tedious and
                time-consuming task to browse the perfect outfit, we have
                created an easy and time-saving online store to shop a wide
                variety of stuff. The one-stop fashion store offers an exclusive
                collection for both men and women who are unruly and love
                individual and unconventional styling. At Likeaura, you will
                find the season’s most trending outfits and prominent
                accessories in the dominion of fashion. We undertake the task of
                offering the best online experience for those who love to own
                outfits that are sexy, hot, chic and fashionable.
              </p>
            </div>
            <img
              style={{
                height: 300,
                width: 400,
              }}
              src={Visons}
              alt=""
            />
          </div>

          <div className="brands">
            <img
              style={{
                height: 300,
                width: 400,
              }}
              src={Goal}
              alt=""
            />
            <div>
            <h1>GOALS</h1>
              <p
                style={{
                  marginTop: 50,
                }}
              >
                Our goal is to provide the trendiest apparel and accessories at
                affordable prices without compromising on quality. Be it branded
                or designer outfits, the Likeaura shopping store gives you the
                best of both worlds. And with services like cash on delivery,
                easy return, refund, our platform has become one of the
                fantastic destinations for creating the best shopping experience
                for people across the country. We incorporate the latest trends
                and curate a unique version of style for men and women, to bring
                up a modern identity, together with beautiful styles and
                international class. With round the clock 24x7 support, we
                guarantee on-time delivery to create a hassle-free shopping
                experience for our customers.
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </main>
  );
};

export default About;
