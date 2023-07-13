import React from 'react'
import ProductModal2 from './ProductModal2';
import { BiShareAlt } from "react-icons/bi";

const ProductModal = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
    };
    return (
        <>
            <div className="page-wrapper ">

                <div className="breadcrumbs ">
                    <div className="container">
                        <ul className="breadcrumbs-listing align-items-center">
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

                <section className="product-detail-main">
                    <div className="container" style={{ boxSizing: "border-box" }}>
                        <div className="row d-flex justify-content-around ">
                            <div className="col-lg-2 col-md-3 col-sm-6 p-4" >
                                <img src='https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese%20Bed%202.2.png' style={{ marginBottom: "10px" }} />
                                <img src='https://d3juy0zp6vqec8.cloudfront.net/images/product/8528.png' />
                                <img src='https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese%20Bed%202.1.png' />
                                <img src='https://d3juy0zp6vqec8.cloudfront.net/images/product/8525.png' />

                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12 p-4" >
                                <img src='https://d3juy0zp6vqec8.cloudfront.net/images/product/Japanese%20Bed%202.2.png' />
                            </div>

                            <div className="box col-lg-5 col-md-12" style={{ border: "1px solid pink" }}>
                                <h1 className='' style={{
                                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                    textSizeAdjust: '100%',
                                    WebkitFontSmoothing: 'antialiased',
                                    visibility: 'visible',
                                    textAlign: 'center',
                                    WebkitBoxSizing: 'border-box',
                                    outline: 0,
                                    fontFamily: 'inherit',
                                    lineHeight: 1.1,
                                    textDecoration: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#2d6d9a',
                                    marginBottom: '24px'
                                }} >Jade Queen Size Double Bed   <BiShareAlt
                                style={{
                                    textSizeAdjust: '100%',
                                    lineHeight: 1.42857143,
                                    fontFamily: 'Poppins, Helvetica, Arial, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    visibility: 'visible',
                                    textAlign: 'center',
                                    color: '#212121',
                                    margin: 0,
                                    padding: 0,
                                    WebkitBoxSizing: 'border-box',
                                    outline: 0,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/share.svg)',
                                    backgroundColor: 'transparent',
                                    width: '20px',
                                    height: '20px'
                                }} />  </h1> 

                            </div>

                        </div>
                    </div>
                </section>



            </div>

            {/* <ProductModal2 /> */}
        </>
    )
}

export default ProductModal