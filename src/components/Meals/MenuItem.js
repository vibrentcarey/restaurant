import { useContext, useRef } from "react"
import CartContext from "../../store/cart-context"
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
    <div className="card sm:card-side card-bordered max-w-2xl mb-8 mt-1">
        <figure>
          <img className="object-cover h-48 max-w-2 " src={img} alt='food'/>
        </figure>
      <div className="card-body">
        <h2 className="card-title">{name}
          <div className="badge mx-2 bg-primary">NEW</div>
        </h2>
        <p data-testid="description">{description}</p>
        <form className=" m-1 flex flex-col">
          <input className="w-12 my-2 px-2" type='number' placeholder="0" ref={amountInputRef} />
          <div>
            <div data-tip="Add To Cart" className="tooltip tooltip-primary tooltip-bottom">
              <button onClick={submitForm} className="btn btn-primary btn-sm mr-2"><MdAdd className="text-xl" /></button>
            </div>
            <span  data-tip={price} className="tooltip tooltip-secondary tooltip-bottom">
              <button className="btn btn-ghost btn-sm"><MdAttachMoney className="text-xl" /></button>
            </span>
          </div>
        </form>
      </div>
    </div>

  )
}

export default MenuItem