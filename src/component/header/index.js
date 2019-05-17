import React from 'react';
import Logo from '../../assets/img/logo.png';
import './styles.scss'

const Header = (props) => {
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;