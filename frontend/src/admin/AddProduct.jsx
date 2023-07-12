import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProducts } from "../features/products/productSlice";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "./../features/upload/uploadSlice";
import Form from "react-bootstrap/Form";

const AddProduct = () => {
  const data = {
    name: "",
    slug: name,
    images: [],
    brand: "",
    size: "",
    category: "",
    subCategory: "",
    color: "",
    material: "",
    threeMonthPrice: "",
    sixMonthPrice: "",
    nineMonthPrice: "",
    twelveMonthPrice: "",
  };
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState(data);
  const [subCategory, setSubCategory] = useState([]);
  const imgState = useSelector((state) => state.upload);
  const img = [];
  imgState.images.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    setformdata({ ...formdata, images: img });
  }, [imgState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProducts(formdata));
    setformdata(data);
  };
  const categories = [
    { v: "home-furniture", t: "Home Furniture" },
    { v: "appliances", t: "Appliances" },
    { v: "office", t: "Office Furniture" },
    // { v: "combos", t: "Combos" },
    // { v: "furniture sale", t: "Furniture Sale" },
  ];
  useEffect(() => {
    handleSubcategory();
  }, [formdata.category]);

  const handleSubcategory = () => {
    switch (formdata.category) {
      case "home-furniture":
        setSubCategory([
          { v: "bed-room", t: "Bed Room" },
          { v: "living-room", t: "Living Room" },
          { v: "dining-room", t: "Dining Room" },
          { v: "study-room", t: "Study Room" },
        ]);
        break;
      case "appliances":
        setSubCategory([
          { v: "refrigerator", t: "Refrigerator" },
          { v: "water-purifier", t: "Water Purifier" },
          { v: "air-conditioners", t: "Air Conditioners" },
          { v: "washing-machine", t: "Washing Machine" },
          { v: "telivision", t: "Telivision" },
          { v: "other-appliance", t: "other Appliance" },
        ]);
        break;
      case "office":
        setSubCategory([
          { v: "workstation", t: "Workstation" },
          { v: "Ofiice-chair", t: "Ofiice Chair" },
          { v: "other-office", t: "other Office" },
        ]);
        break;

      default:
        break;
    }
  };

  return (
    <div className="col-12">
      <h1 className="h4 text-center my-2" style={{ fontWeight: "600" }}>
        Add Products
      </h1>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="mb-2">Enter Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              required
              value={formdata.name}
              onChange={(e) =>
                setformdata({ ...formdata, name: e.target.value })
              }
            />
          </div>
          <div className="form-row row ">
            <div className="form-group col-md-4 mb-3 mb-md-3">
              <label className="mb-1">Enter Category</label>
              <Form.Select
                value={formdata.category}
                required
                onChange={(e) =>
                  setformdata({ ...formdata, category: e.target.value })
                }
                aria-label="Default select example"
              >
                <option>Select Category</option>
                {categories.map((e, i) => (
                  <option value={e.v} key={i}>
                    {e.t}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="form-group col-md-4 mb-3 mb-md-3">
              <label className="mb-1">Enter Sub Category</label>
              <Form.Select
                value={formdata.subCategory}
                required
                onChange={(e) =>
                  setformdata({ ...formdata, subCategory: e.target.value })
                }
                aria-label="Default select example"
              >
                <option>Select Sub Category</option>
                {subCategory.map((e, i) => (
                  <option value={e.v} key={i}>
                    {e.t}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="form-group col-md-4">
              <label className="mb-1">Enter Product Size</label>
              <input
                type="text"
                className="form-control"
                placeholder="size"
                value={formdata.size}
                required
                onChange={(e) =>
                  setformdata({ ...formdata, size: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row row mb-3">
            <div className="form-group col-md-6 mb-3 mb-md-3">
              <label className="mb-1">Enter product Material </label>
              <input
                type="text"
                className="form-control"
                placeholder="Material"
                value={formdata.material}
                onChange={(e) =>
                  setformdata({ ...formdata, material: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label className="mb-1">Enter Product color</label>
              <input
                type="text"
                className="form-control"
                value={formdata.color}
                placeholder="Color"
                onChange={(e) =>
                  setformdata({ ...formdata, color: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row row mb-3">
            <div className="form-group col-md-6 col-lg-3 mb-3 mb-md-3">
              <label className="mb-1">Three Month Price :</label>
              <input
                type="number"
                className="form-control"
                placeholder="price"
                required
                value={formdata.threeMonthPrice}
                onChange={(e) =>
                  setformdata({ ...formdata, threeMonthPrice: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6 col-lg-3 mb-3 mb-md-3">
              <label className="mb-1">Six Month Price :</label>
              <input
                type="number"
                className="form-control"
                placeholder="price"
                required
                value={formdata.sixMonthPrice}
                onChange={(e) =>
                  setformdata({ ...formdata, sixMonthPrice: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6 col-lg-3 mb-3 mb-md-3">
              <label className="mb-1">Nine Month Price :</label>
              <input
                type="number"
                className="form-control"
                value={formdata.nineMonthPrice}
                placeholder="price"
                required
                onChange={(e) =>
                  setformdata({ ...formdata, nineMonthPrice: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6 col-lg-3 mb-3 mb-md-3">
              <label className="mb-1">Twelve Month Price :</label>
              <input
                type="number"
                className="form-control"
                placeholder="price"
                value={formdata.twelveMonthPrice}
                required
                onChange={(e) =>
                  setformdata({ ...formdata, twelveMonthPrice: e.target.value })
                }
              />
            </div>
            <div className="d-flex justify-center mb-2">
              <div className="bg-white border-1 col-12 p-4 rounded">
                <Dropzone
                  onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          {`Drag 'n'`} drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
            <div className=" d-flex flex-wrap justify-center gap-3">
              {formdata?.images.map((i, j) => {
                return (
                  <div className=" position-relative" key={j}>
                    <button
                      type="button"
                      onClick={() => dispatch(delImg(i.public_id))}
                      className="btn-close position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    ></button>
                    <img src={i.url} alt="" width={150} height={150} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-start mb-2">
            {" "}
            <p
              className={
                imgState?.message?.includes("sucessfull")
                  ? "text-success"
                  : "text-danger"
              }
            >
              {imgState.message}
            </p>
          </div>
          <button
            disabled={!imgState.isSuccess}
            className="col-12 btn btn-primary"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
