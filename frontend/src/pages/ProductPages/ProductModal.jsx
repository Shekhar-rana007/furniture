import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import 'range-slider-input/dist/style.css';
import { productallData } from '../../features/products/CartSlice';
import ProductModal2 from './ProductModal2';
import { addtoCart } from '../../features/products/CartSlice';
import { base_url } from '../../utils/baseUrl';
const ProductModal = () => {
    const items = useSelector(state => state.cartItems.data);
    const dispatch = useDispatch();
    const location = useLocation().pathname;
    console.log(location)
    const API_ENDPOINT = `http://192.168.1.12:7001/api${location}`;
    const [modals, setModals] = useState([]);
    const productModalData = async (e) => {
        try {
            const response = await axios.get(API_ENDPOINT);
            // console.log(response.data._id);
            // console.log(modals.quantity);
            return setModals(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        productModalData();
    }, []);

    const handleAddToCart = (product) => {
        const pro = {
            id:product._id,
            name: product.name,
            category: product.category,
            threeMonthPrice: product.threeMonthPrice,
            sixMonthPrice: product.sixMonthPrice,
            nineMonthPrice: product.nineMonthPrice,
            img: product.images[0].url,
            discount:10,
            qty: 1
        }
        dispatch(addtoCart(pro))
    }


    return (
        <>
            <section className="product-detail-main">
                <div className="page-wrapper ">

                    <div className="breadcrumbs ">
                        <div className="container">
                            <ul className="breadcrumbs-listing align-items-center">
                                <li className="root-link"><a href="#">Home</a></li>
                                <li className="child-link">
                                    <a href="#">
                                        Home Furniture
                                    </a>
                                </li>
                                <li className="current-link">
                                    <a href="#">
                                        Jade Queen Size Double Bed
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {modals?.length !== 0 &&
                        <div className="container" style={{ boxSizing: "border-box" }}>
                            <div className="row d-flex justify-content-around ">
                                <div className="col-lg-2 col-md-3 col-sm-6 p-4" >
                                    <img src={modals?.images[0].url} style={{ marginBottom: "10px" }} />
                                    <img src={modals?.images[1].url} style={{ marginBottom: "10px" }} />
                                    <img src={modals?.images[2].url} style={{ marginBottom: "10px" }} />
                                    <img src={modals?.images[3].url} style={{ marginBottom: "10px" }} />

                                </div>
                                <div className="col-lg-5 col-md-7 col-sm-12 p-4" >
                                    <img src={modals.images[0].url} style={{ height: "450px" }} />
                                </div>

                                <div className=" col-lg-5 col-md-12" >
                                    <div className="product-main-info  flex-full">
                                        <div className="product_nm_share_icon flex-full justify-content-center text-center">
                                            <h1>{modals.name}</h1>
                                            <span id="share_in_social">
                                                <a href="#" className="d_no"><i className="icn icn-share"></i></a>
                                                <div className="referral-code-share share-box flex-full">
                                                    <a href="#" className="d_no">
                                                        <label>Share Products Via:</label>
                                                    </a>
                                                    <ul className="social-icons-listing flex-full" style={{ marginTop: '10px' }}>
                                                        <a href="#" className="d_no"></a>
                                                        <li><a href="#" className="d_no"></a><a href="" className="facebook"><i className="icn icn-facebook-white"></i></a></li>
                                                        <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fcityfurnish.com%2Fthings%2F4171%2Fjade-queen-size-double-bed&amp;title=Jade Queen Size Double Bed&amp;source=LinkedIn" className="linkedin" target="_blank"><i className="icn icn-linkedin-white"></i></a></li>
                                                        <li><a href="" className="google" target="_blank"><i className="icn icn-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                        <h3>How long do you want to rent this for? (Months)</h3>
                                        <div className="range-slider-wrapper flex-full align-items-center">
                                            <div className="range-slider">

                                                <input type="range" id="baseprice" name="baseprice" defaultValue="899" max="100" min="10" />

                                            </div>
                                        </div>
                                        <div className="product-price-info flex-full justify-content-center text-center align-items-start align-content-start">
                                            <div className="product-price flex-full justify-content-center text-center">
                                                <label>Monthly Rent</label>
                                                <span className="upfront_price_dv">
                                                    <p className="price">
                                                        <span id="tenure_price"><i className="rupees-symbol">₹</i> 599</span>
                                                        <del>
                                                            <strong className="strikeThrough" id="upfrontofferamt" style={{ display: 'inline-block' }}>
                                                                <i className="rupees-symbol">₹ </i>899
                                                            </strong>
                                                        </del>
                                                    </p>
                                                    <span className="text-discount-per" id="upfrontoffer" style={{ display: 'inline-block' }}>33% off</span>
                                                </span>
                                            </div>
                                            <div className="refundable-price flex-full justify-content-center text-center">
                                                <label>Refundable Security Deposit</label>
                                                <span className="refundable-deposit refundable-deposit-amount">&nbsp; <i className="rupees-symbol">₹</i> 0</span>
                                            </div>
                                        </div>
                                        <div className="product-actions flex-full justify-content-center">
                                            <p className="free-delivery">Free Delivery and Setup within 72 hours after KYC completion</p>
                                        </div>
                                        <div className="product-actions flex-full justify-content-center text-center d-none-xs">
                                            <div className="product-btns flex-full justify-content-center text-center">
                                                <a href="#" className="addtocart product-btn" id="add-to-cart-btn"
                                                    onClick={() => handleAddToCart(modals)}

                                                >Add to Cart</a>
                                                <a href="#" className="rentnow product-btn">Rent Now</a>
                                                <a href="#" className="newwishlistbtn">
                                                    <i id="whished_4171" className="icn icn-wishlist-fill-gray wishlist-icn"></i>
                                                </a>
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
                                                <input type="hidden" name="quant[2]" id="quantity" data-city="46" data-mqty="12" className="form-control input-number" value="1" min="1" max="12" />
                                                <input type="hidden" id="selected_tenure" value="12" />
                                                <input type="hidden" id="is_upfront" value="1" />
                                                <input type="hidden" id="sku" value="CFJADEQUEENBED-01" />
                                                <input type="hidden" id="category_name" value="Home Furniture" />
                                            </div>
                                        </div>
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
                                                <a href="https://cityfurnish.com/pages/offers" target="_BLANK">Check all offers</a>
                                                <i className="icn-arrow-right"></i>
                                            </p>
                                        </div>
                                        <div className="product-specs-tabs flex-full d-none d-block-xs">
                                            <ul className="tabs">
                                                <li className="tab-link current" data-tab="tab-1">Specifications</li>
                                            </ul>
                                            <div id="tab-1" className="tab-content current">
                                                <ul className="items-info-listing flex-full">
                                                    <li>
                                                        <h4><i className="icn icn-brand"></i> Brand(s)</h4>
                                                        <p>Leelu Chacha</p>
                                                    </li>
                                                    <li>
                                                        <h4><i className="icn icn-dimensions"></i> Size</h4>
                                                        <p>L x W: 78 inches x 60 inches</p>
                                                    </li>
                                                    <li>
                                                        <h4><i className="icn icn-material"></i> Material</h4>
                                                        <p>Acacia Wood &amp; Cotton Fabric</p>
                                                    </li>
                                                    <li>
                                                        <h4><i className="icn icn-colour"></i> Colour</h4>
                                                        <p>Natural</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>

            <ProductModal2 />
        </>
    )
}

export default ProductModal