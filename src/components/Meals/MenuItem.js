import { useContext, useRef} from "react"
import CartContext from "../../store/cart-context"
import MenuForm from "./MenuForm"
import { MdAttachMoney, MdAdd } from 'react-icons/md'
const MenuItem = ({ menuItem }) => {
  const { id, name, price, description, img } = menuItem;
  const cartContext = useContext(CartContext)

  // Call the add function from our context and pass the item object
  const addToCart = amount => {
    cartContext.addItem({
      id,
      name,
      amount,
      price
    })
  }
  const amountInputRef = useRef()
  const submitForm = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value
    addToCart(+amount)
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

    <div class="card sm:card-side card-bordered max-w-2xl mb-8 mt-1">
      <figure>
        <img className="object-cover h-48 max-w-2 " src={img} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}
          <div class="badge mx-2 bg-primary">NEW</div>
        </h2>
        <p>{description}</p>
        <form class=" m-1 flex flex-col">
        <input className="w-12 my-2 px-2" type='number' placeholder="0" ref={amountInputRef}/>
        <div>
          <div data-tip="Add To Cart" class="tooltip tooltip-primary tooltip-bottom">
            <button onClick={submitForm} class="btn btn-primary btn-sm mr-2"><MdAdd className="text-xl" /></button>
          </div>
          <div data-tip={price} class="tooltip tooltip-secondary tooltip-bottom">
            <button class="btn btn-ghost btn-sm"><MdAttachMoney className="text-xl" /></button>
          </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default MenuItem