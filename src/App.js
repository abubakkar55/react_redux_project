import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './container/Header';
import ProductDetails from './container/ProductDetails';
import Products from './container/Products';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="product_details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
