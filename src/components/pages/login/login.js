import React from 'react';
import Button from '../../atoms/button/button';
import Header from '../../organisms/header/header';
import FormLogin from '../../templates/form-login/formLogin';
import './login.scss';
import GetToken from '../../../services/spotify/getToken'
import Link from '../../atoms/link/link';


const Login = () => {

    return ( 
        
        <div className="login">
            <div className="login__body">
                <div className="card card--login">
                    <FormLogin
                    />
                </div>
            </div>
            <div className="login__footer">
               

            </div>
        </div>
     );
}
 
export default Login;