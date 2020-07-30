import React from 'react';

import Logo from '../../assets/img/Logo.png';

import ButtonLink from '../ButtonLink';

import './style.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="BRUNOFLIX LOGO"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;