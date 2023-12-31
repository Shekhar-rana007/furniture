import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
import { toast } from "react-toastify";

const login = async (user) => {
  const response = await axios.post(`${base_url}user/login`, user);
 
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }  
  return response.data;
 
};
const registration=async(value)=>{
  try{
    const response = await axios.post(`${base_url}user/register`, value);
    toast.success("Register succesfully");
    return response.data; 
  }catch(err){
    toast.error("User already Exists")
    return err
  }
 }
// address
const address=async(value)=>{
  try{
    const response = await axios.put(`${base_url}user/save-address`, value,config);
   
    return response.data; 
  }catch(err){
    return err
  }
 }
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get-orders`, config);

  return response.data;
}

const getOrder= async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config);

  return response.data;
}


const forget_password_reset=async(data)=>{
  const response=await axios.post(`${base_url}user/forgot-password-token`,data)
  return response.data;
}
const reset_password=async(data)=>{
   const response=await axios.put(`${base_url}user/reset-password/${data.token}`,{password:data.password})
  return response.data;
}
const update_order=async(id,status)=>{
  const response=await axios.put(`${base_url}user/order/update-order/${id}`,{status:status})
 return response.data;
}
const logout=async()=>{
  const response=await axios.post(`${base_url}user/logout`)

 return response.data;
}
const authService = {
  login,
  getOrders,
  registration,
  address,
  forget_password_reset,
  reset_password,
  getOrder,
  update_order,
  logout,

};

export default authService;
