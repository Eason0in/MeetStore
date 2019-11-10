import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = props => {
  const [cartItems, setItem] = useState([])

  const addCartItem = item => {
    const { id, title, price, img } = item
    setItem([...cartItems, { id, title, price, img }])
  }

  return <CartContext.Provider value={{ cartItems, addCartItem }}>{props.children}</CartContext.Provider>
}

export default CartContextProvider
