import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import bannerImg from "@/images/banner-girl-1.png";

const Return = () => {
  useDocumentTitle("EarthBound | REFUND");
  useScrollTop();

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1>REFUND AND CANCELLATION/RETURN POLICY</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 40 }}>
          <div className="return-content">
            <h2 style={{ color: "orange" }}>Refund And Cancellation/Return Policy</h2>

            <p>
              All products purchased on www.likeaura.com can be returned within 48 hours of the delivery date. To be eligible for the return, the item being returned should be in a new and unused condition – similar to the condition you got it. It should have all the invoices, warranty papers, etc along with the original box. The accessories, if any, should be present in the return consignment. By “new and unused”, we mean there should be no scratches, stains or marks on the product. It should not have been altered in any way.
            </p>

            <p>
              While the orders beyond the designation time period of 48 hours can still be returned, they won’t be eligible for a refund. Instead, they can be replaced with a similar value or higher value product (excess amount to be paid). They are subjected to terms and conditions of the warranty.
            </p>

            <p>
              For claiming a refund for a product, you need to connect with us on the email care@likeaura.com with your purchase order number.
            </p>

            <p>
              Once we receive the product from your side, our team will analyze and verify the physical/technical status of the product. After getting the approval, the refund process will begin.
            </p>

            <h3 style={{ color: "orange" }}>The Size Of Ordered Apparel Does Not Fit Me. What To Do?</h3>
            <p>
              If in case, the ordered garment isn’t fitting your body type, you can always request for a size exchange by marking email to care@likeaura.com within 48 hours of receiving the product. We will try to send you the right size as per your request. However, it is subjected to availability. If the requested size is available at our end, we will ship it back at the earliest else we will offer you the option to return the product or exchange it with some similar/higher value product (excess amount to be paid).
            </p>

            <h3 style={{ color: "orange" }}>How Does The Refund Processes?</h3>
            <p>
              Once the product is received, we inspect and verify the same. After the inspection, a communication will be sent to you on your email regarding the status of your refund. Once the refund is approved, it will be initiated to your same payment method which was selected while buying the product. While transacting, if the purchase method used was net banking/ credit card/ debit card/ wallet, the total amount of the product will be disbursed to the same mode of payment. The refund will be processed within 7 working days of the order purchase date (except Cash on Delivery products). Incorrect product/ partial product/ product with tampered package is received, no refund will be allotted. The returning consignment should include all accessories and items shipped alongside the original product.
            </p>

            <h2 style={{ color: "orange" }}>Cancellation Policy</h2>

            <p>
              You can always cancel the order whenever you wish to before the product goes into shipping. There are no cancellation charges. To notify about cancellation of a purchase product, you can contact likeaura support through the given email id along with the Order ID of your item. Ensure that your query is sent from the same email id which you used during purchase. This is done to avoid false claims.
            </p>

            <p>
              We will cancel your order instantly with the refund amount being disbursed in 3-4 working days from the time of your payment. However, please do note that in case of cancellation after the order is shipped, the shipping charges will be borne by the customer only.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Return;
