import React from 'react';
import { FooterBase } from './styles';
import PropTypes from 'prop-types';

function Footer({ background, color }) {
  return (
    <FooterBase background={background} color={color}>

      {console.log(background)}

      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

Footer.defaultProps = {
	background: '#000',
	color: '#FFF',
};

Footer.propTypes = {
	background: PropTypes.string,
	color: PropTypes.string,
};

export default Footer;
