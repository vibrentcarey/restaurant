import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import RestaurantSummary from './components/Meals/RestaurantSummary';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setshowCart] = useState(false)

  const handleCartToggle = () => {
    setshowCart(!showCart)
  }
  return (
    <CartProvider>
        <Header toggleCart={handleCartToggle} />

      <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center">
        {showCart && <Cart toggleCart={handleCartToggle} />}
        <RestaurantSummary />
        <Menu />
      </div>
    </CartProvider>
  );
}

export default App;
