import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const categories = [
    { link: "/rent/home-furniture", text: "Home Furniture", },
    { link: "/rent/appliances", text: "Appliances", },
    { link: "/rent/office-furniture", text: "Office Furniture", },
    { link: "/rent/combos", text: "Combos", },
    { link: "/rent/businesses", text: "For Businesses", },
    { link: "/rent/offers", text: "Offers", },
  ];
  const navigate = useNavigate();

  // const menuOptions = {
  //   homeFurniture: ["Bed Room", "Living Room", "Dining Room", "study Room"],
  //   Appliances: [
  //     { link: "Refrigerator", text: "Refrigerator" },
  //     { link: "Water Purifier", text: "Water Purifier" },
  //     { link: "Air Conditioners", text: "Air Conditioners" },
  //     { link: "Washing Machine", text: "Washing Machine" },
  //     { link: "Telivision", text: "Telivision" },
  //     { link: "Appliance", text: "other Appliance" },
  //   ],
  //   officeFurniture: [
  //     { link: "workstation", text: "Workstation" },
  //     { link: "Ofiice-chair", text: "Ofiice Chair" },
  //   ],
  // };
  const [search, setsearch] = useState();
  const handleSearchView = () => {
    const toggle = $("header .search-bar").attr("class").includes("show");
    if (toggle) {
      $("header .search-bar").removeClass("show");
      // $('header .search-bar').style
      $("#header-search").fadeIn();
    } else {
      $("header .search-bar").addClass("show");
      $("header .search-bar input[name='search']").focus();
    }
  };
  const [navtoggle, setNavtoggle] = useState(false);
  const toogleNavar = () => {
    if (!navtoggle) {
      $(".burger-navbar").css("left", "0px");
      setNavtoggle(!navtoggle);
    } else {
      $(".burger-navbar").css("left", "-100vw");
      setNavtoggle(!navtoggle);
    }
  };
  const categorieMenu = {
    HomeFurniture: ["Bed Room", "Living Room", "Dining Room", "Study Room"],
    appliances: [
      "Refrigerator",
      "Waterr Purifier",
      "Air Conditioner",
      "Washing Machine",
    ],
    officeFurniture: ["Work Station", "Office Chair"],
  };
  const { HomeFurniture, appliances, officeFurniture } = categorieMenu;


  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 pb-2 md:pb-0 z-10">
        <div className="container">
          <div className="flex justify-between items-center md:py-[22px] py-3.5">
            <div className="flex items-center">
              <button
                id="menu-icon"
                type="button"
                name="menu"
                className="menu-icon"
                onClick={toogleNavar}
              >
                <span className="material-symbols-outlined text-2xl md:text-[25px] hover:text-pearl-alpha font-medium align-middle">
                  <FaBars />
                </span>
              </button>
              <p className="hidden md:block text-base leading-4 text-ruby-beta hover:text-pearl-alpha cursor-pointer ml-7 choose-your-city">
                <span>Delhi-ncr</span>
                <i className="border-l-6 border-r-6 border-transparent border-t-6 border-t-black inline-block ml-1.5"></i>
              </p>
              <Link to="/" className="md:hidden">
                <p className="font-bold ml-2">leelu Chacha</p>
              </Link>
            </div>
            <Link
              to={"/"}
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
            >
              <h4 className="font-bold h4">Leelu Chacha</h4>
            </Link>
            <div className="flex items-center">
              <p className="md:hidden text-xs leading-4 text-ruby-beta choose-your-city">
                <span>Bangalore</span>
                <i className="border-l-5 border-r-5 border-transparent border-t-5 border-t-black inline-block ml-px"></i>
              </p>
              <div
                className="relative hidden md:block"
                onClick={handleSearchView}
              >
                <span className="inline-block align-middle hover:text-pearl-alpha cursor-pointer">
                  <AiOutlineSearch fontSize={22} />
                </span>
                <div className="absolute -top-2.5 right-0 w-80 border border-[#ECECEC] rounded-lg bg-white shadow-xss opacity-0  search-bar">
                  <div className="relative overflow-hidden">
                    <input
                      type="search"
                      className=" w-full py-2 pl-10 pr-4 text-sm leading-6 font-medium text-ruby-alpha placeholder-[#9C9C9C] placeholder:font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pearl-alpha"
                      placeholder="Search furniture, appliances, etc"
                      value={search}
                      onChange={(e) => setsearch(e.target.value)}
                    />
                    <button
                      name="back"
                      id="search-close"
                      onClick={handleSearchView}
                      className="bg-contain w-4 h-4 absolute top-3 left-3"
                    >
                      <AiOutlineArrowLeft className="font-bold text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <Link to="/signup" className="relative ml-4 md:ml-9">
                <span className=" inline-block align-middle hover:text-pearl-alpha cursor-pointer">
                  <AiOutlineHeart fontSize={22} />
                </span>
              </Link>
              <div className="relative ml-4 sm:ml-8">
                <Link to={"/cart"}>
                  <span className="material-symbols-outlined inline-block align-middle hover:text-pearl-alpha cursor-pointer">
                    <MdOutlineShoppingCart fontSize={22} />
                  </span>
                </Link>
              </div>
              <div className="relative ml-8 hidden md:block navigation">
                <Link to={"/signup"}>
                  <span className="material-symbols-outlined inline-block align-middle hover:text-pearl-alpha relative z-10 cursor-pointer">
                    <BiUserCircle fontSize={22} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* todo1 mobile responsive searchabr */}
          <div
            onClick={() => setsearch("")}
            className="relative md:hidden border border-[#ECECEC] bg-white rounded-lg"
          >
            <span
              onClick={() => setsearch("")}
              className="absolute top-0.5 right-8 mt-1 text-xl"
            >
              <RxCross2 />
            </span>
            <input
              className="py-2 pl-3 pr-10 w-full text-xs leading-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pearl-alpha placeholder-ruby-beta"
              type="text"
              placeholder="Search for Furniture, Appliances, etc"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <span
              className="absolute top-2.5 right-3 bg-no-repeat bg-contain w-3.5 h-3.5 inline-block"
              style={{
                backgroundImage:
                  "url(https://d3juy0zp6vqec8.cloudfront.net/images/icn-search.svg)",
              }}
            ></span>
            <ul
              className="search-bar-listing py-1 absolute top-[33px] right-0 w-full bg-white h-80 shadow-xss overflow-y-auto hidden"
              style={{ display: "none" }}
            ></ul>
          </div>
          <div id="on-scroll-hide" className="">
            <div className="md:flex justify-center hidden py-3">
              {categories.map((ele, i) => {
                return (
                  <NavLink to={ele.link} key={i} className="mr-8">
                    <span className="text-base leading-6 font-normal text-ruby-beta hover:text-ruby-alpha">
                      {ele.text}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        {/* todo Menu sidebar */}
        <div className="burger-navbar active fixed top-0 md:left-[-378px] h-screen md:w-[378px] w-full left-[-100%] bg-white overflow-x-hidden z-97 transition-all shadow-md duration-500 ease-in-out">
          <div className="burger-navbar-body">
            <div className="relative md:pl-10 md:py-10 md:pr-4 p-4">
              <span
                onClick={toogleNavar}
                className="bg-no-repeat w-4 h-4 absolute top-11 right-4 cursor-pointer block close"
                style={{
                  backgroundImage:
                    "url(https://d3juy0zp6vqec8.cloudfront.net/images/icons/close.svg)",
                }}
              ></span>
              <ul className="navbar-menu pt-10">
                <li className="mb-4">
                  <Link
                    to={"/city/rent"}
                    aria-label="All Furniture"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    All
                  </Link>
                </li>
                <li className="mb-4">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header onClick={() => navigate("/rent/home-furniture")}>
                        <h3 className="catebtn">Home Furniture</h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        {HomeFurniture.map((e, i) => {
                          return (
                            <div
                              key={i}
                              className="flex gap-2 items-center justify-start"
                            >
                              <p className="pb-0 mt-1 text-sm">{e}</p>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header onClick={() => navigate("/rent/appliances")}>
                        <h3 className="catebtn">Appliance</h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        {appliances.map((e, i) => {
                          return (
                            <div
                              key={i}
                              className="flex gap-2 items-center justify-start"
                            >
                              <p className="pb-0 mt-1 text-sm">{e}</p>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header onClick={() => navigate("/rent/office-furniture")}>
                        <h3 className="catebtn">Office Furniture</h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        {officeFurniture.map((e, i) => {
                          return (
                            <div
                              key={i}
                              className="flex gap-2 items-center justify-start"
                            >

                              <p className="pb-0 mt-1 text-sm">{e}</p>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="my-4 border-b border-dashed"></li>

                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/customerpayment"
                    aria-label="Customer Payment"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Customer Payment
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/reviews-testimonials/all"
                    aria-label="Customer Reviews"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Customer Reviews
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/pages/careers"
                    aria-label="Join Our Team"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Join Our Team
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/blog/"
                    aria-label="Blog"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/pages/offers"
                    aria-label="Offers"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Offers
                  </a>
                </li>
                <li className="my-4 border-b border-dashed"></li>
                <li className="accordion-tab">
                  <div className="accordion-title flex justify-between items-center text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha cursor-pointer">
                    <p>Help</p>
                    <span className="chevron"></span>
                  </div>
                  <ul className="accordion-content p-4">
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/pages/how-it-works"
                        aria-label="How It Works?"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        How It Works?
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/pages/faq"
                        aria-label="FAQs"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/pages/contact-us"
                        aria-label="Contact us"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="my-4 border-b border-dashed"></li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/user_sign_up"
                    aria-label="Profile"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;