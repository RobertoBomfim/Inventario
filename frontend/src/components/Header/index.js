import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.jfif';

function Header() {
  return (
    <S.Container>
        <S.LeftSide>
          <img src={logo} alt="Logo"/>
        </S.LeftSide>
        <S.RightSide>
          <Link to="/">Início</Link>
          <span className= "dividir" />
          <Link to="/cadastro">Cadastrar Equipamento</Link>
          <span className= "dividir" />
          <a href="/filtro">Pesquisar Equipamento</a>
          <span className= "dividir" />
          <a href="#">Relatório Inventário</a>
        </S.RightSide>
    </S.Container>
  )
}

export default Header;
