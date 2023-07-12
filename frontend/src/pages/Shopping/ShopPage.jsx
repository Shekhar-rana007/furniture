import { useEffect, useState } from "react";
import { filters } from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productSlice";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import NoFound from "../../assets/images/nofound.png"

const ShopPage = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const product = useSelector(
    (state) => state.productReduceradmin.products.products
  );
  const [products, setproducts] = useState([]);
  const [categoryFilter, setcategoryFilter] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // todo set products according to routes
  useEffect(() => {
    setproducts(product);
    if (pathname.includes("home")) {
      const filters = product?.filter(
        (produ) => produ.category === "home-furniture"
      );
      setproducts(filters);
    } else if (pathname.includes("appliance")) {
      const filters = product?.filter(
        (produ) => produ.category === "appliances"
      );
      setproducts(filters);
    }else if (pathname.includes("office")) {
      const filters = product?.filter(
        (produ) => produ.category === "office"
      );
      setproducts(filters);
    }else if (pathname.includes("combos")) {
      const filters = product?.filter(
        (produ) => produ.category === "combos"
      );
      setproducts(filters);
    }else if (pathname.includes("furniture")) {
      const filters = product?.filter(
        (produ) => produ.category === "furniture"
      );
      setproducts(filters);
    }else{
      setproducts([])
    }
  }, [product,pathname]);

  const handleFilter=()=>{

  }

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
      <section id="prod-page-scroll" className=" ">
        <div className="container">
          <div className="col-12 row justify-between" style={{boxSizing:"border-box"}}>
            <aside className="storeSidebar ">
              <div className="filter-box category-block ">
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
                            <input
                              onChange={() => setcategoryFilter(e)}
                              type="radio"
                              name="fgf"
                              id=""
                            />
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
                className="filter-box filter-block "
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

                <div className="category-box " id="Customefilters">
                  {filters.map((val, id) => {
                    return (
                      <div className="form-check" key={id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={val.category}
                          id={id}
                        />
                        <label className="form-check-label text-sm">
                          {val.terms}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="storeProduct   ">
              <div className="product-topbar ">
                <div className="sort-by  align-items-center">
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

              <div
                className="product-listing row non-combo "
                id="product_main_container"
              >
                {products?.length !==0 ? products?.map((ele) => {
                  return (
                      <div key={ele._id} className="product-single col-4 m-2 align-content-start position-relative">
                        <div
                          className="product-image  position-relative"
                          id="DynamicWishlist_4182"
                        >
                          <a
                            href=""
                            className=" position-relative h-100"
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
                        <div className="product-description ">
                          <div className="product-description-wrapper ">
                            <h2>
                              <a href="   " target="_blank">
                                {ele.name}
                              </a>
                            </h2>
                            <p className="price">
                              <del>
                                <strong className="strikeThrough">
                                  <i className="rupees-symbol">₹</i>{" "}
                                  {ele.nineMonthPrice + 100}
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
                          <div className="included-items-block ">
                            <h4>1 Item Included</h4>
                            <div
                              className=""
                              style={{ display: "block" }}
                              id="subProductList_4182"
                            >
                              <ul className="items-lisitng ">
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
                  );
                }):<div><img src={NoFound} alt="No-Product Found" /></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
