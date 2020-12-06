import React, { useEffect,useContext ,useState} from 'react';
import {AppContext} from '../../../provider/usuario'
import ListasUser from '../../../services/spotify/getListUser'
import Link from '../../atoms/link/link';
import './aside.scss'

const Aside = (Props) => {
    const user = JSON.parse(localStorage.getItem('usuario'))
    const [listasUsuario, setListaUser] = useState([])
    // const [usuario, setUsuario] = useContext(AppContext);
    const [consulta, setconsulta] = useState(true)
    useEffect(() => {
        if(consulta){
            async function consultaListas(){
                await ListasUser(user.id).then(respuesta =>{
                    setListaUser(respuesta.items);
                    setconsulta(false);
                }).catch(err=>{
                    setListaUser([])
                })
            }
            if(user !== null){
                setListaUser([])
                consultaListas(true);
                
            }
        }
        
    }, [consulta])

    return ( 
        <div className="aside">
            <Link redirect="/exporar" text="Exporar"/>
            <Link redirect="/favorite" text="Favoritas"/>
            {listasUsuario.map(item=>(
                <Link key={item.name} redirect={"/playlist/"+item.id}  text={item.name}/>
            ))}
        </div>
     );
}
 
export default Aside;