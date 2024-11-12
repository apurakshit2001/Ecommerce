import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './Components/Nav/NavComponent';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import LoginSignupForm from './Components/LogIn/LoginSignupForm';
import Footer from './Components/Footer/Footer';
import Product from './Components/ProductPage/Product';
import MixProductPage from './Components/MixProductPage/MixProductPage';
import MinimalProductinfo from './Components/ProductPage/MinimalProductinfo';
import Cart from './Components/Cart/Cart';

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfPageHeight = document.documentElement.scrollHeight / 2.8;
      
      if (scrollPosition > halfPageHeight) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app'>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root route for Home */}
        <Route path="/home" element={<Home />} /> {/* Alternate route for Home */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginSignupForm />} />
        <Route path="/product" element={<Product />} />
        <Route path="/MixProductPage" element={<MixProductPage />} />
        <Route path="/MinimalProductinfo" element={<MinimalProductinfo />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <div className={`upArrow ${showArrow ? 'visible' : 'hidden'}`}>
        <a className='arrow' href="#">↑</a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
