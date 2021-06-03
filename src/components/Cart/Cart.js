import classes from './Cart.module.css'
import Modal from './Modal'

const Cart = ({ toggleCart }) => {
  return (
    <Modal>
      <div className={classes.cart}>

        <div className={classes.header}>
          <h1>Your Cart</h1>
        </div>

        <div className={classes.body}>
          <p>Items</p>
        </div>

        <div className={classes.footer}>
          <div className={classes.total}>
            <h1>Total:</h1>
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