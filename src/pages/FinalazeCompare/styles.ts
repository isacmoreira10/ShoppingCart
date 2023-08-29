import styled from "styled-components";

export const ContainerDiv = styled.div`
    display:grid;
    grid-template-columns:350px 350px 350px 350px;
`

export const ConteinerRequestCompareFormer = styled.div``

export const RequestCompareFormer = styled.div`
   border-radius: 6px;
   margin-top: 90px;
   margin-left: -192px;
    width: 640px;
    height: 372px;
    padding:40px;

    background-color:${(props) => props.theme['base-card']};
   
    .IconMapInd{
        color:${(props) => props.theme['yellow-dark']};
        margin-right: 8px;
        margin-bottom: -10px;
    }
`

export const DeliveryAdress = styled.a`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;

    color:${(props) => props.theme['base-subtitle']};
`

export const FormContainerDiv = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: column;
`

export const InputNúmeroAndComplemento = styled.div`
    display:flex;
    width: max-content;
`

export const InputBairroCidadeUf = styled.div`
    display:flex;
    width: max-content;
`

export const InputFormRequestCEP = styled.input`
    width:200px;
    height: 42px;
    padding:12px;
    align-items:center ;
    border-radius: 4px;
    margin-bottom: 16px;

    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
`

export const InputFormRequestRUA = styled(InputFormRequestCEP)`
    width: 586px;
`

export const InputFormRequestNÙMERO = styled(InputFormRequestCEP)`
    width: 200px;
`

export const InputFormRequestCOMPLEMENTO = styled(InputFormRequestCEP)`
    width: 348px;
    margin-left: 12px;
`

export const InputFormRequestBairro = styled(InputFormRequestCEP)`
    width: 200px;
`

export const InputFormRequestCidade = styled(InputFormRequestCEP)`
    width: 250px;
    margin-left: 12px;
`
export const InputFormRequestUF = styled(InputFormRequestCEP)`
    width: 60px;
    margin-left: 12px;
`

export const TitleRequest = styled.a`
    font-family: Roboto;
    font-size:20px;
    font-weight: 700;
    margin-left: 10rem;
    margin-top: 32px;

    width: max-content;
    color:${(props) => props.theme['base-subtitle']} ;
`

export const TextRequest = styled.a`
        font-family:Roboto;
        font-size:14px;
        font-weight: 400;
        color:${(props) => props.theme['base-text']};

        margin-left: 33px;
`

export const TitleAmountCoffes = styled.a`
    font-family: Ballo 2;
    font-size:18px;
    font-weight: 700;
    margin-top: 32px;
    margin-left: 250px;
    width: max-content;

    color:${(props) => props.theme['base-subtitle']};
`

export const ConteinerPaymant = styled.div`
    height:107px;
    width: 640px;
    margin-left: -40px;
    margin-top: 40px;
    border-radius:6px;
    padding:40px;

    background-color:${(props) => props.theme['base-card']};

    .DollarIcon{
        color:${(props) => props.theme['purple']};
        margin-bottom: -10px;
    }
`

export const PaymantText = styled.a`
    font-family: Roboto;
    font-size:16px;
    font-weight: 400;

    color:${(props) => props.theme['base-subtitle']};
`

export const PaymantDescriptionText = styled.a`
    font-size: 14px;
    font-weight: 400px;
    margin-left: 25px;

    color:${(props) => props.theme['base-text']};
`

export const PaymantMethods = styled.div`
    display:flex;
    margin-top: 32px;
`
export const CreditCardButton = styled.button`
    display:flex;
    text-align: center;
    padding:16px;
    width: 179px;
    height: 50px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    
    font-family: Roboto;
    font-size:12px;
    font-weight: 400;
    text-transform: uppercase;

    background-color: ${(props) => props.theme['base-button']};
    color:${(props) => props.theme['base-text']};

    .Icons{
        color:${(props) => props.theme['purple']};
        margin-right: 12px;
        margin-top: -3px;
    } 
    &:hover{
        background-color:${(props) => props.theme['base-hover']};
    }
    &:active{
        border:1px solid ${(props) => props.theme['purple']};
        background-color:${(props) => props.theme['purple-light']};
    }
