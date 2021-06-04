import { useReducer } from "react";
import CartContext from "./cart-context";

//Default state for the reducer
const defaultCartState = {
  items: [],
  totalAmount: 0
}

//Reducer function which receives state and action and returns new state
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    //Create a new items array with the new added item
    const updatedItems = state.items.concat(action.item)
    //Update the total amount by adding the item price
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price

    //Return a new state object with the updated items
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  
  return defaultCartState
}

const CartProvider = (props) => {
  /*useReducer takes the reducer function and default state and gives us
  a state snapshot and a function to dispatch actions*/
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCart = (item) => {
    //When an item gets added trigger the reducer and pass the item as payload
    dispatchCartAction({ type: 'ADD', item })
  }

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: 'REMOVE', id })
  }

  //Recreate the cart context object with pointers to the functions
  const cartContext = {
    //Grab the values from our state object
    items: cartState.items,
    total: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider