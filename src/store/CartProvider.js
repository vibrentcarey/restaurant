import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCart = (item) => { }
  const removeItemFromCart = (id) => { }

//Recreate the cart context object with pointers to the functions
  const cartContext = {
    items: [],
    total: 0,
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