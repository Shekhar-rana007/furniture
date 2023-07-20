import Marquee from "react-fast-marquee";
const HomeWhy = () => {
  return (
    <>
      <section className="why-cityfurnish py-0 md:py-16 w-full text-center">
        <div className="container">
          <p className="text-xl leading-8 mb-1 text-ruby-beta hidden sm:block">
            You might be wondering
          </p>
          <h2 className="text-2xl leading-6 font-bold text-ruby-alpha md:text-4.5xl md:leading-56 mb-10 md:mb-18">
            Why Leelu Chacha?
          </h2>
          <div className="md:flex gap-8 block max-w-md mx-auto md:max-w-full md:mx-0">
            <div className="image-container md:w-[55%]">
              <img
                src="https://d3juy0zp6vqec8.cloudfront.net/images/why-cityfurnish.webp"
                className="w-full h-auto"
                alt="Image 1"
                width="631"
                height="528"
                id="accordion-image"
              />
            </div>
            <div className="md:w-[45%] md:mt-0 mt-4">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
              >
                <div
                  className="accordion"
                  id="accordionPanelsStayOpenExample"
                  style={{ marginTop: "50px" }}
                >
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <p className="  font-medium text-ruby-alpha md:text-2xl text-left">
                          Designs for every taste and need
                        </p>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        From the selection of woods & fabrics to the
                        construction and finishing, every step is taken with
                        care.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item ">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <p className="  font-medium text-ruby-alpha md:text-2xl text-left">
                          Designs for every taste and need
                        </p>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        Create the perfect home that reflects your unique
                        personality and lifestyle.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <p className="  font-medium text-ruby-alpha md:text-2xl text-left">
                          Tenures as low as 3 months
                        </p>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        Furnish your home for a short-term stay or try out
                        different furniture styles before you decide to stay
                        with us forever.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        <p className="  font-medium text-ruby-alpha md:text-2xl text-left">
                          Truly hassle free experience
                        </p>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body">
                        We take care of everything from easy online booking to
                        on-time delivery and hassle-free returns.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFive"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        <p className="  font-medium text-ruby-alpha md:text-2xl text-left">
                          Mint new products
                        </p>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        You can rest assured that you will be renting furniture
                        that looks and feels brand new.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h2 className="text-left text-2xl leading-6 mb-6 text-ruby-alpha font-bold md:text-4.5xl md:leading-56 md:mb-18">
          See how it looks in reality
        </h2>
        <div className="looks-in-reality-slider md:hidden slick-initialized slick-slider">
          <span
            className="prev-arrow slick-arrow slick-disabled"
            aria-disabled="true"
          >
            <i className="icn-left-arrow-red"></i>
          </span>
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: "0px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                style={{ width: "0px" }}
              >
                <div>
                  <div
                    className="slide pr-[11px]"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img
                      loading="lazy"
                      className="w-full h-auto"
                      src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs1-m.webp"
                      width="246"
                      height="184"
                      alt="Imgage1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            className="next-arrow slick-arrow"
            style={{}}
            aria-disabled="false"
          >
            <i className="icn-right-arrow-red"></i>
          </span>
        </div>
        <div className="hidden md:flex justify-center flex-wrap gap-0.5">
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs1.webp"
            className="w-[28%]"
            width="338"
            height="296"
            alt="A"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs2.webp"
            className="w-[32%]"
            width="386"
            height="296"
            alt="B"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs3.webp"
            className="w-[16%]"
            width="183"
            height="296"
            alt="C"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs4.webp"
            className="w-[23%]"
            width="279"
            height="296"
            alt="D"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs5.webp"
            className="w-[38%]"
            width="464"
            height="296"
            alt="E"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs6.webp"
            className="w-[17%]"
            width="202"
            height="296"
            alt="F"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs7.webp"
            className="w-[28%]"
            width="334"
            height="296"
            alt="G"
          />
          <img
            src="https://d3juy0zp6vqec8.cloudfront.net/images/imgs8.webp"
            className="w-[16%]"
            width="189"
            height="296"
            alt="H"
          />
        </div>

      </div>

      <section className="overflow-x-hidden">
        <h2
          className="absolute w-full text-center text-sm md:text-base leading-6 d-none font-medium text-ruby-beta "
          style={{ marginTop: "68px", zIndex: "11" }}
        >
          Media Coverage
        </h2>
        <Marquee
          className="marquee my-14 md:my-20 py-6 px-5.5 bg-pearl-delta relative border-b border-[#CCCAD6]"
          style={{ height: "110px" }}
        >
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            src="https://d3juy0zp6vqec8.cloudfront.net/images/businessline.webp"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            alt="Business Line"
          />
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            src="https://d3juy0zp6vqec8.cloudfront.net/images/business-standard.webp"
            alt="Business Line"
          />
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            src="https://d3juy0zp6vqec8.cloudfront.net/images/theprint.webp"
            alt="Business Line"
          />
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            src="https://d3juy0zp6vqec8.cloudfront.net/images/entrackr.webp"
            alt="Business Line"
          />
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            src="https://d3juy0zp6vqec8.cloudfront.net/images/entrepreneur-india.webp"
            alt="Business Line"
          />
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            src="https://d3juy0zp6vqec8.cloudfront.net/images/entrackr.webp"
            alt="Business Line"
          />
          <img
            loading="lazy"
            className="w-[88px] h-3.5 md:w-[276px] md:h-[37px]"
            style={{ width: "160px", height: "40px", marginRight: "25px" }}
            src="https://d3juy0zp6vqec8.cloudfront.net/images/khaleej_times.webp"
            alt="Business Line"
          />
        </Marquee>
      </section>
    </>
  );
};

export default HomeWhy;
