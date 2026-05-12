





export default  function cartReducer(state, action) {
    const { type, payload } = action;
    console.log("cartReducer function been called!");
    console.log("with type: ", type);
    console.log("with payload: ", payload);
    //push, [...array]
    const newCart = [...state, payload];

    if(action.type == "g"){
      state = [...state, payload]

    } else if (action.type == "delete"){
      state = state.filter(i => i.name != payload.name)
    }else if (action.type == "clear"){
      state = []
    }

    return state;
  }