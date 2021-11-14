import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import ClipLoader from "react-spinners/ClipLoader";
import './Cart.css'
import Modal from './Modal'


const Cart = ({ toggleCart }) => {
  const [orderLoading, setorderLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const cartContext = useContext(CartContext)

  const addItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const removeItem = (id) => {
    cartContext.removeItem(id)
  }

  const handleOrderSubmit = () => {
    setorderLoading(true)
    setTimeout(() => {
      setorderLoading(false)
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false)
        toggleCart()
      }, 3000);
    }, 3000);
  }

  // Cart Items
  const cartItems = cartContext.items.map(item => {
    return <div className="item">
      <div className="item__info">
        <h2 className="item__heading">{item.name} x{item.amount}</h2>
        <h3 className="item__price">${item.price}</h3>
      </div>
      <div className="item__form">
        {/* TODO: NO NEGATIVE VALUES HERE AND LIMIT MAX */}
        <button onClick={() => removeItem(item.id)} className="item__button item__button--remove">-</button>
        <button onClick={() => addItem(item)} className="item__button">+</button>
      </div>
    </div>
  })

  const totalAmount = cartContext.total


  return (
    <Modal>
      <div className="cart">
        {/* Top Of Cart */}
        <div className="cart__header">
          <h1>Your Cart</h1>
        </div>
        <hr className="cart__line" />
        {/* Cart Items */}
        <div className="cart__main">
          {cartItems}
        </div>
        {orderLoading && <ClipLoader color="#e80b40" />}
        {orderComplete && <h3>Your order has been processed!</h3>}
        {/* Total And Buttons`` */}
        <div className="cart__footer">
          <div className="cart__total">
            <h1>Total: ${totalAmount.toFixed(2)}</h1>
          </div>
          <div className="cart__buttons">
            <button onClick={toggleCart} className="cart__button cart__button--close">Close</button>
            {/* TODO: ADD FEEDBACK AND CLOSE FORM AFTER ORDER */}
            <button className="cart__button" onClick={handleOrderSubmit}>Order</button>
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default Cart