// CustomerReviews.js
import React from 'react';

const CustomerReviews = () => {
    return (
        <section className="customer-reviews" style={{marginTop: '72px', marginBottom: '64px'}}>
            <div className="container">
                <h2 className="title">Customer reviews & rating</h2>

                <div className="review-summary">
                    {/* Ratings Breakdown */}
                    <div className="ratings-breakdown">
                        {/** Render 5-star breakdown */}
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div className="rating-row" key={star}>
                                <p className="star-count">{star}</p>
                                <span className="star-icon">⭐</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${star * 10}%` }}></div>
                                </div>
                                <p className="rating-count">{star * 10}</p>
                            </div>
                        ))}
                    </div>

                    {/* Overall Rating */}
                    <div className="overall-rating">
                        <div className="rating-score">
                            <h2 className="score">4.3</h2>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="ratings-count">46 Ratings</p>
                        </div>
                        <div className="last-month">
                            <h2 className="score">4.8</h2>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="month-label">Last Month</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="review-actions">
                        <button className="write-review-btn">Write A Review</button>
                        <button className="view-reviews-btn">See All Reviews</button>
                    </div>
                </div>

                {/* Most Helpful Positive Review */}
                <div className="most-helpful-review">
                    <h4 className="section-heading">Most helpful positive review</h4>
                    <div className="review-header">
                        <div className="review-rating">⭐⭐⭐⭐⭐</div>
                        <div className="review-meta">
                            <h6 className="reviewer">@john.doe</h6>
                            <p className="review-date">Nov 01, 2023</p>
                        </div>
                    </div>
                    <p className="review-text">
                        I recently had the opportunity to explore Pagedone's UI design system, and it left a lasting
                        impression on my workflow. The system seamlessly blends user-friendly features with a robust set
                        of design components, making it a go-to for creating visually stunning and consistent
                        interfaces.
                    </p>
                </div>

                {/* Review Sorting */}
                <div className="review-sorting">
                    <p className="review-count">46 reviews</p>
                    <div className="sort-dropdown">
                        <label>Sort by:</label>
                        <select className="sort-select">
                            <option>Most Relevant</option>
                            <option>Last Week</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
