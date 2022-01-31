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
    <header class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-sm px-4 sm:px-8 md:px-12">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
          Green Bite
        </span>
      </div>
      <div class="flex-none">

        <div className='' onClick={toggleCart}>
            <button class="btn btn-primary">Cart<FaShoppingCart className='ml-2 mr-1' />{numberOfCartItems}</button>
        </div>
      </div>
    </header>
  )
}

export default Header