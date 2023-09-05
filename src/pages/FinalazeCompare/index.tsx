import {
    AmountCoffesContainer,
    CoffeCardAmount,
    CoffePrice,
    CoffeTitle,
    ConfirmButton,
    ContainerDiv,
    ConteinerPaymant,
    ConteinerRequestCompareFormer,
    CreditCardButton,
    DebitCardButton,
    DeliveryAdress,
    FormContainerDiv,
    ImageTitlePrice,
    InputBairroCidadeUf,
    InputFormRequestBairro,
    InputFormRequestCEP,
    InputFormRequestCOMPLEMENTO,
    InputFormRequestCidade,
    InputFormRequestNÙMERO,
    InputFormRequestRUA,
    InputFormRequestUF,
    InputNúmeroAndComplemento,
    MoneyCardButton,
    PaymantDescriptionText,
    PaymantMethods,
    PaymantText,
    RemoveButton,
    RequestCompareFormer,
    TextRequest,
    TitleAmountCoffes,
    TitleRequest,
    Total,
    TotalAmount,
    TotalItens,
    TotalPriceitens
}
    from "./styles";
import { MapPin, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, Trash } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { CoffeContext } from '../../components/Coffes'
import { useContext } from "react";


export function FinalizeCompare() {
    const { newCoffe } = useContext(CoffeContext)


    console.log(newCoffe)
    return (
        <ContainerDiv>
            <TitleRequest>Complete seu pedido</TitleRequest>
            <ConteinerRequestCompareFormer>
                <RequestCompareFormer>
                    <MapPin className="IconMapInd" size={25} />
                    <DeliveryAdress>Endereço de entrega</DeliveryAdress><br></br>
                    <TextRequest>informe onde deseja receber seu pedido</TextRequest>
                    <FormContainerDiv>
                        <form action="">
                            <InputFormRequestCEP placeholder="CEP" />
                            <InputFormRequestRUA placeholder="RUA" />
                            <InputNúmeroAndComplemento>
                                <InputFormRequestNÙMERO placeholder="NÙMERO" />
                                <InputFormRequestCOMPLEMENTO placeholder="COMPLEMENTO" />
                            </InputNúmeroAndComplemento>
                            <InputBairroCidadeUf>
                                <InputFormRequestBairro placeholder="BAIRRRO" />
                                <InputFormRequestCidade placeholder="CIDADE" />
                                <InputFormRequestUF placeholder="UF" />
                            </InputBairroCidadeUf>
                        </form>
                    </FormContainerDiv>
                    <ConteinerPaymant>
                        <CurrencyDollar size={25} className="DollarIcon" />
                        <PaymantText>Pagamento</PaymantText><br></br>
                        <PaymantDescriptionText>O pagamento é feito na entrega. Esolha como deseja pagar</PaymantDescriptionText>
                        <PaymantMethods>
                            <CreditCardButton>
                                <CreditCard size={20} className="Icons" />
                                cartão de crédito
                            </CreditCardButton>
                            <DebitCardButton >
                                <Bank size={20} className="Icons" />
                                cartão de débito
                            </DebitCardButton>
                            <MoneyCardButton>
                                <Money size={20} className="Icons" />
                                dinheiro
                            </MoneyCardButton>
                        </PaymantMethods>
                    </ConteinerPaymant>
                </RequestCompareFormer>
            </ConteinerRequestCompareFormer>
            <TitleAmountCoffes>Cafés selecionados </TitleAmountCoffes>
            <AmountCoffesContainer>
                <ImageTitlePrice>
                    {/* <img src={newCoffe.coffeImage} ></img> */}
                    <CoffeCardAmount>
                        <CoffeTitle>  {newCoffe.title}</CoffeTitle>
                        <div className="pipipipi">
                            <CoffePrice>
                                <Minus size={14} className='iconAmount'></Minus>
                                <a>{newCoffe.amountCoffe}</a>
                                <Plus size={14} className='iconAmount'></Plus>
                            </CoffePrice>
                            <RemoveButton>
                                <Trash size={16} className="TrashFuckingIcon" />
                                Remover
                            </RemoveButton>
                        </div>
                    </CoffeCardAmount>
                    <span>R$ {newCoffe.price}</span>
                </ImageTitlePrice>
                <hr></hr>
                <TotalAmount>
                    <TotalItens>
                        <a>Total de itens</a>
                        <a>Entrega</a>
                        <Total>Total</Total>
                    </TotalItens>
                    <TotalPriceitens>
                        <a>R$ 10,90</a>
                        <a>R$ 10,00</a>
                        <Total>R$ 20,90</Total>
                    </TotalPriceitens>
                </TotalAmount>
                <nav>
                    <NavLink to="/compareComplete" className="aaaaaa">
                        <ConfirmButton>
                            <a>confirmar pedido</a>
                        </ConfirmButton>
                    </NavLink>
                </nav>
            </AmountCoffesContainer>
        </ContainerDiv >
    )

}