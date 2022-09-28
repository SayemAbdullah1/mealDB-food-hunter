import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-bar'>
            <div className='Header-logo'>
            <h2>Sultane Dine</h2>
            </div>
            <div className='nav-list'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Conatact</a>
            </div>
        </div>
    );
};

export default Header;