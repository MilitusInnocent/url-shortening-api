import React from 'react';
import Card from './Card';

import recognitionIcon from '../images/icon-brand-recognition.svg';
import detailedIcon from '../images/icon-detailed-records.svg';
import customizableIcon from '../images/icon-fully-customizable.svg';

const AttributeSection = () => {
    const recognitionText = "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.";
    const detailedText = "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";
    const customizableText = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.";

    return (
        <div className="attribute__section">
            <Card 
                icon={recognitionIcon}
                heading="Brand Recognition"
                text={recognitionText}
            />
            <Card 
                icon={detailedIcon}
                heading="Detailed Records"
                text={detailedText}
            />
            <Card 
                icon={customizableIcon}
                heading="Fully Customizable"
                text={customizableText}
            />
        </div>
    )
}

export default AttributeSection;