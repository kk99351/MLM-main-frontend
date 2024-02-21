import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "@/images/banner-girl-1.png";
import Brands from "@/images/brand.jpg";

const Special = () => {
  useDocumentTitle("EarthBound | SPECIAL");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>SPECIAL</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Special;
