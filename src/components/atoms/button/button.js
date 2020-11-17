import React from 'react';
import './button.scss';

const Button = (Props) => {
    return ( 
        <button className="button" type={Props.type}>
            <span className="button__text">{Props.text}</span>
        </button>
        
     );
}
 
export default Button;