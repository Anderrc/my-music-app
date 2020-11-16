import React from 'react';

const Button = (Props) => {
    return ( 
        <button className="button" type={Props.type}>
            <span className="button__text">{Props.text}</span>
        </button>
        
     );
}
 
export default Button;