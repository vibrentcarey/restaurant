import classes from './Menu.module.css'
import MenuItem from './MenuItem'

const MENUITEMS = [
  {
    id: 'm1',
    name: 'Salad',
    description: 'Healthy...and green...',
    price: 18.99,
    img: 'salad'
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'Vegan Avocado Roll',
    price: 12.99,
    img: 'sushi'
  }
]

const menuItems = MENUITEMS.map(item => {
  return <MenuItem img={item.img} name={item.name} description={item.description} price={item.price} />
})

const Menu = () => {
  return (
    <div className={classes.menu}>
      <h1>Menu</h1>
      {menuItems}
    </div>
  )
}

export default Menu