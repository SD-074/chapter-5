import React, { useEffect, useReducer, useState } from "react";

export default function Cart() {
//   const [cart, setcart] = useState({ items: [], total: 0, count: 0 });
  const initialState = { items: [], total: 0, count: 0 };

  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 19.99 },
  ];

  const [cart, dispatch] = useReducer(cartReducer, initialState);
  // cart {items, total, count}
  // dispatch {type = addItem, payload = item obj }

  function cartReducer(state, action) {
    // action types:
    // add items
    // remove items
    // clear the cart

    switch (action.type) {
        // action {type: addToCart, payload: {price, name, id}}
      case "ADD_TO_CART": {
        const existingProduct = state.items.find(
          (item) => item.id === action.payload.id,
        );

        let newItems;
        if (existingProduct) {
          newItems = state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        } else {
          newItems = [...state.items, { ...action.payload, quantity: 1 }];
        }

        return recalculateCart(newItems);
      }

      case "REMOVE_FROM_CART": {
        const existingProduct = state.items.find(
          (item) => item.id === action.payload,
        );

        let newItems;
        if (existingProduct.quantity === 1) {
          newItems = state.items.filter((item) => item.id !== action.payload);
        } else {
          newItems = state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        }

        return recalculateCart(newItems);
      }

      case "EMPTY_CART":
        return {
          ...state,
          items: [],
          itemCount: 0,
          total: formatCurrency(0),
        };

      default:
        return state;
    }
  }

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);

  function addItem(product) {
    setcart((prevCart) => {
      const { items, ...rest } = prevCart;

      const existingProduct = items.find((item) => item.id === product.id);
      if (existingProduct) {
        const newItems = items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return {
          ...rest,
          items: newItems,
          itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
          total: formatCurrency(
            newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
          ),
        };
      } else {
        const newItems = [...items, { ...product, quantity: 1 }];

        const itemCount = newItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const total = formatCurrency(
          newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        );

        // const {itemCounts, totalValue} = newItems.reduce((acc, item) => {

        //     acc.itemCounts = acc.itemCounts + item.quantity
        //     acc.totalValue = acc.totalValue + item.price * item.quantity
        //   return acc

        // }, {itemCounts: 0, totalValue: 0})

        // return { ...rest, items: newItems, itemCount: itemCounts, total: totalValue };
        return { ...rest, items: newItems, itemCount, total };
      }
    });
  }

//   useEffect(() => {
//     addItem({ id: 3, name: "Product 3", price: 19.99 });
//   }, []);

  return (
    <div>
      {/* <button
        onClick={() => addItem({ id: 3, name: "Product 3", price: 19.99 })}
      >
        Add item
      </button>
      <ul className="mt-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-2"
          >
            <span>{product.name}</span>
            <span>{formatCurrency(product.price)}</span>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded ml-4"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      {cart.items.map((item) => (
        <li key={item.id} className="flex justify-between items-center p-2">
          <span>{item.name}</span>
          <span>
            {formatCurrency(item.price)} x {item.quantity}
          </span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded ml-4"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </li>
      ))}

      <p>Cart total price is: {cart.total}</p> */}


      <button
                  className="bg-blue-500 text-white px-3 py-1 rounded ml-4"
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_CART', payload: product })
                  }
                >
                  Add to Cart
                </button>
    </div>
  );
}


cartReducer({type: "addToCart", payload: {itmObj}})

function cartReducer(state, action){

    if (action.type == "addToItem"){
        // additng item to cart
        action.payload ()
        {...prevState} => {newState}
    } else if (action.type == "clearCart"){
        // clear
    }
}