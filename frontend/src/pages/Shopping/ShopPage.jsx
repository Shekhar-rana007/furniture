import { useEffect, useState } from "react";
import { filters } from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productSlice";
import Accordion from "react-bootstrap/Accordion";
import { useLocation, useNavigate } from "react-router-dom";
import NoFound from "../../assets/images/nofound.png";
import slugify from "slugify";
import ProductCard from "../../Components/ProductCard";

const ShopPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    } else if (pathname.includes("office")) {
      const filters = product?.filter((produ) => produ.category === "office");
      setproducts(filters);
    } else if (pathname.includes("combos")) {
      const filters = product?.filter((produ) => produ.category === "combos");
      setproducts(filters);
    } else if (pathname.includes("furniture")) {
      const filters = product?.filter(
        (produ) => produ.category === "furniture"
      );
      setproducts(filters);
    } else {
      setproducts([]);
    }
  }, [product, pathname]);

  useEffect(() => {
    handleFilter();
  }, [categoryFilter]);

  const handleFilter = () => {
    const filtered = product?.filter(
      (pro) => pro.subCategory === categoryFilter
    );
    setproducts(filtered);
  };
  console.log(categoryFilter);

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
          <div
            className="col-12 mt-4 row justify-between"
            style={{ boxSizing: "border-box" }}
          >
            <aside className="storeSidebar ">
              <div className="filter-box category-block ">
                <h2>Categories</h2>
                <Accordion
                  defaultActiveKey="0"
                  flush
                  className="border rounded overflow-hidden"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      onClick={() => navigate("/rent/home-furniture")}
                    >
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
                              onChange={() =>
                                setcategoryFilter(
                                  slugify(e, { replacement: "-", lower: true })
                                )
                              }
                              type="radio"
                              name="dd"
                              id=""
                            />
                            <p className="pb-0 mt-1 text-sm">{e}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header
                      onClick={() => navigate("/rent/appliances")}
                    >
                      <h3 className="catebtn">Appliance</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      {appliances.map((e, i) => {
                        return (
                          <div
                            key={i}
                            className="flex gap-2 items-center justify-start"
                          >
                            <input
                              type="radio"
                              onChange={() =>
                                setcategoryFilter(
                                  slugify(e, { replacement: "-", lower: true })
                                )
                              }
                              name="fgf"
                              id=""
                            />
                            <p className="pb-0 mt-1 text-sm">{e}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header
                      onClick={() => navigate("/rent/office-furniture")}
                    >
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
              <div className="filter-box filter-block " id="filter-desktop">
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

            <div className="storeProduct">
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
                className="product-listing col-12 gap-2 row non-combo justify-start justify-md-between"
                id="product_main_container"
              >
                {products?.length !==0 ? products?.map((ele) => {
                  return (
                      <ProductCard key={ele._id} data={ele} />
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
