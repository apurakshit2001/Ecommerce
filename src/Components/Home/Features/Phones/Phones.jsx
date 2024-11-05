import React, { useEffect, useState } from 'react';
import axios from 'axios';

// PhoneCard Component
const PhoneCard = ({ phone }) => {
    return (
        <a
            href={phone.product_url}
            target="_blank"
            rel="noopener noreferrer"
            className="phone-card"
        >
            <div className="phone-card-content">
                <img
                    src={phone.image_url}
                    alt={phone.name}
                    className="phone-image"
                />
                <h2 className="phone-title">{phone.name}</h2>
                <p className="phone-price">{phone.price}</p>
            </div>
        </a>
    );
};

// Phones Component
const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhones = async () => {
            const options = {
                method: 'GET',
                url: 'https://real-time-amazon-data.p.rapidapi.com/search',
                params: {
                    query: 'Phone',
                    page: '1',
                    country: 'IN',
                    sort_by: 'NEWEST',
                    product_condition: 'ALL',
                    is_prime: 'false',
                    deals_and_discounts: 'NONE'
                },
                headers: {
                    'x-rapidapi-key': '2d976a9e74mshe0117e413d61c93p19f005jsna9065aa66056',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setPhones(response.data.products || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhones();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Phones</h1>
            <div className="phone-list">
                {phones.map((phone) => (
                    <PhoneCard key={phone.asin} phone={phone} />
                ))}
            </div>
        </div>
    );
}

export default Phones;
