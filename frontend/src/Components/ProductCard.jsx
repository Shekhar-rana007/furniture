
const ProductCard = (props) => {
  const data = props.data;
  return (
    <div className="product-single col-4 m-2 align-content-start position-relative">
      <div
        className="product-image  position-relative"
        id="DynamicWishlist_4182"
      >
        <Link href="" className=" position-relative h-100">
          <img
            src={data?.images[0].url}
            alt={data.slug}
            className=""
            style={{ opacity: 1 }}
          />
        </Link>
        <span className="new-label">{data.stock}</span>
        <span className="wishlist">
          <i id="whished_4182" className="icn icn-wishlist-fill-gray"></i>
        </span>
      </div>
      <div className="product-description ">
        <div className="product-description-wrapper ">
          <h2>
            <a href="   " target="_blank">
              {data.name}
            </a>
          </h2>
          <p className="price">
            <del>
              <strong className="strikeThrough">
                <i className="rupees-symbol">₹</i> {data.nineMonthPrice + 100}
              </strong>
            </del>
            <ins>
              <strong>
                <i className="rupees-symbol">₹</i> {data.nineMonthPrice}
              </strong>
            </ins>
            / month
          </p>
        </div>
        <div className="included-items-block ">
          <h4>1 Item Included</h4>
          <div
            className=""
            style={{ display: "block" }}
            id="subProductList_4182"
          >
            <ul className="items-lisitng ">
              <li>
                <a href="#">
                  <img
                    alt="Jade King Size Double Bed"
                    className=""
                    src={data.images[0].url}
                    style={{ opacity: 1 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
