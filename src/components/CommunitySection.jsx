import React from 'react';

const CommunitySection = () => {
    return (
        <section className="community-section">
            <div className="about-container">
                <div className="content">
                    <div className="text-content">
                        <h2 className="title">
                            Comfort & Style for Your Home
                        </h2>
                        <p className="description">
                            Discover the perfect bedsheets to elevate your bedroom decor. Our collections are crafted from the finest materials, designed to bring warmth, style, and comfort into every room.
                        </p>
                        <button className="get-started-btn">Shop Now</button>
                    </div>
                    <img
                        className="image"
                        src="https://pagedone.io/asset/uploads/1717751272.png"
                        alt="Bedsheet collection"
                    />
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
