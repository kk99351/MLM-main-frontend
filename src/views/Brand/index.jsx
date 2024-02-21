import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import bannerImg from "@/images/banner-girl-1.png";
import "./custom.css";
const Brand = () => {
  useDocumentTitle("EarthBound | FAQ");
  useScrollTop();

  const faqItems = [
    {
      question: "What is EarthBound",
      answer:
        "LIKEAURA in an online investment platform for forex and digital assets, with automated robot trading service. Forex trading integrated with Artificial Intelligence excels your exposure for capital gains and developments.",
    },
    {
      question: "Is EarthBound is Safe?",
      answer:
        "We provide high-end security for fund management, automated trading and user data management. We have built our platform on encrypted technology which maximizes initiation of order and minimizes loss of data and information..",
    },
    {
      question: "How I join EarthBound?",
      answer:
        "In order to register with LIKEAURA, you need to have a Refer ID of the person whom you've been referred by..",
    },
    // Add more FAQ items as needed
  ];

  const toggleAnswer = (index) => {
    const faqItem = document.getElementById(`faq-item-${index}`);
    const answer = faqItem.querySelector(".faq-answer");

    answer.style.display = answer.style.display === "block" ? "none" : "block";
  };

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>FAQ</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 40 }}>
          <div className="faq-content">
            {faqItems.map((item, index) => (
              <div className="faq-item" key={index} id={`faq-item-${index}`}>
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{item.question}</span>
                  <span className="arrow">&#9660;</span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brand;
