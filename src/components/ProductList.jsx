import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch products from API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/products');
                console.log(response.data);
                const apiProducts = response.data.map((product) => ({
                    name: product.productName,
                    price: product.price,
                    image: product.productImage || 'https://via.placeholder.com/150', // Default image if null
                    id: product.productID
                }));
                setProducts(apiProducts);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to fetch products.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="main-content">
            <h2>Available Products</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
