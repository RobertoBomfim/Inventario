import React from 'react';
import * as S from './styles';

import background from '../../assets/background.png';

import api from '../../services/api';

//NOSSOS COMPONETES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {

  return (
    <S.Container>
      <Header/>
      <S.Inicio>
        <h3>Sistema de Inventário</h3>
        <img src={background}/>
      </S.Inicio>
      <Footer/>
    </S.Container>
  )
  }

export default Home;
