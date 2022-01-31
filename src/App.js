import { useState } from 'react';
import './App.css';
import Featured from './components/Featured';
import Footer from './components/Footer';
import GrandOpening from './components/GrandOpening';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import RestaurantSummary from './components/Meals/RestaurantSummary';
import CartProvider from './store/CartProvider';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import CartModal from './components/Cart/Modal';
import "@material-tailwind/react/tailwind.css";

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleCartToggle = () => {
    setShowModal(!showModal)
  }
  return (
    <CartProvider className=''>
      <Header toggleCart={handleCartToggle} />
      <CartModal showModal={showModal} toggleCart={handleCartToggle} />

      <main className='px-6 sm:px-12 md:px-16'>
        <div className="flex flex-col items-center">
          <div className='prose lg:prose-lg mt-8'>
            <h1 className='underline'>Green Bite</h1>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut='animate__fadeOutLeft'>
            <RestaurantSummary />
          </AnimationOnScroll>
          {/* <Menu /> */}
        </div>

        <div class="divider my-10"></div>

        <section className='w-full flex flex-col items-center'>
          <div className='prose mb-10'>
            <h2 className='text-center underline'>Menu</h2>
          </div>
          <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <Menu />
          </AnimationOnScroll>
        </section>
        <div class="divider my-8"></div>

        <section className='w-full flex flex-col items-center'>
          <div className='prose lg:prose-lg'>
            <h2 className='text-center underline sm:mt-8'>Reviews</h2>
          </div>
          <div className='grid md:grid-cols-3 gap-6 my-12 '>
            <Featured primary profile='2' title="John Smith" review="This place is amazing, I come here at least once a week." />
            <Featured secondary profile='3' title='Charlotte Rose' review="I cannot believe this place tastes so good when it's so healthy!" />
            <Featured accent profile='4' title="Noelle Silva" review="This place is part of the reason I went Vegan, can't get enough!" />

          </div>
        </section>
        <div class="divider my-14"></div>

        <section>
          <AnimationOnScroll animateIn='animate__zoomIn' animateOut='animate__zoomOut'>
            <GrandOpening />
          </AnimationOnScroll>
        </section>
        <div class="divider my-14"></div>
      </main>
      <Footer />

    </CartProvider>
  );
}

export default App;
