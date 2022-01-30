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
    // <div className="menu_item">
    //   <div className="menu_item__left">
    //     <img src={img} alt={name} className="menu_item__image" />
    //     <div className="menu_item__info">
    //       <h2 className="menu_item__title">{name}</h2>
    //       {/* TODO: ADD INGREDIENTS AND CHANGE PRICE COLOUR */}
    //       {/* <h3 className="menu_item__description">{description}</h3> */}
    //       <h3 className="menu_item__price"> ${price}</h3>
    //     </div>
    //   </div>
    //   <div className="menu_item__right">
    //     <MenuForm addToCart={addToCart} />
    //   </div>
    // </div>

<div class="card lg:card-side card-bordered">
  <figure>
    <img src="https://picsum.photos/id/1005/400/250"/>
  </figure> 
  <div class="card-body">
    <h2 class="card-title">Horizontal
      <div class="badge mx-2">NEW</div>
    </h2> 
    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
    <div class="card-actions">
      <button class="btn btn-primary">Get Started</button> 
      <button class="btn btn-ghost">More info</button>
    </div>
  </div>
</div>

  )
}

export default MenuItem