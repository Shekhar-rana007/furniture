import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';


const ProductModal2 = () => {

  const [children, setChildren] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setChildren(createChildren(20));
    }, 100);
  }, []);

  const createChildren = (n) =>
    range(n).map((i) => (
      <div key={i} style={{ height: 200, background: '#333' }}>
        {i}
      </div>
    ));

  const changeActiveItem = (activeItemIndex) => setActiveItemIndex(activeItemIndex);

  return (
    <>
      <section className="related-product flex-full">
        <div className="container">
          <div className="related-product-wrapper flex-full">
            <h2 className="product-detail-heading product-details-titles">
              Complete the look
            </h2>
            <div className="related-product-slider w-100 slick-initialized slick-slider">


              <ItemsCarousel
                enablePlaceholder
                numberOfPlaceholderItems={0}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 200, background: '#fff' }}>Placeholder</div>}
                numberOfCards={4}
                gutter={20}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}
                requestToChangeActive={changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
              >
                <div className="product-single flex-full position-relative">
                  <div className="product-image flex-full position-relative">
                    <a
                      href="https://cityfurnish.com/things/3811/queen-size-double-bed-mattress1"
                      className="flex-full position-relative h-100"
                      tabIndex="0"
                    >
                      <img
                        data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/King_bed_mattress2.jpg"
                        alt="Queen Size Double Bed Mattress"
                        layout="responsive"
                        className=""
                        width="300"
                        height="225"
                        src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/King_bed_mattress2.jpg"
                        style={{ opacity: 1 }}
                      />
                    </a>
                    {/* <span className="new-label">New</span> */}
                  </div>
                  <div className="product-description flex-full">
                    <div className="product-description-wrapper flex-full">
                      <h2>
                        <a
                          href="https://cityfurnish.com/things/3811/queen-size-double-bed-mattress1"
                          tabIndex="0"
                        >
                          Queen Size Double Bed Mattress
                        </a>
                      </h2>
                      <p className="price">
                        <strong>
                          <i className="rupees-symbol">₹</i> 249
                        </strong>{' '}
                        / month
                      </p>
                    </div>
                  </div>
                </div>




              </ItemsCarousel>

              <ItemsCarousel
                enablePlaceholder
                numberOfPlaceholderItems={0}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 200, background: '#fff' }}>Placeholder</div>}
                numberOfCards={4}
                gutter={20}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}
                requestToChangeActive={changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
              >
                <div className="product-single flex-full position-relative">
                  <div className="product-image flex-full position-relative">
                    <a href="https://cityfurnish.com/things/3870/belle-queen-size-double-bed-with-storage" className="flex-full position-relative h-100" tabIndex="0">
                      {/* <amp-img src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/bell-queen_bed-5.jpg" alt="Product Image" layout="responsive" width="300" height="225"></amp-img> */}
                      <img
                        data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/bell-queen_bed-5.jpg"
                        alt="Belle Queen Size Double Bed with Storage"
                        layout="responsive"
                        className=""
                        width="300"
                        height="225"
                        src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/bell-queen_bed-5.jpg"
                        style={{ opacity: 1 }}
                      />
                    </a>
                    {/* <span className="new-label">New</span> */}
                    <span className="new-label">Trending</span>
                    <span
                      className="wishlist"
                      onClick={() => addtowhishlist('3870', 'Belle Queen Size Double Bed with Storage')}
                    >
                      <i id="whished_3870" className="icn icn-wishlist-fill-gray"></i>
                    </span>
                  </div>
                  <div className="product-description flex-full">
                    <div className="product-description-wrapper flex-full">
                      <h2>
                        <a href="https://cityfurnish.com/things/3870/belle-queen-size-double-bed-with-storage" tabIndex="0">
                          Belle Queen Size Double Bed with Storage
                        </a>
                      </h2>
                      <p className="price">
                        <strong>
                          <i className="rupees-symbol">₹</i> 1257
                        </strong>{' '}
                        / month
                      </p>
                    </div>
                  </div>
                </div>




              </ItemsCarousel>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductModal2