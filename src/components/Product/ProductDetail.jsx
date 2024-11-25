import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; // Import PayPal Components

const ProductDetail = () => {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0); // Track total price

    useEffect(() => {
        // Fetch product data from the API or use dummy data
        axios.get(`http://localhost:8081/api/products/${id}`)
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
                setTotalPrice(response.data.price); // Set initial total price (price * 1)
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
                setProduct({
                    id: 1,
                    productName: 'Dummy Product',
                    productSize: '36 X 78 X 4', // Dummy size for testing
                    price: 24500,  // Price in cents
                    categoryID: '1',
                    productImage: 'default_image.jpg',
                }); // Use dummy data for testing
            });
    }, [id]);

    // Handle quantity change
    const handleQuantityChange = (type) => {
        if (type === 'increase') {
            setQuantity(prev => {
                const newQuantity = prev + 1;
                setTotalPrice(newQuantity * product.price); // Update total price
                return newQuantity;
            });
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(prev => {
                const newQuantity = prev - 1;
                setTotalPrice(newQuantity * product.price); // Update total price
                return newQuantity;
            });
        }
    };

    // Show loading state while product is being fetched
    if (!product) {
        return <div>Loading...</div>;
    }

    // Handle PayPal payment success
    const handlePaymentSuccess = (details) => {
        const paymentData = {
            payerId: details.payer.payer_id, // PayPal payer ID
            paymentStatus: 'COMPLETED', // Payment status
            paymentDate: new Date().toISOString(), // Payment date
            paymentMethod: 'PAYPAL', // Payment method
            paymentAmount: totalPrice / 100, // Payment amount in dollars
            salesRequest: {
                productId: product.productID,
                quantity: quantity,
                saleDate: new Date().toISOString(), // Sale date
                unitPrice: product.price / 100, // Unit price in dollars
                totalPrice: totalPrice / 100, // Total price in dollars
            }
        };

        // Make the POST request to your payment API
        axios.post('http://localhost:8081/api/payment', paymentData)
            .then(response => {
                console.log('Payment successful:', response);
            })
            .catch(error => {
                console.error('Payment error:', error);
            });
    };

    return (
        <section className="product-detail-section">
            <div className="container">
                <div className="grid">
                    {/* Image Section */}
                    <div className="img-box">
                        <img
                            src={product.productImage || 'default_image.jpg'}
                            alt={product.productName}
                            className="product-image"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="product-details">
                        <p className="category">Category {product.categoryID}</p>
                        <h2 className="product-title">{product.productName}</h2>
                        <div className="price-rating">
                            <h6 className="price">${(totalPrice / 100).toFixed(2)}</h6>
                        </div>
                        <p className="product-description">
                            {/* Add a product description here if available */}
                            More details coming soon...
                        </p>

                        {/* Size Display */}
                        <p className="size-title">Size: {product.productSize}</p>

                        {/* Quantity Selector */}
                        <div className="quantity-cart">
                            <div className="quantity-selector">
                                <button onClick={() => handleQuantityChange('decrease')} className="quantity-button">-</button>
                                <input
                                    type="text"
                                    className="quantity-input"
                                    value={quantity}
                                    readOnly
                                />
                                <button onClick={() => handleQuantityChange('increase')} className="quantity-button">+</button>
                            </div>
                            <button className="add-to-cart">
                                <span>Add to cart</span>
                            </button>
                        </div>

                        {/* PayPal Button */}
                        <div className="action-buttons">
                            <button className="wishlist-button">❤️</button>

                            {/* PayPal component wrapped with PayPalScriptProvider */}
                            <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
                                <PayPalButtons
                                    style={{ layout: "horizontal" }}
                                    amount={(totalPrice / 100).toFixed(2)} // Display the total price in dollars
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            handlePaymentSuccess(details); // Handle success
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
