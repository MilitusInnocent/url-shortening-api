import React from 'react';
import whiteLogo from '../images/logoWhite.svg';

const Footer = () => {
    const featLinksList = ['Link Shortening', 'Branded Links', 'Analytics'];
    const resourcesLinksList = ['Blog', 'Developers', 'Support'];
    const companyLinksList = ['About', 'Our Team', 'Careers', 'Contact'];

    return (
        <div className="footer">
            <div className="logo__container column-1">
                <img src={whiteLogo} className="logo logo--white" alt="Company logo" />
            </div>

            <div className="footer__links__container column-2">
                <div className="links__list links__list--features">
                    <h5 className="links__heading">Features</h5>
                    <ul className="features__links footer__links">
                        {featLinksList.map((link, i) => (
                            <li className="footer__link" key={`feature-${i}`}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="links__list links__list--resources">
                    <h5 className="links__heading">Resources</h5>
                    <ul className="resources__links footer__links">
                        {resourcesLinksList.map((link, i) => (
                            <li className="footer__link" key={`resource-${i}`}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="links__list links__list--company">
                    <h5 className="links__heading">Company</h5>
                    <ul className="company__links footer__links">
                        {companyLinksList.map((link, i) => (
                            <li className="footer__link" key={`company-${i}`}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="social__logos column-3">
                <a href="#" aria-label="Facebook icon">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" aria-label="Twitter icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Pinterest icon">
                    <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" aria-label="Instagram icon">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;