import * as Route from "@/constants/routes";
import logo from "@/images/logo-full.png";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#ebe7e4",
        padding: "40px 0",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img alt="Footer logo" style={logoStyle} src={logo} />
      </div>
      <div
        style={{
          width: "80%",
          alignItems: "center",
          alignSelf: "center",
          margin: "auto",
        }}
      >
        <div style={footerStyle}>
          <div style={footerColStyle}>
            <h2 style={footerHeadingStyle}>Extra</h2>
            <div>
              <a href="/home/Faq" style={linkStyle}>
                Brands
              </a>
              <a href="/home/Gift" style={linkStyle}>
                Gift Certificates
              </a>
              <a href="/home/Affiliate" style={linkStyle}>
                Affiliates
              </a>
              <a href="/home/special" style={linkStyle}>
                Special
              </a>
              <a href="/home/sitemap" style={linkStyle}>
                Sitemap
              </a>
            </div>
          </div>
          <div style={footerColStyle}>
            <h2 style={footerHeadingStyle}>My Account</h2>
            <div>
              <a href="" style={linkStyle}>
                My Account
              </a>
              <a href="" style={linkStyle}>
                Order History
              </a>
              <a href="" style={linkStyle}>
                Wish List
              </a>
              <a href="/home/news" style={linkStyle}>
                Newsletter
              </a>
            </div>
          </div>
          <div style={footerColStyle}>
            <h2 style={footerHeadingStyle}>Information</h2>
            <div>
              <a href="/home/about" style={linkStyle}>
                About Us
              </a>
              <a href="/home/delivery" style={linkStyle}>
                Delivery Information
              </a>
              <a href="/home/return" style={linkStyle}>
                Return, Refund & Cancellation Policy
              </a>
              <a href="/home/privacy" style={linkStyle}>
                Privacy Policy
              </a>
              <a href="/home/terms" style={linkStyle}>
                Terms & Conditions
              </a>
              <a href="/home/brand" style={linkStyle}>
                FAQs
              </a>
            </div>
          </div>
          <div style={footerColStyle}>
            <h2 style={footerHeadingStyle}>Store Information</h2>
            <div>
              <p style={{ marginBottom: "10px" }}>
                Likeaura Market Private Limited HN-372, Ward No-3, Near Patwar
                Bhawan, Vila GE-Maujgarh, Sirsa, Sirsa-125104, Haryana{" "}
              </p>
              <a href="" style={linkStyle}>
                9103001917
              </a>
              <a href="" style={linkStyle}>
                likeaura47@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Define inline styles
const footerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  flexWrap: "wrap",
  padding: 20,
};

const footerColStyle = {
  flex: "1",
  padding: "0 20px",
};

const footerHeadingStyle = {
  color: "#005876",
  fontSize: "3rem",
  marginBottom: "50px",
};

const logoStyle = {
  width: "200px",
};

const linkStyle = {
  display: "block",
  margin: "10px 0",
  textDecoration: "none",
  color: "#000",
  fontSize: "1.5rem",
  transition: "color 0.3s",
};

export default Footer;
