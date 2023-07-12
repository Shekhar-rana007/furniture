import React from 'react'
import ProductModal2 from './ProductModal2';

const ProductModal = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
    };
    return (
        <>
            <div className="page-wrapper flex-full">

                <div className="breadcrumbs flex-full">
                    <div className="container">
                        <ul className="breadcrumbs-listing flex-full align-items-center">
                            <li className="root-link"><a href="https://cityfurnish.com/">Home</a></li>
                            <li className="child-link">
                                <a href="https://cityfurnish.com/bangalore/home-furniture-rental">
                                    Home Furniture
                                </a>
                            </li>
                            <li className="current-link">
                                <a href="https://cityfurnish.com/things/4171/jade-queen-size-double-bed">
                                    Jade Queen Size Double Bed
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="enquire-Now cart-main-section enquire-now-section flex-full align-items-start align-content-start">
                    <div className="enquire-now-section-wrapper flex-full h-100 align-items-start align-content-start">
                        <span className="close">
                            <i className="icn icn-close-black"></i>
                        </span>
                        <div className="minicart-main flex-full h-100 align-items-start align-content-start position-relative">
                            <h2 className="border-left">Office Furniture Enquiry</h2>
                            <div className="enquire-now-scroll">
                                <form
                                    className="signin-form credit-form flex-full"
                                    name="office_furniture_inquiry"
                                    id="office_furniture_inquiry"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="FlowupLabels" style={{ width: '95%' }}>
                                        <div className="fl_wrap">
                                            <label className="fl_label" htmlFor="inquiry_user_name">
                                                What's your name? *
                                            </label>
                                            <input
                                                className="fl_input"
                                                type="text"
                                                id="inquiry_user_name"
                                                name="inquiry_user_name"
                                                data-error="#inquiry_user_name_error"
                                            />
                                            <div className="error" id="inquiry_user_name_error"></div>
                                        </div>
                                        <div className="fl_wrap">
                                            <label className="fl_label" htmlFor="inquiry_user_mobile">
                                                Enter Mobile *
                                            </label>
                                            <input
                                                className="fl_input"
                                                type="text"
                                                id="inquiry_user_mobile"
                                                name="inquiry_user_mobile"
                                                data-error="#inquiry_user_mobile_error"
                                            />
                                            <div className="error" id="inquiry_user_mobile_error"></div>
                                        </div>
                                        <div className="fl_wrap">
                                            <label className="fl_label" htmlFor="inquiry_user_email">
                                                Enter Email *
                                            </label>
                                            <input
                                                className="fl_input"
                                                type="email"
                                                id="inquiry_user_email"
                                                name="inquiry_user_email"
                                                data-error="#inquiry_user_email_error"
                                            />
                                            <div className="error" id="inquiry_user_email_error"></div>
                                        </div>
                                        <div className="fl_wrap populated">
                                            {/* <label className='fl_label' htmlFor='city'>City *</label> */}
                                            <select
                                                className="fl_input"
                                                id="inquiry_user_city"
                                                name="inquiry_user_city"
                                                data-error="#inquiry_user_city_error"
                                            >
                                                <option className="fl_label">Your City *</option>
                                                <option>Delhi</option>
                                                <option>Mumbai</option>
                                                <option>Pune</option>
                                                <option>Banglore</option>
                                                <option>Gurgaon</option>
                                                <option>Hydrabad</option>
                                                <option>Chennai</option>
                                                <option>Gaziabad/Noida</option>
                                            </select>
                                            <div className="error" id="inquiry_user_city_error"></div>
                                        </div>
                                        <div className="fl_wrap">
                                            <label className="fl_label" htmlFor="inquiry_user_remarks">
                                                Your Requirements *
                                            </label>
                                            <input
                                                className="fl_input"
                                                type="text"
                                                id="inquiry_user_remarks"
                                                maxLength="500"
                                                name="inquiry_user_remarks"
                                                data-error="#inquiry_user_remarks_error"
                                            />
                                            <div className="error" id="inquiry_user_remarks_error"></div>
                                        </div>
                                        <div
                                            className="fl_wrap"
                                            style={{ marginBottom: '50px', marginTop: '21px' }}
                                        >
                                            <div className="g-recaptcha" id="g-recaptcha-footer">
                                                <div style={{ width: '304px', height: '78px' }}>
                                                    <div>
                                                        <iframe
                                                            title="reCAPTCHA"
                                                            src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfkkNoUAAAAAFU8Z7C4zFRH0HhozEWJq-mELpfG&amp;co=aHR0cHM6Ly9jaXR5ZnVybmlzaC5jb206NDQz&amp;hl=en&amp;v=khH7Ei3klcvfRI74FvDcfuOo&amp;size=normal&amp;cb=rok61y60u19v"
                                                            width="304"
                                                            height="78"
                                                            role="presentation"
                                                            name="a-nba4m0n4ydn9"

                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                                        ></iframe>
                                                    </div>
                                                    <textarea
                                                        id="g-recaptcha-response"
                                                        name="g-recaptcha-response"
                                                        className="g-recaptcha-response"
                                                        style={{
                                                            width: '250px',
                                                            height: '40px',
                                                            border: '1px solid rgb(193, 193, 193)',
                                                            margin: '10px 25px',
                                                            padding: '0px',
                                                            resize: 'none',
                                                            display: 'none',
                                                        }}
                                                    ></textarea>
                                                </div>
                                                <iframe style={{ display: 'none' }}></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="form-submit-btn flex-full justify-content-center">
                <input
                  type="submit"
                  name=""
                  className="explore-btn"
                  value="Save"
                />
              </div> */}
                                    <span className="submit-btn flex-full justify-content-center">
                                        <button
                                            type="submit"
                                            className="explore-btn"
                                            onClick={handleSubmit}
                                            id="requestSubmitButton"
                                        >
                                            Submit
                                        </button>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="product-detail-main flex-full">
                    <div className="container">
                        <div className="row">
                            <div className="box  col-8">
                                <div className="first-box">
                                    <div className="product-detail-main-wrapper flex-full align-items-start align-content-start">
                                        <div className="product-slider-wrapper flex-full align-items-start align-content-start">

                                            {/* product thumbnail slider starts */}
                                            <div className="product-slider flex-full">
                                                <div className="slider-for w-100 slick-initialized slick-slider">
                                                    <div className="slick-list draggable" style={{ height: '445px' }}>
                                                        <div className="slick-track" style={{ opacity: 1, width: '2324px' }}>
                                                            <div
                                                                className="slide slick-slide slick-current slick-active"
                                                                tabIndex="0"
                                                                style={{
                                                                    width: '581px',
                                                                    // position: 'absolute',
                                                                    left: '0px',
                                                                    top: '0px',
                                                                    opacity: 1,
                                                                }}
                                                                role="tabpanel"
                                                                id="slick-slide00"
                                                                aria-describedby="slick-slide-control00"
                                                                data-slick-index="0"
                                                                aria-hidden="false"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.2.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="800"
                                                                    height="600"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.2.png"
                                                                />
                                                            </div>
                                                            <div
                                                                className="slide slick-slide"
                                                                tabIndex="-1"
                                                                style={{
                                                                    width: '581px',
                                                                    position: 'relative',
                                                                    left: '-581px',
                                                                    top: '0px',
                                                                    zIndex: 998,
                                                                    opacity: 0,
                                                                    transition: 'opacity 500ms ease 0s',
                                                                }}
                                                                role="tabpanel"
                                                                id="slick-slide01"
                                                                aria-describedby="slick-slide-control01"
                                                                data-slick-index="1"
                                                                aria-hidden="true"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8528.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="800"
                                                                    height="600"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8528.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                            <div
                                                                className="slide slick-slide"
                                                                tabIndex="-1"
                                                                style={{
                                                                    width: '581px',
                                                                    position: 'relative',
                                                                    left: '-1162px',
                                                                    top: '0px',
                                                                    zIndex: 998,
                                                                    opacity: 0,
                                                                    transition: 'opacity 500ms ease 0s',
                                                                }}
                                                                role="tabpanel"
                                                                id="slick-slide02"
                                                                aria-describedby="slick-slide-control02"
                                                                data-slick-index="2"
                                                                aria-hidden="true"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.1.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="800"
                                                                    height="600"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.1.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                            <div
                                                                className="slide slick-slide"
                                                                tabIndex="-1"
                                                                style={{
                                                                    width: '581px',
                                                                    position: 'relative',
                                                                    left: '-1743px',
                                                                    top: '0px',
                                                                    opacity: 0,
                                                                    transition: 'opacity 500ms ease 0s',
                                                                }}
                                                                role="tabpanel"
                                                                id="slick-slide03"
                                                                aria-describedby="slick-slide-control03"
                                                                data-slick-index="3"
                                                                aria-hidden="true"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8525.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="800"
                                                                    height="600"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8525.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-nav w-100 d-none-xs slick-initialized slick-slider slick-vertical" >
                                                    <div className="slick-list draggable" style={{ height: '480px' }}>
                                                        <div
                                                            className="slick-track"
                                                            style={{ opacity: 1, width: '20000px', transform: 'translate3d(0px, 0px, 0px)' }}
                                                        >
                                                            <div
                                                                className="slide slick-slide slick-current slick-active"
                                                                data-slick-index="0"
                                                                aria-hidden="false"
                                                                tabIndex="0"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.2.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="125"
                                                                    height="94"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.2.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                            <div
                                                                className="slide slick-slide slick-active"
                                                                data-slick-index="1"
                                                                aria-hidden="false"
                                                                tabIndex="0"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8528.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="125"
                                                                    height="94"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8528.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                            <div
                                                                className="slide slick-slide slick-active"
                                                                data-slick-index="2"
                                                                aria-hidden="false"
                                                                tabIndex="0"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.1.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="125"
                                                                    height="94"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese Bed 2.1.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                            <div
                                                                className="slide slick-slide slick-active"
                                                                data-slick-index="3"
                                                                aria-hidden="false"
                                                                tabIndex="0"
                                                            >
                                                                <img
                                                                    data-src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8525.png"
                                                                    alt="Jade Queen Size Double Bed"
                                                                    width="125"
                                                                    height="94"
                                                                    className=""
                                                                    src="https://d3juy0zp6vqec8.cloudfront.net/images/product/8525.png"
                                                                    style={{ opacity: 1 }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* product thumbnail slider ends */}
                                            <input type="hidden" id="user_id" value="" />

                                            {/* items included starts */}
                                            <div className="items-included flex-full d-none-xs">
                                                <div className="product-specs spce-features flex-full">
                                                    <div className="contact-us-info flex-full align-items-start align-content-start">
                                                        <div className="queries-block flex-full">
                                                            <h2 className="product-detail-heading border-left">Specifications</h2>
                                                            <ul className="items-info-listing flex-full">
                                                                <li>
                                                                    <h4>
                                                                        <i className="icn icn-brand"></i> Brand(s)
                                                                    </h4>
                                                                    <p>Cityfurnish</p>
                                                                </li>
                                                                <li>
                                                                    <h4>
                                                                        <i className="icn icn-dimensions"></i> Size
                                                                    </h4>
                                                                    <p>L x W: 78 inches x 60 inches</p>
                                                                </li>
                                                                <li>
                                                                    <h4>
                                                                        <i className="icn icn-material"></i> Material
                                                                    </h4>
                                                                    <p>Acacia Wood &amp; Cotton Fabric</p>
                                                                </li>
                                                                <li>
                                                                    <h4>
                                                                        <i className="icn icn-colour"></i> Colour
                                                                    </h4>
                                                                    <p>Natural</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* items included ends */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box col-4 d-flex">
                                <div className="second-box">

                                    <div className="product-main-info flex-full">
                                        <div className="product_nm_share_icon flex-full justify-content-center text-center">
                                            <h1>Jade Queen Size Double Bed</h1>
                                            <span id="share_in_social">
                                                <a href="javascript:void(0)" className="d_no">
                                                    <i className="icn icn-share"></i>
                                                </a>
                                                <div className="referral-code-share share-box flex-full">
                                                    <a href="javascript:void(0)" className="d_no">
                                                        <label>Share Product Via :</label>
                                                    </a>
                                                    <ul className="social-icons-listing flex-full" style={{ marginTop: '10px' }}>
                                                        <a href="javascript:void(0)" className="d_no"></a>
                                                        <li>
                                                            <a href="javascript:void(0)" className="d_no">
                                                                <i className="icn icn-facebook-white"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fcityfurnish.com%2Fthings%2F4171%2Fjade-queen-size-double-bed&amp;title=Jade Queen Size Double Bed&amp;source=LinkedIn"
                                                                className="linkedin"
                                                                target="_blank"
                                                            >
                                                                <i className="icn icn-linkedin-white"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://api.whatsapp.com/send?text=http://cityfurnish.com/things/4171/jade-queen-size-double-bed" className="google" target="_blank">
                                                                <i className="icn icn-whatsapp"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                        <h3>How long do you want to rent this for? (Months)</h3>
                                        {/* Range slider (for mobile) starts */}



                                        {/* Range slider (for mobile) ends */}
                                        <input type="hidden" id="baseprice" name="baseprice" value="899" />
                                        {/* product price starts */}
                                        <div className="product-price-info flex-full justify-content-center text-center align-items-start align-content-start">
                                            <div className="product-price flex-full justify-content-center text-center">
                                                <label>Monthly Rent</label>
                                                <span className="upfront_price_dv">
                                                    {/*<del class="text-muted h6" id="upfrontofferamt"><i class="rupees-symbol">&#x20B9; </i>899</del>*/}
                                                    <p className="price">
                                                        <span id="tenure_price">
                                                            <i className="rupees-symbol">₹</i> 599
                                                        </span>
                                                        <del>
                                                            <strong className="strikeThrough" id="upfrontofferamt" style={{ display: 'inline-block' }}>
                                                                <i className="rupees-symbol">₹ </i>899
                                                            </strong>
                                                        </del>
                                                    </p>
                                                    <span className="text-discount-per" id="upfrontoffer" style={{ display: 'inline-block' }}>
                                                        33% off
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="refundable-price flex-full justify-content-center text-center">
                                                <label>Refundable Security Deposit</label>
                                                <span className="refundable-deposit refundable-deposit-amount">
                                                    &nbsp; <i className="rupees-symbol">₹</i> 0
                                                </span>
                                            </div>
                                        </div>
                                        {/* product price ends */}
                                        {/* product buttons starts */}
                                        <div className="product-actions flex-full justify-content-center">
                                            <p className="free-delivery">Free Delivery and Setup within 72 hours after KYC completion</p>
                                        </div>
                                        <div className="product-actions flex-full justify-content-center text-center d-none-xs">
                                            <div className="product-btns flex-full justify-content-center text-center">
                                                <button class="beautiful-button" style={{
                                                    display: "inline-block",
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    borderRadius: "30px",
                                                    padding: "10px 20px",
                                                    background: "#f6b704",
                                                    marginRight:"10px"
                                                
                                                }}>
                                                   Add to Cart
                                                </button>
                                                <button class="beautiful-button" style={{
                                                    display: "inline-block",
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    borderRadius: "30px",
                                                    padding: "10px 20px",
                                                    background: "#f6b704"
                                                }}>
                                                  Rent Now
                                                </button>
                                                <input type="hidden" name="product_id" id="product_id" value="4171" />
                                                <input type="hidden" name="cateory_id" id="cateory_id" value="27,270" />
                                                <input type="hidden" name="sell_id" id="sell_id" value="22" />
                                                <input type="hidden" name="price" id="price" value="599" />
                                                <input type="hidden" name="product_shipping_cost" id="product_shipping_cost" value="899" />
                                                <input type="hidden" name="product_tax_cost" id="product_tax_cost" value="0" />
                                                <input type="hidden" name="attribute_values" id="attribute_values" value="50892" />
                                                <input type="hidden" id="product_name" value="Jade Queen Size Double Bed" />
                                                <input type="hidden" name="attr_name_id" id="attr_name_id" value="50892" />
                                                <input type="hidden" id="product_name" value="Jade Queen Size Double Bed" />
                                                <input
                                                    type="hidden"
                                                    name="quant[2]"
                                                    id="quantity"
                                                    data-city="46"
                                                    data-mqty="12"
                                                    className="form-control input-number"
                                                    value="1"
                                                    min="1"
                                                    max="12"
                                                />
                                                <input type="hidden" id="selected_tenure" value="12" />
                                                <input type="hidden" id="is_upfront" value="1" />
                                                <input type="hidden" id="sku" value="CFJADEQUEENBED-01" />
                                                <input type="hidden" id="category_name" value="Home Furniture" />
                                            </div>
                                        </div>
                                        {/* product buttons ends */}

                                        {/* coupon box starts */}
                                        <div className="coupon-box flex-full justify-content-center text-center">
                                            <p>
                                                <span>Flat 20% Off on Rent (up to Rs 3000)* </span>
                                                -Coupon code : <strong>RENT20</strong>
                                            </p>
                                            <p>
                                                <span>Flat 15% Off on Rent (up to Rs 3000)* </span>
                                                -Coupon code : <strong>RENT15</strong>
                                            </p>
                                            <p>
                                                <span>Flat 10% Off on Rent (up to Rs 3000)* </span>
                                                -Coupon code : <strong>WELCOME10</strong>
                                            </p>
                                            <p>
                                                <span>Upto 750 Rs cashback on Mobikwik Wallet* </span>
                                            </p>
                                            <p>
                                                <i className="icn icn-percentage"></i>
                                                <a href="https://cityfurnish.com/pages/offers" target="_BLANK">
                                                    Check all offers
                                                </a>
                                                <i className="icn-arrow-right"></i>
                                            </p>
                                        </div>
                                        {/* coupon box ends */}

                                        {/* product specs tabbing (for mobile) starts */}
                                        <div className="product-specs-tabs flex-full d-none d-block-xs">
                                            <ul className="tabs">
                                                <li className="tab-link current" data-tab="tab-1">
                                                    Specifications
                                                </li>
                                            </ul>
                                            <div id="tab-1" className="tab-content current">
                                                <ul className="items-info-listing flex-full">
                                                    <li>
                                                        <h4>
                                                            <i className="icn icn-brand"></i> Brand(s)
                                                        </h4>
                                                        <p>Cityfurnish</p>
                                                    </li>
                                                    <li>
                                                        <h4>
                                                            <i className="icn icn-dimensions"></i> Size
                                                        </h4>
                                                        <p>L x W: 78 inches x 60 inches</p>
                                                    </li>
                                                    <li>
                                                        <h4>
                                                            <i className="icn icn-material"></i> Material
                                                        </h4>
                                                        <p>Acacia Wood &amp; Cotton Fabric</p>
                                                    </li>
                                                    <li>
                                                        <h4>
                                                            <i className="icn icn-colour"></i> Colour
                                                        </h4>
                                                        <p>Natural</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* product specs tabbing (for mobile) ends */}

                                        {/* product kyc info starts */}
                                        <ul className="product-info flex-full">
                                            <li>
                                                <i className="icn icn-kyc-documents"></i>
                                                <p>KYC Documents to be submitted before Delivery</p>
                                            </li>
                                            <li>
                                                <i className="icn icn-free-delivery"></i>
                                                <p>Free Cancellation before Delivery</p>
                                            </li>
                                            <li>
                                                <i className="icn icn-free-quality-product"></i>
                                                <p>All Products are in Mint Condition</p>
                                            </li>
                                        </ul>
                                        {/* product kyc info ends */}
                                    </div>
                                    {/* product main info ends */}
                                </div>

                            </div>

                        </div>
                    </div>
                </section>



            </div>

            <ProductModal2 />
        </>
    )
}

export default ProductModal