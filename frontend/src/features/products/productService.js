import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);
  return response.data;
};
const updateProduct=async(data)=>{await axios.put(`${base_url}product/${data?._id}`,data,config)
}
const deleteProduct=async(product)=>{await axios.delete(`${base_url}product/${product?._id}`,config)
}
const productService = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};

export default productService;
