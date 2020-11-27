const InputPassword = (Props) => {
    return ( 
        <div className="input-text">
            <label className="input-text__body">
                <input type="password" name={Props.name} className="input-text__input" id="password" placeholder=" "/>
                <span className="input-text__placeholder">{Props.placeholder}</span>
            </label>
        </div>


     );
}
 
export default InputPassword;