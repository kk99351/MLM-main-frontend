import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from "@/hooks";
import bannerImg from "@/images/pngwing.com.png";
import Productcard from "@/components/common/ProductCard";
import React from "react";

const FeaturedProducts = () => {
  useDocumentTitle("Featured Products | EarthBound");
  useScrollTop();

  const { featuredProducts, fetchFeaturedProducts, isLoading, error } =
    useFeaturedProducts();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>MENS PRODUCT</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div>
        <Productcard></Productcard>
        </div>
       
        <div className="display">
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchFeaturedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={featuredProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>

        <div>
        <Productcard></Productcard>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
