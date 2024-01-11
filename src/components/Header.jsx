import React from 'react';
import authLogoImg from '../assets/logo.svg';

const Header = () => {
    return (
        <a href="/" className="auth-header">
            <div className="auth-header__logo">
                <img src={authLogoImg} alt="PNFT" />
            </div>
            <div className="auth-header__text">PNFT Market</div>
        </a>
    )
}

export default Header