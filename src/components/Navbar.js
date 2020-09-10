import React, { useRef } from 'react';
import companyLogo from '../images/logo.svg'

const Navbar = () => {
    const links = ['Features', 'Pricing', 'Resources'],
          mobileMenu = useRef(),
          { body } = document;

    const mobileNavOpen = e => {
        e.target.parentElement.classList.toggle('deployed'); // <a> navbar--mobile
        e.target.nextSibling.classList.remove('spin'); // <i> fa fa-bars
        mobileMenu.current.classList.toggle('deployed'); // <div> navbar__links__container
        body.style.overflowY = 'hidden';
    }

    const mobileNavClosed = e => {
        setTimeout(function() {
            e.target.parentElement.classList.toggle('deployed')
        }, 850);
        e.target.classList.add('spin');
        mobileMenu.current.classList.toggle('deployed');
        mobileMenu.current.style.transitionDelay = '450ms';
        body.style.overflowY = 'visible';
        e.persist();
    }

    return (
        <div className="navbar">
            <img src={companyLogo} className="logo logo--main" alt="Company logo" />
            <div className="navbar__links__container" ref={mobileMenu}>
                <ul className="navbar__links navbar__links--main">
                    {links.map((link, i) => (
                        <li className="navbar__link" key={i}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>

                <ul className="navbar__links navbar__links--secondary">
                    <li className="navbar__link">
                        <a href="#">Login</a>
                    </li>
                    <li className="navbar__link navbar__link--highlight">
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </div>
            <a href="#" className="navbar--mobile" aria-label="Button for mobile menu deployment">
                <i className="fa fa-bars hamburger" aria-hidden="true" onClick={mobileNavOpen} />
                <i className="fa fa-times close" aria-hidden="true" onClick={mobileNavClosed} />
            </a>
        </div>
    )
}

export default Navbar;