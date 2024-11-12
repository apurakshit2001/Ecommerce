// Product.jsx
import React, { useContext, useState } from 'react';  // Import useState
import { ProductContext } from '../Contexts/ProductContext';
import { CartContext } from '../Contexts/CartContext';
import './Product.css';

const Product = () => {
    const { selectedProduct } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);  

    if (!selectedProduct) {
        return <div>No product selected.</div>;
    }

    const handleAddToCart = () => {
        addToCart(selectedProduct, quantity);
        console.log("Quantity selected:", quantity);
    };

    return (
        <div className='productDetailsPage'>
            <h1 className='productDetailsPage__title'>{selectedProduct.product_title}</h1>
            <div className="productDetailsMainContainer">
                <img src={selectedProduct.product_photo} alt={selectedProduct.product_title} className='productDetailsPage__image' />
                <div className="productDetailsContainer">
                    <p className='productDetailsPage__description'>Price: {selectedProduct.product_price}</p>
                    <p className='productDetailsPage__description'>Original Price: {selectedProduct.product_original_price}</p>
                    <p className='productDetailsPage__description'>Rating: {selectedProduct.product_star_rating}/{selectedProduct.product_num_ratings}</p>
                    <p className='productDetailsPage__description'>Past Sales: {selectedProduct.sales_volume}</p>
                    <p className='productDetailsPage__description'>{selectedProduct.delivery}</p>
                    <div className="selectContainer">
                        <select className="productDetailsPage__description Quantity" onChange={(e) => setQuantity(parseInt(e.target.value))}>
                            <option value="" disabled>Select quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="buttonsContainer">
                <button className="addToCartButton" onClick={handleAddToCart}><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                <button className="buyNowButton">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;
