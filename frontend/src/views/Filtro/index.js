import React, { useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONETES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Equipamento from '../../components/Equipamento';


function Filtro() {

  const [patrimonio, setPatrimonio] = useState('')
  const [equipamento, setEquipamento] = useState([]);

  async function Pesquisar(){
    await api.get(`/inventario/show/${patrimonio}`)
    .then(response => {
      setEquipamento(response.data)
      
    })
  }
  
  useEffect(() => {
    Pesquisar();
  }, [patrimonio])

  return (
    <S.Container>
      <Header/>
        <S.Input>
          <input type="text" placeholder="Informe o patrimônio do equipamento"/>
        </S.Input>
        <S.Pesquisar>
          <button type="button" onClick={Pesquisar}>Pesquisar</button>
        </S.Pesquisar>
        <S.Content>
         {
          equipamento.map(e => (
          <Equipamento ies={e.ies} dominio={e.dominio} so={e.so}/>
          ))
         }
        </S.Content>
      <Footer/>
    </S.Container>
  )
  }

export default Filtro;
