import { useContext } from "react"
import CartContext from "../../store/cart-context"
import MenuForm from "./MenuForm"

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
    <div className="menu_item">
      <div className="menu_item__left">
        <img src={img} alt={name} className="menu_item__image" />
        <div className="menu_item__info">
          <h2 className="menu_item__title">{name}</h2>
          {/* TODO: ADD INGREDIENTS AND CHANGE PRICE COLOUR */}
          {/* <h3 className="menu_item__description">{description}</h3> */}
          <h3 className="menu_item__price"> ${price}</h3>
        </div>
      </div>
      <div className="menu_item__right">
        <MenuForm addToCart={addToCart} />
      </div>
    </div>
  )
}

export default MenuItem