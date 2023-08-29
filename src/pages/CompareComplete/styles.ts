import styled from "styled-components";

export const AllContent = styled.div`
    margin-left: 160px;
    margin-top: 100px;

    h1{
        font-size:32px;
        font-weight: 800;
        font-family: sans-serif ;


        color:${(props) => props.theme['yellow-dark']};
    }

    .piopop{
        display:flex;
    }
`
export const ConteinerItens = styled.div`
    margin-top: 40px;
    
    padding:40px;
    width: 526px;
    height: max-content;

    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, yellow, purple) border-box;
    border-radius: 8px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border: 1px solid transparent;

    div{
        display:flex;
        margin-bottom:32px;
    }

    .IconDollar{
        border:1px solid transparent;
        border-radius:50% ;
        padding:8px;

        background-color: ${(props) => props.theme['yellow-dark']};
        color:#FFF;
    }

    .IconAlarm{
        border:1px solid transparent;
        border-radius: 50%;
        padding:8px;

        background-color:${(props) => props.theme['yellow']};
        color:#FFF;
    }

    .IconMap{
        border: 1px solid transparent;
        border-radius:50%;
        padding:2px 5px;

        background-color:${(props) => props.theme['purple']};
        color:#FFF;
    }
`

export const Description = styled.a`
    font-family:Roboto;
    font-size:20px;
    font-weight: 400;

    color:${(props) => props.theme['base-subtitle']};
`
export const DescriptionItens = styled.a`
    font-family:Roboto;
    font-weight:400;
    font-size:16px;

    margin-left:4px;
    margin-top: 8px;
    color:${(props) => props.theme['base-text']};
`

export const StrongText = styled(DescriptionItens)`
    font-weight: 700;

`
export const Illustration = styled.div`
    margin-left:140px;
    margin-top:20px;
    
    img{
        height:350px;
    }
`
