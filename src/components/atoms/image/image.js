import React from 'react';
import './image.scss';

const Image = (Props) => {
    let className = 'img';
    if (Props.className) {
        className = Props.className;
    }
    return ( 
        
        <div>
            <img src={Props.src} className={className}></img>
        </div>
     );
}
 
export default Image;