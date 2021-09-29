import './App.css';
import Categories from './components/category/category';
import Filters from './components/filter/filters';
import Products from './components/products/products'
import yashry_logo from './images/yashry_logo.png'
function App() {
  return (
    <div className="App">
      <div><img src={yashry_logo} alt=""/></div>
      <h6>Choose one of our categories below</h6>
      <Categories/>
      <Filters/>
      <Products/>
      
    </div>
  );
}

export default App;
