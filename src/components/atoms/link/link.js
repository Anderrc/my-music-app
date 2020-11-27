import React from 'react';
import './link.scss';

const Link = (Props) => {

    let className = 'Link ';
    if (Props.className) {
        className = Props.className;
    }

    return ( 
        <a className={className} href={Props.redirect} onClick={Props.onClick}>
            {Props.text}
        </a>
     );
}
 
export default Link;