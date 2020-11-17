import React from 'react';
import Link from '../../atoms/link/link';
import Logo from '../../atoms/logo/logo';
import './menuHeader.scss';

const MenuHeader = () => {
    return ( 
        <div className="menu_header">
            <div className="menu_header__logo">
                <Logo/>
            </div>
            <div className="menu_header__menu">
                <Link 
                    text="Login"
                    redirect="/login"
                />
                <Link
                    text="Register"
                    redirect="/register"
                />
            </div>
        </div>

     );
}
 
export default MenuHeader;