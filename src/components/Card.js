import React from 'react';

const Card = ({ icon, heading, text }) => (
    <div className="attribute__card">
        <div className="attribute__card__img__container">
            <img src={icon} className="attribute__icon" alt="illustration" />
        </div>
        <h3 className="attribute__card__heading">{ heading }</h3>
        <p className="attribute__card__subheading">{ text }</p>
    </div>
)

export default Card;