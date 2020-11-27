import React, { useState } from 'react'

const UsuarioPrivider = (Props) => {

    const [usuario, setUsuario] = useState();

    return ( 
        <div>
            <AppContext.Provider value={[usuario,setUsuario]}>
                {Props.children}
            </AppContext.Provider>
        </div>
     );
}
 
export default UsuarioPrivider;
export const AppContext = React.createContext();