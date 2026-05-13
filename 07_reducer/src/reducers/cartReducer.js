function calculation(cart) {
  const reduceResult = cart.items.reduce(
    (acc, item) => {
      acc.cartItemsQ = acc.cartItemsQ += item.quantity;
      acc.total = acc.total += item.quantity * item.price;

      return acc;
    },
    { cartItemsQ: 0, total: 0 },
  );

  console.log(reduceResult);

  cart.total = reduceResult.total;
  cart.itemsCount = reduceResult.cartItemsQ;
  console.log(cart);

  return cart;
}

export default function cartReducer(state, action) {
  const { type, payload } = action;


  if (action.type == "g") {
    // if exist in cart: we need to only increase the item quantity...
    const isExist = state.items.find((i) => i.name == payload.name);

    if (isExist) {
      const items = state.items.map((i) => {
        if (i.name == isExist.name) {
          return { ...i, quantity: isExist.quantity + 1 };
        } else return i;
      });

      state = { ...state, items };
    } else {
      const items = [...state.items, { ...payload, quantity: 1 }];

      state = { ...state, items };
    }
  } else if (action.type == "delete") {
    const items = state.items.filter((i) => i.name != payload.name);
    state = { ...state, items };
  } else if (action.type == "clear") {
    const items = [];
    state = { ...state, items };
  }
  state = calculation(state);

  return state;
}
