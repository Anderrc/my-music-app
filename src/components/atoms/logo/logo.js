import React from 'react';
import './logo.scss';


const Logo = (Props) => {
    return ( 
        <a className="logo" href={Props.redirect}>My-Music-App</a>
     );
}
 
export default Logo;