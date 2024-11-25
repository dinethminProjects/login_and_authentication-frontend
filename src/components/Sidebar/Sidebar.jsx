import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/admin">Admin Panel</Link></li>
                {/* Other sidebar items */}
            </ul>
        </nav>
    );
};

export default Sidebar;
