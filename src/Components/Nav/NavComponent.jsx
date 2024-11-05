import React, { useState } from 'react';
import './NavComponent.css';

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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li>
                    <select name="" id="" className="language-flag-text custom-select">
                        <option value="en">English</option>
                    </select>
                </li>
                <li><span onClick={openModal}><i className="fa-solid fa-magnifying-glass"></i></span></li>
                <li><a href="#contact">Contact</a></li>
                <li> <div className="nav-crat">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                </div> </li>
                <li><i className="fa-solid fa-user"></i></li>
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
                    <span  onClick={closeModal}><i className="fa-solid fa-xmark"></i></span>
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
