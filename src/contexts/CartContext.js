import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cartItems, setItem] = useState([]);

  //商品加入購物車
  const addCartItem = item => {
    const { id, title, price, img } = item;
    setItem([...cartItems, { id, title, price, img }]);
  };

  //清除購物車
  const cleanCartItem = () => {
    setItem([]);
  };

  //刪除購物車 by id
  const removeCartItem = id => {
    return setItem(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addCartItem, cleanCartItem, removeCartItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
