import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";
export const asyncgrtproducts = () => async(dipatch,getState) =>{
    console.log(getState())
    try{
const response = await axios.get("https://fakestoreapi.com/users")
console.log(response.data)
dipatch(getproducts(response.data))
    }catch(error){
        console.log(error)
    }
}