import { useReducer } from "react";
import CartContext from "./cart-context";

//Default state for the reducer
const defaultCartState = {
  items: [],
  totalAmount: 0
}

//Reducer function which receives state and action and returns new state
const cartReducer = (state, action) => {
  let updatedTotalAmount;
  let updatedItems;
  if (action.type === 'ADD') {
    //Update the total amount by adding the item price
     updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price

    //Grab the index of the item in the cart
    const cartItemIndex = state.items.findIndex(item => {
      return item.id === action.item.id
    })

    //Use index to find item in cart
    const cartItem = state.items[cartItemIndex]

    if (cartItem) {
      //Update the amount property of the existing item 
      const updatedItem = {
        ...cartItem,
        amount: cartItem.amount + action.item.amount
      }
      //Keep the items array the same but update the new item
      updatedItems = [...state.items]
      updatedItems[cartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
  }

    if (action.type === 'REMOVE') {
      //Grab the index of the item in the cart
      const cartItemIndex = state.items.findIndex(item => {
        return item.id === action.id
      })

      //Use index to find item in cart
      const cartItem = state.items[cartItemIndex]
       updatedTotalAmount = state.totalAmount - cartItem.price

      if (cartItem.amount === 1) {
        updatedItems = state.items.filter(item => {
          return item.id !== action.id
        })
      } else {
        let updatedItem = {
          ...cartItem,
          amount: cartItem.amount - 1
        }
        updatedItems = [...state.items]
        updatedItems[cartItemIndex] = updatedItem
      }
    }

    //Return a new state object with the updated items
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
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