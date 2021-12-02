import React from 'react';
import * as S from './styles';

function Equipamento({ies, dominio, so}) {

  return (
    <S.Container>
        <S.TopEquipamento>
            <span>IES:{ies} | Domínio:{dominio} | SO:{so}</span>
           
        </S.TopEquipamento>
    </S.Container>
  )
}

export default Equipamento;
