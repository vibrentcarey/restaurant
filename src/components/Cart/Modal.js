
import { useContext, useState } from 'react'
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import CartContext from '../../store/cart-context'
import PacmanLoader from "react-spinners/PacmanLoader";
import { MdAdd } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'

export default function CartModal({ title, message, showModal, closeModal, confirm, submit, toggleCart }) {
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
    <Modal size='lg' active={showModal} toggler={toggleCart} className='z-10'>
      <ModalBody>
      <div className='prose'>
        <h2 className='mb-1'>Your Cart</h2>
        <div class="divider"></div>
        {cartItems}
        {cartItems.length === 0 && <p>Your cart is empty, check back after you've added something!</p>}
        <div class="divider"></div>

        <h2 className='mt-1'>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
      <div className='mb-8'>
        {orderLoading && <PacmanLoader color="#5C7F67" />}
      </div>
      {orderComplete && <h3 className='text-primary'>Your order has been processed!</h3>}

      </ModalBody>
      <ModalFooter>
        <button href="" class="btn btn-primary btn-sm" onClick={handleOrderSubmit}>Order</button>
        <button onClick={toggleCart} class="btn btn-sm">Close</button>
      </ModalFooter>
    </Modal>
  );
}