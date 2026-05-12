import React, { Children, createContext, useState } from 'react'

export const CartContext = createContext()
export default function CartProvider({children}) {
    const [cart, setCart] = useState({
  user: 'Anoj',
  items: [],
  total: formatCurrency(0),
  itemCount: 0,
})

function addItem(){}
function deleteItem(){}
function clearCart(){}
  return (
    <CartContext value={{cart, addItem, deleteItem, clearCart}}>
        {children}
    </CartContext>
  )
}
