import React from 'react';
import Header from '../../organisms/header/header';
import FormLogin from '../../templates/form-login/formLogin';
import './login.scss';

const Login = () => {
    return ( 
        
        <div className="login">
            <Header/> 
            <div className="login__body">
                <div className="card card--login">
                    <FormLogin
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Login;