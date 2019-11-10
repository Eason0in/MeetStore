import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
const API_URL = 'http://localhost:3001/'

export const ProductContext = createContext()

const ProductContextProvider = props => {
  const [products, setProduct] = useState([])
  useEffect(() => {
    axios.get(API_URL + 'products').then(res => {
      setProduct(res.data)
    })
  }, [products])
  return <ProductContext.Provider value={{ products }}>{props.children}</ProductContext.Provider>
}

export default ProductContextProvider
