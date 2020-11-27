import React, {useState, useContext,useEffect} from 'react';
import Perfil from '../../../services/spotify/perfil'
import {AppContext} from '../../../provider/usuario'

const GetUser = (props) => {
    const [usuario, setUsuario] = useContext(AppContext);
    const [consulta, setconsulta] = useState(true)
    useEffect(() => {
        if(consulta){
            async function consultaUsuario(){
                await Perfil().then(respuesta =>{
                    localStorage.setItem('usuario',JSON.stringify(respuesta))
                    setUsuario(respuesta);
                    setconsulta(false)
                }).catch(err=>{
                    setUsuario([])
                })            
            }
            consultaUsuario();
           props.history.push('/home')
        }
    }, [consulta])

    return ( 
    <div></div>
     );
}
 
export default GetUser;