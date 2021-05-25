import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
    <div className={classes.left}>
    <span className={classes.restaurant}>Green Bite</span>
    </div>
    <div className={classes.right}>
    <div className={classes.button}>
    <span>Cart</span>
    </div>
    </div>

    </header>
  )
}

export default Header