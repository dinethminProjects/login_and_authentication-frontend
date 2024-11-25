import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';


const { Header } = Layout;

const Navbar = () => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '64px', display: 'flex', alignItems: 'center', backgroundColor: '#1c1c1c' }}>
            {/* Logo */}
            <div className="logo" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginRight: 'auto' }}>
                SPLENDOUR LUX
            </div>

            {/* Centered Menu Links */}
            <Menu
                theme="darkgrey"
                color='white'
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, color:'#5555'}}
            >
                <Menu.Item key="1">
                    <Link style={{color:'#FFFFFF'}}>Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link style={{color:'#FFFFFF'}} to="/shop">Shop</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link style={{color:'#FFFFFF'}} to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link style={{color:'#FFFFFF'}} to="/contact">Contact</Link>
                </Menu.Item>

            </Menu>

            {/* Cart Icon with Badge */}
            <Badge count={5} offset={[10, 0]}>
                <ShoppingCartOutlined style={{ fontSize: '1.5rem', color: 'white' ,marginRight: '16px' }} />

                {/* Profile Icon */}
                
                <Link to="/user"><ProfileIcon /></Link>
            </Badge>
        </Header>
    );
};

export default Navbar;
