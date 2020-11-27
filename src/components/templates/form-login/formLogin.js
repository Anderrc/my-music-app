import React from 'react';
import Button from '../../atoms/button/button';
import Link from '../../atoms/link/link';
import UserPassword from '../../molecules/user-password/userPassword';
import './formLogin.scss'


const FormLogin = () => {
    var scope = 'user-read-private user-read-email';
    var client_id = 'b31e27acd21b459185707da6890ea79f'; // Your client id
    var client_secret = 'c2cef081c3894067afa17942e56064f7'; // Your secret
    var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri


    var url_inicial = "https://accounts.spotify.com/authorize?client_id=b31e27acd21b459185707da6890ea79f&response_type=code&redirect_uri="+ redirect_uri +"&scope=user-read-private%20user-read-email";

    return ( 
        <div className="form-login">
            <div className="form-login__header">
                <h2 className="form-login__header__text text--verde">Login</h2>
            </div>
            <div className="form-login__body">
                <UserPassword/>
                <Link
                    className="link--spotify"
                    redirect={url_inicial}
                    text="Log in"
                />
            </div>
        </div>

     );
}
    
export default FormLogin;