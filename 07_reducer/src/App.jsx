import { useReducer } from "react";
import cartReducer from "./reducers/cartReducer";

const App = () => {

  const initialState = { items: [], total: 0, itemsCount: 0 };
  const products = [
    { id: 1, name: "Product 1", price: 29.99 }, // quantity => cartItemsQ && total => quantity * price
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 19.99 },
  ];

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="main-container">
      {products.map((product) => (
        <div>
          {product.name}
          <button
            className="btn"
            onClick={() => dispatch({ type: "g", payload: product })}
          >
            add
          </button>
        </div>
      ))}
      <section>
        <h3>Cart Items | total: </h3>
        {cart.items.length}
        {cart.items.length > 0 &&
          cart.items.map((cartItem) => (
            <p>
              {cartItem.name} | {cartItem.price} | {cartItem.quantity}
              <button
                className="btn"
                onClick={() => dispatch({ type: "delete", payload: cartItem })}
              >
                remove
              </button>
            </p>
          ))}
      </section>
      {cart.items.length > 0 && (
        <button className="btn" onClick={() => dispatch({ type: "clear" })}>
          clear Cart
        </button>
      )}
      <div>
        Cart info: {cart.total} | {cart.itemsCount}
      </div>
    </div>
  );
};

export default App;
