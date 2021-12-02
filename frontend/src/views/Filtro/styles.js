import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
 export const Input = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    margin-top: 150px;

    input{
        font-size: 15px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #87CEEB;
    }
`
export const Equipamento = styled.div`

`

export const Pesquisar = styled.div`
    width: 25%;
    margint-top: 20px;

    button {
        width: 100%;
        background: #87CEEB;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    
    }
`
export const Content = styled.div`

    width: 100%;
`