import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from './Modal'

const Cart = ({ toggleCart }) => {
const cartContext = useContext(CartContext)
//Extract the name from the items array
const cartItems = cartContext.items.map(item => {
  return <div className={classes.item}><h2>{item.name}</h2></div>
})

const totalAmount = cartContext.total

  return (
    <Modal>
      <div className={classes.cart}>

        <div className={classes.header}>
          <h1>Your Cart</h1>
        </div>
        <hr/>

        <div className={classes.body}>
         {cartItems}
        </div>

        <div className={classes.footer}>
          <div className={classes.total}>
            <h1>Total: ${totalAmount}</h1>
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