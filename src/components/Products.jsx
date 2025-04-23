import React, { useEffect } from 'react'
import { getproducts } from '../store/reducers/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgrtproducts } from '../store/actions/Productaction'

const Products = () => {
  const products =  useSelector((state)=>state.ProductReducer);
//   console.log(products)
const dipatch = useDispatch()
    useEffect(() => {
dipatch(asyncgrtproducts())
   
    }, [])
    
  return (
    <div>

        <div>
          <h1>products</h1>
          <span onClick={()=>deletHandler(index)}>x</span>
        </div>

    </div>
  )
}

export default Products
