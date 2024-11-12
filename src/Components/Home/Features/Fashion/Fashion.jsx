import React, { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../ProductContext';
import ProductList from './WomenFashionProduct';
import '../Phones/AmazonSearchResults.css';

const Fashion = () => {
    const { setSelectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
    const productListRef = useRef(null);

    useEffect(() => {
        try {
            setProducts(ProductList);
            // setLoading(false);
        } catch (err) {
            setError('Failed to load products');
            // setLoading(false);
        }
    }, []);

    const viewProductDetails = (product) => {
        setSelectedProduct(product);
        navigate('/product');
    };

    return (
        <div className="amazon-search">
            <h1 className="title">Women's Fashion</h1>
            <div className="product-list" ref={productListRef}>
                {products.map((product) => (
                    <div
                        className="product-item"
                        key={product.asin}
                        onClick={() => viewProductDetails(product)}
                    >
                        <img
                            src={product.product_photo}
                            alt={product.product_title}
                            className="product-image"
                        />
                        <h2 className="product-title">{product.product_title}</h2>
                        <p className="product-price">Price: {product.product_price}</p>
                        <p className="product-original-price">
                            Original Price: <span className="original-price">{product.product_original_price}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fashion;
