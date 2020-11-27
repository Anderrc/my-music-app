
import Button from "../../atoms/button/button"
import InputPassword from "../../atoms/input/input-password/inputPassword"
import InputText from "../../atoms/input/input-text/inputText"

import './formRegister.scss';

const FormRegister = () => {
    return ( 
        <div className="form-register">
            <div className="form-register__header">
                <h2 className="form-register__header-text">Registro</h2>
            </div>
            <div className="form-register__body">   
                <InputText
                    name="usuario"
                    placeholder="Nombre de usuario"
                />
                <InputText
                    name="nombre"
                    placeholder="Nombre completo"
                />
                <InputText
                    name="correo"
                    placeholder="Correo Electrónico"
                />
                <InputPassword
                    name="pass"
                    placeholder="Contraseña"
                />
            </div>
            <div className="form-register__footer">
                <Button 
                    type="submit"
                    text="Registrarse"
                />
            </div>
        </div>

     );
}
 
export default FormRegister;