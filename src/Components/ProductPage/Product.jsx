import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import './Product.css';

const Product = () => {
    const { selectedProduct } = useContext(ProductContext);

    if (!selectedProduct) {
        return <div>No product selected.</div>;
    }

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
                </div>
            </div>
            <div className="buttonsContainer">
                <button className="addToCartButton"><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                <button className="buyNowButton">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;
