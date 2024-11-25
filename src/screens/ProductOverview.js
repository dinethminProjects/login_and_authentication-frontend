import React from 'react'
import ProductDetail from "../components/Product/ProductDetail";
import CustomerReviews from "../components/Product/CustomerReviews";

function ProductOverview() {
    return (
        <div>
            <ProductDetail/>
            <CustomerReviews/>
        </div>
    )
}

export default ProductOverview
