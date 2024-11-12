import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './Components/Nav/NavComponent';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import LoginSignupForm from './Components/LogIn/LoginSignupForm';
import Footer from './Components/Footer/Footer';
import Product from './Components/ProductPage/Product';

function App() {
  return (
    <div className='app'> 
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root route for Home */}
        <Route path="/home" element={<Home />} /> {/* Alternate route for Home */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginSignupForm />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
