import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = props => {
  const [cartItems, setItem] = useState([])

  const addCartItem = item => {
    const { id, title, price, img } = item
    setItem([...cartItems, { id, title, price, img }])
  }

  const cleanCartItem = () => {
    setItem([])
  }

  const removeCartItem = id => {
    return cartItems.filter(item => item.id !== id)
  }

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, cleanCartItem, removeCartItem }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
