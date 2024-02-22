import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "@/images/banner-girl-1.png";
import Brands from "@/images/brand.jpg";

const News = () => {
  useDocumentTitle("EarthBound | NEWSLETTERS");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>NEWSLETTERS</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 80 }}>
          <div
            style={{
              width: 500,
              margin: "auto",
              padding: 30,
              backgroundColor: "rgb(221,219,222)",
              display: "flex",
            }}
          >
            <input
              placeholder="Enter Your Email Here..."
              style={{ width: "80%", backgroundColor: "#fff", height: 40 }}
            ></input>
            <button
              style={{
                width: "20%",
                height: 40,
                backgroundColor: "orange",
                border: "none",
                borderRadius: 5,
                marginLeft: 10,
              }}
            >
              click
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default News;
