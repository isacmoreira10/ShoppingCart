import styled from "styled-components";


export const DivCoffes = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 256px;
            height: 300px;
            border-radius:6px  ; 
            border-top-right-radius: 36px;
            margin-left: 6rem;
            margin-right: 32px;
            margin-bottom: 40px;

            background-color: ${(props) => props.theme['base-card']};


            img{
                width: 7rem;
                height: 7rem;

                margin-top: calc(0px - 1.9rem + 6px);
                margin-bottom:12px;
            }
`

export const DivAmountCoffes = styled.div`
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            align-items: center;
            border-radius:6px;

            width: 80%;

            span{
                font-family:Roboto;
                font-weight:400;
                font-size: 14px;
                color:${(props) => props.theme['base-text']};
            }
           

            .iconAmount{
                color:${(props) => props.theme['purple']};
                cursor:pointer;
            
                &:hover{
                    color:${(props) => props.theme['purple-dark']};
                }

            }

            .shoppingCartIcon{
                border-radius:6px;
                padding: 8px;
                cursor:pointer;

                background-color: ${(props) => props.theme['purple-dark']};
                color:${(props) => props.theme['base-card']};

                &:hover{
                    background-color:${(props) => props.theme['purple']};
                }
            }

`

export const TitleCoffe = styled.a`
        font-size: 15px;
        font-weight: 700;

        border-radius:10px;
        gap:15px;

        color:${(props) => props.theme['yellow-dark']};
        background-color:${(props) => props.theme['yellow-light']};
`

export const NameCoffe = styled.a`
        font-size: 20px;
        font-family: sans-serif;

        margin-top: 16px;
        margin-bottom:8px;
        color:${(props) => props.theme['base-subtitle']};
`

export const DescriptionCoffe = styled.a`
        font-size: 16px;
        text-align: center;

        padding-bottom: 33px;

        color:${(props) => props.theme['base-label']};

`

export const DivPrice = styled.div`
     color:${(props) => props.theme['base-title']};
     background-color: ${(props) => props.theme['base-button']};

     height:20px ;
     border-radius:6px;
     padding:8px;
     margin-right: 8px;

`

export const PriceCofee = styled.a`
        font-size:24px;
        font-family: sans-serif;
        font-weight: 800;

        margin-right: auto;

        color:${(props) => props.theme['base-text']};
`

export const AmountCofee = styled.a`
    font-size: 16px;

`