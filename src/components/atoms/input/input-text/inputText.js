import React from 'react';

const InputText = (Props) => {
    return ( 
        <div className="input-text">
            <label className="input-text__body">
                <input type="text" name={Props.name} className="input-text__input" id="password" placeholder=" "/>
                <span className="input-text__placeholder">{Props.placeholder}</span>
            </label>
        </div>
     );
}
 
export default InputText;