import React, { useState, useEffect } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
 
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const ShortenedURL = ({ dataFromAPI }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(function() { setCopied(false) }, 1200)
        }
    }, [copied])

    function copyLink(e) {
        let newURL = e.target.parentNode.children[1].textContent;
        window.navigator.clipboard.writeText(newURL);
    }

    const handleCopy = e => {
        setCopied(true);
        copyLink(e)
    }

    return(
        <div className="shortened__output">
            <ResponsiveEllipsis
                className="original__URL"
                text={dataFromAPI.url}
                trimRight
                basedOn="letters"
            />
            <span className="hash-id">{`https://rel.ink/${dataFromAPI.hashid}`}</span>
            <button
                onClick={handleCopy}
                className={`btn--copy ${copied ? 'active' : ''}`}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default ShortenedURL;