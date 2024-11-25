// Category.js
import React, { useState } from 'react';

const Category = () => {
    const [priceRange, setPriceRange] = useState([100, 2000]);

    const handlePriceChange = (event) => {
        const { value, name } = event.target;
        setPriceRange((prev) => (name === "min" ? [value, prev[1]] : [prev[0], value]));
    };

    return (
        <div className="sidebar">
            <h4>Filter Products</h4>

            {/* Category Filters */}
            <div className="filter-section">
                <h5>Categories</h5>
                <div>
                    <input type="checkbox" id="mattresses" />
                    <label htmlFor="mattresses">Mattresses</label>
                </div>
                <div>
                    <input type="checkbox" id="bed-frames" />
                    <label htmlFor="bed-frames">Bed Frames</label>
                </div>
                <div>
                    <input type="checkbox" id="bedding" />
                    <label htmlFor="bedding">Bedding</label>
                </div>
                <div>
                    <input type="checkbox" id="furniture" />
                    <label htmlFor="furniture">Bedroom Furniture</label>
                </div>
            </div>

            {/* Price Range Slider */}
            <div className="filter-section">
                <h5>Price Range</h5>
                <div className="price-range">
                    <input
                        type="number"
                        name="min"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        min="100"
                        max="5000"
                    />
                    <span>to</span>
                    <input
                        type="number"
                        name="max"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        min="100"
                        max="5000"
                    />
                </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
                <h5>Brand</h5>
                <div>
                    <input type="checkbox" id="brand-a" />
                    <label htmlFor="brand-a">Brand A</label>
                </div>
                <div>
                    <input type="checkbox" id="brand-b" />
                    <label htmlFor="brand-b">Brand B</label>
                </div>
                <div>
                    <input type="checkbox" id="brand-c" />
                    <label htmlFor="brand-c">Brand C</label>
                </div>
            </div>
        </div>
    );
};

export default Category;
