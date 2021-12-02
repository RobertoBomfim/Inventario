import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONETES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Cadastro() {

  const [redirect, setRedirect] = useState(false);
  const [ies, setIes] = useState();
  const [patrimonio, setPatrimonio] = useState();
  const [ad, setAd] = useState();
  const [dominio, setDominio] = useState();
  const [so, setSo] = useState();
  const [office, setOffice] = useState();
  const [ram, setRam] = useState();
  const [marca, setMarca] = useState();
  const [hd, setHd] = useState();
  const [cpu, setCpu] = useState();
  const [tipo, setTipo] = useState();
  const [local, setLocal] = useState();
  const [usuario, setUsuario] = useState();
  const [dataCompra, setDataCompra] = useState();
  const [status, setStatus] = useState();

  async function Save(){

    //Validação dos dados
    if(!ies)
      return alert("Campo IES é obrigatório")
    else if(!patrimonio)
      return alert("Campo Patrimônio é obrigatório") 
    else if(!ad)
      return alert("Campo AD é obrigatório") 
    else if(!dominio)
      return alert("Campo Domínio é obrigatório") 
    else if(!so)
      return alert("Campo SO é obrigatório") 
    else if(!office)
      return alert("Campo Office é obrigatório")
    else if(!ram)
      return alert("Campo RAM é obrigatório") 
    else if(!marca)
      return alert("Campo Marca é obrigatório")
    else if(!hd)
      return alert("Campo HD é obrigatório") 
    else if(!cpu)
      return alert("Campo CPU é obrigatório") 
    else if(!tipo)
      return alert("Campo Tipo é obrigatório") 
    else if(!local)
      return alert("Campo Local é obrigatório") 
    else if(!usuario)
      return alert("Campo Usuário é obrigatório") 
    else if(!dataCompra)
      return alert("Campo Data da compra é obrigatório") 
    else if(!status)
      return alert("Campo Status é obrigatório") 

    await api.post('inventario', {
      ies,
      patrimonio,
      ad,
      dominio,
      so,
      office,
      ram,
      marca,
      hd,
      cpu,
      tipo,
      local,
      usuario,
      dataCompra,
      status
    }).then( () =>
      setRedirect(true)
    ).catch(response => {
      alert(response.data.error)
    })
  }

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header/>
      <S.Form>
          <S.Input>
              <span>IES</span>
              <input type="text" onChange={e => setIes(e.target.value)} value={ies}></input>
              <span>Informe o Patrimônio</span>
              <input type="text" onChange={e => setPatrimonio(e.target.value)} value={patrimonio}></input>
              <span>Informe o Sistema Operacional</span>
              <input type="text"onChange={e => setSo(e.target.value)} value={so}></input>
              <span>Quantidade de memória RAM</span>
              <input type="text" onChange={e => setRam(e.target.value)} value={ram}></input>
              <span>Marca</span>
              <input type="text" onChange={e => setMarca(e.target.value)} value={marca}></input>
              <span>Quantidade de armazenamento</span>
              <input type="text" onChange={e => setHd(e.target.value)} value={hd}></input>
              <span>Modelo do processador</span>
              <input type="text" onChange={e => setCpu(e.target.value)} value={cpu}></input>
              <span>Tipo de equipamento</span>
              <input type="text" onChange={e => setTipo(e.target.value)} value={tipo}></input>
              <span>Onde o equipamento está localizado</span>
              <input type="text" onChange={e => setLocal(e.target.value)} value={local}></input>
              <span>Quem está com a máquina</span>
              <input type="text" onChange={e => setUsuario(e.target.value)} value={usuario}></input>
              <span>Data da compra</span>
              <input type="date" onChange={e => setDataCompra(e.target.value)} value={dataCompra}></input>
              <span>A máquina está no AD?</span>
              <select onChange={e => setAd(e.target.value)} value={ad}>
                <option></option>
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </select>
              <span>Em qual domínio está a máquina?</span>
              <select onChange={e => setDominio(e.target.value)} value={dominio}>
                <option></option>
                <option value="acad">Acad</option>
                <option value="educ">Educ</option>
                <option value="yduqs">Yduqs</option>
              </select>
               <span>Informe a versão do Office</span>
              <select onChange={e => setOffice(e.target.value)} value={office}>
                <option></option>
                <option value="365">365</option>
                <option value="2019">2019</option>
               </select>
              <span>Status</span>
              <select onChange={e => setStatus(e.target.value)} value={status}>
                <option></option>
                <option value="em uso">Em uso</option>
                <option value="estoque">Estoque</option>
              </select>
              
          </S.Input>
          <S.Save>
            <button type="button" onClick={Save}>SALVAR</button>
          </S.Save>
      </S.Form>
      <Footer/>
    </S.Container>
  )
  }

export default Cadastro;
