import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import { NavLink } from 'react-router-dom';


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
          <h2 className="product-detail-heading product-details-titles">
            Complete the look
          </h2>
          <div className="col-sm-12">
            <ItemsCarousel
              enablePlaceholder
              numberOfPlaceholderItems={0}
              minimumPlaceholderTime={1000}
              placeholderItem={<div style={{ height: 100, background: '#fff' }}>Placeholder</div>}
              numberOfCards={3}
              gutter={0}
              showSlither={true}
              firstAndLastGutter={true}
              freeScrolling={false}
              requestToChangeActive={changeActiveItem}
              activeItemIndex={activeItemIndex}
              activePosition={'center'}
              chevronWidth={1}
              rightChevron={'>>'}
              leftChevron={'<<'}
              outsideChevron={false}
            >
              <div className="card" style={{ width: 'auto', height: "fit-content", marginBottom: "10px ", marginRight: "15px" }}>
                <img src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/1583907887_DSC0014%20copy-min.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><NavLink>  Alexa Bedside Table </NavLink></h5>
                  <p className="price">
                    <strong>
                      <i className="rupees-symbol">₹</i> 119
                    </strong> / month
                  </p>

                </div>
              </div>
              <div className="card" style={{ width: 'auto', height: "fit-content", marginBottom: "10px ", marginRight: "15px" }}>
                <img src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/1583907887_DSC0014%20copy-min.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><NavLink>  Alexa Bedside Table </NavLink></h5>
                  <p className="price">
                    <strong>
                      <i className="rupees-symbol">₹</i> 119
                    </strong> / month
                  </p>

                </div>
              </div>
            </ItemsCarousel>
          </div>

          <div className="col-sm-12">
            <ItemsCarousel
              enablePlaceholder
              numberOfPlaceholderItems={0}
              minimumPlaceholderTime={1000}
              placeholderItem={<div style={{ height: 100, background: '#fff' }}>Placeholder</div>}
              numberOfCards={3}
              gutter={0}
              showSlither={true}
              firstAndLastGutter={true}
              freeScrolling={false}
              requestToChangeActive={changeActiveItem}
              activeItemIndex={activeItemIndex}
              activePosition={'center'}
              chevronWidth={1}
              rightChevron={'>>'}
              leftChevron={'<<'}
              outsideChevron={false}

            >
              <div className="card" style={{ width: 'auto', height: "fit-content", marginBottom: "10px ", marginRight: "15px" }}>
                <img src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/1583907887_DSC0014%20copy-min.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><NavLink>  Alexa Bedside Table </NavLink></h5>
                  <p className="price">
                    <strong>
                      <i className="rupees-symbol">₹</i> 119
                    </strong> / month
                  </p>

                </div>
              </div>
            </ItemsCarousel>
          </div>

        </div>
      </section>

    </>
  )
}

export default ProductModal2