import React from 'react'

const Cart = () => {
  return (
    <>
      <div className="card text-center  m-5" style={{
        // padding: '24px 32px',
        // backgroundColor: 'rgb(206, 237, 240)',
      }}>
        <div className="card-header">
          Rent Cart
          1 Items
        </div>

        <div className="card-body " style={{ height: "200px" }}>
          <img src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/r2/products/222/plp_1.png' style={{
            margin: '20px',
            height: 'auto',
            width: '15%',
            visibility: 'visible',
            cursor: 'pointer',
          }} />
          <p className="card-title" style={{
            width: '100%',
            visibility: 'visible',
            position:"absolute",
            top:"25%",
            cursor: 'pointer',
            boxSizing: 'border-box',
            fontSize: '14px',
            fontWeight: '500',
            color: 'rgb(34, 34, 34)',
            lineHeight: '1.3',
            fontFamily: 'Work Sans !important',
          }}>Noah Fabric 3 Seater Sofa in Turquoise Color</p>

          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
            <p className="card-title" style={{
              margin: "30px 0",
              
              fontFamily: 'Work Sans',
              fontSize: '15px',
              fontWeight: 500,
              color: 'rgb(188, 188, 188)',
              textDecoration: 'line-through',
            }}>
              ₹2,325.00/mo
            </p>
            <span style={{
              margin: "0 10px",
              fontFamily: 'Work Sans',
              fontSize: '10px',
              fontWeight: 600,
              color: 'rgb(34, 34, 34)',
              padding: '4px 8px',
              borderRadius: '9px',
              backgroundColor: 'rgb(255, 245, 183)',
            }}>

              -75%
            </span>
            <span>  ₹581.20/mo</span>
          </span>



          <div className="card-title d-flex" style={{ alignItems: "end", justifyContent: "center" }}>
            <svg width="22" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.6 15.975a2.843 2.843 0 0 1-2.087-.862 2.843 2.843 0 0 1-.863-2.088H0V1.5C0 1.1.15.75.45.45.75.15 1.1 0 1.5 0h14.475v4.175H18.6L22 8.7v4.325h-1.775c0 .817-.288 1.512-.863 2.088a2.843 2.843 0 0 1-2.087.862 2.843 2.843 0 0 1-2.087-.862 2.843 2.843 0 0 1-.863-2.088H7.55c0 .817-.287 1.512-.862 2.088a2.843 2.843 0 0 1-2.088.862Zm0-1.5c.4 0 .742-.142 1.025-.425.283-.283.425-.625.425-1.025 0-.4-.142-.742-.425-1.025a1.397 1.397 0 0 0-1.025-.425c-.4 0-.742.142-1.025.425a1.397 1.397 0 0 0-.425 1.025c0 .4.142.742.425 1.025.283.283.625.425 1.025.425Zm-3.1-2.95h.55c.283-.45.642-.808 1.075-1.075.433-.267.917-.4 1.45-.4.533 0 1.02.137 1.462.412.442.276.805.63 1.088 1.063h7.35V1.5H1.5v10.025Zm15.775 2.95c.4 0 .742-.142 1.025-.425.283-.283.425-.625.425-1.025 0-.4-.142-.742-.425-1.025a1.397 1.397 0 0 0-1.025-.425c-.4 0-.742.142-1.025.425a1.397 1.397 0 0 0-.425 1.025c0 .4.142.742.425 1.025.283.283.625.425 1.025.425Zm-1.3-5.1h4.65l-2.775-3.7h-1.875v3.7Z" fill="#777"></path>
            </svg>
            <p className="MuiTypography-root MuiTypography-Tiny_Regular css-jc2tks">Delivery by 18 Jul</p>
          </div>



          <a href="#" className="btn btn-primary">Go somewhere  </a>
        </div>

        <div className="card-footer text-muted">
          2 days ago
        </div>


      </div>


    </>
  )
}

export default Cart
