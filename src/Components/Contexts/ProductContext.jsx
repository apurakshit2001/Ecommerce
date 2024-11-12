import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [firstImage, setFirstImage] = useState(null);  // Store the first image

    const setProduct = (product) => {
        setSelectedProduct(product);
        setFirstImage(product?.images[0]);  // Set the first image when a product is selected
    };

    return (
        <ProductContext.Provider value={{ selectedProduct, setProduct, firstImage }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
