// Shop.js
import React from 'react';
import Category from "../components/Category";
import ProductList from "../components/ProductList";

const Shop = () => {
    return (
        <div className="shop-container">
            <Category />
            <ProductList />
        </div>
    );
};

export default Shop;
