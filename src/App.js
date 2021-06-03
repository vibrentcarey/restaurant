import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import RestaurantSummary from './components/Meals/RestaurantSummary';

function App() {
  const [showCart, setshowCart] = useState(false)

  const handleCartToggle = () => {
    setshowCart(!showCart)
  }
  return (
    <div className="App">
      {showCart && <Cart toggleCart={handleCartToggle} />}
      <Header toggleCart={handleCartToggle} />
      <RestaurantSummary />
      <Menu />
    </div>
  );
}

export default App;
