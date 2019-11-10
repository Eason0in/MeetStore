import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = props => {
  const [products, setProduct] = useState([
    {
      title: '帳篷',
      price: 200,
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      img: 'https://picsum.photos/id/30/1024/768'
    },
    {
      title: '高級烤肉架',
      price: 250,
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      img: 'https://picsum.photos/id/28/1024/768'
    },
    {
      title: '外帳',
      price: 300,
      id: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      img: 'https://picsum.photos/id/29/1024/768'
    },
    {
      title: '內帳',
      price: 400,
      id: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      img: 'https://picsum.photos/id/34/1024/768'
    }
  ])
  return <ProductContext.Provider value={{ products }}>{props.children}</ProductContext.Provider>
}

export default ProductContextProvider
