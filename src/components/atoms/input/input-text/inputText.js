import React from 'react';

const InputText = (Props) => {
    return ( 
        <div className="input-text">
            <input name={Props.name} className="input-text__input" type="Text" placeholder={Props.placeholder}/>
        </div>
     );
}
 
export default InputText;