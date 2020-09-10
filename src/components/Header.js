import React from 'react';
import Button from './Button'

import heroImage from '../images/illustration-working.svg';

const Header = () => (
    <div className="header">
        <div className="header__textbox">
            <h1 className="header__heading">More than just shorter links</h1>
            <p className="header__subheading">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <Button />
        </div>
        <img src={heroImage} className="hero__image" alt="Tech person working illustration" />
    </div>
)

export default Header;