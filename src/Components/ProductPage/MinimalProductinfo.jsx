// MinimalProductinfo.jsx
import React, { useContext, useRef, useState } from 'react';
import { ProductContext } from '../Contexts/ProductContext';
import { CartContext } from '../Contexts/CartContext';
import './MinimalProductinfo.css';

const MinimalProductinfo = () => {
    const { selectedProduct } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const productListRef = useRef(null);
    const [quantity, setQuantity] = useState(1);  

    if (!selectedProduct) {
        return <div className="no-product">No product selected.</div>;
    }

    const handleAddToCart = () => {
        addToCart(selectedProduct, quantity);  
    };

    const scrollLeft = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({
                left: -400,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({
                left: 400,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="MinimalProductinfo">
            <h2 className="MinimalProductinfoHeading">{selectedProduct.title}</h2>
            <div className="imageContainer" ref={productListRef}>
                <img src={selectedProduct.images[0]} alt={selectedProduct.title} className="MinimalProductinfoProduct-image" />
                <img src={selectedProduct.images[1]} alt={selectedProduct.title} className="MinimalProductinfoProduct-image" />
                <img src={selectedProduct.images[2]} alt={selectedProduct.title} className="MinimalProductinfoProduct-image" />
            </div>
            <p className="MinimalProductinfoText">Category: {selectedProduct.category.name}</p>
            <p className="MinimalProductinfoText">Price: ${selectedProduct.price}</p>
            <p className="MinimalProductinfoText">Description: {selectedProduct.description}</p>
            <div className="selectContainer">
                <select
                    className="productDetailsPage__description Quantity"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    value={quantity}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="buttonsContainer">
                <button className="addToCartButton" onClick={handleAddToCart}>
                    <i className="fa-solid fa-cart-shopping"></i>Add to Cart
                </button>
                <button className="buyNowButton">Buy Now</button>
            </div>

            <div className="MinimalProductinfoArrows">
                <span className="leftArrow" onClick={scrollLeft}>
                    <i className="fa-solid fa-less-than"></i>
                </span>
                <span className="rightArrow" onClick={scrollRight}>
                    <i className="fa-solid fa-greater-than"></i>
                </span>
            </div>
        </div>
    );
};

export default MinimalProductinfo;
