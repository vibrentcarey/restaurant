import { useRef, useState } from "react"

const MenuForm = ({ addToCart }) => {
  const [inputIsValid, setinputIsValid] = useState(true);

  //useRef to reference our input value since we only need it on submit
  const amountInputRef = useRef()

  const formSubmit = e => {
    e.preventDefault();
    //Store the input value in a constant and convert to a number
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (enteredAmount > 0) {
      addToCart(enteredAmountNumber);
    } else {
      setinputIsValid(false);
      setTimeout(() => {
        setinputIsValid(true);
      }, 3000);
    }
  }

  return (
    <form className="menu_form">
      {/* TODO: ADD FORM VALIDATION */}
      <section className="menu_form__enter">
        <h3 class="menu_form__title">Amount</h3>
        <input className={`menu_form__input ${inputIsValid || "menu_form__input--invalid"}`} type='number' pattern="[0-9]*" min='0' max='10' placeholder={0} ref={amountInputRef} />
      </section>
      <br />
      <button onClick={formSubmit} className="menu_form__submit">Add To Cart</button>
    </form>
  )
}

export default MenuForm