import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';

const Product = () => {
    const { selectedProduct } = useContext(ProductContext);

    if (!selectedProduct) {
        return <div>No product selected.</div>;
    }

    return (
        <div className='productDetailsPage'>
            <h1>{selectedProduct.product_title}</h1>
            <img src={selectedProduct.product_photo} alt={selectedProduct.product_title} />
            <p>Price: {selectedProduct.product_price}</p>
            <p>Original Price: {selectedProduct.product_original_price}</p>
            <a href={selectedProduct.product_url} target="_blank" rel="noopener noreferrer">Buy Now</a>
        </div>
    );
};

export default Product;
