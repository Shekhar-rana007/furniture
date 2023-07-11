import React, { useState } from 'react'
import { shopingItems } from '../../assets/Index';
import { NavLink } from 'react-router-dom'
import{ filters } from "./Filter";
const HomeFurniture = () => {
  const data = shopingItems;
const [products,setdata]= useState(data);
const [filteredProducts,setfilteredProducts]=useState(products);


  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
  const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);
  const [isAccordionOpen4, setIsAccordionOpen4] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const toggleAccordion2 = () => {
    setIsAccordionOpen2(!isAccordionOpen2);
  };

  const toggleAccordion3 = () => {
    setIsAccordionOpen3(!isAccordionOpen3);
  };

  const toggleAccordion4 = () => {
    setIsAccordionOpen4(!isAccordionOpen4);
  }

  const onCategoryChange = (city, category, p) => {
    // Handle category change logic here
  };

  const resetFilter = () => {
    // Handle reset filter logic here
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // Do something with the checkbox value and checked state
    console.log(value, checked);
  };

  const fetchdata=(e,index)=>{
        console.log(e.target.value);
        const activatedData= document.getElementById(index).checked
        // console.log(activatedData,"activatedData");
        if(activatedData==true){
          setfilteredProducts(oldData=>[...oldData,e.target.value])
        }else{
          setfilteredProducts(filteredProducts.filter((values)=>{
                values.category !== e.target.value
          }))
        }
  }
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
              <input type="checkbox" className='bg-dark' />

                    <div className={`accordion-tab ${isAccordionOpen ? 'current active' : ''}`}>
                      <h3 className="accordion-title" onClick={toggleAccordion}>
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

                    <div className={`accordion-tab ${isAccordionOpen2 ? 'current active' : ''}`}>
                      <h3 className="accordion-title" onClick={toggleAccordion2}>
                        Appliances
                        <i className="icn icn-arrow-bottom"></i>
                      </h3>
                      <div className="accordion-content" style={{ display: isAccordionOpen2 ? 'block' : 'none' }}>
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
                        </div>
                      </div>
                    </div>

                    <div className={`accordion-tab ${isAccordionOpen3 ? 'current active' : ''}`}>
                      <h3 className="accordion-title" onClick={toggleAccordion3}>
                        Office Furniture
                        <i className="icn icn-arrow-bottom"></i>
                      </h3>
                      <div className="accordion-content" style={{ display: isAccordionOpen3 ? 'block' : 'none' }}>
                        <div className="accordion-body">
                          <div className="radio-grp product">
                            <a href="bangalore/workstations" className="sort-cat cat-sort">
                              <h2>Workstations</h2>
                            </a>
                          </div>
                          <div className="radio-grp product">
                            <a href="bangalore/office-chair" className="sort-cat cat-sort">
                              <h2>Office Chair</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`accordion-tab ${isAccordionOpen4 ? 'current active' : ''}`}>
                      <h3 className="accordion-title" onClick={toggleAccordion4}>
                        Combos
                        <i className="icn icn-arrow-bottom"></i>
                      </h3>
                      <div className="accordion-content" style={{ display: isAccordionOpen4 ? 'block' : 'none' }}>
                        <div className="accordion-body">
                          <div className="radio-grp product">
                            <a href="bangalore/refrigerator-rentals" className="sort-cat cat-sort">
                              <h2>Bed Room</h2>
                            </a>
                          </div>
                          <div className="radio-grp product">
                            <a href="bangalore/water-purifier" className="sort-cat cat-sort">
                              <h2>Living Room</h2>
                            </a>
                          </div>
                          <div className="radio-grp product">
                            <a href="bangalore/air-conditioners-1" className="sort-cat cat-sort">
                              <h2>Dinning Room</h2>
                            </a>
                          </div>
                          <div className="radio-grp product">
                            <a href="bangalore/washing-machine-rentals" className="sort-cat cat-sort">
                              <h2>Study Room</h2>
                            </a>
                          </div>
                          <div className="radio-grp product">
                            <a href="bangalore/washing-machine-rentals" className="sort-cat cat-sort">
                              <h2>Appliances </h2>
                            </a>
                          </div>
                          <div className="radio-grp product">
                            <a href="bangalore/washing-machine-rentals" className="sort-cat cat-sort">
                              <h2>Value Combos</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-tab">
                      <h3 className="accordion-title" onClick={() => onCategoryChange('bangalore', 'clearance-sale', 'p')}>
                        Furniture Sale <i className="icn icn-arrow-bottom"></i>
                      </h3>
                      <div className="accordion-content">
                        <div className="accordion-body">
                          <div className="radio-grp">
                            <input type="radio" name="category" id="clearance-sale" onClick={() => onCategoryChange('bangalore', 'clearance-sale')} />
                            <label htmlFor="clearance-sale">Furniture Sale</label>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="filter-box filter-block flex-full" id="filter-desktop">
                <h2>
                  Filters <a href="#" className="reset-small" style={{ display: 'none' }} onChange={resetFilter}>Reset</a>
                </h2>
              
                <div className="category-box flex-full" id="Customefilters">
             {/* Filter methods-------------------------------  */}
                 {filters.map((val,id)=>{
                    return(
                <div className="form-check" key={id}>
                  <input className="form-check-input" type="checkbox" value={val.category} id={id} onClick={(e)=>fetchdata(e,id)}/>
                  <label className="form-check-label" htmlFor={val.category}>
                   {val.terms}
                  </label>
                </div>
                    )})}

                
                  


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

                {filteredProducts.map((ele, id) => {
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
                              <a href="   " target="_blank">
                                {ele.name}
                              </a>
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