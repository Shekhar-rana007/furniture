import React, { useState } from 'react'
import { shopingItems } from '../../assets/Index';
import { NavLink } from 'react-router-dom'

const HomeFurniture = () => {
  const data= shopingItems;
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(true);

  const toggleAccordion = () => {
    setIsAccordionOpen(prevState => !prevState);
  };

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(prevState => !prevState);
  };

  return (
    <>
      <section id="prod-page-scroll" className="product-listing-main flex-full">
        <div className="container">
          <div className="product-listing-main-wrapper flex-full align-items-start align-content-start">
            <aside className="filter-area flex-full">
              <div className="filter-box category-block flex-full">
                <h2>Categories</h2>
                <div className="category-box flex-full">
      <div className="accordion">
        <div className={`accordion-tab current ${isAccordionOpen1 ? 'active' : ''}`}>
          <h3 className="accordion-title" onClick={toggleAccordion1}>
            Home Furniture
            <i className="icn icn-arrow-bottom"></i>
          </h3>
          <div className="accordion-content" style={{ display: isAccordionOpen ? 'block' : 'none' }}>
            <div className="accordion-body">
              <div className="radio-grp product">
                <a href="bangalore/bedroom-furniture-on-rent" className="sort-cat cat-sort">
                  <h2>Bed Room</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/living-room-furniture-on-rent" className="sort-cat cat-sort">
                  <h2>Living Room</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/dining-furniture-on-rent" className="sort-cat cat-sort">
                  <h2>Dining Room</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/study-room-furniture-rental" className="sort-cat cat-sort">
                  <h2>Study Room</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion-tab ${isAccordionOpen ? 'current active' : ''}`}>
          <h3 className="accordion-title" onClick={toggleAccordion}>
            Appliances
            <i className="icn icn-arrow-bottom"></i>
          </h3>
          <div className="accordion-content" style={{ display: isAccordionOpen ? 'block' : '' }}>
            <div className="accordion-body">
              <div className="radio-grp product">
                <a href="bangalore/refrigerator-rentals" className="sort-cat cat-sort">
                  <h2>Refrigerator</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/water-purifier" className="sort-cat cat-sort">
                  <h2>Water Purifier</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/air-conditioners-1" className="sort-cat cat-sort">
                  <h2>Air Conditioners</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/washing-machine-rentals" className="sort-cat cat-sort">
                  <h2>Washing Machine</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/tv-rentals" className="sort-cat cat-sort">
                  <h2>Television</h2>
                </a>
              </div>
              <div className="radio-grp product">
                <a href="bangalore/other-appliances" className="sort-cat cat-sort">
                  <h2>Other Appliances</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
              </div>
            </aside>

            <div className="product-area flex-full">
              <div className="product-topbar flex-full">
                <div className="sort-by flex-full align-items-center">
                  <div className="form-inline">
                    <label>Sort by :</label>
                    <span id="Default_sort">
                      Default <i className="icn-arrow-bottom"></i>
                    </span>
                    <ul>
                      <li
                        className="selected" data-attribute="all"
                      >
                        Default
                      </li>
                      <li data-attribute="new">
                        New
                      </li>
                      <li data-attribute="low_high">
                        Price - Low-High
                      </li>
                      <li data-attribute="high_low">
                        Price - High-Low
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="tags-listing flex-full justify-content-end">
                </ul>
              </div>


              <ul className="product-listing non-combo flex-full" id="product_main_container">

                {data.map((ele, id) => {
                  return (

                    <li key={id}>
                      <div className="product-single flex-full align-content-start position-relative">
                        <div className="product-image flex-full position-relative" id="DynamicWishlist_4182">
                          <a href="" className="flex-full position-relative h-100" target="_blank">
                            <img
                              data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/Jade Bed Frame Only Angled-1678779838.png"
                              alt="Jade King Size Double Bed"
                              layout="responsive"
                              className=""
                              src={ele.image}
                              style={{ opacity: 1 }}
                            />
                          </a>
                          <span className="new-label">{ele.label}</span>
                          <span className="wishlist" >
                            <i id="whished_4182" className="icn icn-wishlist-fill-gray"></i>
                          </span>
                        </div>
                        <div className="product-description flex-full">
                          <div className="product-description-wrapper flex-full">
                            <h2>
                              {/* <a href="   " target="_blank"> */}
                              {ele.name}
                              {/* </a> */}
                            </h2>
                            <p className="price">
                              <del>
                                <strong className="strikeThrough">
                                  <i className="rupees-symbol">₹</i> {ele.hignprice}
                                </strong>
                              </del>
                              <ins>
                                <strong>
                                  <i className="rupees-symbol">₹</i> {ele.LowPrice}
                                </strong>
                              </ins>
                              / month
                            </p>
                          </div>
                          <div className="included-items-block flex-full">
                            <h4>1 Item Included</h4>
                            <div className="flex-full" style={{ display: 'block' }} id="subProductList_4182">
                              <ul className="items-lisitng flex-full">
                                <li>
                                  <a href="#">
                                    <img
                                      data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/Jade Bed Frame Only Angled-1678779838.png"
                                      alt="Jade King Size Double Bed"
                                      layout="responsive"
                                      className=""
                                      src="https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/Jade Bed Frame Only Angled-1678779838.png"
                                      style={{ opacity: 1 }}
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>


            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default HomeFurniture