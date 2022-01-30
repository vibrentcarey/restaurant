import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Featured from './components/Featured';
import Footer from './components/Footer';
import GrandOpening from './components/GrandOpening';
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
    <CartProvider className=''>
      <Header toggleCart={handleCartToggle} />
      <main className='px-4 sm:px-8 md:px-16'>
        <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center">
          {showCart && <Cart toggleCart={handleCartToggle} />}
          <div className='prose lg:prose-lg'>
            <h1 className='underline'>Green Bite</h1>
          </div>
          <RestaurantSummary />
          {/* <Menu /> */}
        </div>

        <div class="divider my-8"></div>

        <section className='w-full flex flex-col items-center'>

          <Menu />
        </section>
        <div class="divider my-8"></div>

        <section className='w-full flex flex-col items-center'>
          <div className='prose lg:prose-lg'>
            <h2 className='text-center underline mb-10'>Reviews</h2>
          </div>
          <div className='grid sm:grid-cols-3 gap-12 my-12 '>
            <Featured primary profile='2' title="John Smith" review="This place is amazing, I come here at least once a week." />
            <Featured secondary profile='3' title='Charlotte Rose' review="I cannot believe this place tastes so good when it's so healthy!" />
            <Featured accent profile='4' title="Noelle Silva" review="This place is part of the reason I went Vegan, can't get enough!" />

          </div>
        </section>
        <div class="divider my-8"></div>

        <section>
          <GrandOpening />
        </section>
        <div class="divider my-8"></div>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
