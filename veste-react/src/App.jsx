import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/pages/home/homeMain/Home';
import Women from './components/pages/collection/women/Women';
import Men from './components/pages/collection/Men/men';
import Accessories from './components/pages/collection/accessories/Accessories';
import Sale from './components/pages/collection/sale/Sale';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/footer/Footer';
import Cart from './components/Cart/Cart';
import CustomerCare from './components/pages/CustomerCare/CustomerCare';
import VisitUs from './components/pages/VisitUs/VisitUs';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PlacedOrder from './components/PlacedOrder/PlacedOrder'
import Lookbook from './components/pages/Lookbook/Lookbook';

function App() {

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [quantity, setQuantity] = useState(0);
  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    const quantityFromLocalStorage = localStorage.getItem('quantity');
    const quantityAsNumber = parseInt(quantityFromLocalStorage, 10);
    setQuantity(quantityAsNumber);
  }, []); 
  
  useEffect(() => {
    localStorage.setItem('quantity', quantity.toString());
  }, [quantity]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setQuantity(quantity+1)
  };
  
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((currentItem) => currentItem !== product);
    setCartItems(updatedCartItems);
  };
  

  return (
    <div className="App">
      <Header cartItems={cartItems} quantity={quantity}/>

      <Routes styles={{overflow: 'hidden'}}>
        <Route path="/" exact element={<Home/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/sale" element={<Sale/>} />
        <Route path="/lookbook" element={<Lookbook/>} />
        <Route path="/customer_care" element={<CustomerCare/>} />
        <Route path="/visit_us" element={<VisitUs/>} />
        <Route path="/done" element={<PlacedOrder/>} />
        <Route path="/order" element={<PlaceOrder onQuantityChange={updateQuantity} cartItems={cartItems}/>} />
        <Route path="/product/:category/:id" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} onQuantityChange={updateQuantity} />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
