// ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
//         console.log(product);
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <img src={product.image || 'default_image.jpg'} alt={product.name} />
            <div className="product-info">
                <div>
                    <h6 className="product-name">{product.name}</h6>
                    <h6 className="product-price">${product.price.toFixed(2)}</h6>
                </div>
                <button className="add-to-cart">🛒</button>
            </div>
        </div>
    );
};

export default ProductCard;
