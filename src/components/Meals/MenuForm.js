import { useRef } from "react"
import "./MenuForm.css"

const MenuForm = ({ addToCart }) => {
  //useRef to reference our input value since we only need it on submit
  const amountInputRef = useRef()

  const formSubmit = e => {
    e.preventDefault();
    //Store the input value in a constant and convert to a number
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    addToCart(enteredAmountNumber)

  }

  return (
    <form className="menu_form">
      {/* TODO: ADD FORM VALIDATION */}
      <section className="menu_form__enter">
      <h3 class="menu_form__title">Amount</h3>
      <input className="menu_form__input" type='number' pattern="[0-9]*" min='0' max='10' placeholder={1} ref={amountInputRef} />
      </section>
      <br />
      <button onClick={formSubmit} className="menu_form__submit">Add To Cart</button>
    </form>
  )
}

export default MenuForm