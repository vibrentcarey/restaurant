import classes from './Menu.module.css'
import MenuItem from './MenuItem'
import salad from '../../assets/salad.jpg'
import sushi from '../../assets/sushi.jpg'
import burger from '../../assets/veganBurger.jpg'


const MENUITEMS = [
  {
    id: 'm1',
    name: 'Salad',
    description: 'Healthy...and green...',
    price: 18.99,
    img: salad
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'Vegan Avocado Roll',
    price: 12.99,
    img: sushi
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Vegan Burger',
    price: 16.99,
    img: burger
  }
]

const menuItems = MENUITEMS.map(item => {
  return <MenuItem id={item.id} img={item.img} name={item.name} description={item.description} price={item.price} />
})

const Menu = () => {
  return (
    <div className={classes.menu}>
      <h1>Menu</h1>
      <hr/>
      {menuItems}
    </div>
  )
}

export default Menu