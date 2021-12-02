import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    
    width: 50%;
    margin-bottom: 70px;
    

`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    span{
        color: #707070;
        margin: 10px 0;
        font-weight: bold;
    }

    input{
        font-size: 15px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #87CEEB;
    }

    select{
            font-size: 15px;
            padding: 15px;
            border: none;
            border-bottom: 1px solid #87CEEB;
    }

`

export const Save = styled.div`
    width: 100%;
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