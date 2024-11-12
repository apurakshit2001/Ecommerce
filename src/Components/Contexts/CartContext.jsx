import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add product to cart
    const addToCart = (product, quantity) => {
        const newItem = { ...product, quantity };

        // Check if item already exists in the cart (based on unique id)
        const existingItem = cartItems.find(item => item.product_id === newItem.product_id);

        if (existingItem) {
            // If item already exists, update the quantity
            setCartItems(cartItems.map(item => 
                (item.product_id === newItem.product_id) 
                    ? { ...item, quantity: item.quantity + newItem.quantity }
                    : item
            ));
        } else {
            // Otherwise, add new item to the cart
            setCartItems([...cartItems, newItem]);
        }
    };

    // Remove product from cart
    const removeFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.product_id !== product.product_id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
