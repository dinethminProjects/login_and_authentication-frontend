import React from 'react';

const CategorySection = () => {
    const categories = [
        {
            title: 'Bedding',
            description: 'Luxurious and cozy designs',
            imageUrl: 'https://i5.walmartimages.com/asr/e4cedff5-ce0f-409d-8c1e-b98c9ed48f7f.66eae326118728351758137947905305.jpeg',
         
        },
        {
            title: 'Bed Linen',
            description: 'Soft and supportive',
            imageUrl: 'https://i0.wp.com/eikeiusa.com/wp-content/uploads/2022/06/Corduroy-Charcoal-Classic-Velvet-Corduroy-Pure-Cotton-Luxury-Duvet-Cover-Set-scaled.jpg?fit=2560%2C2560&ssl=1',
        },
        {
            title: 'Bath Linen',
            description: 'Elegant and durable options',
            imageUrl: 'https://homelabels.us/cdn/shop/files/girl_standing_with_blue_cabana.jpg?v=1717568853',
        },
    ];

    return (
        <section className="category-section">
            <div className="category-container">
                <h1 className="category-heading">Select a Category</h1>
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card">
                            <img
                                className="category-image"
                                src={category.imageUrl}
                                alt={`Category ${category.title}`}
                            />
                            <div className="category-info">
                                <div className="category-text-content">
                                    <h4 className="category-title">{category.title}</h4>
                                    <p className="category-description">{category.description}</p>
                                </div>
                                <button className="category-button">
                                    <svg
                                        className="category-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
