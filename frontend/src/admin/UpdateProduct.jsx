// import React from 'react';

import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";;
import Form from "react-bootstrap/Form";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosconfig";
import { toast } from "react-toastify";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import Dropzone from "react-dropzone";
import { updateAProduct } from "../features/products/productSlice";

const UpdateProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getproductsData();
  }, []);
  const [search, setsearch] = useState("");

  useEffect(() => {
    searchVal();
  }, [search]);

  const getproductsData = async () => {
    const data = await fetch(`${base_url}product`);
    const datas = await data.json();
    setProducts(datas.products);
  };
  const searchVal = ()=>{
    const filterd = Products.filter(pt=>pt.name.includes(search))
    console.log(search,filterd)
      setProducts(filterd)
      if(search===""){
        getproductsData()
      }
  }

  const [sort, setsort] = useState("");
  const [Products, setProducts] = useState([]);

  const handleDelete = async (product) => {
    alert("You are going to delete that product");
    try {
      toast.info("Product is deleted sucessfully");
      const filterd = Products.filter(pt=>pt._id !== product._id)
      setProducts(filterd)
      await axios.delete(`${base_url}product/${product?._id}`, config);
    } catch (error) {
      toast.error(error.message)
      getproductsData()
    }
  };

// TODO Realated to update form in update products

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
  dispatch(updateAProduct(formdata));
  setformdata(data);
  window.location.reload()
  getproductsData();
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
const handleUpdate = (product) => {
  setformdata(product)
};

  
  return (
    <div className="col-12">
      <h1 className="h4 text-center my-2" style={{ fontWeight: "600" }}>
        Update Products
      </h1>
      <div className="col-12">
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
          disabled={formdata.material===""}
            className="col-12 btn btn-primary"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>


      <div className="p-4">
        <div className="col-12 d-flex justify-between">
          <div
            className="relative border border-[#ECECEC] bg-white col-12 col-md-6"
            style={{ overflow: "hidden" }}
          >
            <span
              onClick={() => setsearch("")}
              className="absolute top-0.5 right-8 mt-1 text-xl"
            >
              <RxCross2 />
            </span>
            <input
              className="py-2 pl-3 pr-10 w-full text-xs leading-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pearl-alpha placeholder-ruby-beta rounded-sm"
              type="text"
              placeholder="Search from Name.."  
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <span
              className="absolute top-2.5 right-3 bg-no-repeat bg-contain w-3.5 h-3.5 inline-block"
              style={{
                backgroundImage:
                  "url(https://d3juy0zp6vqec8.cloudfront.net/images/icn-search.svg)",
              }}
            ></span>
            <ul
              className="search-bar-listing py-1 absolute top-[33px] right-0 w-full bg-white h-80 shadow-xss overflow-y-auto hidden"
              style={{ display: "none" }}
            ></ul>
          </div>

          <div className="col-3 d-flex gap-2 items-center">
            <p className="col-2">Sort :</p>
            <Form.Select
              value={sort}
              required
              onChange={(e) => setsort(e.target.value)}
              aria-label="Default select example"
            >
              <option>Default</option>
              <option>New</option>
              <option>Price high to low</option>
              <option>Price Low to High</option>
            </Form.Select>
          </div>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-12 mt-4">
              <div className="table-responsive bg-white shadow rounded">
                <table className="table mb-0 table-center">
                  <thead>
                    <tr>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "40px" }}
                      >
                        S.No.
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "180px" }}
                      >
                        Product Name
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "120px" }}
                      >
                        Category
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "100px" }}
                      >
                        Stock
                      </th>
                      <th className="border-bottom p-3 text-sm">
                        Three Month Price
                      </th>

                      <th className="border-bottom p-3">Edit</th>
                      <th className="border-bottom p-3">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Products?.length !== 0 && (
                      <>
                        {Products?.map((product, i) => {
                          return (
                            <tr key={product._id}>
                              <th className="p-3">{i + 1}</th>
                              <td className="p-3">{product.name}</td>
                              <td className="p-3">{product.category}</td>
                              <td className="p-3">{product.stock}</td>
                              <td className="p-3">
                                {product.threeMonthPrice} rs
                              </td>
                              <td className="p-3">
                                <MdEdit
                                  onClick={() => handleUpdate(product)}
                                  fontSize={25}
                                  color="blue"
                                />
                              </td>
                              <td className="p-3">
                                <MdDelete
                                  className="cursor-pointer"
                                  onClick={() => handleDelete(product)}
                                  fontSize={25}
                                  color="red"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UpdateProduct;
