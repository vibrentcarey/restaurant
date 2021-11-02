import { useContext } from "react"
import CartContext from "../../store/cart-context"
import MenuForm from "./MenuForm"
import classes from "./MenuItem.module.css"

const MenuItem = ({ id, name, description, price, img }) => {
const cartContext = useContext(CartContext)

//Call the add function from our context and pass the item object
const addToCart = amount => {
  cartContext.addItem({
    id,
    name,
    amount,
    price
  })
}
  return (
    <div className={classes.item}>
      <div className={classes.left}>
        <img src={img} alt={name} className={classes.image} />
        <div className={classes.info}>
          <h1>{name}</h1>
          <h2 className={classes.details}>{description}</h2>
          <h2 className={classes.details}>${price}</h2>
        </div>
      </div>
      <div className={classes.right}>
        <MenuForm addToCart={addToCart}/>
      </div>
    </div>
  )
}

export default MenuItem