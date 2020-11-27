import React from 'react';
import './button.scss';

const Button = (Props) => {

    let className = 'button';
    if (Props.className) {
        className = Props.className;
    }

    return ( 
        <button className={className} type={Props.type} onClick={Props.onClick}>
            <span className="button__text">{Props.text}</span>
        </button>
        
     );
}
 
export default Button;