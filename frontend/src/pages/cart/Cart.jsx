import React from 'react'

const Cart = () => {
  return (
    <>
      <div className="card text-center w-50 m-5" style={{
        // padding: '24px 32px',
        // backgroundColor: 'rgb(206, 237, 240)',
      }}>
        <div className="card-header">
          Rent Cart
          1 Items
        </div>
        <div className="card-body " style={{ height: "200px" }}>
          <img src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/r2/products/222/plp_1.png' style={{
            padding: '0',
            margin: '20px',
            position: 'absolute',
            top: '0px',
            filter: 'blur(0)',
            height: 'auto',
            width: '20%',
            visibility: 'visible',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }} />
          <p className="card-title" style={{
            padding: '0',
            margin: '0',
            position: 'absolute',
            filter: 'blur(0)',
            height: 'auto',
            width: '100%',
            visibility: 'visible',
            cursor: 'pointer',
            boxSizing: 'border-box',
            fontSize: '14px',
            fontWeight: '500',
            color: 'rgb(34, 34, 34)',
            lineHeight: '1.3',
            fontFamily: 'Work Sans !important',
          }}>Noah Fabric 3 Seater Sofa in Turquoise Color</p>

<span style={{   display:"flex",alignItems:"center", justifyContent:"center",}}>
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
          <span style={{    margin: 0px 8px 0px 0px;
    font-family: "Work Sans";
    font-size: 10px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    padding: 4px 8px;
    border-radius: 9px;
    background-color: rgb(255, 245, 183);
    line-height: 1.3;}}>
          
            -75%
          </span>
            <span>  ₹581.20/mo</span>
          </span>

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
