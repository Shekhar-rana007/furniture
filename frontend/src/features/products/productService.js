import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
<<<<<<< HEAD
  const response = await axios.get(`${base_url}product/`);
=======
  const response = await axios.get(`${base_url}product`);
>>>>>>> 91a2583052d1f33ff744a0bce5ba2358e3d54360

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);
  return response.data;
};
const updateProduct=async(data)=>{await axios.put(`${base_url}product/${data?.productId}`,{stock:data?.stock},config)
}

const productService = {
  getProducts,
  createProduct,
  updateProduct
};

export default productService;
