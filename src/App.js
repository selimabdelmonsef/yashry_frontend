import './App.css';
import Categories from './components/category/category';
import Filters from './components/filter/filters';
import Products from './components/products/products'
import { MySpinner } from './components/spinner/spinner';

function App() {
  return (
    <div className="App">
      <h1>Yashry</h1>
      <h6>Choose one of our categories below</h6>
      <Categories/>
      <Filters/>
      <Products/>
    </div>
  );
}

export default App;
