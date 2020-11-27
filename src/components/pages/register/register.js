import React from 'react';
import Header from '../../organisms/header/header';
import FormRegister from '../../templates/form-register/formRegister';
import './register.scss';

const Register = () => {
    return ( 
        <div className="register">
            <Header/>
            <div className="register__form">
                <div className="card card--register">
                    <FormRegister
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Register;