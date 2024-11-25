  import React from 'react';

const LatestArrivals = () => {
    return (
        <section className="latest-arrivals-section">
            <div className="product-container">
                <h2 className="section-title">Latest Arrivals</h2>
                <div className="product-grid">
                    <a href="#" className="product-card">
                        <div className="product-image-container">
                            <img
                                src="https://pagedone.io/asset/uploads/1700726158.png"
                                alt="Face cream"
                                className="product-image"
                            />
                        </div>
                        <div className="product-details">
                            <div className="product-header">
                                <h6 className="product-name">Face Cream</h6>
                                <h6 className="product-price">$100</h6>
                            </div>
                            <p className="product-description">Orange & Aloe Vera</p>
                        </div>
                    </a>

                    <a href="#" className="product-card">
                        <div className="product-image-container">
                            <img
                                src="https://pagedone.io/asset/uploads/1700726174.png"
                                alt="Plastic bottle"
                                className="product-image"
                            />
                        </div>
                        <div className="product-details">
                            <div className="product-header">
                                <h6 className="product-name">Plastic Bottle</h6>
                                <h6 className="product-price">$40</h6>
                            </div>
                            <p className="product-description">Black color</p>
                        </div>
                    </a>

                    <a href="#" className="product-card">
                        <div className="product-image-container">
                            <img
                                src="https://pagedone.io/asset/uploads/1700726191.png"
                                alt="Men cream"
                                className="product-image"
                            />
                        </div>
                        <div className="product-details">
                            <div className="product-header">
                                <h6 className="product-name">Men Cream</h6>
                                <h6 className="product-price">$100</h6>
                            </div>
                            <p className="product-description">Aloe Vera and Neem</p>
                        </div>
                    </a>

                    <a href="#" className="product-card">
                        <div className="product-image-container">
                            <img
                                src="https://pagedone.io/asset/uploads/1700726207.png"
                                alt="Cold Perfume"
                                className="product-image"
                            />
                        </div>
                        <div className="product-details">
                            <div className="product-header">
                                <h6 className="product-name">Cold Perfume</h6>
                                <h6 className="product-price">$100</h6>
                            </div>
                            <p className="product-description">White perfume</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LatestArrivals;
