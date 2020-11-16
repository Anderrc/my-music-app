import React from 'react';
import './link.scss';

const Link = (Props) => {
    return ( 
        <a className="Link" href={Props.redirect}>
            {Props.text}
        </a>
     );
}
 
export default Link;