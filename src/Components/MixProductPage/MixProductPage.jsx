import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Contexts/ProductContext';
import './MixProductPage.css';
import axios from 'axios';

const MixProductPage = () => {
    const { setSelectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    const viewProductDetails = (product) => {
        setSelectedProduct(product);
        navigate('/MinimalProductinfo');
        console.log("sfsdf");
        
    };
    return (
        <div className='MixProductPage'>
            {products.map(product => (
                <div key={product.id} className="product" onClick={() => viewProductDetails(product)}>
                    <h3>{product.title}</h3>
                    <img src={product.images[0]} alt={product.title} />
                    <p>Category: {product.category.name}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default MixProductPage;
