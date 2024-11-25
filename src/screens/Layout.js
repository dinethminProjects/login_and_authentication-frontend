import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="layout-container">
            <Navbar />
            <div className="content-container">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
