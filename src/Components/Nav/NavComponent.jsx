import React, { useState } from 'react';
import './NavComponent.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const NavComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const menuId = 'profile-account-menu';

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
                        <option value="bn">Bengali</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                    </select>
                </li>
                <li><span onClick={openModal}><i className="fa-solid fa-magnifying-glass"></i></span></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <div className="nav-crat">
                    <Link to='/Cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Cart</span>
                    </Link>
                    </div>
                </li>
                <li>
                    <Box sx={{ flexGrow: 1 }} onClick={handleProfileMenuOpen}>
                        <i className="fa-solid fa-user" style={{ cursor: 'pointer' }}></i>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        id={menuId}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}><span className='link'><Link to='/login'>Sign Up</Link></span></MenuItem>
                        <MenuItem onClick={handleMenuClose}><span className='link'><Link to='/profile'>Account</Link></span></MenuItem>
                    </Menu>
                </li>
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
                <dialog id="modal" open >
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
