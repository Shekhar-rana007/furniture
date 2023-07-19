import React from 'react'

const KnowMore = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center align-items-center gap-2 p-5">
                        <h1 style={{ fontWeight: "bolder", textAlign: "center" }}><u>How it works</u></h1>
                        <div className="col-sm-12">
                            <p style={{ marginLeft: "35px", marginTop: "15px", fontWeight: "600" }}>Select a tenure of your choice</p>
                            <div className="segment d-flex mt-2">
                                <p className='' style={{ width: "25px", marginRight: "10px", display: "inline-block", height: "25px", textAlign: "center", color: "white", fontSize: "10px", borderRadius: "50px", padding: "5px", background: "#069baa" }}>1</p>
                                <p >Pay upfront for 3, 6, 9, or 12-months and get huge discounts on your rentals.</p>

                            </div>
                            <span style={{
                                color: '#069baa',
                                boxSizing: 'border-box',
                                marginLeft: "10px",
                                display: 'block',
                                borderColor: 'rgb(189, 189, 189)',
                                borderLeftStyle: 'solid',
                                borderLeftWidth: '2px',
                                minHeight: '24px',
                                marginBottom: "-20px"
                            }}></span>

                        </div>

                        <div className="col-sm-12">
                            <p style={{ marginLeft: "35px", marginTop: "15px", fontWeight: "600" }}>Pay upfront and forget about it</p>
                            <div className="segment d-flex mt-2">
                                <p className='' style={{ width: "25px", marginRight: "10px", display: "inline-block", height: "25px", textAlign: "center", color: "white", fontSize: "10px", borderRadius: "50px", padding: "5px", background: "#069baa" }}>2</p>
                                <p>Pay in one go for your entire tenure and never worry about monthly payments.</p>
                            </div>
                            <span style={{
                                color: '#069baa',
                                boxSizing: 'border-box',
                                marginLeft: "10px",
                                display: 'block',
                                borderColor: 'rgb(189, 189, 189)',
                                borderLeftStyle: 'solid',
                                borderLeftWidth: '2px',
                                minHeight: '24px',
                                marginBottom: "-20px"
                            }}></span>
                        </div>

                        <div className="col-sm-12">
                            <p style={{ marginLeft: "35px", marginTop: "15px", fontWeight: "600" }}>Enjoy huge discounts on rentals</p>
                            <div className="segment d-flex mt-2">
                                <p className='' style={{ width: "25px", marginRight: "10px", display: "inline-block", height: "25px", textAlign: "center", color: "white", fontSize: "10px", borderRadius: "50px", padding: "5px", background: "#069baa" }}>3</p>
                                <p>Get up to 60% off with higher tenure plans for maximum value for your money.</p>
                            </div>
                            <span style={{
                                color: '#069baa',
                                boxSizing: 'border-box',
                                marginLeft: "10px",
                                display: 'block',
                                borderColor: 'rgb(189, 189, 189)',
                                borderLeftStyle: 'solid',
                                borderLeftWidth: '2px',
                                minHeight: '24px',
                                marginBottom: "-20px"
                            }}></span>
                        </div>

                        <div className="col-sm-12">
                            <p style={{ marginLeft: "35px", marginTop: "15px", fontWeight: "600" }}>Renew at the end of your tenure</p>
                            <div className="segment d-flex mt-2">
                                <p className='' style={{ width: "25px", marginRight: "10px", display: "inline-block", height: "25px", textAlign: "center", color: "white", fontSize: "10px", borderRadius: "50px", padding: "5px", background: "#069baa" }}>4</p>
                                <p>Pick a different tenure or renew your existing plan for a fresh tenure</p>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <p style={{ marginLeft: "35px", marginTop: "15px", fontWeight: "600" }}>Renew at the end of your tenure</p>
                            <div className="segment d-flex mt-2">
                                <p className='' style={{ width: "25px", marginRight: "10px", display: "inline-block", height: "25px", textAlign: "center", color: "white", fontSize: "10px", borderRadius: "50px", padding: "5px", background: "#069baa" }}>4</p>
                                <p>Pick a different tenure or renew your existing plan for a fresh tenure</p>
                            </div>
                        </div>

                        <div className="col-sm-12">

                            <h1 style={{ fontWeight: "bolder", textAlign: "center", marginTop: "50px", marginBottom: "30px" }}><u>FAQs</u></h1>
                            <div className="accordion" id="accordionExample" style={{ border: "none", outline: "none" }}>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is the minimum tenure that one can rent for?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Although it depends on your rental plan, a minimum period of 3 months is required <strong>(but we know you will want to keep it longer!)</strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Do I have to pay the rent for the entire tenure at the time of checkout
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, you will need to pay the rental fee upfront for the entire tenure that your selecting
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What are the benefits of selecting a higher tenure plan?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The longer a tenure you pick, the higher is the discount you get on your rentals. Other than that, you need not worry about regularly renewing your subscription.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Will I get additional discount when I apply a coupon or referral code?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Absolutely! Any discounts from a coupon or referral code will be applied additionally to your tenure discounts.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            What happens to my subscription after the plan expires?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" style={{
                                            boxSizing: 'border-box',
                                            paddingLeft: "15px",
                                            margin: '0px',
                                            color: 'rgb(119, 119, 119)',
                                            fontFamily: 'Work Sans',
                                            fontSize: '12px',
                                            fontWeight: 400,
                                            lineHeight: 1.3,
                                        }}>
                                            You can choose to renew the plan or switch to a different tenure. Alternatively, your plan will be auto-renewed for 1-month without any discounts if you don't take any action.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default KnowMore


