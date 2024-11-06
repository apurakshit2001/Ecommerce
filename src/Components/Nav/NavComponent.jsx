import React, { useState } from 'react';
import './NavComponent.css';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar">
            <div className="logo"><h1>Polo<i className='bx bxs-package'></i></h1></div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li>
                    <select name="" id="" className="language-flag-text custom-select">
                        <option value="en">English</option>
                    </select>
                </li>
                <li><span onClick={openModal}><i className="fa-solid fa-magnifying-glass"></i></span></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <div className="nav-crat">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Cart</span>
                    </div>
                </li>
                <li><Link to="/Profile"><i className="fa-solid fa-user"></i></Link></li>
            </ul>
            <div
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className={`bar ${isMenuOpen ? 'rotate' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'rotate' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'rotate' : ''}`}></div>
            </div>

            {isModalOpen && (
                <dialog id="modal" open>
                    <span onClick={closeModal}><i className="fa-solid fa-xmark"></i></span>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <span className="search-close-btn" onClick={closeModal}><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default NavComponent;
