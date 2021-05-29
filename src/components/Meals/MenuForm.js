import classes from "./MenuForm.module.css"

const MenuForm = () => {
  return (
    <div className={classes.form}>
      <form>
        <span>Amount x</span>
        <input type='number' placeholder={0}/>
      </form>
      <br/>
      <div className={classes.submit} type='submit'>Add To Cart</div>
    </div>
  )
}

export default MenuForm