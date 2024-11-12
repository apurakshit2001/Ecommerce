import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    if (cartItems.length === 0) {
        return <div className="CartPage">Your cart is empty.</div>;
    }

    return (
        <div className='CartPage'>
            {cartItems.map((item, index) => {
                const price = parseFloat(item.product_price);  // Ensure product_price is a number
                const totalPrice = (price * item.quantity).toFixed(2);  // Calculate total price

                return (
                    <div key={index} className="cartProductCard">
                        <img src={item.product_photo} alt={item.product_title} className='cartProductImage' />
                        <div className="cartProductCard__details">
                            <h3 className='CartItemTitle'>{item.product_title}</h3>
                            <p className='CartItemDetail'>Quantity: {item.quantity}</p>
                            <p className='CartItemDetail'>Total Price: ${totalPrice}</p>
                            <button onClick={() => removeFromCart(item)} className='removeBUtton'>Remove Item</button>  
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
