import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "@/images/banner-girl-1.png";
import Brands from "@/images/brand.jpg";
import "./custom.css";

const Faq = () => {
  useDocumentTitle("EarthBound | FAQ");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>Brands</h1>
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
            <p
              style={{
                marginTop: 50,
              }}
            >
              Identity Builders: Brands serve as powerful identity builders,
              creating a distinct image and personality for products, companies,
              or services. Trust and Credibility: Successful brands foster trust
              and credibility among consumers, establishing a reliable and
              consistent reputation over time. Differentiation: Brands
              differentiate products from competitors, highlighting unique
              features and qualities that set them apart in the market.
              Emotional Connection: Many brands evoke strong emotional
              connections, resonating with consumers on a personal level and
              influencing their purchasing decisions. Recognition: Strong brands
              are easily recognizable, often represented by logos, slogans, or
              distinctive visual elements that become synonymous with their
              offerings.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
