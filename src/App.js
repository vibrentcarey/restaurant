import './App.css';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import RestaurantSummary from './components/Meals/RestaurantSummary';

function App() {
  return (
    <div className="App">
    <Header/>
    <RestaurantSummary/>
    <Menu/>
    </div>
  );
}

export default App;
