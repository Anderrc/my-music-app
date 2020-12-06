import React,{useContext} from 'react';
import Link from '../../atoms/link/link';
import Logo from '../../atoms/logo/logo';
import './menuHeader.scss';

import {AppContext} from '../../../provider/usuario'
import Image from '../../atoms/image/image';

const MenuHeader = (Props) => {

    // const [usuario, setUsuario] = useContext(AppContext)
    // const user = JSON.parse(localStorage.getItem('usuario'))
    const user = JSON.parse(localStorage.getItem('usuario'))
    const logout =() =>{
        localStorage.clear();
    }
    if(user===null){
        return(
            <div className="menu_header">
                <div className="menu_header__logo">
                    <Logo redirect="/"/>
                </div>
                <div className="menu_header__menu">
                    <Link text="Login" redirect="/login"/>
                </div>
            </div>
            
            )
    }else{
       return( 
            <div className="menu_header">
                <div className="menu_header__logo">
                    <Logo redirect="/home"/>
                </div>
                <div className="menu_header__menu">

                    <Image src={user.images[0].url} className="img-perfil"/>
                    <Link 
                        text={user.display_name}
                    />

                    <Link 
                        text="log out"
                        redirect="/login"
                        onClick={logout}
                    />
                </div>
            </div>
        )


    }


}
 
export default MenuHeader;