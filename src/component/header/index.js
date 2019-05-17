import React from 'react';
import Logo from '../../assets/img/logo.png';
import './styles.scss'

const Header = (props) => {
    return(
        <header data-test="header-component">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logo-img" src={Logo} alt="logo"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;