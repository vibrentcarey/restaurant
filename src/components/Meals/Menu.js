import MenuItem from './MenuItem'
import salad from '../../assets/salad.jpg'
import sushi from '../../assets/sushi.jpg'
import burger from '../../assets/veganBurger.jpg'


const MENUITEMS = [
  {
    id: 'm1',
    name: 'Salad',
    description: 'Caesar Salad',
    price: 18.99,
    img: salad
  },
  {
    id: 'm2',
    name: 'Avocado Roll',
    description: 'avocado, cucumber, sesame seeds',
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
    // <div className="menu">
    //   <h1 className="menu__title">Genki Menu</h1>
    //   <hr className="menu__line"/>
    //   {menuItems}
    //   <h3 className="menu__subtitle">All Sushi On Our Menu Is 100% Vegan</h3>
    // </div>
    <div>
      <div class="tabs">
        <a class="tab tab-bordered">Tab 1</a>
        <a class="tab tab-bordered tab-active">Tab 2</a>
        <a class="tab tab-bordered">Tab 3</a>
      </div>
      <MenuItem/>
    </div>
  )
}

export default Menu