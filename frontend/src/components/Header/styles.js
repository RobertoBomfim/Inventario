import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #4682B4;
    border-bottom: 5px solid #87CEEB;

    display: flex;
  
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 2px;

    img {
        width: 75px;
        height: 70px;
        
    }
   
`


export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    
    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #87CEEB;
        }
    }

    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }
`

