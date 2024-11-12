import React, { useEffect, useState, useRef, useContext } from 'react';
import ProductList from './MenFashionProductList';
import '../Phones/AmazonSearchResults.css'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../Contexts/ProductContext';

const MenFashion = () => {
    const { setSelectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const productListRef = useRef(null);

    useEffect(() => {
        try {
            setProducts(ProductList);
        } catch (err) {
            setError('Failed to load products');
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


    const viewProductDetails = (product) => {
        setSelectedProduct(product);
        navigate('/product');
    };

    return (
        <div className="amazon-search">
            <h1 className="title">Men's Fashion</h1>
            <div className="product-list" ref={productListRef}>
                {products.map((product) => (
                    <div className="product-item" key={product.asin} onClick={() => viewProductDetails(product)}>
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
}

export default MenFashion
