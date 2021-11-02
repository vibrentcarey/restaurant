import classes from './Header.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const Header = ({ toggleCart }) => {
  //Store the result of useContext for later use
  const cartContext = useContext(CartContext)

  //Use reduce to count the total number of items in the cart
  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <header className={classes.header}>

      <div className={classes.left}>
        <span className={classes.restaurant}>Genki</span>
      </div>

      <div className={classes.right}>
        <div className={classes.button} onClick={toggleCart}>
          <FaShoppingCart className={classes.cart} />
          <span className={classes.cart}>Cart</span>
          <span id={classes.total} className={classes.cart}>{numberOfCartItems}</span>
        </div>
      </div>

    </header>
  )
}

export default Header