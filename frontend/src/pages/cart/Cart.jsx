import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl"
import { BiSolidHomeHeart, BiRightArrowAlt } from "react-icons/bi"
import { GiCrossedBones } from "react-icons/gi";
import { BsTruck } from "react-icons/bs"
import ProductEdit from './productEdit'
import Product_main from './Product_main'
import KnowMore from './KnowMore'
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  const [count, setCount] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // const items= useSelector(state=>state.cartItems); 
  // const dispatch= useDispatch();

  const handleButtonClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {

    if (count > 0) {
      setCount(count-1);
    }
  };
  console.log(count)
  return (
    <>
      <section className="section m-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="card text-center " style={{ position: "relative", padding: "0px", }}>
                <div className="card-header   d-flex justify-content-center align-items-center flex-row" style={{ background: "rgb(206, 237, 240)" }}>
                  Rent Cart 1 Items
                </div>

                <div className="card-body d-flex" >
                  <div className="img w-50" >
                    <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/r2/products/222/plp_1.png" style={{ width: "50%", height: "auto", marginTop: "40px", position: "relative", left: "0" }} /></div>
                  <div className="content w-100">
                    <h5 className="card-title" style={{}}>Noah Fabric 3 Seater Sofa in Turquoise Color</h5>
                    <p className=" " style={{
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      margin: '0px 0px 20px 0px',
                      fontFamily: 'Work Sans',
                      fontSize: '1em',
                      fontWeight: 400,
                      color: 'rgb(119, 119, 119)',
                      lineHeight: 1.3,
                    }}><BsTruck />Delivery by 18 Jul</p>
                    <div className="muibox d-flex align-items-center gap-2 justify-content-center " style={{ marginTop: "-15px", marginBottom: "20px", padding: "10px", position: "relative" }}>
                      <p className="card-text" style={{
                        margin: '0 8px 0 0',
                        fontSize: '100%',
                        fontWeight: 500,
                        color: 'rgb(188, 188, 188)',
                        textDecoration: 'line-through',
                        lineHeight: 1.3,
                      }}>₹2350.00</p>
                      <p className="card-text" style={{
                        fontSize: '1em',
                        fontWeight: 600,
                        color: 'rgb(34, 34, 34)',
                        padding: '4px 8px',
                        borderRadius: '9px',
                        backgroundColor: 'rgb(255, 245, 183)',
                        lineHeight: 1.3,
                      }}>-75%</p>
                      <p className="card-text" style={{
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        padding: 0,
                        margin: '0px',
                        fontFamily: 'Work Sans',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'rgb(34, 34, 34)',
                        lineHeight: 1.3,
                      }}
                      >₹2350.00</p>
                    </div>


                    <div className="qty-icons" style={{ zIndex: "1", display: "flex", justifyContent: "center", alignContent: "center", marginTop: "-15px" }}>
                      <button className="btn btn-icon btn-primary minus" style={{
                        boxSizing: 'border-box',
                        margin: '0',
                        textDecoration: 'none',
                        fontSize: '15px',
                        letterSpacing: '.5px',
                        transition: 'all .3s',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        outline: '0',
                        height: '36px',
                        width: '36px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: "10px",
                      }} onClick={handleDecrement}>
                        -
                      </button>
                      <input
                        style={{
                          boxSizing: 'border-box',
                          margin: '0 10px',
                          outline: '0',
                          textDecoration: 'none',
                          fontSize: '15px',
                          letterSpacing: '.5px',
                          transition: 'all .3s',
                          borderRadius: '5px',
                          height: '36px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0',
                          pointerEvents: 'none',
                          width: '100px',
                          paddingLeft: '16px',
                        }}
                        type="number"
                        className="btn btn-primary "
                        min="0"
                        value={count}
                        defaultValue="0"
                        name="quantity"
                      />
                      <button className="btn btn-icon btn-primary plus" style={{
                        boxSizing: 'border-box',
                        textDecoration: 'none',
                        fontSize: '15px',
                        letterSpacing: '.5px',
                        transition: 'all .3s',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        outline: '0',
                        height: '36px',
                        width: '36px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0',
                      }} onClick={handleIncrement}>
                        +
                      </button>
                      <div className="MuiBox-root border-primary " style={{ border: "1px solid", width: "150px", padding: "10px", borderRadius: "20px", position: "relative", marginLeft: "15px" }}>
                        <p className=" " style={{ display: "flex", cursor: "pointer", zIndex: "10", alignItems: "center", marginLeft: "10px" }} onClick={handleButtonClick}>12 months < SlArrowDown /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="card-body d-flex" >
                  <div className="img w-50" >
                    <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/r2/products/222/plp_1.png" style={{ width: "50%", height: "auto", marginTop: "40px", position: "relative", left: "0" }} /></div>
                  <div className="content w-100">
                    <h5 className="card-title" style={{}}>Noah Fabric 3 Seater Sofa in Turquoise Color</h5>
                    <p className=" " style={{
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      margin: '0px 0px 20px 0px',
                      fontFamily: 'Work Sans',
                      fontSize: '1em',
                      fontWeight: 400,
                      color: 'rgb(119, 119, 119)',
                      lineHeight: 1.3,
                    }}><BsTruck />Delivery by 18 Jul</p>
                    <div className="muibox d-flex align-items-center gap-2 justify-content-center " style={{ marginTop: "-15px", marginBottom: "20px", padding: "10px", position: "relative" }}>
                      <p className="card-text" style={{
                        margin: '0 8px 0 0',
                        fontSize: '100%',
                        fontWeight: 500,
                        color: 'rgb(188, 188, 188)',
                        textDecoration: 'line-through',
                        lineHeight: 1.3,
                      }}>₹2350.00</p>
                      <p className="card-text" style={{
                        fontSize: '1em',
                        fontWeight: 600,
                        color: 'rgb(34, 34, 34)',
                        padding: '4px 8px',
                        borderRadius: '9px',
                        backgroundColor: 'rgb(255, 245, 183)',
                        lineHeight: 1.3,
                      }}>-75%</p>
                      <p className="card-text" style={{
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        padding: 0,
                        margin: '0px',
                        fontFamily: 'Work Sans',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'rgb(34, 34, 34)',
                        lineHeight: 1.3,
                      }}
                      >₹2350.00</p>
                    </div>


                    <div className="qty-icons" style={{ zIndex: "1", display: "flex", justifyContent: "center", alignContent: "center", marginTop: "-15px" }}>
                      <button className="btn btn-icon btn-primary minus" style={{
                        boxSizing: 'border-box',
                        margin: '0',
                        textDecoration: 'none',
                        fontSize: '15px',
                        letterSpacing: '.5px',
                        transition: 'all .3s',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        outline: '0',
                        height: '36px',
                        width: '36px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: "10px",
                      }} onClick={handleDecrement}>
                        -
                      </button>
                      <input
                        style={{
                          boxSizing: 'border-box',
                          margin: '0 10px',
                          outline: '0',
                          textDecoration: 'none',
                          fontSize: '15px',
                          letterSpacing: '.5px',
                          transition: 'all .3s',
                          borderRadius: '5px',
                          height: '36px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0',
                          pointerEvents: 'none',
                          width: '100px',
                          paddingLeft: '16px',
                        }}
                        type="number"
                        className="btn btn-primary "
                        min="0"
                        value={count}
                        defaultValue="0"
                        name="quantity"
                      />
                      <button className="btn btn-icon btn-primary plus" style={{
                        boxSizing: 'border-box',
                        textDecoration: 'none',
                        fontSize: '15px',
                        letterSpacing: '.5px',
                        transition: 'all .3s',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        outline: '0',
                        height: '36px',
                        width: '36px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0',
                      }} onClick={handleIncrement}>
                        +
                      </button>
                      <div className="MuiBox-root border-primary " style={{ border: "1px solid", width: "150px", padding: "10px", borderRadius: "20px", position: "relative", marginLeft: "15px" }}>
                        <p className=" " style={{ display: "flex", cursor: "pointer", zIndex: "10", alignItems: "center", marginLeft: "10px" }} onClick={handleButtonClick}>12 months < SlArrowDown /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* -----card footer */}
                <div className="card-footer text-muted " style={{ background: "rgb(206, 237, 240)" }} >
                  <p className="">
                    Value added services
                  </p>
                  <p className="MuiTypography-root MuiTypography-Tiny_Regular css-16pg9wk ">
                    Add flexibility and security to these products with value-added services
                  </p>
                  <div className="care d-flex flex-column  align-items-start gap-3" style={{ padding: "15px", margin: "30px 0", position: "relative" }}>
                    <h2 className=' d-flex gap-3'><BiSolidHomeHeart size={20} /> Furlenco Care
                      <span style={{ margin: "0 0 0 350px" }}>₹29.06/mo</span>
                    </h2>
                    <p className='' style={{
                      margin: '0px',
                      fontFamily: 'Work Sans',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgb(85, 85, 85)',
                      lineHeight: 1.3,
                    }}>Applied to 1 Items</p>


                    <div className=" border-primary  text-center" style={{ border: "1px solid", width: "100px", padding: "5px", borderRadius: "20px", position: "relative", left: "65%", bottom: "40px" }}>
                      <p className=" " >Edit </p>
                    </div>

                    <div className="bg-white w-100 " style={{ padding: "20px", borderRadius: "20px" }}>

                      <p className="MuiTypography-root MuiTypography-body1 css-1lc7696">Offers &amp; Discounts</p>
                      <h6 className='d-flex justify-content-center ' style={{ marginTop: "10px" }}>2 Available <BiRightArrowAlt /></h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-sm-4 mt-3" >
              <p className="delivery">Delivery Estimate</p>
              <div className="MuiBox-root css-42wdnn" style={{
                padding: '24px 16px',
                height: 'auto',
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexBasis: '0',
                flexGrow: '0',
                background: 'white',
                boxShadow: '0px 8px 16px rgba(34, 34, 34, 0.1)',
                border: 'none',
                borderRadius: '8px'
              }}>
                <div className="MuiBox-root css-ijsqu7">
                  <div className="MuiBox-root css-12z0wuy d-flex gap-3">
                    <BsTruck color='grey' size={20} />
                    <div className="MuiBox-root css-0">
                      <p className="MuiTypography-root MuiTypography-Small_Regular css-1mos25g" style={{
                        display: 'flex',
                        fontSize: '12px',
                        fontWeight: '400',
                        color: 'rgb(153, 153, 153)',
                        lineHeight: '1.3'
                      }}>Get it delivered by</p>
                      <div className="MuiBox-root css-1wks1ka d-flex ">
                        <p className="MuiTypography-root MuiTypography-Small_Medium css-196k2gk" style={{
                          margin: '0px 0px 0px 0px',
                          fontFamily: 'Work Sans',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'rgb(34, 34, 34)',
                          lineHeight: '1.3',
                          padding: '5px 3px',
                          height: 'auto'
                        }}>July 18, 2023</p>
                        <p className="MuiTypography-root MuiTypography-Tiny_Regular css-r2ikhg" style={{
                          margin: '0px 0px 0px 3px',
                          fontFamily: 'Work Sans',
                          fontSize: '10px',
                          padding: '5px 3px',
                          fontWeight: '400',
                          color: 'rgb(153, 153, 153)',
                          lineHeight: '1.3'
                        }}>at</p>
                        <p className="MuiTypography-root MuiTypography-Small_Medium cursor-pointer css-1jg64ne" style={{
                          margin: '0px 0px 0px 3px',
                          fontFamily: 'Work Sans',
                          fontSize: '12px',
                          fontWeight: '500',
                          padding: '5px 0px',
                          color: 'rgb(6, 155, 170)',
                          textDecorationLine: 'underline',
                          lineHeight: '1.3'
                        }}>560068</p>
                      </div>
                    </div>


                  </div>


                </div>

              </div>


              <div className="" style={{
                boxSizing: 'border-box',
                margin: '15px 0 0 0',
                cursor: 'pointer',
                padding: '28px 32px',
                background: 'rgb(243, 243, 243)',
                borderRadius: '8px',
                fontFamily: 'Work Sans',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '1.3',
              }}>
                <div className="cursor-pointer MuiBox-root" style={{
                  boxSizing: 'border-box',
                  margin: '0',
                  cursor: 'pointer',
                  padding: '28px 32px',
                  background: 'rgb(243, 243, 243)',
                  borderRadius: '8px',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '1.3',
                }}>
                  <div className="MuiBox-root " style={{
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    padding: '0',
                    margin: '0',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    flexShrink: '0',
                    flexGrow: '0',
                    fontFamily: 'Work Sans',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '1.3',
                  }}>
                    <p className="MuiTypography-root MuiTypography-body1" style={{
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      padding: '0',
                      margin: '0',
                      fontFamily: 'Work Sans',
                      fontSize: '16px',
                      fontWeight: '500',
                      lineHeight: '1.3',
                    }}>Rent Cart Breakup</p>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="#76CDD6"></rect>
                      <path d="M8.5 12h7M12 8.5l3.5 3.5-3.5 3.5" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <hr className='mt-3 mb-3' />
                  <div className="MuiBox-root " style={{
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    padding: '0',
                    margin: '0',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    flexShrink: '0',
                    flexGrow: '0',
                  }}>
                    <p className="MuiTypography-root MuiTypography-body1 " >Total Payable</p>
                    <p className="MuiTypography-root MuiTypography-P_SemiBold css-cyezfc">₹8,641.28</p>
                  </div>
                  <p className="MuiTypography-root MuiTypography-Small_Medium " style={{
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    padding: '0',
                    margin: '12px 0px 0px',
                    fontFamily: 'Work Sans',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'rgb(29, 148, 40)',
                    lineHeight: '1.3',
                  }}>🎉 Yay! You are saving a total of ₹20,925.60</p>
                </div>
              </div>

              <div className="MuiBox-root " style={{

                boxSizing: 'border-box',
                padding: '0',
                margin: '0',
                marginTop: '12px',
              }}>
                <div className="MuiBox-root" style={{
                  boxSizing: 'border-box',
                  margin: '0',
                  padding: '50px',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: 'rgba(34, 34, 34, 0.1) 0px 8px 16px',
                }}>
                  <div className="MuiBox-root" style={{
                    boxSizing: 'border-box',
                    marginBottom: '16px',
                  }}>
                    <div className="MuiBox-root css-0">
                      <div className="MuiBox-root " style={{
                        boxSizing: 'border-box',
                        padding: '0',
                        margin: '0',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                        WebkitBoxPack: 'justify',
                        justifyContent: 'space-between',
                        WebkitBoxAlign: 'center',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        WebkitBoxFlex: '0',
                        flexGrow: '0',
                      }}>
                        <div className="MuiBox-root " style={{
                          boxSizing: 'border-box',
                          padding: '0',
                          margin: '0',
                          height: 'auto',
                          display: 'flex',
                          flexFlow: 'row nowrap',
                          alignItems: 'center',
                        }}>
                          <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.295 2.929A9.972 9.972 0 0 0 10.223 0a9.971 9.971 0 0 0-7.072 2.929A9.97 9.97 0 0 0 .223 10a9.969 9.969 0 0 0 2.928 7.071A9.972 9.972 0 0 0 10.223 20a9.972 9.972 0 0 0 7.072-2.929A9.97 9.97 0 0 0 20.225 10a9.97 9.97 0 0 0-2.93-7.071Z"
                              fill="#40B6C2"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.355 5.631a.866.866 0 0 1 1.733 0l.003 3.505 4.566-.005a.866.866 0 0 1 0 1.733l-5.435.005a.866.866 0 0 1-.863-.941L9.355 5.63Z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <p className="MuiTypography-root MuiTypography-P_Medium" style={{
                            boxSizing: 'border-box',
                            padding: '0',
                            margin: '0px 16px 0px 8px',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '1.3',
                            fontFamily: 'Work Sans',
                          }}>Rent Cart</p>
                          <p className="MuiTypography-root MuiTypography-P_Regular css-1mo320e" style={{
                            boxSizing: 'border-box',
                            padding: '0',
                            margin: '0px',
                            fontFamily: 'Work Sans',
                            fontSize: '14px',
                            fontWeight: '400',
                            color: 'rgb(119, 119, 119)',
                            lineHeight: '1.3',

                          }}>1 Items</p>
                        </div>
                        <p className="MuiTypography-root MuiTypography-P_SemiBold css-cyezfc">₹8,641.28</p>
                      </div>
                    </div>
                    <button

                      className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-xx4vm7"
                      tabIndex="0"
                      type="button"

                      style={{
                        display: 'inline-flex',
                        position: 'relative',
                        boxSizing: 'border-box',
                        margin: '10px 0 0 0',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        minWidth: '54px',
                        backgroundColor: 'rgb(6, 155, 170)',
                        color: 'rgb(255, 255, 255)',
                        borderRadius: '30px',
                        border: '1px solid rgb(6, 155, 170)',
                        fontFamily: 'Work Sans',
                        fontSize: '13px',
                        fontWeight: '450',
                        width: '100%',
                        padding: '12px 24px',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div className="MuiBox-root css-1u71fk4">
                        <p className="MuiTypography-root MuiTypography-H14_Medium css-dql9ft">₹8,641.28</p>
                      </div>
                      <div className="MuiBox-root" style={{
                        WebkitTapHighlightColor: 'transparent',
                        cursor: 'pointer',
                        userSelect: 'none',
                        lineHeight: '1.75',
                        textTransform: 'uppercase',
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Work Sans',
                        fontSize: '14px',
                        fontWeight: '600',
                        boxSizing: 'border-box',
                        padding: '0',
                        margin: '0',
                        height: 'auto',
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        WebkitBoxPack: 'center',
                        justifyContent: 'center',
                        WebkitBoxAlign: 'center',
                        alignItems: 'center',
                        WebkitBoxFlex: '0',
                        flexGrow: '0',
                      }}>
                        <p className="MuiTypography-root MuiTypography-H14_Medium " style={{
                          WebkitTapHighlightColor: 'transparent',
                          cursor: 'pointer',
                          userSelect: 'none',
                          textTransform: 'uppercase',
                          color: 'rgb(255, 255, 255)',
                          boxSizing: 'border-box',
                          padding: '0',
                          margin: '0px 15px 0px 0px',
                          fontFamily: 'Work Sans',
                          fontSize: '16px',
                          fontWeight: '500',
                          lineHeight: '1.3',
                        }}>PROCEED</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                          WebkitTapHighlightColor: 'transparent',
                          cursor: 'pointer',
                          userSelect: 'none',
                          lineHeight: '1.75',
                          textTransform: 'uppercase',
                          color: 'rgb(255, 255, 255)',
                          fontFamily: 'Work Sans',
                          fontSize: '14px',
                          fontWeight: '600',
                          width: '24px',
                          height: '24px',
                          fill: 'none',
                          boxSizing: 'border-box',
                          padding: '0',
                          margin: '0',
                        }}>
                          <path
                            d="M5 12.9453H19"
                            stroke="#FFFFFF"
                            strokeWidth="2"

                            className="right-arrow-icon"
                          ></path>
                          <path
                            d="M12 5.94531L19 12.9453L12 19.9453"
                            stroke="#FFFFFF"
                            strokeWidth="2"

                            className="right-arrow-icon"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >
      {
        isSidebarVisible ? <div className='cart_sidebar position-absolute col-12 col-md-7 p-4 shadow rounded bg-white'>
          <GiCrossedBones onClick={handleButtonClick} style={{ position: "absolute", right: "40px", zIndex: "1" }} />
          <Product_main />
          <ProductEdit />
          <KnowMore />

        </div> : null
      }


    </>
  )
}

export default Cart
