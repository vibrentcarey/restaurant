import MenuForm from "./MenuForm"
import classes from "./MenuItem.module.css"

const MenuItem = ({ name, description, price, img }) => {
  return (
    <div className={classes.item}>
      <div className={classes.left}>
        <img src={img} alt={name} />
        <div className={classes.info}>
          <h1>{name}</h1>
          <h2 className={classes.details}>{description}</h2>
          <h2 className={classes.details}>${price}</h2>
        </div>
      </div>
      <div className={classes.right}>
        <MenuForm />
      </div>
    </div>
  )
}

export default MenuItem