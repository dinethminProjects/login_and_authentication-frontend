// ShoppingCartPage.js
import React from 'react';

const ShoppingCart = () => {
    return (
        <section className="shopping-cart">
            <div className="container">
                <h2 className="title">Shopping Cart</h2>

                {/* Product 1 */}
                <div className="cart-item">
                    <div className="item-image">
                        <img src="https://pagedone.io/asset/uploads/1701162826.png" alt="Round white portable speaker" />
                    </div>
                    <div className="item-details">
                        <div className="item-header">
                            <h5 className="item-title">Round white portable speaker</h5>
                            <button className="remove-btn">
                                <svg width="34" height="34" viewBox="0 0 34 34">
                                    <circle cx="17" cy="17" r="17" />
                                    <path d="M14.167 13.6V12.592c0-.696.564-1.259 1.259-1.259h3.148c.696 0 1.26.563 1.26 1.259v1.007" />
                                </svg>
                            </button>
                        </div>
                        <p className="item-description">
                            Introducing our sleek round white portable speaker, the epitome of style and sound! Elevate your auditory experience with this compact yet powerful device that delivers crystal-clear audio wherever you go. <a href="#">More...</a>
                        </p>
                        <div className="item-footer">
                            <div className="quantity-control">
                                <button className="quantity-btn">-</button>
                                <input type="text" value="2" className="quantity-input" />
                                <button className="quantity-btn">+</button>
                            </div>
                            <h6 className="item-price">$220</h6>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="cart-item">
                    <div className="item-image">
                        <img src="https://pagedone.io/asset/uploads/1701162839.png" alt="Gray round portable speaker" />
                    </div>
                    <div className="item-details">
                        <div className="item-header">
                            <h5 className="item-title">Gray round portable speaker</h5>
                            <button className="remove-btn">
                                <svg width="34" height="34" viewBox="0 0 34 34">
                                    <circle cx="17" cy="17" r="17" />
                                    <path d="M14.167 13.6V12.592c0-.696.564-1.259 1.259-1.259h3.148c.696 0 1.26.563 1.26 1.259v1.007" />
                                </svg>
                            </button>
                        </div>
                        <p className="item-description">
                            Introducing our sleek round white portable speaker, the epitome of style and sound! Elevate your auditory experience with this compact yet powerful device that delivers crystal-clear audio wherever you go. <a href="#">More...</a>
                        </p>
                        <div className="item-footer">
                            <div className="quantity-control">
                                <button className="quantity-btn">-</button>
                                <input type="text" value="2" className="quantity-input" />
                                <button className="quantity-btn">+</button>
                            </div>
                            <h6 className="item-price">$220</h6>
                        </div>
                    </div>
                </div>

                {/* Subtotal Section */}
                <div className="subtotal">
                    <h5 className="subtotal-title">Subtotal</h5>
                    <div className="subtotal-details">
                        <button className="promo-code-btn">Promo Code?</button>
                        <h6 className="subtotal-price">$440</h6>
                    </div>
                </div>

                {/* Checkout Section */}
                <div className="checkout">
                    <p className="checkout-info">Shipping, taxes, and discounts calculated at checkout</p>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </section>

    );
};

export default ShoppingCart;
