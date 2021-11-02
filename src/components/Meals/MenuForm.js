import { useRef } from "react"
import classes from "./MenuForm.module.css"

const MenuForm = ({addToCart}) => {
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
    <div className={classes.form}>
      <form>
      {/* TODO: ADD FORM VALIDATION */}
        <span>Amount:</span>
        <input type='number' pattern="[0-9]*" min='0' max='10' placeholder={0} ref={amountInputRef}/>
      </form>
      <br/>
      <div onClick={formSubmit} className={classes.submit} type='submit'>Add To Cart</div>
    </div>
  )
}

export default MenuForm