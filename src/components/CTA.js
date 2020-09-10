import React from 'react';
import Button from './Button';

import BGdesktop from '../images/bg-boost-desktop.svg';
import BGmobile from '../images/bg-boost-mobile.svg';

const CTA = ({ viewportSize }) => (
    <div className="cta">
        <img 
            className="cta__bg"
            src={ 
                viewportSize > 644
                    ? BGdesktop
                    : BGmobile
            }  
            alt="" 
        />
        <div className="cta__text__box">
            <h2 className="cta__heading">Boost your links today</h2>
            <Button />
        </div>
    </div>
)

export default CTA;