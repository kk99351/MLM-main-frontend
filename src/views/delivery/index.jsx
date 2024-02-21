import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import bannerImg from "@/images/banner-girl-1.png";

const Delivery = () => {
  useDocumentTitle("EarthBound | SHIPPING");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>DELIVERY</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 40 }}>
          <div className="delivery-content">
            <h2>Shipping And Delivery Policy</h2>

            <p>
              Below stipulated is the shipping and delivery information of likeaura.com. Read carefully the below FAQs regarding shipping and delivery.
            </p>

            <h3 style={{ color: "orange" }}>Shipping Charges:</h3>
            <ul>
              <li>In India, the shipping charges for an order below Rs. 5000 is Rs.150.</li>
              <li>For an order above Rs. 5000, there are no charges.</li>
            </ul>

            <h3 style={{ color: "orange" }}>Shipping Charges Based on Weight:</h3>
            <p>
              Shipping charges remain the same irrespective of the number of items or weight added to the cart.
            </p>

            <h3 style={{ color: "orange" }}>Delivery Time:</h3>
            <p>
              Once the user places an order, we process and ship it within 48 hours. We deliver the product within 4-6 working days in India, depending on the location. Delivery times may vary based on the accessibility of your location.
            </p>

            <p>
              If you have placed multiple orders, the items might reach you in different shipments. The delivery time is indicative, and on rare occasions, there might be unavoidable delays. We will keep you updated. If you don’t receive your order on time, please call us or email us about your issue, and we will try to resolve it to the best of our abilities.
            </p>

            <h3 style={{ color: "orange" }}>Methods of Delivery:</h3>
            <p>
              We have partnered with leading and reliable courier companies for shipping products across India.
            </p>

            <h3 style={{ color: "orange" }}>Package Tampering:</h3>
            <p>
              If your package appears to be opened or tampered, please do not accept the order and inform us on the customer care no. 9103001917 as soon as possible. Informing us after 24 hours of the attempted delivery will not be considered.
            </p>

            <p>
              For any queries, please feel free to Email us at care@likeaura.com or call us on 9103001917.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Delivery;
