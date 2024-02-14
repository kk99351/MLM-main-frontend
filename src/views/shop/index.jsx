/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from '@/components/product';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from '@/selectors/selector';
import bannerImg1 from '@/images/btsboys.png';
import bannerImg from '@/images/btsgirl.png';

const Shop = () => {
  useDocumentTitle('Shop | EarthBound');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content">
      <div className="home">
          <div className="banner">
            <div className="banner-img">
              <img src={bannerImg1} alt="" />
            </div>
            <div className="banner-desc">
              <h1 style={{textAlign:'center'}}>New Outfits</h1>
            </div>
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        <section className="product-list-wrapper">
          <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
          <ProductList {...store}>
            <ProductGrid products={store.filteredProducts} />
          </ProductList>
        </section>
      </div>
    </main>
  );
};

export default Shop;
