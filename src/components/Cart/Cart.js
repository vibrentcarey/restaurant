import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import PacmanLoader from "react-spinners/PacmanLoader";
import Modal from './Modal'
import { MdAdd } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'

const Cart = ({ toggleCart }) => {
  const [orderLoading, setorderLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const cartContext = useContext(CartContext)

  const addItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const removeItem = (id) => {
    cartContext.removeItem(id)
  }

  const handleOrderSubmit = () => {
    setorderLoading(true)
    setTimeout(() => {
      setorderLoading(false)
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false)
        toggleCart()
      }, 3000);
    }, 3000);
  }

  // Cart Items
  const cartItems = cartContext.items.map(item => {
    return <div>
      <div className="flex items-center">
        <h3 className="m-1 text-primary">{item.name} x{item.amount}</h3>
        <h3 className="m-1">${item.price}</h3>
        <div className="item__form">
          {/* TODO: NO NEGATIVE VALUES HERE AND LIMIT MAX */}
          <button onClick={() => removeItem(item.id)} className="btn btn-ghost btn-sm"><BiMinus /></button>
          <button onClick={() => addItem(item)} className="btn btn-primary btn-sm"><MdAdd /></button>
        </div>
      </div>

    </div>
  })

  const totalAmount = cartContext.total


  return (
    <div id="my-modal" class="modal">
      <div class="modal-box">
        <div className='prose'>
          <h2 className='mb-1'>Your Cart</h2>
          <div class="divider"></div>
          {cartItems}

          <div class="divider"></div>

          <h2 className='mt-1'>Total: ${totalAmount.toFixed(2)}</h2>
        </div>
        <div className='m-4'>
          {orderLoading && <PacmanLoader color="#5C7F67" />}
          {orderComplete && <h3 className='text-primary'>Your order has been processed!</h3>}
        </div>
        <div class="modal-action">

          <button href="" class="btn btn-primary btn-sm" onClick={handleOrderSubmit}>Order</button>
          <a href="/components/modal#" class="btn btn-sm">Close</a>
        </div>
      </div>
    </div>
  )
}

export default Cart