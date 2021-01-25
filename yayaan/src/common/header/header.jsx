import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
const Header = () =>{
    return (
        <>
        <header className="header-container">
            <ul>
                <li><Link to ='/'>INICIO</Link></li>
                <li><Link to = '/login'>Sign In</Link></li>
                <li><Link to='/registro'> Sign Up</Link></li>
                <li><Link to = '/noticias'>Noticias</Link></li>
                <li><Link to = '/yayaan'>Yayaan</Link></li>
                <li> <Link to='/private'> Perfil </Link></li>
              
            </ul>
        
        </header>
        </>
    )
}

export default Header;


