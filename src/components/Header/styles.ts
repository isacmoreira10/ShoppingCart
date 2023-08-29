import styled from "styled-components";

export const HeaderConteiner = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 1275px;
    height: 3rem;
    margin-right: 10rem;
    margin-top: 2rem;
    margin-left: 6rem;

    img{
        width: 5.25rem ;
        height: 2.5rem;
        cursor:pointer;
    }
`

export const Div = styled.div`
    display:flex;
    justify-content: center;
    text-align: center;

    .icon{
        padding:0.3rem;
        gap:0.1rem;
        margin-left: 0.5rem;
        margin-top: 0.1rem;
        border-radius: 6px;

        color:${(props) => props.theme['yellow-dark']};
        background-color:${(props) => props.theme['yellow-light']} ;
    }
`

export const DivConteiner = styled.div`
    display: flex;
    border-radius: 10px;

    width:100% ;
    height:1rem;
    padding:0.5rem;
    
    a{
        font-size: 0.8rem;
        padding-left: 0.3rem;
        margin-top: 0.2rem;
    }

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']}
`



