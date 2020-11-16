import React from 'react';
import UserPassword from '../../molecules/user-password/userPassword';

const FormLogin = () => {
    return ( 
        <div className="form-login">
            <div className="form-login__header">
                <h2 className="form-login__header_text">Login</h2>
            </div>
            <div className="form-login__body">
                <UserPassword/>
            </div>
        </div>

     );
}
    
export default FormLogin;