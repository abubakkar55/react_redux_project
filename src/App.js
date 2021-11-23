import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './container/Header';
import ProductDetails from './container/ProductDetails';
import Products from './container/Products';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={Products} />
          <Route path="/product/:id" element={ProductDetails} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
