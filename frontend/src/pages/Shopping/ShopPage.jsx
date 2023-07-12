import  { useEffect, useState } from "react";
import { filters } from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productSlice";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname
  console.log(pathname)
  const product = useSelector(
    (state) => state.productReduceradmin.products.products
  );
  const [products, setproducts] = useState([]);
  const [categoryFilter, setcategoryFilter] = useState("")
  useEffect(() => {
    dispatch(getProducts());
    setproducts(product);
  }, [dispatch]);

  useEffect(()=>{

  },[product])

  const categories = {
    HomeFurniture: ["Bed Room", "Living Room", "Dining Room", "Study Room"],
    appliances: [
      "Refrigerator",
      "Waterr Purifier",
      "Air Conditioner",
      "Washing Machine",
    ],
    officeFurniture: ["Work Station", "Office Chair"],
  };
  const { HomeFurniture, appliances, officeFurniture } = categories;

  return (
    <>
      <section id="prod-page-scroll" className="product-listing-main flex-full">
        <div className="container">
          <div className="product-listing-main-wrapper flex-full align-items-start align-content-start">
            <aside className="filter-area flex-full">
              <div className="filter-box category-block flex-full">
                <h2>Categories</h2>
                <Accordion defaultActiveKey="0" flush className="border">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h3 className="catebtn">Home Furniture</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      {HomeFurniture.map((e, i) => {
                        return (
                          <div
                            key={i}
                            className="flex gap-2 items-center justify-start"
                          >
                            <input onChange={()=>setcategoryFilter(e)} type="radio" name="fgf" id="" />
                            <p className="pb-0 mt-1 text-sm">{e}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h3 className="catebtn">Appliance</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      {appliances.map((e, i) => {
                        return (
                          <div
                            key={i}
                            className="flex gap-2 items-center justify-start"
                          >
                            <input type="radio" name="fgf" id="" />
                            <p className="pb-0 mt-1 text-sm">{e}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h3 className="catebtn">Office Furniture</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      {officeFurniture.map((e, i) => {
                        return (
                          <div
                            key={i}
                            className="flex gap-2 items-center justify-start"
                          >
                            <input type="radio" name="fgf" id="" />
                            <p className="pb-0 mt-1 text-sm">{e}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div
                className="filter-box filter-block flex-full"
                id="filter-desktop"
              >
                <h2>
                  Filters{" "}
                  <a
                    href="#"
                    className="reset-small"
                    style={{ display: "none" }}
                  >
                    Reset
                  </a>
                </h2>

                <div className="category-box flex-full" id="Customefilters">
                  {filters.map((val, id) => {
                    return (
                      <div className="form-check" key={id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={val.category}
                          id={id}
                        />
                        <label
                          className="form-check-label text-sm"
                        >
                          {val.terms}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="product-area flex-full">
              <div className="product-topbar flex-full">
                <div className="sort-by flex-full align-items-center">
                  <div className="form-inline">
                    <label>Sort by :</label>
                    <select name="" id="">
                      <option value="default">Default </option>
                      <option value="default">New</option>
                      <option value="default">Price - Low-High</option>
                      <option value="default">Price - High-Low</option>
                    </select>
                  </div>
                </div>
              </div>

              <ul
                className="product-listing non-combo flex-full"
                id="product_main_container"
              >
                {products?.map((ele) => {
                  return (
                    <li key={ele._id}>
                      <div className="product-single flex-full align-content-start position-relative">
                        <div
                          className="product-image flex-full position-relative"
                          id="DynamicWishlist_4182"
                        >
                          <a
                            href=""
                            className="flex-full position-relative h-100"
                          >
                            <img
                              src={ele?.images[0].url}
                              alt={ele.slug}
                              className=""
                              style={{ opacity: 1 }}
                            />
                          </a>
                          <span className="new-label">{ele.stock}</span>
                          <span className="wishlist">
                            <i
                              id="whished_4182"
                              className="icn icn-wishlist-fill-gray"
                            ></i>
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
                                  <i className="rupees-symbol">₹</i>{" "}
                                  {ele.nineMonthPrice+100}
                                </strong>
                              </del>
                              <ins>
                                <strong>
                                  <i className="rupees-symbol">₹</i>{" "}
                                  {ele.nineMonthPrice}
                                </strong>
                              </ins>
                              / month
                            </p>
                          </div>
                          <div className="included-items-block flex-full">
                            <h4>1 Item Included</h4>
                            <div
                              className="flex-full"
                              style={{ display: "block" }}
                              id="subProductList_4182"
                            >
                              <ul className="items-lisitng flex-full">
                                <li>
                                  <a href="#">
                                    <img
                                      alt="Jade King Size Double Bed"
                                      className=""
                                      src={ele.images[0].url}
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
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
