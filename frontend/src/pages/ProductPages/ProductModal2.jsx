import React from 'react'

const ProductModal2 = () => {
  return (
<>

<div className="related-product-wrapper flex-full">
      <h2 className="product-detail-heading product-details-titles">
        Complete the look
      </h2>
      <div className="related-product-slider w-100 slick-initialized slick-slider">
        <span
          className="prev-arrow slick-arrow slick-disabled"
          aria-disabled="true"
          style={{ display: 'block' }}
        >
          <i className="icn-left-arrow-big-red"></i>
        </span>
        <div className="slick-list draggable">
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: '2424px',
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            <div
              className="slide slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              tabIndex="0"
              style={{ width: '303px' }}
            >
              <div className="product-single flex-full position-relative">
                <div className="product-image flex-full position-relative">
                  <a
                    href="https://cityfurnish.com/things/3793/alexa-bedside-table"
                    className="flex-full position-relative h-100"
                    tabIndex="0"
                  >
                    <img
                      data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/1583907887_DSC0014 copy-min.jpg"
                      alt="Alexa Bedside Table"
                      layout="responsive"
                      className=""
                      width="300"
                      height="225"
                      src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/1583907887_DSC0014 copy-min.jpg"
                      style={{ opacity: 1 }}
                    />
                  </a>
                </div>
                <div className="product-description flex-full">
                  <div className="product-description-wrapper flex-full">
                    <h2>
                      <a
                        href="https://cityfurnish.com/things/3793/alexa-bedside-table"
                        tabIndex="0"
                      >
                        Alexa Bedside Table
                      </a>
                    </h2>
                    <p className="price">
                      <strong>
                        <i className="rupees-symbol">₹</i> 119
                      </strong>{' '}
                      / month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slide slick-slide slick-active"
              data-slick-index="1"
              aria-hidden="false"
              tabIndex="0"
              style={{ width: '303px' }}
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
            </div>
            {/* More slides go here */}
          </div>
        </div>
        <span
          className="next-arrow slick-arrow"
          style={{ display: 'block' }}
          aria-disabled="false"
        >
          <i className="icn-right-arrow-big-red"></i>
        </span>
      </div>
    </div>


</>
  )
}

export default ProductModal2