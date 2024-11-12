import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null); // Keep setSelectedProduct here

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
