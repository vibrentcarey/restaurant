import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import './Cart.css'
import Modal from './Modal'


const Cart = ({ toggleCart }) => {
  const cartContext = useContext(CartContext)

  const addItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const removeItem = (id) => {
    cartContext.removeItem(id)
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

        <div className="cart__header">
          <h1>Your Cart</h1>
        </div>
        <hr className="cart__line" />

        <div className="cart__main">
          {cartItems}
        </div>

        <div className="cart__footer">
          <div className="cart__total">
            <h1>Total: ${totalAmount.toFixed(2)}</h1>
          </div>
          <div className="cart__buttons">
            <button onClick={toggleCart} className="cart__button cart__button--close">Close</button>
            {/* TODO: ADD FEEDBACK AND CLOSE FORM AFTER ORDER */}
            <button className="cart__button">Order</button>
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default Cart