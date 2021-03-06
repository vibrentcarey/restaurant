import MenuItem from './MenuItem'
import salad from '../../assets/salad.jpeg'
import sushi from '../../assets/sushi.jpg'
import burger from '../../assets/veganBurger.jpg'
import { useState } from 'react'


const MENUITEMS = [
  {
    id: 'm1',
    name: 'Salad',
    description: 'Caesar Salad made with lettuce, cucumbers, and croutons.',
    price: 18.99,
    img: salad
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'Vegan Sushi made with avocado, cucumber, seaweed and rice. ',
    price: 12.99,
    img: sushi
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Vegan Burger made with beyond meat and your choice of toppings. ',
    price: 16.99,
    img: burger
  }
]

const Menu = () => {
  const [menuItem, setMenuItem] = useState(MENUITEMS[0])
  return (
    <div>
      <div className="tabs">
        <button className={`tab tab-bordered ${menuItem.id === 'm1' && 'tab-active'}`} onClick={() => setMenuItem(MENUITEMS[0])}>Salad</button>
        <button className={`tab tab-bordered ${menuItem.id === 'm2' && 'tab-active'}`} onClick={() => setMenuItem(MENUITEMS[1])}>Sushi</button>
        <button className={`tab tab-bordered ${menuItem.id === 'm3' && 'tab-active'}`} onClick={() => setMenuItem(MENUITEMS[2])}>Burger</button>
      </div>
      <MenuItem menuItem={menuItem} />
    </div>
  )
}

export default Menu