`

export const DebitCardButton = styled(CreditCardButton)`
    margin-right: 12px;
    margin-left: 12px;
`

export const MoneyCardButton = styled(CreditCardButton)``

export const AmountCoffesContainer = styled.div`
    display:flex;
    flex-direction: column;
    height:498px;
    width:448px ;
    padding:40px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;

    margin-top: 90px;
    margin-left: -100px;
    background-color:${(props) => props.theme['base-card']};

    img{
        height: 64px;
        width: 64px;
    }

    span{
        font-family:Roboto;
        font-size:16px;
        font-weight: 700;

        color:${(props) => props.theme['base-text']};
    }

    hr{
        width:410px;
        height:0px;

        margin-top:24px;
        margin-bottom:24px;

        color:${(props) => props.theme['base-button']};
    }

    nav{
       

        :hover{
        background-color: ${(props) => props.theme['yellow-dark']};
    }
        .aaaaaa{
            text-decoration: none;
            
        }
    }
`
export const CoffeCardAmount = styled.div`
    display:flex;
    flex-direction: column;

    .pipipipi{
        display: flex;
    }
`
export const ImageTitlePrice = styled.div`
    display:flex;
    justify-content: space-between;
`

export const CoffeTitle = styled.a`
    font-family:Roboto;
    font-size:16px;
    font-weight: 400;
    margin-right: 155px;
    margin-bottom:8px;

    color:${(props) => props.theme['base-subtitle']};
`

export const RemoveButton = styled.button`
    display:flex;
    width: 91px;
    height:32px;
    padding:8px;
    border-radius: 6px;
    border:none;
    cursor:pointer;

    font-family: Roboto;
    font-size:12px;
    font-weight: 400;
    text-transform: uppercase;

    background-color: ${(props) => props.theme['base-button']};
    color:${(props) => props.theme['base-text']};

    &:hover{
        background-color:${(props) => props.theme['base-hover']};
    }
    &:active{
        border:1px solid ${(props) => props.theme['purple']};
        background-color:${(props) => props.theme['purple-light']};
    }

    .TrashFuckingIcon{
        color:${(props) => props.theme['purple']};
    }
`

export const CoffePrice = styled.div`
     color:${(props) => props.theme['base-title']};
     background-color: ${(props) => props.theme['base-button']};

     height:15px ;
     border-radius:6px;
     padding:8px;
     width:max-content;
     margin-right: 8px;

     :hover{
        background-color:${(props) => props.theme['base-hover']};
     }

     .iconAmount{
        color:${(props) => props.theme['purple']};
        cursor:pointer;
     }

     a{
        font-size:16px;
     }
`

export const TotalItens = styled.div`
    display: flex;
    flex-direction: column;
`
export const TotalPriceitens = styled.div`
    display: flex;
    flex-direction: column;
`
export const TotalAmount = styled.div`
    display: flex;
    justify-content: space-between;

    a{
        color:${(props) => props.theme['base-text']};
        font-size:14px;
        font-family:Roboto;
        font-weight:400;

        margin-bottom:12px;
}
`

export const ConfirmButton = styled.button`
    display: flex;
    justify-content: center;
    
    width: 100%;
    gap:4px;
    padding:12px 8px;
    border-radius: 6px;
    border:none;
    cursor: pointer;

    background-color:${(props) => props.theme['yellow']};

    :hover{
        background-color: ${(props) => props.theme['yellow-dark']};
    }
    
    a{
        color:#FFF;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;        
        text-transform: uppercase;
    }

`
export const Total = styled.a`
    font-family:Roboto;
    font-size:20px;
    font-weight: 700;

    margin-bottom: 24px;
    color:${(props) => props.theme['base-subtitle']};
`




