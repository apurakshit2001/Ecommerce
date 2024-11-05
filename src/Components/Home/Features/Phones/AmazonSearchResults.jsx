import React, { useEffect, useState, useRef } from 'react';
import ProductList from '../../../../assets/ProductList';
import './AmazonSearchResults.css';

const AmazonSearchResults = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const productListRef = useRef(null);

    useEffect(() => {
        try {
            setProducts(ProductList);
            setLoading(false);
        } catch (err) {
            setError('Failed to load products');
            setLoading(false);
        }
    }, []);

    const scrollLeft = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="amazon-search">
            <h1 className="title">Newest Smart Phone</h1>
            <div className="product-list" ref={productListRef}>
                {products.map((product) => (
                    <div className="product-item" key={product.asin}>
                        <a href={product.product_url} target="_blank" rel="noopener noreferrer" className="product-link">
                            <img
                                src={product.product_photo}
                                alt={product.product_title}
                                className="product-image"
                            />
                            <h2 className="product-title">
                                {product.product_title}
                            </h2>
                            <p className="product-price">Price: {product.product_price}</p>
                            <p className="product-original-price">
                                Original Price: <span className="original-price">{product.product_original_price}</span>
                            </p>
                        </a>
                    </div>
                ))}
            </div>
            <div className="arrows">
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

export default AmazonSearchResults;
