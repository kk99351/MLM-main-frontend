import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import bannerImg from "@/images/banner-girl-1.png";

const Privacy = () => {
  useDocumentTitle("EarthBound | PRIVACY POLICY");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>PRIVACY POLICY</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 40 }}>
          <div className="privacy-content">
            <h2>Privacy Policy</h2>
            <p>
              The terms “We” / “Us” / “Our” / ”Company” individually and
              collectively refer to LIKEAURA MARKET PRIVATE LIMITED, and the
              terms “You” / ”Your” / ”Yourself” refer to the users.
            </p>

            <p>
              This page clearly explains our policies regarding how we collect,
              use and disclose Personal Information when You use our Service.
              This privacy policy applies to the Site and all products and
              services offered by LIKEAURA MARKET PRIVATE LIMITED.
            </p>

            <p>
              The company never uses or shares your information with anyone
              except as defined in the Privacy Policy below.
            </p>

            <p>
              We use your Personal Information and feedback for improving our
              Site, send periodic emails, and improve the overall Service. By
              using our Service, you agree to our policy of collection and use
              of information.
            </p>

            <h3>How we collect your information</h3>

            <p>
              When ordering or registering on our site, as appropriate, we may
              ask you to enter Personally identifiable information (“Personal
              Information”) which may include, but is not limited to:
            </p>

            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Address</li>
              <li>Password</li>
              <li>Your usage behavior</li>
              <li>
                Details of the computer system or the network through which you
                visit Our Website
              </li>
            </ul>

            <h2>Changes in Privacy Policy</h2>

            <p>
              At our discretion, we may time to time, update our Privacy Policy.
              We will inform you of any changes by updating the new Privacy
              Policy on this page. You are highly advised to review this Privacy
              Policy occasionally for any changes. With reference to our privacy
              policy, you can directly send us queries on our mail id
              care@likeaura.com, and we will revert as soon as possible.
            </p>

            <h2>Liability</h2>

            <p>
              You shall agree to use any information or material on Our website
              at your own risk, for which we shall not be liable. It’s your own
              responsibility to ascertain that any products, services or
              information available through this website meet your specific
              requirements.
            </p>

            <p>
              User acknowledges that the LIKEAURA MARKET PRIVATE LIMITED shall
              not be responsible or liable to user or anyone for the conduct or
              statements of any third party of the service. In summary, in no
              event shall the Company’s total accountability to the User for all
              damages or/and losses or/and causes of action exceed the amount
              paid by the User to Company.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
