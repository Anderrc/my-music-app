const InputPassword = (Props) => {
    return ( 
        <div className="input-password">
            <input
             type="password"
             className="input-password__input" 
             placeholder={Props.placeholder}
             name={Props.name}
            />
        </div>

     );
}
 
export default InputPassword;