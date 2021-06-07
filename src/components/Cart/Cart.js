import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from './Modal'


const Cart = ({ toggleCart }) => {
  const cartContext = useContext(CartContext)

  const addItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const removeItem = (id) => {
    cartContext.removeItem(id)
  }

  //Extract the properties from the items array
  const cartItems = cartContext.items.map(item => {
    return <div className={classes.item}>
      <div className={classes.cartInfo}>
        <h1 className={classes.cartHeading}>{item.name} x{item.amount}</h1>
        <h2 className={classes.cartHeading}>${item.price}</h2>
      </div>
      <div className={classes.itemForm}>
        <button onClick={() => removeItem(item.id)} id={classes.remove} className={classes.cartButton}>-</button>
        <button onClick={() => addItem(item)} className={classes.cartButton}>+</button>
      </div>
    </div>
  })

  const totalAmount = cartContext.total

  return (
    <Modal>
      <div className={classes.cart}>

        <div className={classes.header}>
          <h1>Your Cart</h1>
        </div>
        <hr />

        <div className={classes.body}>
          {cartItems}
        </div>

        <div className={classes.footer}>
          <div className={classes.total}>
            <h1>Total: ${totalAmount.toFixed(2)}</h1>
          </div>
          <div className={classes.buttons}>
            <button onClick={toggleCart} id={classes.close} className={classes.button}>Close</button>
            <button className={classes.button}>Order</button>
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default Cart