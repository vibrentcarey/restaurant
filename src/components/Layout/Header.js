import classes from './Header.module.css'
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  return (
    <header className={classes.header}>
    <div className={classes.left}>
    <span className={classes.restaurant}>Green Bite</span>
    </div>
    <div className={classes.right}>
    <div className={classes.button}>
    <FaShoppingCart className={classes.cart}/>
    <span className={classes.cart}>Cart</span>
    <span id={classes.total} className={classes.cart}>0</span>
    </div>
    </div>

    </header>
  )
}

export default Header