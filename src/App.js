import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import RestaurantSummary from './components/Meals/RestaurantSummary';

function App() {
  return (
    <div className="App">
    <Cart/>
    <Header/>
    <RestaurantSummary/>
    <Menu/>
    </div>
  );
}

export default App;
