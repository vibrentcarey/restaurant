import classes from "./RestaurantSummary.module.css"

const RestaurantSummary = () => {
  return (
    <div className={classes.summary}>
      <h1>Who Said Fast Food Has To Be Unhealthy?</h1>
      <h2>Here at GreenBite we are dedicated to prepping and 
      <br/>delivering
      healthy meals that work with your busy schedule. <br/>
      We provide the fuel you need to do your best work at home.
      </h2>
      <h2>Our menu is below, and you are only a few clicks away
      <br/> from being a happier and healthier you!
      </h2>
    </div>
  )
}

export default RestaurantSummary