import React from 'react';
import './userPassword.scss'

// Componentes
import Button from '../../atoms/button/button';
import InputPassword from '../../atoms/input/input-password/inputPassword';
import InputText from '../../atoms/input/input-text/inputText';
import Label from '../../atoms/text/label/label';

const UserPassword = () => {
    return ( 
        <div className="user-password">
            <form>
                <div className="user-password__campo ">
                    <InputText
                        name="user"
                        placeholder="Usuario"
                    />
                </div>
                <div className="user-password__campo">
                    <InputPassword
                        name="password"
                        placeholder="Contraseña"
                    />
                </div>
                <div className="user-password__boton">
                    <Button 
                        type="submit"
                        text="Enviar"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default UserPassword;