import React from 'react';
import FormLogin from '../../templates/form-login/formLogin';
import './login.scss';

const Login = () => {
    return ( 
        <div className="login">
            <div className="card">
                <FormLogin
                />
            </div>
        </div>
     );
}
 
export default Login;