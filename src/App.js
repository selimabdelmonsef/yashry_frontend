import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import { api } from './constants/api.constants'
import axios from 'axios';

function App() {

  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(api.products_category_rating_api.replace("{{categoryId}}", 1).replace("{{rating}}", 1)).then((response) => setProducts(response.data))

  }, [console.log(products)])
  return (
    <div className="App">
      <h1>Yashry</h1>
      <h6>Choose one of our categories below</h6>
    </div>
  );
}

export default App;
