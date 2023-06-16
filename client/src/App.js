import React from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/Product'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/loginuser" element={<Login/>}/>
        <Route path="/loginstore" element ={<Login/>}/>
        <Route path="/registeruser" element={<Register/>}/>
        <Route path="/registerstore" element ={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App