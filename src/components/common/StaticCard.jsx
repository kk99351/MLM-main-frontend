import React from "react";
import Cloths from "../../images/cloth3.png";
import Cloths1 from "../../images/cloth2.png";
import Cloths2 from "../../images/cloth5.png";
import "./StaticCard.css"; // Import the CSS file for styling

const StaticCard = () => {
  return (
    <div className="static-card-container">
      <div className="static-card">
        <div className="card-content">
          <div className="text-content">
            <h5 style={{ fontWeight: "bold" }}>SALE 50%</h5>

            <hr
              style={{
                marginTop: 20,
                color: "red",
                height: 1,
                backgroundColor: "red",
                borderRadius: 50,
              }}
            ></hr>
            <p style={{ marginTop: -5 }}>See Collection</p>
          </div>
          <img className="card-image" src={Cloths} alt="Clothing"></img>
        </div>
      </div>
      <div className="static-card">
        <div className="card-content">
          <div className="text-content">
            <h5 style={{ fontWeight: "bold" }}>SALE 50%</h5>
            <hr
              style={{
                marginTop: 20,
                color: "red",
                height: 1,
                backgroundColor: "red",
                borderRadius: 50,
              }}
            ></hr>
            <p style={{ marginTop: -5 }}>See Collection</p>
          </div>
          <img className="card-image" src={Cloths2} alt="Clothing"></img>
        </div>
      </div>
      <div className="static-card">
        <div className="card-content">
          <div className="text-content">
            <h5 style={{ fontWeight: "bold" }}>SALE 50%</h5>
            <hr
              style={{
                marginTop: 20,
                color: "red",
                height: 1,
                backgroundColor: "red",
                borderRadius: 50,
              }}
            ></hr>
            <p style={{ marginTop: -5 }}>See Collection</p>
          </div>
          <img className="card-image" src={Cloths1} alt="Clothing"></img>
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
