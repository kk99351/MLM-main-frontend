import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "@/images/banner-girl-1.png";
import Brands from "@/images/brand.jpg";
import "./custom.css"; // Import your CSS file for custom styles

const Site = () => {
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
        <div style={{ width: "100%", marginTop: 40 }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>My Account</th>
                <th>About Us</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mens</td>
                <td>My Account</td>
                <td>About Us</td>
              </tr>
              <tr>
                <td>Womens</td>
                <td>Registers</td>
                <td>Brands</td>
              </tr>
              <tr>
                <td></td>
                <td>Order History</td>
                <td>Delivery Information</td>
              </tr>
              <tr>
                <td></td>
                <td>Cart</td>
                <td>Privacy Policy</td>
              </tr>
              <tr>
                <td></td>
                <td>Edit Profile</td>
                <td>Terms and Condition</td>
              </tr>
              <tr>
                <td></td>
                <td>Faq's</td>
                <td>Change Password</td>
              </tr>
              <tr>
                <td></td>
                <td>CheckOut</td>
                <td>Sitemap</td>
              </tr>
              <tr>
                <td></td>
                <td>NewsLetter</td>
                <td>Delivery information</td>
              </tr>
              <tr>
                <td></td>
                <td>Rteurns</td>
                <td>Gifts Certificates</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Site;
